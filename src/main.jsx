import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const heroStates = [
  {
    number: '01',
    action: 'Enter',
    title: 'Systems & people',
    description:
      'I stay close to people caught inside inherited patterns, understand what the system asks them to accept, and build a useful way forward.',
    image: '/img/artifact/fieldwork.webp',
    alt: 'Shubham Jha in conversation during fieldwork in Kathmandu',
  },
  {
    number: '02',
    action: 'Frame',
    title: 'Films & stories',
    description:
      'I held my first camera at eight. It taught me that the right frame can make people notice what ordinary life teaches them to miss.',
    image: '/img/artifact/filmmaking.webp',
    alt: 'Shubham Jha holding a cinema camera',
  },
  {
    number: '03',
    action: 'Move',
    title: 'Ideas in public',
    description:
      'Give me a mic and I will turn the room into a place where an idea can be tested, challenged and made real in public.',
    image: '/img/artifact/speaking.webp',
    alt: 'Shubham Jha speaking with a handheld microphone',
  },
];

const flagship = [
  {
    index: '01',
    name: 'DEVTRACK',
    domain: 'Public systems',
    accent: '#164f9f',
    headline: 'Making government work visible enough for people to enter it.',
    description:
      'I worked across public offices, project workflows and citizen needs to prototype a clearer connection between institutions and the people they serve.',
    role: 'Founder & product',
    mainImage: '/img/projects/devtrack-2.png',
    mainAlt: 'The DevTrack team gathered around a table in Kathmandu',
    details: [
      { image: '/img/projects/devtrack-1.png', alt: 'DevTrack public infrastructure overview and map', caption: 'The working product / public overview' },
    ],
    href: 'https://devtrack.org',
    link: 'View documentation',
  },
  {
    index: '02',
    name: 'FROM THE\nBRANCHES',
    domain: 'Social enterprise',
    accent: '#cf4d2b',
    headline: 'Poverty is not one problem. I started with the routes underneath it.',
    description:
      'Informal waste collectors already moved through the city every day. We tested whether those routes could create new income, financial access and greater agency.',
    role: 'Founder / Davis Projects for Peace',
    mainImage: '/img/projects/from-the-branches-waste-routes.png',
    mainAlt: 'From the Branches fieldwork with waste collectors in Kathmandu',
    details: [
      { image: '/img/projects/branches-1.svg', alt: 'From the Branches route-system study', caption: 'The route system / field model' },
      { image: '/img/artifact/fieldwork.webp', alt: 'Illustrated field conversation in Kathmandu', caption: 'Listening inside the system' },
    ],
    href: '/reports/from-the-branches-report-2026.pdf',
    link: 'View documentation',
  },
  {
    index: '03',
    name: 'STITCH /\nRESHA',
    domain: 'Heritage & product',
    accent: '#9e2939',
    headline: 'Turning inherited patterns into something people can carry forward.',
    description:
      'Cultural research, product strategy and contemporary form came together in a luxury bag shaped by Nepal’s regions, motifs and material memory.',
    role: 'Co-founder / product',
    mainImage: '/img/stitch/stitch-collections.png',
    mainAlt: 'The Resha Himal, Pahaad and Terai bag collections',
    details: [
      { image: '/img/stitch/stitch-1.svg', alt: 'Resha material, beadwork and motif detail', caption: 'Material & motif study', detail: true },
    ],
    link: 'Project page coming',
  },
];

