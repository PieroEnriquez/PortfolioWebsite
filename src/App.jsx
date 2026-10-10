import './App.css'
import { profile, stats, ace, experience, principles, skills } from './content.js'

function Tags({ items, big }) {
  return (
    <ul className={big ? 'tags big' : 'tags'}>
      {items.map((t) => <li key={t}>{t}</li>)}
    </ul>
  )
}

function Actions({ children }) {
  return (
    <div className="actions">
      {children}
      <a href={profile.cv} className="btn" download>Download CV</a>
      <a href={profile.github} className="btn" target="_blank" rel="noreferrer">GitHub</a>
      <a href={profile.linkedin} className="btn" target="_blank" rel="noreferrer">LinkedIn</a>
    </div>
  )
}

function App() {
  return (
    <>
      <header className="hero container">
        <p className="eyebrow">Hi there, I am</p>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="pitch">{profile.pitch}</p>
        <Actions>
          <a href="#experience" className="btn btn-primary">Experience</a>
        </Actions>
      </header>

      <main className="container">
        <section className="featured">
          <article className="ace">
            <span className="meta">{ace.meta}</span>
            <h2>{ace.name}</h2>
            <p>{ace.body}</p>
            <Tags items={ace.tags} />
            <a href={ace.link} className="btn btn-primary" target="_blank" rel="noreferrer">View on GitHub</a>
          </article>

          <div>
            <h2>How I think about it</h2>
            <div className="principles">
              {principles.map((p) => (
                <div className="principle" key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <p className="lead">Four years at Bitrefill, from intern to the engineer who gets to decide what AI agents are allowed to touch.</p>
          <ul className="stats">
            {stats.map((s) => (
              <li className="stat" key={s.value}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.period}>
                <span className="meta">{job.period} · {job.company}</span>
                <h3>{job.role}</h3>
                <p className="headline">{job.title}</p>
                <p>{job.body}</p>
                <Tags items={job.tags} />
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2>Tools I reach for</h2>
          <Tags items={skills} big />
        </section>

        <section className="contact">
          <h2>Want to build something together?</h2>
          <p className="lead">I am happy to talk about agent platforms, payment infrastructure, or anything that needs to work at 3am.</p>
          <Actions>
            <a href={`mailto:${profile.email}`} className="btn btn-primary">Email me</a>
          </Actions>
        </section>
      </main>

      <footer>
        <a href={`${profile.github}/PortfolioWebsite`} target="_blank" rel="noreferrer">Source on GitHub</a>
      </footer>
    </>
  )
}

export default App
