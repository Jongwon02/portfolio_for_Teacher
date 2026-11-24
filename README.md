# 신종원 (Kevin) — 교육 개발자 포트폴리오

아이들과 선생님을 위한 프로그램을 만드는 개발자가 되고 싶다는 목표를,
존 로크의 **체(體)·덕(德)·지(智)** 를 기록으로 보여 주며 소개하는 포트폴리오입니다.
요구사항은 [`docs/PRD.md`](docs/PRD.md), 작업 규칙은 [`CLAUDE.md`](CLAUDE.md)를 참고하세요.

`For_My_Portfolio`(배포본 <https://kevin-portfolio-21111.vercel.app>)의 히어로·헤더·연락처 디자인을 그대로 쓰고,
기존 배치(About · Strengths · Works 카드)를 그대로 살려 본문을 체·덕·지 순서로 채웠습니다.

## 실행하기

```bash
npm install     # 최초 1회
npm run dev     # http://localhost:3000
npm run build   # 배포용 빌드
```

## 기술 스택

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS 3
- Framer Motion (스크롤 등장 애니메이션)
- Pretendard 폰트 (jsDelivr CDN)

## 어디를 고치면 되나요?

### 1. 글/내용만 바꾸고 싶다면 → `lib/site.ts`

이 파일 하나에 사이트의 텍스트 데이터가 모여 있습니다.

| 항목 | 설명 |
| --- | --- |
| `siteConfig.name` / `nameEn` | 이름, 영문 이름 (헤더·히어로·푸터에 반영) |
| `siteConfig.role` | 히어로의 한 줄 소개 |
| `siteConfig.heroTagline` | 히어로 본문 문단 |
| `siteConfig.email` | Contact 버튼의 메일 주소 |
| `siteConfig.social` | Contact의 링크 (GitHub) |
| `navItems` | 상단 메뉴 |
| `pillars` | About 섹션의 체·덕·지 해시태그 |
| `award` | 덕 섹션 — 사회복무대상 내용과 표창장 이미지 경로 |
| `projects` | 지 섹션 프로젝트 카드 (`desc`가 자료 추가 예정 상태) |

운동 숫자와 그래프는 `data/fitness-summary.json`에서 읽습니다. 다시 만들려면:

```bash
python scripts/aggregate_fitness.py "<삼성헬스 내보내기 폴더>"
```

원본 삼성헬스 데이터는 저장소에 넣지 않습니다.

### 2. 디자인·레이아웃을 바꾸고 싶다면 → `components/`

| 파일 | 담당 영역 |
| --- | --- |
| `Header.tsx` | 상단 고정 네비게이션 (스크롤 20px 넘으면 흰 배경으로 전환, 모바일 햄버거 메뉴) |
| `Hero.tsx` | 첫 화면 — 캐릭터 둥둥 애니메이션, 아래쪽 물결 SVG |
| `Philosophy.tsx` | About 배치 — 로크의 체·덕·지와 교육관 |
| `Body.tsx` | Strengths 카드 배치 — 체: 운동 기록 숫자와 월별 그래프 |
| `Virtue.tsx` | About 배치(좌우 반전) — 덕: 사회복무대상과 표창장 |
| `Mind.tsx` | Works 카드 배치 — 지: 프로젝트 |
| `Contact.tsx` | 연락처 CTA 카드 |
| `Footer.tsx` | 하단 푸터 |
| `Reveal.tsx` | 스크롤 시 아래에서 떠오르는 등장 애니메이션 래퍼 |

### 3. 색상·그림자·애니메이션 → `tailwind.config.ts`

```
brand-50  #eef2ff      brand-500 #4b6ef5      ink          #1a1a2e
brand-100 #e0e7ff      brand-600 #3b5bff      surface      #f5f7ff
brand-400 #818cf8      brand-700 #3730a3      indigoPurple #7b61ff
```

- `bg-brand-gradient` — `linear-gradient(135deg, #4b6ef5, #5b6ef5 40%, #7b61ff)`
- `shadow-soft` / `shadow-card` — 커스텀 그림자
- `animate-float` (4s) / `animate-floatSlow` (6s) — 캐릭터가 위아래로 떠다니는 효과

### 4. 전역 스타일·폰트 → `app/globals.css`

`.section-container`(최대 폭 72rem 컨테이너), `.pill-btn`(알약 버튼) 유틸리티와 Pretendard 폰트가 여기 정의돼 있습니다.

### 5. 탭 제목·검색/공유 미리보기 → `app/layout.tsx`

`metadata`의 title, description, Open Graph, Twitter 카드 설정이 있습니다.
`og:image` / `twitter:image`는 배포 도메인(`portfolio-for-teacher.vercel.app`)을 가리킵니다. 도메인이 바뀌면 함께 수정하세요.

### 6. 이미지 → `public/`

```
public/thats_me.webp            프로필 아이콘 (파비콘 겸용)
public/images/kevin-hero.webp   히어로 캐릭터
public/images/kevin-cart.webp   Contact 캐릭터
public/evidence/award-masked.jpg 표창장 (근무 기관명 가림 처리본)
```

같은 파일명으로 덮어쓰면 코드 수정 없이 이미지가 교체됩니다.

## 배포

```bash
npx vercel        # 미리보기 배포
npx vercel --prod # 프로덕션 배포
```

Vercel 프로젝트는 `portfolio-for-teacher`입니다. 운영 주소: <https://portfolio-for-teacher.vercel.app>
