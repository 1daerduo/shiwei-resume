export default function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-tertiary)]">
        <div className="font-mono">
          &copy; {new Date().getFullYear()} 石伟 &middot; 用代码构建
        </div>
        <div className="flex items-center gap-1 font-mono">
          <span>Built with</span>
          <span className="text-[var(--accent)]">Next.js</span>
          <span>+</span>
          <span className="text-[var(--accent)]">Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
