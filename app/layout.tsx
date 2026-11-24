import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '신종원 (Kevin) — Portfolio',
  description:
    '아이들과 선생님을 위한 프로그램을 만드는 개발자, 신종원(Kevin)의 포트폴리오. 존 로크의 체·덕·지를 기록으로 보여 드립니다.',
  openGraph: {
    title: '신종원 (Kevin) — Portfolio',
    description: '체·덕·지를 갖춘 교육 개발자, 신종원(Kevin)을 소개합니다.',
    images: ['https://portfolio-for-teacher.vercel.app/thats_me.webp'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '신종원 (Kevin) — Portfolio',
    description: '체·덕·지를 갖춘 교육 개발자, 신종원(Kevin)을 소개합니다.',
    images: ['https://portfolio-for-teacher.vercel.app/thats_me.webp'],
  },
  icons: {
    icon: '/thats_me.webp',
    apple: '/thats_me.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
