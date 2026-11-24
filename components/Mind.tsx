import Reveal from './Reveal';
import { credentials, projects } from '@/lib/site';

export default function Mind() {
  return (
    <section id="mind" className="scroll-mt-20 bg-surface py-20 sm:py-28">
      <div className="section-container">
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-500">
            智 · 만드는 힘
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            이런 것들을 만들었습니다 🛠️
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink/60">
            문제를 발견하고, 데이터와 코드로 풀어 온 프로젝트입니다.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const body = (
              <>
                <div className="relative flex h-40 items-center justify-center overflow-hidden bg-brand-gradient">
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-600">
                    {project.category}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-6xl drop-shadow-xl transition-transform duration-300 group-hover:scale-110"
                  >
                    {project.emoji}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-ink">{project.title}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-ink/60">{project.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            );
            const card =
              'group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft';
            return (
              <Reveal key={project.title} delay={index * 0.05}>
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className={card}>
                    {body}
                  </a>
                ) : (
                  <article className={card}>{body}</article>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16 text-center">
          <h3 className="text-2xl font-extrabold text-ink">자격과 배움 📚</h3>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {credentials.map((c, index) => (
            <Reveal key={c.title} delay={index * 0.05}>
              <div className="group flex h-full items-center gap-4 rounded-3xl bg-white p-6 shadow-card">
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-2xl shadow-soft transition-transform group-hover:scale-110"
                >
                  {c.emoji}
                </span>
                <span>
                  <span className="block text-lg font-bold text-ink">{c.title}</span>
                  <span className="block text-ink/60">{c.desc}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