const smallerBuilds = [
  {
    name: 'Drishti',
    domain: 'Accessibility',
    status: 'Prototype',
    copy: 'A camera-based tool designed to help visually impaired users recognize currency.',
    image: '/img/projects/drishti-1.svg',
    logoClass: '',
  },
  {
    name: 'Kisan',
    domain: 'Agriculture',
    status: 'Shipped',
    copy: 'A mobile product giving farmers weather and market information before daily decisions.',
    image: '/img/projects/kisan-1.svg',
    logoClass: '',
  },
  {
    name: 'ArtHub',
    domain: 'Creative technology',
    status: 'Experiment',
    copy: 'A map for discovering street art, local stories and the people behind the work.',
    image: '/img/projects/arthub-1.svg',
    logoClass: '',
  },
  {
    name: 'One Day',
    domain: 'Attention',
    status: 'Concept',
    copy: 'One person, one stage and twenty-four hours of undivided attention. Then it resets.',
    image: '/img/one-day.png',
    logoClass: 'build-logo--one-day',
  },
  {
    name: 'There Is No Box',
    domain: 'Human and AI thinking',
    status: 'Active experiment',
    copy: 'A thinking system that questions the frame before trying to answer inside it.',
    image: '/img/there-is-no-box/thereisnobox-wide.png',
    logoClass: 'build-logo--wide',
    href: 'https://thereisnobox.xyz',
  },
  {
    name: 'Incubate Nepal',
    domain: 'Fellowship & community',
    status: 'Built with',
    copy: 'A community for young builders testing ambitious ideas through mentorship and practice.',
    wordmark: 'INCUBATE\nNEPAL',
    logoClass: 'build-logo--wordmark',
  },
];

const impact = [
  {
    domain: 'Private credit',
    name: 'MidCap Financial',
    copy: 'Studied investments, downside cases and the decisions behind major transactions.',
  },
  {
    domain: 'Public investment',
    name: 'Commonwealth of Pennsylvania',
    copy: 'Worked inside public strategy across workforce, energy and federal investment opportunities.',
  },
  {
    domain: 'Monetary infrastructure',
    name: 'Nepal Rastra Bank',
    copy: 'Researched interbank coordination through policy analysis and conversations with banking leaders.',
  },
  {
    domain: 'Economic consulting',
    name: 'Europe Economics',
    copy: 'Used quantitative research and Python analysis to understand institutional questions more deeply.',
  },
];

