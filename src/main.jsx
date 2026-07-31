import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const heroStates = [
  {
    number: '01',
    action: 'Enter',
    title: 'Systems & people',
    description: 'I understand people who struggle inside patterns and systems. I find what the old norms are, then I build the innovative alternative.',
    image: '/img/artifact/fieldwork.webp',
    alt: 'Shubham Jha in conversation during fieldwork in Kathmandu',
  },
  {
    number: '02',
    action: 'Frame',
    title: 'Films & stories',
    description: 'I held my first camera at eight and made a film. I still do, so anything I build holds your attention, keeps you remembering, and changes you.',
    image: '/img/artifact/filmmaking.webp',
    alt: 'Shubham Jha holding a cinema camera',
  },
  {
    number: '03',
    action: 'Move',
    title: 'Ideas in public',
    description: 'Give me a mic. I can present, convince, and test an idea in public until the right people can see themselves inside the work.',
    image: '/img/artifact/speaking.webp',
    alt: 'Shubham Jha speaking with a handheld microphone',
  },
];

const range = [
  ['Institutions', 'A central bank, a state government, a private-credit desk, where the machine can be studied from within.'],
  ['Communities', 'Waste collectors, farmers, artists and students, the people a system is quietly failing.'],
  ['Technology', 'Platforms, dashboards and models, the missing thing, actually built and shipped.'],
  ['Art', 'Film, design and heritage craft, where an idea has to be felt before it is believed.'],
];

const experiments = [
  { no: '01', name: 'Drishti', domain: 'Accessibility · Computer vision', body: 'A vision app that recognizes currency for visually impaired users. 60+ usability tests and 500+ users within three months.', status: 'Built · Mobile', image: '/img/projects/drishti-1.svg' },
  { no: '02', name: 'Kisan', domain: 'Agricultural technology', body: 'A mobile product helping farmers access weather and market information before making decisions. 1,000+ farmers on Google Play.', status: 'Built · Mobile', image: '/img/projects/kisan-1.svg' },
  { no: '03', name: 'ArtHub', domain: 'Creative discovery', body: 'A living map of street art and the people who make it. 35+ artists onboarded and visibility tripled by a short film.', status: 'Built · Web', image: '/img/projects/arthub-1.svg' },
  { no: '04', name: 'One Day', domain: 'Social platform', body: 'One person. One stage. 24 hours. Resets at midnight. An anti-algorithm platform where attention is a turn, not a grind.', status: 'In build · Waitlist live', mark: '1D' },
  { no: '05', name: 'There Is No Box', domain: 'Intelligence research', body: 'What does thinking become when humans and AI stop being tools for each other? The box was never real.', status: 'In build · thereisnobox.xyz', image: '/img/there-is-no-box/thereisnobox-wide.png', href: 'https://thereisnobox.xyz' },
  { no: '06', name: 'Incubate Nepal', domain: 'Fellowship', body: 'Selected 1 of 25 nationally in an MIT and Harvard-led program. Three products shipped across three summers.', status: 'Institutional', wordmark: 'INCUBATE\nNEPAL' },
];

const institutions = [
  { domain: 'Private credit · Apollo affiliate', name: 'MidCap Financial', body: 'Three live transactions, $1.6B+, with forecast and downside models feeding Investment Committee decisions. Where I learned how capital actually moves.' },
  { domain: 'State government · Energy', name: 'Commonwealth of Pennsylvania', body: 'A $20B IIJA and IRA allocation shaped, with direct-pay compliance workflows implemented. Where I learned how public money reaches, or misses, people.' },
  { domain: 'Central bank · Nepal', name: 'Nepal Rastra Bank', body: 'An interbank platform blueprint, drawn from seven bank CEOs, adopted into the FY23/24 reform agenda. Where I learned that systems listen if you bring evidence.' },
  { domain: 'Economic consulting · London', name: 'Europe Economics', body: 'Python dashboards on regulatory barriers for twelve startups, with three recommendations adopted in $2M+ decisions. Where I learned to argue with data, politely.' },
];

