import Image from 'next/image';
import Reveal from './Reveal';
import fitness from '@/data/fitness-summary.json';

// 사이트에는 올해의 실내 유산소 기록만 보여 줍니다 (야외 활동 제외, docs/PRD.md 결정 사항)
const year = fitness.thisYear;
const maxMonthly = Math.max(...year.monthly.map((m) => m.count));

const stats = [
  { emoji: '🏃', value: `${year.totalSessions}회`, label: `${year.year}년 실내 유산소 횟수` },
  { emoji: '⏱️', value: `${Math.floor(year.minutes / 60)}시간`, label: '올해 유산소 운동 시간' },
  { emoji: '🎯', value: `${Math.round(year.minutes / year.totalSessions)}분`, label: '1회 평균 운동 시간' },
  { emoji: '🔥', value: `${year.longestStreakDays}일`, label: '쉬지 않고 이어 간 최장 연속 운동' },
];

function formatDate(date: string) {
  return date.replaceAll('-', '.');
}

export default function Body() {
  return (
    <section id="body" className="scroll-mt-20 bg-surface py-20 sm:py-28">
      <div className="section-container">
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-500">
            體 · 튼튼한 몸
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            {year.year}년, 실내 유산소 {year.totalSessions}회를 해냈습니다 💪
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink/60">
            아이들 앞에 서는 사람은 먼저 스스로를 돌볼 줄 알아야 합니다.
            야외 활동을 제외한 올해 실내 유산소 기록 그대로입니다.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, index) => (
            <Reveal key={s.label} delay={index * 0.05}>
              <div className="group h-full rounded-3xl bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-2xl shadow-soft transition-transform group-hover:scale-110">
                  <span aria-hidden="true">{s.emoji}</span>
                </div>
                <p className="mt-5 text-3xl font-extrabold text-ink">{s.value}</p>
                <p className="mt-2 leading-relaxed text-ink/60">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_300px]">
          <Reveal>
            <figure className="h-full rounded-3xl bg-white p-7 shadow-card">
              <figcaption className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-lg font-bold text-ink">월별 실내 유산소 횟수</span>
                <span className="text-sm text-ink/60">
                  {formatDate(year.period.from)} – {formatDate(year.period.to)} · 출처: {fitness.source}
                </span>
              </figcaption>
              <div className="overflow-x-auto">
                <div
                  role="img"
                  aria-label={`${year.year}년 월별 실내 유산소 횟수 막대그래프. 가장 많이 운동한 달은 ${maxMonthly}회`}
                  className="flex h-52 min-w-[420px] items-end gap-2"
                >
                  {year.monthly.map((m) => (
                    <div key={m.month} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
                      <span className="text-xs font-semibold text-ink/60">{m.count}</span>
                      <div
                        className="w-full rounded-t-lg bg-brand-500"
                        style={{ height: `${(m.count / maxMonthly) * 85}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div aria-hidden="true" className="mt-2 flex min-w-[420px] gap-2">
                  {year.monthly.map((m) => (
                    <div key={m.month} className="flex-1 text-center text-xs text-ink/50">
                      {Number(m.month.slice(5))}월
                    </div>
                  ))}
                </div>
              </div>
            </figure>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex h-full flex-col rounded-3xl bg-white p-7 text-center shadow-card">
              <span className="text-lg font-bold text-ink">기록 인증 ✅</span>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                삼성헬스 앱으로 QR을 스캔하면 제 실제 운동 기록을 확인할 수 있습니다.
              </p>
              <div className="mt-5 flex flex-1 items-center justify-center">
                <Image
                  src="/evidence/samsung-health-qr.png"
                  alt="신종원의 삼성헬스 프로필 QR 코드"
                  width={1466}
                  height={1014}
                  sizes="260px"
                  className="h-auto w-full rounded-2xl"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
