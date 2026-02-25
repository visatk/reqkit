import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center w-full">
        <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          {/* Hero Section */}
          <div className="@container mb-12">
            <div
              className="flex min-h-[400px] flex-col gap-6 rounded-2xl bg-cover bg-center bg-no-repeat items-center justify-center p-8 relative overflow-hidden group"
              style={{
                backgroundImage: `linear-gradient(rgba(17, 19, 24, 0.85) 0%, rgba(17, 19, 24, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDToT2VGaaayrUttOxtn6NyqfQX1r_cgexeAwCQuuXtS_9CtuoKYvi_L986j58hBPx-w5Ob2j5GxKkkVo5mNEnikhrL2ecgVY8PbsRwJcVFyilmsf961ZXPW3gU280lNaZ978BI1sqql-8zgfhF1mAf17VJRTFpdwfEu5pZMIdyc-QxAlW9RYWmzECznnoXI0um67tQHpITPyJ-hT-yLQrw-gkLerLizpO2ABd8qQY0cOlni-IkNIM_KTUK-PSFvrwhotG1HQt5OQ")`
              }}
            >
              {/* Decorative glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="flex flex-col gap-4 text-center z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-medium text-primary w-fit mx-auto backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  v2.0 is now live
                </div>
                <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                  The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Developer Toolbox</span>
                </h1>
                <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-xl mx-auto">
                  Essential tools for HTTP testing, code generation, formatting, and debugging—all in one place. Optimized for speed and privacy.
                </p>
              </div>

              <label className="flex flex-col w-full max-w-[560px] relative z-10 group/search mt-4">
                <div className="flex w-full items-stretch rounded-xl h-14 sm:h-16 shadow-2xl shadow-black/50 ring-1 ring-slate-700 focus-within:ring-2 focus-within:ring-primary transition-all">
                  <div className="text-slate-400 flex bg-surface-dark items-center justify-center pl-5 rounded-l-xl">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <Input
                    className="flex w-full min-w-0 flex-1 bg-surface-dark text-white border-none focus:ring-0 focus-visible:ring-0 placeholder:text-slate-500 px-4 h-full text-base rounded-none"
                    placeholder="Find any tool (e.g., JSON Validator, cURL to Python)"
                  />
                  <div className="flex items-center justify-center rounded-r-xl bg-surface-dark pr-2">
                    <Button className="h-10 sm:h-12 px-5 bg-primary hover:bg-primary-hover text-white text-sm sm:text-base font-bold transition-colors">
                      Search
                    </Button>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs text-slate-400">
                  <span>Popular:</span>
                  <Link href="#" className="hover:text-primary underline decoration-slate-600 hover:decoration-primary">JSON Formatter</Link>
                  <Link href="/jwt-debugger" className="hover:text-primary underline decoration-slate-600 hover:decoration-primary">JWT Debugger</Link>
                  <Link href="#" className="hover:text-primary underline decoration-slate-600 hover:decoration-primary">Base64 Encode</Link>
                </div>
              </label>
            </div>
          </div>

          {/* HTTP Request Tools Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6 px-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                  <span className="material-symbols-outlined">cloud_sync</span>
                </div>
                <h2 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight">HTTP Request Tools</h2>
              </div>
              <Link href="#" className="text-sm font-semibold text-primary hover:text-primary-hover hidden sm:block">View all</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card 1 */}
              <Link href="/http-client" className="group flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark p-5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all">
                <div className="flex justify-between items-start">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">input</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">GET</span>
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-1">GET Request</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Send standard GET requests to inspect headers and body responses.</p>
                </div>
              </Link>
              {/* Card 2 */}
              <Link href="/http-client" className="group flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark p-5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all">
                <div className="flex justify-between items-start">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">output</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">POST</span>
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-1">POST Request</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Send POST data payloads including JSON, Form Data, and Binary.</p>
                </div>
              </Link>
              {/* Card 3 */}
              <Link href="/code-generator" className="group flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark p-5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all">
                <div className="flex justify-between items-start">
                  <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">code</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">CLI</span>
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-1">cURL Converter</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Convert cURL commands to Python, Node.js, Go, or PHP code instantly.</p>
                </div>
              </Link>
              {/* Card 4 */}
              <Link href="/http-client" className="group flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark p-5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all">
                <div className="flex justify-between items-start">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">bolt</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">TEST</span>
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-1">API Tester</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Full-featured REST endpoint tester with history and collections.</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Formatters & Validators Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6 px-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-pink-500/10 text-pink-500">
                  <span className="material-symbols-outlined">segment</span>
                </div>
                <h2 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight">Formatters & Validators</h2>
              </div>
              <Link href="#" className="text-sm font-semibold text-primary hover:text-primary-hover hidden sm:block">View all</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-1 gap-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark p-4 items-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
                  <span className="material-symbols-outlined">data_object</span>
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white text-base font-bold">JSON Validator</h3>
                  <p className="text-slate-500 text-xs mt-0.5">Beautify and minify JSON data</p>
                </div>
              </div>
              <div className="flex flex-1 gap-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark p-4 items-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
                  <span className="material-symbols-outlined">html</span>
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white text-base font-bold">HTML Formatter</h3>
                  <p className="text-slate-500 text-xs mt-0.5">Indentation and cleaning tool</p>
                </div>
              </div>
              <div className="flex flex-1 gap-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark p-4 items-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
                  <span className="material-symbols-outlined">code_blocks</span>
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white text-base font-bold">XML Parser</h3>
                  <p className="text-slate-500 text-xs mt-0.5">Visualize XML tree structures</p>
                </div>
              </div>
            </div>
          </div>

          {/* Split Section: Generators & Security */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Code Generators */}
            <div>
              <div className="flex items-center gap-3 mb-6 px-2">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500">
                  <span className="material-symbols-outlined">memory</span>
                </div>
                <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">Code Generators</h2>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/code-generator" className="flex justify-between items-center p-4 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark hover:border-primary/50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-mono font-bold text-slate-600 dark:text-slate-300">PY</div>
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-semibold">Python Requests</h4>
                      <p className="text-slate-500 text-xs">Generate boilerplate HTTP code</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">arrow_forward_ios</span>
                </Link>
                <Link href="/code-generator" className="flex justify-between items-center p-4 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark hover:border-primary/50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-mono font-bold text-slate-600 dark:text-slate-300">JS</div>
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-semibold">Node.js Axios</h4>
                      <p className="text-slate-500 text-xs">Async/await patterns ready to copy</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">arrow_forward_ios</span>
                </Link>
                <Link href="/code-generator" className="flex justify-between items-center p-4 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark hover:border-primary/50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-mono font-bold text-slate-600 dark:text-slate-300">PHP</div>
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-semibold">PHP cURL</h4>
                      <p className="text-slate-500 text-xs">Standard cURL implementation</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">arrow_forward_ios</span>
                </Link>
              </div>
            </div>

            {/* Security */}
            <div>
              <div className="flex items-center gap-3 mb-6 px-2">
                <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                  <span className="material-symbols-outlined">security</span>
                </div>
                <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">Security & Utils</h2>
              </div>
              <div className="grid grid-cols-2 gap-3 h-full max-h-[250px]">
                <Link href="/jwt-debugger" className="rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-5 flex flex-col justify-between hover:scale-[1.02] transition-transform border border-border-dark">
                  <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center text-white mb-2">
                    <span className="material-symbols-outlined">vpn_key</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">JWT Debugger</h4>
                    <p className="text-slate-400 text-xs mt-1">Decode & verify tokens</p>
                  </div>
                </Link>
                <Link href="#" className="rounded-xl bg-surface-dark p-5 flex flex-col justify-between hover:bg-slate-800 transition-colors border border-border-dark">
                  <div className="size-10 rounded-lg bg-slate-700/50 flex items-center justify-center text-slate-300 mb-2">
                    <span className="material-symbols-outlined">password</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Hash Gen</h4>
                    <p className="text-slate-400 text-xs mt-1">MD5, SHA-256, SHA-512</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
