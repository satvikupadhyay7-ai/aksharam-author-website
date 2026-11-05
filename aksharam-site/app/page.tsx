'use client';

import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Feather, Globe2, Menu, Quote, Sparkles, X } from 'lucide-react';

const books = [
  { no: '01', title: 'अनुगूँज', english: 'Echoes Within', language: 'HINDI • POETRY', year: '2024', color: 'wine', description: 'A collection of poems that finds extraordinary meaning in ordinary moments—memory, belonging, love, and the quiet courage of being.' },
  { no: '02', title: 'कालचक्र', english: 'The Wheel of Time', language: 'SANSKRIT • REFLECTIONS', year: '2022', color: 'forest', description: 'Ancient questions meet a contemporary voice in reflections on time, change, and the enduring search for meaning.' },
  { no: '03', title: 'मन के पंख', english: 'Wings of the Mind', language: 'HINDI • ESSAYS', year: '2021', color: 'ochre', description: 'Thoughtful essays on culture, creativity, and the small experiences that shape the way we see the world.' },
  { no: '04', title: 'ऋतम्', english: 'The Order of Being', language: 'SANSKRIT • VERSE', year: '2019', color: 'blue', description: 'A modern engagement with Sanskrit verse, exploring harmony, nature, and the relationship between the self and the universe.' },
];

const nav = [['The Author', '#author'], ['Books', '#books'], ['Literary World', '#literary-world'], ['Contact', '#contact']];