const films = [
  {
    meta: '01 / Selected film',
    title: 'The Last Cig',
    note: 'A large cinematic still belongs here. Add the final image, credit and viewing link.',
    image: '/img/film/film-1.svg',
    placeholder: 'Film still needed',
    lead: true,
  },
  {
    meta: '02 / Visual story',
    title: 'The G',
    note: 'A smaller film frame with production context and a direct viewing link.',
    image: '/img/film/film-2.svg',
    placeholder: 'Film still needed',
  },
  {
    meta: '03 / Conversations',
    title: 'Ideas tested in public',
    note: 'Talks, interviews and conversations across institutions, classrooms and communities.',
    image: '/img/shubham-hero.jpg',
    placeholder: 'Current photograph',
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Hero() {
  const [active, setActive] = useState(0);
  const heroRef = useRef(null);

  return (
    <section className="hero" ref={heroRef} aria-labelledby="hero-title">
      <div className="hero__micro" data-reveal>
        <span>Building revolutionary ideas, here</span>
        <span>Institutions · communities · technology · art</span>
      </div>

      <div className="hero-artifact" aria-label="Three ways Shubham works">
        <div className="artifact-stage">
          <div className="artifact-current" aria-hidden="true"><i /><i /><i /></div>
          {heroStates.map((state, index) => (
            <figure
              className={`artifact-plane artifact-plane--${index}${active === index ? ' is-active' : ''}`}
              key={state.number}
              aria-hidden={active !== index}
            >
              <img src={state.image} alt={active === index ? state.alt : ''} />
            </figure>
          ))}
          <div className="artifact-readout" aria-live="polite">
            <span>{heroStates[active].number} / {heroStates[active].action}</span>
            <p>{heroStates[active].description}</p>
          </div>
        </div>
        <div className="artifact-nav" role="group" aria-label="Explore Shubham's creative outlets">
          {heroStates.map((state, index) => (
            <button
              className={active === index ? 'is-active' : ''}
              key={state.number}
              type="button"
              aria-pressed={active === index}
              onClick={() => setActive(index)}
            >
              <span>{state.number}</span><b>{state.action}</b><i>{state.title}</i>
            </button>
          ))}
        </div>
      </div>

      <div className="hero__statement">
        <p className="hero__kicker" data-reveal>Shubham Jha / founder · product builder · filmmaker</p>
        <h1 id="hero-title">
          <span data-reveal>Building</span>
          <span className="hero__line--middle" data-reveal>revolutionary</span>
          <span className="hero__line--last" data-reveal>ideas, here.<i>*</i></span>
        </h1>
      </div>

      <div className="hero__bottom" data-reveal>
        <p>I pay attention to people caught in patterns and systems. Then I build the alternative, frame the story and bring others into it.</p>
        <a href="#work">Dreams made real <span>↓</span></a>
      </div>
    </section>
  );
}

function ProfileBridge() {
  const ranges = [
    ['Institutions', 'Understand how decisions, incentives and implementation actually work.'],
    ['Communities', 'Build with the people who live inside the problem, not around them.'],
    ['Technology', 'Turn an observation into something precise, useful and testable.'],
    ['Art', 'Give the work a form people can feel, remember and carry forward.'],
  ];
  return (
    <section className="profile-bridge" aria-labelledby="profile-title">
      <figure className="profile-bridge__portrait" data-reveal>
        <img src="/img/shubham-hero.jpg" alt="Shubham Jha speaking to an audience" />
        <figcaption>Shubham / in public</figcaption>
      </figure>
      <div className="profile-bridge__copy" data-reveal>
        <p className="micro-label">One method / many rooms</p>
        <h2 id="profile-title">I move between institutions, communities, technology and art.</h2>
        <p>The rooms change. The instinct does not: understand the people, question the pattern, assemble the right team and make the alternative tangible.</p>
        <p>That movement is not scattered range. It is how I see the whole system and find where a new idea can enter.</p>
      </div>
      <div className="profile-bridge__range" data-reveal>
        {ranges.map(([title, copy]) => <span key={title}><b>{title}</b><i>{copy}</i></span>)}
      </div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <header className="work-heading" data-reveal>
        <p>Selected work</p>
        <h2 id="work-title">Three ways of entering<br /><em>the world.</em></h2>
      </header>
      <div className="project-ledger">
        {flagship.map((project) => (
          <article className="project-case" key={project.index} style={{ '--project-accent': project.accent }} data-reveal>
            <aside className="project-case__rail" aria-hidden="true">
              <span>{project.index}</span><i />
            </aside>
            <div className={`project-case__visuals project-case__visuals--${project.details.length + 1}`}>
              <figure className="project-case__main">
                <img src={project.mainImage} alt={project.mainAlt} />
                <figcaption><b>Fig. 1</b> {project.domain} / Kathmandu</figcaption>
              </figure>
              <div className={`project-case__details${project.details.length === 1 ? ' project-case__details--single' : ''}`}>
                {project.details.map((detail, index) => (
                  <figure className={detail.detail ? 'is-detail' : ''} key={detail.image}>
                    <img src={detail.image} alt={detail.alt} />
                    <figcaption><b>Fig. {index + 2}</b> {detail.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <div className="project-case__story">
              <p className="project-case__meta">{project.index} / {project.domain}</p>
              <h3>{project.name.split('\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</h3>
              <i className="project-case__rule" aria-hidden="true" />
              <p className="project-case__headline">{project.headline}</p>
              <p className="project-case__description">{project.description}</p>
              <p className="project-case__role">{project.role}</p>
              {project.href ? <a href={project.href} target={project.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{project.link} <Arrow /></a> : <span className="project-case__pending">{project.link}</span>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SmallerBuilds() {
  return (
    <section className="experiments" aria-labelledby="experiments-title">
      <div className="experiments__intro" data-reveal>
        <p className="micro-label">Other entries / the wider ledger</p>
        <h2 id="experiments-title">Smaller builds.<br /><em>Different systems.</em></h2>
        <p>Products, platforms and fellowships that each tested one idea against one community: farmers, artists, accessibility, attention and intelligence itself.</p>
      </div>
      <div className="build-grid">
        {smallerBuilds.map((project) => (
          <article className="build-cell" key={project.name} tabIndex="0" data-reveal>
            <div className="build-cell__front">
              {project.image ? <img className={`build-logo ${project.logoClass}`} src={project.image} alt="" /> : <strong className={project.logoClass}>{project.wordmark.split('\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</strong>}
              <span>{project.name}</span>
            </div>
            <div className="build-cell__back">
              <span>{project.domain}</span>
              <h3>{project.name}</h3>
              <p>{project.copy}</p>
              <div><b>{project.status}</b>{project.href ? <a href={project.href}>View <Arrow /></a> : <i>Open record ↗</i>}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Stealth() {
  return (
    <section className="stealth" aria-labelledby="stealth-title" data-reveal>
      <div className="stealth__object" aria-hidden="true"><span>S</span><i /><i /></div>
      <div className="stealth__copy">
        <p className="micro-label">Active development / 2026</p>
        <h2 id="stealth-title">Building<br />in stealth.</h2>
        <p>A new way for people to imagine with AI.</p>
        <a href="mailto:jha45shubham@gmail.com?subject=Early%20look">Request an early look <Arrow /></a>
      </div>
    </section>
  );
}

function UserSignals() {
  return (
    <section className="user-signals" aria-labelledby="user-signals-title">
      <header data-reveal>
        <p className="micro-label">Users / early signals</p>
        <h2 id="user-signals-title">When the idea<br /><em>lands.</em></h2>
        <p>The smallest reactions are often the clearest proof that something has moved from concept into feeling.</p>
      </header>
      <figure data-reveal>
        <div className="user-signals__image">
          <img src="/img/users/wait-thats-so-nice.png" alt="Message reaction reading: Wait that’s so niceeeee, sent at 12:44 PM" />
        </div>
        <figcaption><span>01 / unprompted reaction</span><span>Early user response</span></figcaption>
      </figure>
    </section>
  );
}

function Impact() {
  return (
    <section className="impact" id="impact" aria-labelledby="impact-title">
      <header className="impact__head" data-reveal>
        <p className="micro-label">Impact / experience across systems</p>
        <h2 id="impact-title">I work inside systems<br />to understand them deeply.</h2>
        <p>Institutions teach you where decisions are made, where incentives hide and what serious execution requires. That understanding travels into everything I build.</p>
      </header>
      <div className="impact-grid">
        {impact.map((item) => (
          <article key={item.name} data-reveal><span>{item.domain}</span><h3>{item.name}</h3><p>{item.copy}</p></article>
        ))}
      </div>
    </section>
  );
}

function Films() {
  return (
    <section className="films" id="films" aria-labelledby="films-title">
      <header className="films__head" data-reveal>
        <p className="micro-label">Films / stories / conversations</p>
        <h2 id="films-title">The camera came first.<br /><em>The story stayed.</em></h2>
        <div>
          <p>“I held my first camera at eight.”</p>
          <p>“The right story makes people look again.”</p>
        </div>
      </header>
      <div className="showreel" aria-hidden="true">
        {['FRAME 01','FRAME 02','FRAME 03','FRAME 04','FRAME 05','FRAME 06'].map((frame, index) => <span key={frame}><i>{String(index + 1).padStart(2,'0')}</i>{frame}</span>)}
      </div>
      <div className="film-grid">
        {films.map((film) => (
          <article className={`film-card${film.lead ? ' film-card--wide' : ''}`} key={film.title} data-reveal>
            <figure className="media-placeholder">
              <img src={film.image} alt="" />
              <span>{film.placeholder}</span><i aria-hidden="true" />
            </figure>
            <div><span>{film.meta}</span><h3>{film.title}</h3><p>{film.note}</p></div>
          </article>
        ))}
      </div>
      <div className="media-strip" data-reveal>
        <span>Also appearing through</span>
        <b>Instagram</b><b>Television</b><b>Short films</b><b>Public talks</b><b>Interviews</b>
      </div>
      <a className="film-link" href="https://youtube.com/@shubhamjhafilms">View the moving-image archive <Arrow /></a>
    </section>
  );
}

function About() {
  return (
    <section className="about" aria-labelledby="about-title">
      <div className="about__statement" data-reveal>
        <p className="micro-label">About / a working method</p>
        <h2 id="about-title">Enter the system.<br />Find the human truth.<br /><em>Make it tangible.</em></h2>
      </div>
      <div className="about__copy" data-reveal>
        <p>I grew up in Nepal and studied mathematics and economics in the United States. Moving between governments, markets, communities and creative work shaped the way I build.</p>
        <p>The projects look different. The method is consistent: pay attention to what people have learned to accept, bring the right people together, make something concrete and see what reality says back.</p>
        <div className="about__links"><a href="https://linkedin.com/in/shubham-jha01">LinkedIn <Arrow /></a><a href="mailto:jha45shubham@gmail.com">Email <Arrow /></a><span>Résumé / PDF to add</span></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="connect">
      <p className="micro-label">Connect / the next entry</p>
      <h2>A new perspective<br /><em>starts with a hello.</em></h2>
      <p className="footer-intro">I am interested in people building new systems, unusual products and ideas that deserve to exist.</p>
      <a className="footer-email" href="mailto:jha45shubham@gmail.com"><span>jha45shubham@gmail.com</span><Arrow /></a>
      <div className="footer-bottom"><span>Shubham Jha</span><div><a href="https://linkedin.com/in/shubham-jha01">LinkedIn</a><a href="https://devtrack.org">DevTrack</a><a href="https://thereisnobox.xyz">There Is No Box</a><a href="#top">Top ↑</a></div><span>United States ↔ Nepal</span></div>
    </footer>
  );
}

function App() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const root = document.documentElement;
    const updateTime = () => setTime(new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kathmandu', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()));
    updateTime();
    const clock = window.setInterval(updateTime, 30000);

    const pointer = (event) => {
      const nx = (event.clientX / window.innerWidth - 0.5) * 2;
      const ny = (event.clientY / window.innerHeight - 0.5) * 2;
      root.style.setProperty('--pointer-x', `${event.clientX}px`);
      root.style.setProperty('--pointer-y', `${event.clientY}px`);
      root.style.setProperty('--pointer-nx', nx);
      root.style.setProperty('--pointer-ny', ny);
      root.style.setProperty('--parallax-x', `${nx * 20}px`);
      root.style.setProperty('--parallax-y', `${ny * 14}px`);
    };

    const scroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      root.style.setProperty('--scroll-progress', progress);
      root.style.setProperty('--scroll-turn', `${progress * 36}deg`);
      root.style.setProperty('--hero-y', `${Math.min(window.scrollY * 0.1, 70)}px`);
      root.style.setProperty('--hero-opacity', Math.max(0.2, 1 - window.scrollY / window.innerHeight));
    };

    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('[data-reveal]').forEach((element) => reveal.observe(element));
    window.addEventListener('pointermove', pointer, { passive: true });
    window.addEventListener('scroll', scroll, { passive: true });
    scroll();

    return () => {
      window.clearInterval(clock); reveal.disconnect();
      window.removeEventListener('pointermove', pointer); window.removeEventListener('scroll', scroll);
    };
  }, []);

  return (
    <div className="portfolio" id="top">
      <header className="nav">
        <a className="wordmark" href="#top" aria-label="Shubham Jha, back to top"><span>SJ</span><i>©26</i></a>
        <nav aria-label="Primary navigation"><a href="#work">Work</a><a href="#films">Films</a><a href="#impact">Impact</a><a href="#connect">Connect</a></nav>
        <span className="nav-location">Ideas → reality</span>
      </header>
      <aside className="side-note" aria-hidden="true"><span>Observe</span><i /><span>Build</span><i /><span>Tell</span></aside>
      <div className="scroll-meter" aria-hidden="true"><i /></div>
      <main><Hero /><ProfileBridge /><SelectedWork /><SmallerBuilds /><Stealth /><UserSignals /><Impact /><Films /><About /></main>
      <Footer />
      <div className="status-bar" aria-hidden="true"><span>{time} KTM</span><span>Building revolutionary ideas, here.</span><span>Scroll to see the work</span></div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
