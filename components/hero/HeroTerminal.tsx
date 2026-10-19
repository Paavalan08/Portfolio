"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Copy, Check, Play, Sparkles } from "lucide-react";

type Tab = "config" | "stack" | "terminal";

export function HeroTerminal() {
  const [activeTab, setActiveTab] = useState<Tab>("config");
  const [copied, setCopied] = useState(false);
  const [activeCommand, setActiveCommand] = useState<string>("status");

  const codeSnippets: Record<Tab, string> = {
    config: `// engineer.config.ts
export const developer = {
  name: "Varathanathan Paavalan",
  role: "Full-Stack Software Developer",
  education: "HND in Software Engineering",
  strengths: ["Clean Architecture", "API Security", "Speed"],
  availability: "Open to Full-Time & Projects",
  status: "Online & Ready",
};`,
    stack: `// tech-stack.json
{
  "expert": ["PHP", "JavaScript", "MySQL", "PostgreSQL", "HTML5", "CSS3", "TailwindCSS"],
  "intermediate": ["TypeScript", "Node.js", "React.js", "Python", "Angular", "Java"],
  "backend_frameworks": ["Django", "Express", "REST", "GraphQL"],
  "database": ["MySQL", "PostgreSQL", "SQL Server", "MongoDB"]
}`,
    terminal: `$ paavalan --status
● System Ready (Next.js 16 + React 19)
● Location: Trincomalee, Sri Lanka
● Security: RBAC + Token Authentication
$ paavalan --contact
→ email: varathanathanpaavalan@gmail.com
→ github: github.com/Paavalan08`,
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-slate-950 text-slate-200 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
      {/* Top Bar with traffic dots and tabs */}
      <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          <div className="flex items-center gap-1 bg-slate-950/70 p-0.5 rounded-lg border border-slate-800">
            {(["config", "stack", "terminal"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2.5 py-1 rounded-md text-[11px] transition-colors cursor-pointer ${
                  activeTab === tab
                    ? "bg-slate-800 text-indigo-400 font-bold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {tab === "config" ? "engineer.ts" : tab === "stack" ? "stack.json" : "console.sh"}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={copyCode}
          className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors cursor-pointer"
          title="Copy code"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Code Area */}
      <div className="p-4 sm:p-5 overflow-x-auto leading-relaxed text-slate-300 font-mono text-xs">
        <AnimatePresence mode="wait">
          <motion.pre
            key={activeTab}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="whitespace-pre font-mono text-[11.5px] text-slate-300"
          >
            {codeSnippets[activeTab]}
          </motion.pre>
        </AnimatePresence>
      </div>

      {/* Interactive Terminal Action bar */}
      <div className="px-4 py-2.5 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Runtime: Node 26 + V8 Turbopack</span>
        </div>
        <span className="text-slate-500">UTF-8 • LF</span>
      </div>
    </div>
  );
}