function Nav() {
  return (
    <>
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top">SJ<sup>’26</sup></a>
        <div className="navlinks">
          <a href="#work">Work</a><a href="#films">Films</a><a href="#impact">Impact</a><a href="#connect">Connect</a>
        </div>
        <span className="navloc">US ↔ NP</span>
      </nav>
      <div className="meter" aria-hidden="true"><i /></div>
    </>
  );
}

function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const advance = window.setTimeout(() => {
      setActive((current) => (current + 1) % heroStates.length);
    }, 3000);
    return () => clearTimeout(advance);
  }, [active]);

  return (
    <header className="hero" id="top">
      <div className="hero-bloom" aria-hidden="true" />
      <div className="hero-meta">
        <p className="micro"><b>Building revolutionary ideas, here.</b><br />Kathmandu ↔ United States</p>
        <p className="micro">Public systems · Products<br />Social enterprise · Film</p>
      </div>

      <div className="artifact" aria-live="polite">
        <div className="stage">
          <div className="stage-glow" />
          <svg className="currents" viewBox="0 0 900 600" fill="none" aria-hidden="true">
            <path d="M110 320 C 220 180, 640 150, 800 300" />
            <path d="M90 400 C 300 520, 620 500, 830 370" />
            <path d="M160 250 C 320 120, 560 560, 760 430" />
          </svg>
          {heroStates.map((state, index) => (
            <figure className={`plane${active === index ? ' active' : ''}`} key={state.number} aria-hidden={active !== index}>
              <img src={state.image} alt={active === index ? state.alt : ''} />
            </figure>
          ))}
        </div>
        <div className="readout">
          <span>{heroStates[active].number} / {heroStates[active].action}</span>
          <p>{heroStates[active].description}</p>
        </div>
        <div className="tabs" role="tablist" aria-label="Ways of working">
          {heroStates.map((state, index) => (
            <button key={state.number} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)}>
              <span>{state.number}</span><span><b>{state.action}</b><i>{state.title}</i></span>
            </button>
          ))}
        </div>
      </div>

      <div className="statement">
        <p className="kicker"><b>Shubham Jha</b> / Founder · Product builder · Filmmaker</p>
        <h1><span>I enter</span><span>systems.</span><span className="indent">Make what is</span><span className="indent">missing.</span><span className="story">Tell the story.</span></h1>
      </div>
      <div className="hero-bar">
        <a href="#work">Selected work <b>↓</b></a>
        <p>Public systems, products, social enterprise and film. Different rooms, one method: get close, build the missing thing, make it felt.</p>
      </div>
    </header>
  );
}

function Bridge() {
  return (
    <section className="bridge">
      <figure className="reveal">
        <div className="portrait"><img src="/img/shubham-hero.jpg" alt="Shubham Jha speaking in public" /></div>
        <figcaption><span>Shubham</span><span>In public</span></figcaption>
      </figure>
      <div className="bridge-copy reveal">
        <p className="micro">A working method</p>
        <h2>I move between<br />institutions, community,<br />technology <em>&amp; art.</em></h2>
        <p>I hold all of them together to build something exciting every day, turning observations into <b>things you can actually use.</b> Everywhere I’ve worked, the requirement turned out to be the same: <b>creativity.</b></p>
        <p>Leading with it, and building things people want to hold, that change their lives, is what has brought me this far.</p>
      </div>
      <div className="range reveal">
        {range.map(([title, body]) => <div key={title}><b>{title}</b><p>{body}</p></div>)}
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, children, count }) {
  return <div className="section-head reveal"><span className="micro">{eyebrow}</span><h2>{children}</h2>{count && <span className="count">({count})</span>}</div>;
}

function Facts({ items, wide = false }) {
  return <div className={`facts${wide ? ' facts-wide' : ''}`}>{items.map(([key, value]) => <div key={key}><span>{key}</span><p>{value}</p></div>)}</div>;
}

