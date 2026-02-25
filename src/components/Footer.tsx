import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-border-dark bg-white dark:bg-background-dark py-12 px-10 mt-auto">
      <div className="max-w-[960px] mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="flex flex-col gap-4 max-w-xs">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white">
            <span className="material-symbols-outlined text-primary">terminal</span>
            <span className="text-lg font-bold">DevTools Hub</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Open-source inspired tools for the modern web developer. Built for performance, privacy, and ease of use.
          </p>
        </div>
        <div className="flex gap-16 flex-wrap">
          <div className="flex flex-col gap-3">
            <h4 className="text-slate-900 dark:text-white font-bold">Product</h4>
            <Link href="#" className="text-slate-500 hover:text-primary text-sm">Features</Link>
            <Link href="#" className="text-slate-500 hover:text-primary text-sm">Integrations</Link>
            <Link href="#" className="text-slate-500 hover:text-primary text-sm">Pricing</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-slate-900 dark:text-white font-bold">Resources</h4>
            <Link href="#" className="text-slate-500 hover:text-primary text-sm">Documentation</Link>
            <Link href="#" className="text-slate-500 hover:text-primary text-sm">API Reference</Link>
            <Link href="#" className="text-slate-500 hover:text-primary text-sm">Blog</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-slate-900 dark:text-white font-bold">Company</h4>
            <Link href="#" className="text-slate-500 hover:text-primary text-sm">About</Link>
            <Link href="#" className="text-slate-500 hover:text-primary text-sm">Contact</Link>
            <Link href="#" className="text-slate-500 hover:text-primary text-sm">Privacy</Link>
          </div>
        </div>
      </div>
      <div className="max-w-[960px] mx-auto mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm">© 2024 DevTools Hub. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="text-slate-400 hover:text-white"><span className="material-symbols-outlined">public</span></Link>
          <Link href="#" className="text-slate-400 hover:text-white"><span className="material-symbols-outlined">mail</span></Link>
        </div>
      </div>
    </footer>
  );
}
