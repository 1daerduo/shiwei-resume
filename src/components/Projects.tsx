"use client";

import resumeData from "@/data/resume";
import { useState } from "react";

export default function Projects() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <div className="font-mono text-sm text-[var(--accent)] mb-2">
            {"// 项目经验"}
          </div>
          <h2 className="text-3xl font-bold tracking-tight">核心项目</h2>
        </div>

        <div className="space-y-4">
          {resumeData.projects.map((project, idx) => (
            <div
              key={idx}
              className={`rounded-xl border transition-all duration-300 ${
                expandedIdx === idx
                  ? "border-[var(--accent)] bg-[var(--bg-card)]"
                  : "border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)]"
              }`}
            >
              <div
                className="p-5 cursor-pointer"
                onClick={() =>
                  setExpandedIdx(expandedIdx === idx ? null : idx)
                }
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-lg">{project.name}</h3>
                  <span className="font-mono text-xs text-[var(--text-tertiary)] border border-[var(--border)] rounded-full px-3 py-1 self-start">
                    {project.period}
                  </span>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--bg-terminal)] text-[var(--text-secondary)] border border-[var(--border)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedIdx === idx
                      ? "max-h-[400px] opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-[var(--border)] pt-4">
                    <h4 className="text-xs font-mono text-[var(--accent)] mb-3 uppercase tracking-wider">
                      主要职责
                    </h4>
                    <ul className="space-y-2">
                      {project.responsibilities.map((r, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                        >
                          <span className="text-[var(--accent)] font-mono flex-shrink-0">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-3 text-xs text-[var(--text-tertiary)]">
                  {expandedIdx === idx ? "收起 ▲" : "展开详情 ▼"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
