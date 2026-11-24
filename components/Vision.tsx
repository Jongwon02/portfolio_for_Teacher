import Reveal from './Reveal';
import { vision } from '@/lib/site';

export default function Vision() {
  return (
    <section id="vision" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="section-container">
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-500">
            Why Education
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">{vision.title}</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full space-y-4 rounded-3xl bg-surface p-8 text-lg leading-relaxed text-ink/70">
              {vision.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="relative h-full overflow-hidden rounded-3xl bg-brand-gradient p-8 text-white shadow-soft">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <blockquote className="relative text-2xl font-extrabold leading-snug sm:text-3xl">
                {vision.quote}
              </blockquote>
              <p className="relative mt-4 text-lg leading-relaxed text-white/90">{vision.belief}</p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 text-center">
          <h3 className="text-2xl font-extrabold text-ink">만들고 싶은 프로그램</h3>
        </Reveal>
        <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-2">
          {vision.goals.map((goal, index) => (
            <Reveal key={goal.title} delay={index * 0.05}>
              <div className="group h-full rounded-3xl bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-2xl shadow-soft transition-transform group-hover:scale-110">
                  <span aria-hidden="true">{goal.emoji}</span>
                </div>
                <h4 className="mt-5 text-xl font-bold text-ink">{goal.title}</h4>
                <p className="mt-2 leading-relaxed text-ink/60">{goal.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
