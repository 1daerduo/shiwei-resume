"use client";

import resumeData from "@/data/resume";
import { useState } from "react";

export default function Experience() {
  const [expandedIdx, setExpandedIdx] = useState<number>(0);

  return (
    <section id="experience" className="py-24 bg-[var(--bg-section)]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <div className="font-mono text-sm text-[var(--accent)] mb-2">
            {"// 工作经历"}
          </div>
          <h2 className="text-3xl font-bold tracking-tight">职业轨迹</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[var(--border)]" />

          <div className="space-y-8">
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="relative pl-12">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-1 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    expandedIdx === idx
                      ? "border-[var(--accent)] bg-[var(--accent)]/10"
                      : "border-[var(--border)] bg-[var(--bg-card)]"
                  }`}
                >
                  <span
                    className={`font-mono text-xs font-semibold ${
                      expandedIdx === idx
                        ? "text-[var(--accent)]"
                        : "text-[var(--text-tertiary)]"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Card */}
                <div
                  className={`rounded-xl border transition-all duration-300 cursor-pointer ${
                    expandedIdx === idx
                      ? "border-[var(--accent)] bg-[var(--bg-card)]"
                      : "border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)]"
                  }`}
                  onClick={() =>
                    setExpandedIdx(expandedIdx === idx ? -1 : idx)
                  }
                >
                  <div className="p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{exp.company}</h3>
                        <p className="text-[var(--accent)] font-mono text-sm">
                          {exp.role}
                        </p>
                      </div>
                      <span className="font-mono text-xs text-[var(--text-tertiary)] border border-[var(--border)] rounded-full px-3 py-1 self-start">
                        {exp.period}
                      </span>
                    </div>

                    {/* Tech tags */}
                    {exp.tech && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--bg-terminal)] text-[var(--text-secondary)] border border-[var(--border)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Expandable highlights */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        expandedIdx === idx
                          ? "max-h-[600px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="space-y-2 pt-2">
                        {exp.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-[var(--text-secondary)] leading-relaxed"
                          >
                            <span className="text-[var(--accent)] mt-1 flex-shrink-0">
                              &rsaquo;
                            </span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-3 text-xs text-[var(--text-tertiary)]">
                      {expandedIdx === idx ? "点击收起 ▲" : "点击展开详情 ▼"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
