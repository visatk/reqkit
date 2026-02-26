import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-border-dark bg-white/90 dark:bg-background-dark/90 backdrop-blur-md px-4 sm:px-10 py-3">
      <div className="flex items-center gap-4 text-slate-900 dark:text-white">
        <div className="size-8 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-3xl">terminal</span>
        </div>
        <Link href="/" className="text-lg font-bold leading-tight tracking-[-0.015em]">
          DevTools Hub
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <Link href="#" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors">Tools</Link>
          <Link href="#" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors">Docs</Link>
          <Link href="#" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors">Blog</Link>
          <Link href="#" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors">Pricing</Link>
        </nav>
        <div className="flex gap-2">
          <Button variant="ghost">
            Sign In
          </Button>
          <Button>
            Get Started
          </Button>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-slate-900 dark:text-white cursor-pointer">
        <span className="material-symbols-outlined">menu</span>
      </div>
    </header>
  );
}
