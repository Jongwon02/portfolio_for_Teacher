"""삼성헬스 내보내기 폴더에서 운동 기록을 집계해 data/fitness-summary.json 을 만든다.

원본 데이터(위치, 심박, 수면 등)는 저장소에 넣지 않는다. 이 스크립트는 공개해도 되는
집계 값(횟수, 일수, 거리, 월별 횟수)만 출력한다.

사용법:
    python scripts/aggregate_fitness.py "<삼성헬스 내보내기 폴더>"
"""

import csv
import datetime as dt
import glob
import json
import os
import sys
from collections import Counter, defaultdict

# 삼성헬스 exercise_type 코드 → 공개용 분류
CATEGORY = {
    "1001": "walking",
    "1002": "running",
    "11007": "cycling",
}
INDOOR = "indoor"  # 그 외(제자리 운동 등)는 모두 실내 운동으로 묶는다

# 사이트에 보여 주는 "실내 유산소" — 야외 활동(걷기·달리기·자전거)과 기타는 제외
INDOOR_CARDIO = {"15003", "15005"}


def longest_streak(ordered_days):
    longest = current = 1
    for prev, nxt in zip(ordered_days, ordered_days[1:]):
        current = current + 1 if (nxt - prev).days == 1 else 1
        longest = max(longest, current)
    return longest


def load_exercises(folder):
    paths = glob.glob(os.path.join(folder, "com.samsung.shealth.exercise.2*.csv"))
    if not paths:
        sys.exit(f"운동 CSV를 찾을 수 없습니다: {folder}")
    with open(paths[0], encoding="utf-8-sig") as fh:
        next(fh)  # 첫 줄은 메타데이터
        return list(csv.DictReader(fh))


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    rows = load_exercises(sys.argv[1])
    prefix = "com.samsung.health.exercise."

    days = set()
    monthly = Counter()
    yearly = Counter()
    by_cat = defaultdict(lambda: {"sessions": 0, "km": 0.0})

    for r in rows:
        start = r[prefix + "start_time"][:10]
        days.add(start)
        monthly[start[:7]] += 1
        yearly[start[:4]] += 1
        cat = CATEGORY.get(r[prefix + "exercise_type"], INDOOR)
        by_cat[cat]["sessions"] += 1
        by_cat[cat]["km"] += float(r[prefix + "distance"] or 0) / 1000

    ordered = sorted(dt.date.fromisoformat(d) for d in days)
    longest = longest_streak(ordered)

    # 사이트에 보여 주는 값: 올해의 실내 유산소 기록만 (야외 활동 제외)
    year = ordered[-1].strftime("%Y")
    year_rows = [
        r for r in rows
        if r[prefix + "start_time"].startswith(year)
        and r[prefix + "exercise_type"] in INDOOR_CARDIO
    ]
    year_days = sorted({dt.date.fromisoformat(r[prefix + "start_time"][:10]) for r in year_rows})
    year_monthly = Counter(r[prefix + "start_time"][:7] for r in year_rows)
    this_year = {
        "year": year,
        "filter": "indoor-cardio",
        "period": {"from": year_days[0].isoformat(), "to": year_days[-1].isoformat()},
        "totalSessions": len(year_rows),
        "activeDays": len(year_days),
        "longestStreakDays": longest_streak(year_days),
        "minutes": round(sum(float(r[prefix + "duration"] or 0) for r in year_rows) / 60000),
        "monthly": [
            {"month": f"{year}-{m:02d}", "count": year_monthly.get(f"{year}-{m:02d}", 0)}
            for m in range(1, ordered[-1].month + 1)
        ],
    }

    # 기록이 없는 달도 0으로 채운다
    first, last = ordered[0].replace(day=1), ordered[-1].replace(day=1)
    months = []
    y, m = first.year, first.month
    while (y, m) <= (last.year, last.month):
        key = f"{y:04d}-{m:02d}"
        months.append({"month": key, "count": monthly.get(key, 0)})
        y, m = (y + 1, 1) if m == 12 else (y, m + 1)

    summary = {
        "source": "Samsung Health",
        "period": {"from": ordered[0].isoformat(), "to": ordered[-1].isoformat()},
        "totalSessions": len(rows),
        "activeDays": len(days),
        "longestStreakDays": longest,
        "yearly": {k: yearly[k] for k in sorted(yearly)},
        "categories": {
            k: {"sessions": v["sessions"], "km": round(v["km"], 1)}
            for k, v in sorted(by_cat.items())
        },
        "monthly": months,
        "thisYear": this_year,
    }

    out = os.path.join(os.path.dirname(__file__), "..", "data", "fitness-summary.json")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, "w", encoding="utf-8") as fh:
        json.dump(summary, fh, ensure_ascii=False, indent=2)
        fh.write("\n")
    print(f"저장: {os.path.normpath(out)}")


if __name__ == "__main__":
    main()
