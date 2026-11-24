// ─────────────────────────────────────────────────────────────
//  이 파일만 고치면 사이트 내용 대부분을 바꿀 수 있습니다.
//  수치는 docs/PRD.md 에 기록된 값만 사용합니다.
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  name: '신종원',
  nameEn: 'Kevin',
  role: '아이들과 선생님을 위한 프로그램을 만드는 개발자',
  heroTagline:
    '좋은 선생님은 튼튼한 몸, 바른 마음, 깊은 지식을 모두 갖춘 사람이라고 생각합니다. 존 로크가 말한 체·덕·지, 세 가지를 기록으로 보여 드리겠습니다.',
  email: 'sjw020722@gmail.com',
  social: [{ label: 'GitHub', href: 'https://github.com/Jongwon02', emoji: '🐙' }],
};

export const navItems = [
  { label: 'About', href: '#philosophy' },
  { label: '체(體)', href: '#body' },
  { label: '덕(德)', href: '#virtue' },
  { label: '지(智)', href: '#mind' },
  { label: 'Vision', href: '#vision' },
];

// 체·덕·지 세 축 — About 섹션의 해시태그로 표시
export const pillars = [
  {
    key: 'che',
    hanja: '體',
    title: '튼튼한 몸',
    href: '#body',
  },
  {
    key: 'deok',
    hanja: '德',
    title: '바른 마음',
    href: '#virtue',
  },
  {
    key: 'ji',
    hanja: '智',
    title: '만드는 힘',
    href: '#mind',
  },
] as const;

export const award = {
  title: '제11회 병무청 사회복무대상',
  headline: '5만 명 중 93명,\n사회복무대상을 받았습니다',
  story:
    '요양원에서 사회복무요원으로 일하며 돌봄이 필요한 분들 곁을 지켰습니다. 그 성실함을 인정받아 전국 사회복무요원 약 5만 명 중 93명에게만 주어지는 제11회 병무청 사회복무대상에 선정되었습니다.',
  badges: ['충북지방병무청장 표창', '2024.12.12', '제2491호'],
  // 근무 기관명을 가린 이미지만 사용합니다 (CLAUDE.md 개인정보 규칙)
  image: '/evidence/award-masked.jpg',
};

// 덕(德) — 봉사 활동
export const volunteer = {
  title: '사랑나누기 활동',
  place: '한우리지역아동센터',
  period: '2025.03 – 2025.08',
  story:
    '아이들이 행복해하는 얼굴을 볼 수 있다면 그 무엇도 필요 없다고 느꼈습니다. 이 경험이 아동학을 공부하게 된 출발점이 되었습니다.',
};

// 지(智) — 자료가 들어오면 desc, tags, href 를 채워 주세요.
export const projects = [
  {
    emoji: '📊',
    category: 'Data',
    title: '보험 데이터 예측',
    desc: '[문제 · 해결 방법 · 결과 — 자료 추가 예정]',
    tags: ['데이터 분석', '머신러닝'],
    href: '',
  },
  {
    emoji: '🏆',
    category: 'Hackathon',
    title: '지역 맞춤 귀농 작물 추천',
    desc: '공공 기후·토양 데이터로 지역에 맞는 작물을 점수와 이유로 추천합니다.',
    tags: ['Python', 'Next.js', '공공데이터 API', 'Claude API'],
    href: 'https://team-beomin.vercel.app',
  },
  {
    emoji: '📋',
    category: 'Service',
    title: '소상공인·중소기업 경영진단',
    desc: '설문으로 경영 유형과 역량을 진단하고 우선 전략을 제시합니다.',
    tags: ['Python', 'FastAPI', 'Next.js', 'Supabase'],
    href: 'https://mbti-for-enterprise.vercel.app',
  },
] as const;

// 지(智) — 자격과 배움
export const credentials = [
  { emoji: '🎓', title: '아동학 복수전공', desc: '가톨릭대학교' },
  { emoji: '📊', title: 'ADsP', desc: '데이터분석 준전문가' },
  { emoji: '🗄️', title: 'SQLD', desc: 'SQL 개발자' },
];

// 비전 — 왜 교육인가, 만들고 싶은 것
export const vision = {
  title: '아이들의 미소를 지키는 개발자가 되고 싶습니다 🌱',
  story: [
    '사랑나누기 활동에서 만난 아이들의 웃음은 제게 가장 큰 보람이었습니다. 아이들이 행복해하는 얼굴을 볼 수 있다면 그 무엇도 필요 없다고 느꼈습니다.',
    '하지만 아이가 울거나 문제 행동을 보일 때, 제가 무엇을 해야 하는지는 몰랐습니다. 그 답을 제대로 배우고 싶어서 아동학을 복수전공하게 되었습니다.',
  ],
  quote: '“교사보다 위대한 교구는 없다”',
  belief:
    '아이를 둘러싼 환경도 중요하지만, 아이들에게 좋은 교육이 닿으려면 먼저 교사의 환경이 갖춰져야 한다고 믿습니다. 선생님이 서류 작업 대신 아이들에게 더 많은 시간을 쓸 수 있어야 하기 때문입니다.',
  goals: [
    {
      emoji: '📝',
      title: '교사 맞춤형 AI 문서 정리 도구',
      desc: '교사의 문서 작업과 활동 개요 작성을 돕는 AI 도구입니다.',
    },
    {
      emoji: '🧸',
      title: '아이들을 위한 교구',
      desc: '아동학에서 배운 발달 지식을 바탕으로 한 교육용 교구 프로그램입니다.',
    },
  ],
  closing:
    '개발자로서 역량을 쌓고, 배운 지식과 기술로 아이들과 선생님에게 좋은 영향을 주는 사람이 되고 싶습니다.',
};
