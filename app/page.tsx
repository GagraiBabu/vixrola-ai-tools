import Link from "next/link";

const tools=[
  ["✨","AI Humanizer","Make AI-written text sound natural, clear and human.","/ai-humanizer","Popular"],
  ["🔎","AI Detector","Analyze text for patterns commonly associated with AI writing.","/ai-detector","Writing"],
  ["✍️","AI Rewriter","Rewrite paragraphs while keeping the original meaning.","/tools","Writing"],
  ["📝","AI Summarizer","Turn long articles and documents into concise notes.","/tools","Productivity"],
  ["🌐","AI Translator","Translate text between languages with context in mind.","/tools","Language"],
  ["📄","PDF Tools","Summarize, extract, ask questions and work with PDFs.","/tools","Documents"]
];

export default function Home(){
  return <div className="page">
    <header><div className="wrap nav">
      <Link href="/" className="logo">Vix<span>rola</span></Link>
      <nav className="navlinks"><Link href="/tools">AI Tools</Link><Link href="/pricing">Pricing</Link><Link href="/faq">FAQ</Link><Link href="/blog">Blog</Link></nav>
      <div className="actions"><Link className="btn ghost" href="/login">Log in</Link><Link className="btn primary" href="/register">Get started</Link></div>
    </div></header>
    <main>
      <section className="hero"><div className="wrap">
        <span className="pill">⚡ One hub. Useful AI tools.</span>
        <h1>Work smarter with <span>Vixrola AI</span></h1>
        <p>Humanize, detect, rewrite, summarize and transform your content with a simple AI tools workspace designed for everyday work.</p>
        <div className="heroActions"><Link className="btn primary" href="/ai-humanizer">Try AI Humanizer →</Link><Link className="btn" href="/tools">Explore all tools</Link></div>
      </div></section>
      <div className="trust">Built for students, creators, marketers, researchers and everyday productivity.</div>
      <section className="section"><div className="wrap">
        <div className="sectionHead"><div className="eyebrow">Featured tools</div><h2>Everything you need in one place</h2><p>Start with the tools people use most, then expand into documents, video and productivity workflows.</p></div>
        <div className="grid">{tools.map(([icon,name,desc,href,tag])=><Link className="card" href={href} key={name}><div className="icon">{icon}</div><h3>{name}</h3><p>{desc}</p><span className="tag">{tag} →</span></Link>)}</div>
      </div></section>
      <section className="section"><div className="wrap"><div className="dark">
        <div className="eyebrow">Vixrola workspace</div><h2>From one idea to finished work.</h2><p>Use focused tools instead of juggling many websites. Your dashboard will bring usage, credits and recent work together.</p>
        <div className="featureGrid"><div className="feature"><b>🔐 Account & credits</b><p>Keep your usage and plan in one place.</p></div><div className="feature"><b>📚 Saved work</b><p>Return to recent tasks and outputs.</p></div></div>
      </div></div></section>
    </main>
    <footer className="footer"><div className="wrap footerGrid"><div><div className="logo">Vix<span>rola</span></div><p>AI tools for writing, documents and productivity.</p></div><div><h4>Tools</h4><Link href="/ai-humanizer">Humanizer</Link><Link href="/ai-detector">Detector</Link><Link href="/tools">All tools</Link></div><div><h4>Company</h4><Link href="/pricing">Pricing</Link><Link href="/faq">FAQ</Link><Link href="/blog">Blog</Link></div><div><h4>Legal</h4><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div></footer>
  </div>
}