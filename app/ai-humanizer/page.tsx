"use client";
import Link from "next/link";
import {useState} from "react";

export default function Humanizer(){
 const [input,setInput]=useState(""); const [output,setOutput]=useState(""); const [busy,setBusy]=useState(false);
 function run(){if(!input.trim())return;setBusy(true);setTimeout(()=>{setOutput(input.replace(/\s+/g," ").trim());setBusy(false)},500)}
 return <><header><div className="wrap nav"><Link href="/" className="logo">Vix<span>rola</span></Link><div className="actions"><Link className="btn" href="/tools">All tools</Link><Link className="btn primary" href="/dashboard">Dashboard</Link></div></div></header>
 <main className="toolPage"><div className="wrap toolShell"><div className="toolTop"><div className="eyebrow">AI Writing Tool</div><h1>AI Humanizer</h1><p>Paste your text, choose your workflow and prepare it for Vixrola's AI processing. The live preview currently demonstrates the interface; production AI processing will be connected through a secure server API.</p></div>
 <div className="workspace"><div className="panel"><div className="panelHeader"><span>Your text</span><span className="status">{input.length} characters</span></div><textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Paste AI-generated text here..." /><button className="btn primary full" onClick={run} disabled={busy}>{busy?"Processing…":"Humanize text"}</button></div>
 <div className="panel"><div className="panelHeader"><span>Result</span><span className="status">Preview</span></div><textarea value={output} readOnly placeholder="Your humanized result will appear here..." /><div className="notice">🔒 Your final AI processing API key will stay server-side and will not be exposed in the browser.</div></div></div></div></main></>
}