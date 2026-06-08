"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const fullText = "嵌入式 Linux 软件工程师";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left: Text */}
          <div className="md:col-span-3 space-y-6">
            <div className="font-mono text-sm text-[var(--accent)]">
              {"// 你好，我是"}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              石伟
              <span className="text-[var(--text-secondary)] font-normal text-2xl md:text-3xl ml-3">
                Shi Wei
              </span>
            </h1>
            <div className="font-mono text-xl md:text-2xl text-[var(--accent)] h-8">
              {text}
              <span
                className={`inline-block w-[2px] h-5 bg-[var(--accent)] ml-1 align-middle transition-opacity ${
                  cursorVisible ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed max-w-lg">
              7 年嵌入式开发经验，专注智能安防设备与行车记录仪。熟练掌握 C/Shell
              开发，在 Linux
              平台上实现过 P2P 通信、音视频传输、设备管理等多种复杂系统。
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] text-[var(--bg-primary)] font-medium text-sm hover:opacity-90 transition-opacity"
              >
                查看经历
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] text-[var(--text-primary)] font-medium text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
              >
                联系我
              </a>
            </div>
          </div>

          {/* Right: Code card */}
          <div className="md:col-span-2">
            <div className="bg-[var(--bg-terminal)] rounded-xl border border-[var(--border)] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs font-mono text-[var(--text-tertiary)]">
                  shiwei.profile
                </span>
              </div>
              <pre className="p-4 text-xs md:text-sm font-mono leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-[var(--code-keyword)]">const</span>{" "}
                  <span className="text-[var(--code-var)]">developer</span> = {"{"}
                  {"\n"}
                  {"  "}
                  <span className="text-[var(--accent)]">name</span>:{" "}
                  <span className="text-[var(--code-string)]">&quot;石伟&quot;</span>,{"\n"}
                  {"  "}
                  <span className="text-[var(--accent)]">role</span>:{" "}
                  <span className="text-[var(--code-string)]">&quot;嵌入式 Linux 工程师&quot;</span>,{"\n"}
                  {"  "}
                  <span className="text-[var(--accent)]">years</span>:{" "}
                  <span className="text-[var(--code-number)]">7</span>,{"\n"}
                  {"  "}
                  <span className="text-[var(--accent)]">location</span>:{" "}
                  <span className="text-[var(--code-string)]">&quot;深圳&quot;</span>,{"\n"}
                  {"  "}
                  <span className="text-[var(--accent)]">languages</span>: [
                  <span className="text-[var(--code-string)]">&quot;C&quot;</span>,{" "}
                  <span className="text-[var(--code-string)]">&quot;Shell&quot;</span>],{"\n"}
                  {"  "}
                  <span className="text-[var(--accent)]">platforms</span>: [
                  <span className="text-[var(--code-string)]">&quot;Linux&quot;</span>,{" "}
                  <span className="text-[var(--code-string)]">&quot;UcosⅡ&quot;</span>],{"\n"}
                  {"  "}
                  <span className="text-[var(--accent)]">passion</span>:{" "}
                  <span className="text-[var(--code-string)]">&quot;让设备更智能&quot;</span>{"\n"}
                  {"}"};
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
