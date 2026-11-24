import Image from 'next/image';
import Reveal from './Reveal';
import { award, volunteer } from '@/lib/site';

export default function Virtue() {
  return (
    <section id="virtue" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="section-container grid items-center gap-12 md:grid-cols-[1fr_320px]">
        <Reveal className="md:order-2 flex justify-center">
          <a
            href={award.image}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-64 transition-transform duration-300 hover:-translate-y-1.5"
          >
            <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-3xl bg-brand-100" />
            <div className="overflow-hidden rounded-3xl bg-white p-2 shadow-card">
              <Image
                src={award.image}
                alt={`${award.title} 표창장. 충북지방병무청장, 2024년 12월 12일, 표창장 제2491호`}
                width={900}
                height={1231}
                sizes="256px"
                className="h-auto w-full rounded-2xl"
              />
            </div>
            <span className="sr-only">표창장 크게 보기 (새 탭)</span>
          </a>
        </Reveal>

        <Reveal className="md:order-1">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-500">
            德 · 바른 마음
          </span>
          <h2 className="mt-3 whitespace-pre-line text-3xl font-extrabold text-ink sm:text-4xl">
            {award.headline} 🏅
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">{award.story}</p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {award.badges.map((b) => (
              <li
                key={b}
                className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-600"
              >
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-3xl bg-surface p-6">
            <p className="text-sm font-bold text-brand-500">봉사 활동 🤝</p>
            <p className="mt-2 text-lg font-bold text-ink">
              {volunteer.title} · {volunteer.place}
            </p>
            <p className="mt-1 text-sm text-ink/60">{volunteer.period}</p>
            <p className="mt-3 leading-relaxed text-ink/70">{volunteer.story}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
