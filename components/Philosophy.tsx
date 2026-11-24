import Image from 'next/image';
import Reveal from './Reveal';
import { pillars } from '@/lib/site';

export default function Philosophy() {
  return (
    <section id="philosophy" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="section-container grid items-center gap-12 md:grid-cols-[320px_1fr]">
        <Reveal className="flex justify-center">
          <div className="relative animate-floatSlow">
            <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-3xl bg-brand-100" />
            <div className="relative h-64 w-64 overflow-hidden rounded-3xl bg-surface shadow-card">
              <Image
                src="/images/kevin-about.webp"
                alt="신종원 프로필 캐릭터"
                fill
                sizes="256px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <span className="text-sm font-bold uppercase tracking-widest text-brand-500">
            About Me
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            좋은 선생님의 조건, 체·덕·지 👀
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink/70">
            <p>
              존 로크는 『교육론』에서 “건강한 신체에 깃든 건강한 정신”을 교육의
              출발점으로 삼고, 몸·덕·지식의 순서로 사람을 길러야 한다고 했습니다.
            </p>
            <p>
              저는 좋은 교사란 이 세 가지를 갖추고 아이들에게 모범을 보이는
              사람이라고 믿습니다. 아이들과 선생님을 위한 프로그램을 만드는
              개발자도 같은 기준을 가져야 한다고 생각합니다. 아래에 그 기록을
              모았습니다.
            </p>
          </div>
          <ul className="mt-7 flex flex-wrap gap-2">
            {pillars.map((p) => (
              <li key={p.key}>
                <a
                  href={p.href}
                  className="inline-block rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-600 transition-colors hover:bg-brand-100"
                >
                  #{p.hanja} {p.title}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
