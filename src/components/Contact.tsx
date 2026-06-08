import resumeData from "@/data/resume";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[var(--bg-section)]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <div className="font-mono text-sm text-[var(--accent)] mb-2">
            {"// 联系方式"}
          </div>
          <h2 className="text-3xl font-bold tracking-tight">一起工作</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: Info */}
          <div className="space-y-6">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
              <h3 className="font-semibold mb-4">个人信息</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent)] flex-shrink-0">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {resumeData.email}
                </div>
                <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent)] flex-shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {resumeData.phone}
                </div>
                <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent)] flex-shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {resumeData.location}
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
              <h3 className="font-semibold mb-2">教育背景</h3>
              <p className="text-sm text-[var(--accent)]">{resumeData.education.school}</p>
              <p className="text-sm text-[var(--text-secondary)]">{resumeData.education.degree}</p>
              <p className="font-mono text-xs text-[var(--text-tertiary)] mt-1">{resumeData.education.period}</p>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex flex-col">
            <div className="flex-1 rounded-xl border border-[var(--accent)] bg-[var(--bg-card)] p-6 flex flex-col justify-center">
              <div className="font-mono text-sm text-[var(--accent)] mb-4">
                {">"} 入职时间：一个月内到岗
              </div>
              <h3 className="text-2xl font-bold mb-3">
                寻找下一个挑战
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                如果你的团队正在寻找一位有扎实嵌入式 Linux
                经验的工程师，欢迎联系我。我对新技术保持热情，对代码质量有追求，期待在一个充满挑战的环境中继续成长。
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${resumeData.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] text-[var(--bg-primary)] font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  发送邮件
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
                <a
                  href={`tel:${resumeData.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] text-[var(--text-primary)] font-medium text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
                >
                  电话联系
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