export default function Home() {
  const [active, setActive] = useState(-1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'all' | 'hindi' | 'sanskrit'>('all');
  const visibleBooks = books.filter((book) => language === 'all' || book.language.toLowerCase().includes(language));

  return (
    <main>
      <div className="announcement"><span className="announcement-dot" /> A JOURNEY THROUGH WORDS, CULTURE & TIME <span className="announcement-right">EST. IN THE SPIRIT OF THE WRITTEN WORD</span></div>
      <header className="header">
        <a className="brand" href="#top"><span className="brand-mark">अ</span><span><strong>अक्षरम्</strong><small>THE LIVING LIBRARY</small></span></a>
        <nav className="desktop-nav">{nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
        <a className="header-cta" href="#books">Explore the library <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      </header>
      {menuOpen && <div className="mobile-menu">{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={16}/></a>)}</div>}

      <section className="hero" id="top">
        <div className="hero-grain" />
        <div className="hero-copy">
          <div className="eyebrow light"><span /> WORDS THAT OUTLIVE WORLDS</div>
          <h1>Some stories<br/>are written.<br/><em>Some are lived.</em></h1>
          <p className="hero-deck">An exploration of language, memory, and the timeless wisdom woven into Hindi and Sanskrit literature.</p>
          <div className="hero-actions"><a className="button button-light" href="#books">Discover the books <ArrowRight size={16}/></a><a className="text-link light-link" href="#author">Meet the author <ArrowDown size={15}/></a></div>
        </div>
        <div className="hero-art" aria-label="Decorative literary manuscript artwork">
          <div className="sun-disc"/><div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="hero-script">अक्षर</div><div className="hero-script-sub">शब्दः ब्रह्म</div>
          <div className="hero-art-caption"><span>01 / 04</span><span>THE ART OF THE WRITTEN WORD</span></div>
          <div className="floating-leaf leaf-one">❧</div><div className="floating-leaf leaf-two">❧</div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line"/><span>28° 36′ N &nbsp; 77° 12′ E</span></div>
      </section>

      <section className="intro section-pad" id="literary-world">
        <div className="section-kicker">A NOTE ON THE JOURNEY <span>01 — 04</span></div>
        <div className="intro-grid"><div><p className="large-serif">Language is more than a way to speak. It is a way to <i>remember</i>.</p></div><div className="intro-body"><p>Across centuries, the languages of India have carried stories, philosophy, poetry, and ways of seeing the world. This space celebrates that living inheritance—and the voices that keep it moving forward.</p><p>Rooted in tradition, curious about tomorrow, these pages invite readers everywhere to discover the beauty of words that know no borders.</p><a href="#author" className="under-link">The story behind the words <ArrowUpRight size={15}/></a></div></div>
        <div className="intro-ornament">ॐ <span>✳</span> ॐ</div>
      </section>

      <section className="books-section section-pad" id="books">
        <div className="section-kicker light-kicker">THE AUTHOR'S LIBRARY <span>02 — 04</span></div>
        <div className="books-heading"><div><p className="eyebrow light"><span/> WORDS, BOUND AND UNBOUND</p><h2>A bookshelf of<br/><em>many worlds.</em></h2></div><p className="books-heading-note">Each book is a doorway. Step into a different world of thought, verse, and imagination.</p></div>
        <div className="filter-row"><span>EXPLORE BY LANGUAGE</span><div className="filters">{(['all','hindi','sanskrit'] as const).map((item) => <button key={item} className={language === item ? 'filter active' : 'filter'} onClick={() => setLanguage(item)}>{item === 'all' ? 'All works' : item}</button>)}</div></div>
        <div className="book-grid">{visibleBooks.map((book) => <article className="book-card" key={book.no}>
          <div className={`book-cover ${book.color}`}><div className="cover-top"><span>अक्षरम् प्रकाशन</span><span>{book.no}</span></div><div className="cover-symbol">{book.color === 'wine' ? '❋' : book.color === 'forest' ? 'ॐ' : book.color === 'ochre' ? '✳' : 'अ'}</div><div className="cover-title"><strong>{book.title}</strong><small>{book.english}</small></div><div className="cover-bottom"><span>SELECTED WRITINGS</span><span>{book.year}</span></div></div>
          <div className="book-meta"><div className="book-meta-top"><span>{book.language}</span><span>{book.year}</span></div><h3>{book.title}</h3><p>{book.description}</p><button className="book-link" onClick={() => setActive(books.findIndex((b) => b.no === book.no))}>Discover this book <ArrowUpRight size={15}/></button></div>
        </article>)}</div>
        <div className="books-footnote"><span>* Book titles, publication years, and descriptions are illustrative placeholders.</span><span>MORE STORIES TO COME ↗</span></div>
      </section>

      <section className="author-section section-pad" id="author">
        <div className="section-kicker"><span>03 — 04</span> THE VOICE BEHIND THE VERSE</div>
        <div className="author-grid"><div className="author-visual"><div className="portrait-placeholder"><div className="portrait-circle">अ</div><div className="portrait-caption">A LIFE IN LETTERS<br/>AND LINES</div><div className="portrait-side">THE AUTHOR · INDIA</div></div><div className="author-stamp">शब्द<br/>साधना</div></div><div className="author-copy"><p className="eyebrow"><span/> THE AUTHOR</p><h2>A keeper of<br/><em>stories & silence.</em></h2><p className="author-name">[Author's Name]</p><p className="author-description">A writer drawn to the music of language and the wisdom of everyday life. Through Hindi and Sanskrit, the author explores the meeting point of classical thought and contemporary experience.</p><p className="author-description">The work is an ongoing conversation—with the past, with the present, and with readers who believe that literature can bring us closer to one another.</p><a className="under-link" href="#contact">Read the author's story <ArrowUpRight size={15}/></a></div></div>
        <div className="author-stats"><div><strong>04</strong><span>SELECTED WORKS</span></div><div><strong>02</strong><span>LANGUAGES</span></div><div><strong>∞</strong><span>WAYS TO INTERPRET</span></div><div className="stats-quote">“A word is a small thing<br/>with an endless life.”</div></div>
      </section>

      <section className="verse-section"><div className="verse-inner"><div className="section-kicker light-kicker">A MOMENT FOR THE WORD <span>04 — 04</span></div><Quote className="quote-icon" size={30}/><p className="verse-devanagari">वसुधैव कुटुम्बकम्</p><p className="verse-translation">“The world is one family.”</p><p className="verse-note">An ancient thought. A deeply contemporary hope.</p><div className="verse-rule"/><span className="verse-source">MAHĀ UPANIṢAD · AN IDEA THAT TRAVELS ACROSS TIME</span></div></section>

      <section className="contact-section section-pad" id="contact"><div className="contact-left"><p className="eyebrow"><span/> LET'S KEEP THE CONVERSATION GOING</p><h2>Every great story<br/>begins with <em>hello.</em></h2><p>For literary events, collaborations, publishing enquiries, or simply to share a thought—write to us.</p><a className="button button-dark" href="mailto:hello@aksharam.example">Write a letter <ArrowUpRight size={16}/></a></div><div className="contact-right"><div className="contact-mark">अ</div><div className="contact-details"><span>GENERAL & LITERARY ENQUIRIES</span><a href="mailto:hello@aksharam.example">hello@aksharam.example</a><span>FOLLOW THE JOURNEY</span><div className="social-links"><a href="#contact">Instagram ↗</a><a href="#contact">YouTube ↗</a><a href="#contact">LinkedIn ↗</a></div></div></div></section>

      <footer className="footer"><a className="brand footer-brand" href="#top"><span className="brand-mark">अ</span><span><strong>अक्षरम्</strong><small>THE LIVING LIBRARY</small></span></a><p>Celebrating the enduring spirit of Indian literature.</p><div className="footer-bottom"><span>© 2026 AKṢARAM. ALL RIGHTS RESERVED.</span><span>MADE WITH <span className="heart">♥</span> FOR THE LOVE OF WORDS</span><a href="#top">BACK TO TOP ↑</a></div></footer>

      {active >= 0 && <div className="book-modal" role="dialog" aria-modal="true" aria-label="Book details"><button className="modal-close" onClick={() => setActive(-1)} aria-label="Close details"><X/></button><div className={`modal-cover ${books[active].color}`}><span>{books[active].title}</span><small>{books[active].english}</small></div><div className="modal-copy"><p className="eyebrow">{books[active].language} · {books[active].year}</p><h2>{books[active].title}</h2><p>{books[active].description}</p><p className="modal-placeholder">Publication details, ISBN, publisher, and copyright information can be added here once the real book information is available.</p><button className="button button-dark" onClick={() => setActive(-1)}>Close details <X size={15}/></button></div></div>}
    </main>
  );
}