function Work() {
  return (
    <section className="work" id="work">
      <SectionHead eyebrow={<>Selected work<br />Communities · Companies<br />Creative fields · Government</>} count="03">Dreams brought<br /><em>to reality.</em></SectionHead>
      <div className="projects">
        <a className="project project-full reveal" href="https://devtrack.org" target="_blank" rel="noreferrer">
          <div className="project-top"><span>01 / Public systems</span><span>2024 to now · devtrack.org ↗</span></div>
          <div className="project-image project-image-dev"><img src="/img/projects/devtrack-2.png" alt="The DevTrack team gathered around a table in Kathmandu" /><span>Kathmandu · live dashboard</span></div>
          <div className="project-copy">
            <div><h3>DevTrack</h3><p className="project-headline">A shared intelligence workflow for public infrastructure.</p></div>
            <p className="project-description">Nepal’s national infrastructure budget was 43% unspent and nobody could see where. DevTrack put 20+ national project workflows on one live dashboard, surfacing $2.3B in underutilized funds, speeding decisions 40% across 10+ departments, and earning adoption by Kathmandu’s city government.</p>
          </div>
          <Facts wide items={[["Role", "Founder & product lead, team of 7"], ["Evidence", "$2.3B surfaced · 40% faster decisions"], ["Adoption", "Kathmandu city government · 2M+ projected reach"], ["Link", "devtrack.org ↗"]]} />
        </a>

        <article className="project project-half reveal">
          <div className="project-top"><span>02 / Social enterprise</span><span>2023 to 24</span></div>
          <div className="project-image"><img src="/img/projects/from-the-branches-team.png" alt="The From the Branches pilot team in Kathmandu" /><span>Kathmandu · Davis field team</span></div>
          <div className="project-copy">
            <div><h3>From the<br />Branches</h3><p className="project-headline">Waste-collection routes, reborn as a last-mile delivery network.</p></div>
            <p className="project-description">A $10,000 enterprise built on the collectors’ own navigational knowledge. Incomes rose 15% for 15+ workers, first bank accounts opened, and savings frequency rose 25%, with Daraz and Pathao as partners.</p>
          </div>
          <Facts items={[["Recognition", "Davis Projects for Peace, first freshman fellow at F&M"], ["Evidence", "+15% incomes · +25% savings frequency"]]} />
        </article>

        <article className="project project-half reveal">
          <div className="project-top"><span>03 / Creative field</span><span>2025 to now</span></div>
          <div className="project-image"><img src="/img/stitch/stitch-collections.png" alt="Resha heritage bag collections named Himal, Pahaad and Terai" /><span>Resha · collections</span></div>
          <div className="project-copy">
            <div><h3>Resha</h3><p className="project-headline">Nepal’s heritage, distilled into three trademarked luxury lines.</p></div>
            <p className="project-description">150+ heritage motifs and 45+ user interviews became Himal, Pahaad and Terai. 5,000+ purchase interests arrived before launch, 20,000+ people were reached through five partner institutions, and an 8-person creative team was directed end to end.</p>
          </div>
          <Facts items={[["Role", "Co-founder & product head"], ["Evidence", "3 trademarks · 5,000+ purchase interests"]]} />
        </article>
      </div>
    </section>
  );
}

function Experiments() {
  return (
    <section className="experiments">
      <div className="experiments-intro reveal">
        <p className="micro">Other entries / The wider ledger</p>
        <h2>Smaller<br />builds.<br /><em>Different<br />systems.</em></h2>
        <p>Products, platforms and fellowships that each tested one idea against one community: farmers, artists, the visually impaired, and the question of what intelligence itself could become.</p>
      </div>
      <div className="matrix reveal">
        {experiments.map((item) => {
          const content = <>
            <div className="cell-info"><span>{item.no}</span><h3>{item.name}</h3><b>{item.domain}</b><p>{item.body}</p><i>{item.status}</i></div>
            <div className="cell-surface">
              {item.image && <img src={item.image} alt="" />}
              {item.mark && <strong className="coin">{item.mark}</strong>}
              {item.wordmark && <strong className="wordmark-cell">{item.wordmark}</strong>}
              <span>{item.name}</span>
            </div>
          </>;
          return item.href ? <a className="matrix-cell" href={item.href} target="_blank" rel="noreferrer" key={item.no}>{content}</a> : <div className="matrix-cell" key={item.no}>{content}</div>;
        })}
      </div>
    </section>
  );
}

function Stealth() {
  return (
    <section className="stealth">
      <div className="stealth-object" aria-hidden="true"><span>S</span><i /><i /></div>
      <div className="stealth-copy reveal">
        <p className="micro">Active development / 2026</p>
        <h2>Building<br />in stealth.</h2>
        <p>A new way for people to imagine with AI.</p>
        <a href="mailto:jha45shubham@gmail.com?subject=Early%20look%20at%20the%20stealth%20project"><span>Request an early look</span><span>→</span></a>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section className="impact" id="impact">
      <div className="impact-head reveal">
        <span className="micro">Impact<br />Inside the systems</span>
        <h2>I’ve worked inside the systems<br />that taught me <em>how the world works.</em></h2>
        <p>A central bank, a state government, a private-credit desk and a regulatory consultancy. I list them because understanding the machine from within is how you learn to rebuild it for the people outside it.</p>
      </div>
      <div className="institutions reveal">
        {institutions.map((item) => <article key={item.name}><span>{item.domain}</span><h3>{item.name}</h3><p>{item.body}</p></article>)}
      </div>
    </section>
  );
}

function Films() {
  const reelRef = useRef(null);
  const moveReel = (direction) => {
    const reel = reelRef.current;
    const card = reel?.querySelector('.film');
    if (!reel || !card) return;
    reel.scrollBy({ left: direction * (card.getBoundingClientRect().width + 18), behavior: 'smooth' });
  };

  return (
    <section className="films" id="films">
      <div className="films-head reveal">
        <span className="micro">Moving image / Selected films</span>
        <h2>My heart and mind,<br /><em>put out on a screen.</em></h2>
        <p>A camera since age eight. Stories are the oldest tool we have, how I stay ancient in this world, and how I keep finding what is new in it.</p>
      </div>
      <div className="reel-nav reveal">
        <span>Three films / Swipe or scroll</span>
        <div><button type="button" onClick={() => moveReel(-1)} aria-label="Previous film">←</button><button type="button" onClick={() => moveReel(1)} aria-label="Next film">→</button></div>
      </div>
      <div className="gallery reveal" ref={reelRef}>
        <a className="film film-last" href="https://www.youtube.com/watch?v=Dv9Jvc2mYeM&t=8s" target="_blank" rel="noreferrer">
          <div className="film-image">
            <img src="https://img.youtube.com/vi/Dv9Jvc2mYeM/maxresdefault.jpg" alt="The Last Cig film thumbnail" />
            <div className="film-frame-head"><span>01</span><span>Short film · Writer & director</span></div>
            <div className="film-title"><h3><span>The Last</span><em>Cig</em></h3></div>
            <div className="film-story"><p>A man finds himself with a pack of cigarettes. Each stick he burns is an old memory, until he is left with the last cig.</p><b>Play film</b></div>
          </div>
        </a>
        <a className="film film-g" href="https://www.youtube.com/watch?v=n7PfJjnFsTk&t=2s" target="_blank" rel="noreferrer">
          <div className="film-image">
            <img src="https://img.youtube.com/vi/n7PfJjnFsTk/hqdefault.jpg" alt="The G film thumbnail" />
            <div className="film-frame-head"><span>02</span><span>Astronomy film · Director</span></div>
            <div className="film-title"><h3><span>The</span><em>G</em></h3></div>
            <div className="film-story"><p>A naive boy refuses to believe in physics and challenges Newton. God appears to help him discover the beauty of physics.</p><b>Play film</b></div>
          </div>
        </a>
        <a className="film film-mask" href="https://www.youtube.com/watch?v=Et3sfS0cBxs" target="_blank" rel="noreferrer">
          <div className="film-image">
            <img src="https://img.youtube.com/vi/Et3sfS0cBxs/hqdefault.jpg" alt="The Mask film thumbnail" />
            <div className="film-frame-head"><span>03</span><span>Narrative film · Director & editor</span></div>
            <div className="film-title"><h3><span>The</span><em>Mask</em></h3></div>
            <div className="film-story"><p>Can something that protects us also become the cause of our death? A personified mask speaks of its love, support and care for humans.</p><b>Play film</b></div>
          </div>
        </a>
        <a className="channel-card" href="https://www.youtube.com/channel/UCsyi8rUBKXEKbGqtr-tIjKA" target="_blank" rel="noreferrer">
          <span className="micro">The moving image archive</span>
          <div><p>Keep watching</p><h3>Shubham Jha<br />Films</h3></div>
          <b>Visit the YouTube channel ↗</b>
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="reveal"><p className="micro">About / A working method</p><h2>Enter the system.<br />Find the human truth.<br /><em>Make it tangible.</em></h2></div>
      <div className="about-copy reveal"><p>I held my first camera at eight and made a film. I still do, which is why anything I build carries the experience of a film: <b>it holds your attention, keeps you remembering, and changes you.</b></p><p>Mathematics and economics at Franklin & Marshall. Kathmandu-born. Builder of things that did not exist the day before.</p></div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="connect" id="connect">
      <p className="micro reveal">Connect / 2026</p>
      <h2 className="reveal">A new perspective<br /><em>starts with a hello.</em></h2>
      <p className="connect-intro reveal">Reach out if you want a new perspective, a new creative outlook. I’m drawn to people building new systems, new products and ideas that deserve to exist, because they change how people see themselves and the world.</p>
      <div className="contact-rows reveal">
        <a href="mailto:jha45shubham@gmail.com"><span>Email</span><b>jha45shubham@gmail.com</b><i>→</i></a>
        <a href="https://linkedin.com/in/shubham-jha01" target="_blank" rel="noreferrer"><span>LinkedIn</span><b>in/shubham-jha01</b><i>→</i></a>
      </div>
      <div className="connect-bottom"><span>Shubham Jha</span><div><a href="https://devtrack.org" target="_blank" rel="noreferrer">DevTrack</a><a href="https://thereisnobox.xyz" target="_blank" rel="noreferrer">There Is No Box</a><a href="#top">Top</a></div><span>United States ↔ Nepal</span></div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

    const placePageAtRequestedSection = () => {
      const requestedId = window.location.hash.slice(1);
      const requestedSection = requestedId ? document.getElementById(requestedId) : null;
      const root = document.documentElement;
      const previousScrollBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      if (requestedSection) {
        const requestedTop = window.scrollY + requestedSection.getBoundingClientRect().top;
        window.scrollTo(0, requestedTop);
      } else {
        window.scrollTo(0, 0);
      }
      requestAnimationFrame(() => { root.style.scrollBehavior = previousScrollBehavior; });
    };

    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      const progress = max > 0 ? scrollY / max : 0;
      document.documentElement.style.setProperty('--scroll-progress', progress);
      document.documentElement.style.setProperty('--scroll-turn', `${progress * 36}deg`);
    };

    let cancelled = false;
    const settleAtRequestedSection = () => {
      if (!cancelled) requestAnimationFrame(placePageAtRequestedSection);
    };

    settleAtRequestedSection();
    addEventListener('load', settleAtRequestedSection);
    document.fonts?.ready.then(settleAtRequestedSection);
    const positionTimer = window.setTimeout(settleAtRequestedSection, 250);
    updateScroll();
    addEventListener('scroll', updateScroll, { passive: true });
    addEventListener('hashchange', placePageAtRequestedSection);
    return () => {
      cancelled = true;
      clearTimeout(positionTimer);
      removeEventListener('load', settleAtRequestedSection);
      removeEventListener('scroll', updateScroll);
      removeEventListener('hashchange', placePageAtRequestedSection);
    };
  }, []);
  return <><Nav /><main><Hero /><Bridge /><Work /><Experiments /><Stealth /><Impact /><Films /><About /></main><Footer /><div className="status" aria-hidden="true"><span>KTM · BUILDING</span><span>Building in public, selectively.</span><span>2026</span></div></>;
}

createRoot(document.getElementById('root')).render(<App />);
