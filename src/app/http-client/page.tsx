'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export default function HttpClientPage() {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('https://reqres.in/api/users?page=2');
  const [activeTab, setActiveTab] = useState('Params');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);

  const mockResponse = {
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
      {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
      },
      {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
      }
    ],
    "support": {
      "url": "https://reqres.in/#support-heading",
      "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
  };

  const handleSend = () => {
    setIsLoading(true);
    setResponse(null);
    setTimeout(() => {
      setResponse(mockResponse);
      setIsLoading(false);
    }, 800);
  };

  // Initial load simulation
  useEffect(() => {
    handleSend();
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* Tool Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark px-6 py-3 shrink-0 z-20">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="size-8 text-primary flex items-center justify-center bg-primary/10 rounded-lg">
              <span className="material-symbols-outlined text-[24px]">api</span>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] dark:text-white">DevTools Pro</h2>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium leading-normal text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors text-primary dark:text-primary">HTTP Client</Link>
            <Link href="#" className="text-sm font-medium leading-normal text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">Formatters</Link>
            <Link href="#" className="text-sm font-medium leading-normal text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">Encoders</Link>
            <Link href="/code-generator" className="text-sm font-medium leading-normal text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">Generators</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:flex w-64">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input
              className="block w-full rounded-lg border-0 py-2 pl-10 pr-3 bg-slate-100 dark:bg-background-dark text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
              placeholder="Search tools..."
              type="text"
            />
          </div>
          <div className="flex gap-3">
            <Button className="h-9 px-4 text-sm font-bold">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-50 dark:bg-[#111318] border-r border-slate-200 dark:border-border-dark flex flex-col shrink-0 overflow-y-auto hidden md:flex">
          <div className="p-4 space-y-6">
            {/* Workspace Selector */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Workspace</h3>
                <button className="text-slate-400 hover:text-primary">
                  <span className="material-symbols-outlined text-[16px]">more_horiz</span>
                </button>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark cursor-pointer hover:border-primary/50 transition-colors">
                <div className="size-8 rounded bg-primary/20 flex items-center justify-center text-primary font-bold">M</div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-medium truncate dark:text-white">My Team API</span>
                  <span className="text-xs text-slate-500 truncate">Free Plan</span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-slate-400 ml-auto">expand_more</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">
                <span className="material-symbols-outlined text-[20px]">add</span>
                New Request
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-surface-dark text-slate-600 dark:text-slate-300 font-medium text-sm transition-colors">
                <span className="material-symbols-outlined text-[20px]">folder</span>
                Collections
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-surface-dark text-slate-600 dark:text-slate-300 font-medium text-sm transition-colors">
                <span className="material-symbols-outlined text-[20px]">history</span>
                History
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-surface-dark text-slate-600 dark:text-slate-300 font-medium text-sm transition-colors">
                <span className="material-symbols-outlined text-[20px]">public</span>
                Environments
              </button>
            </div>

            {/* History List */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-1">Recent</h3>
              <div className="space-y-1">
                <div className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-200 dark:hover:bg-surface-dark cursor-pointer">
                  <span className="text-[10px] font-bold text-green-500 w-8">GET</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400 truncate flex-1">/users/profile</span>
                  <span className="hidden group-hover:block text-[10px] text-green-500">200</span>
                </div>
                <div className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-200 dark:hover:bg-surface-dark cursor-pointer">
                  <span className="text-[10px] font-bold text-yellow-500 w-8">POST</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400 truncate flex-1">/auth/login</span>
                  <span className="hidden group-hover:block text-[10px] text-green-500">201</span>
                </div>
                <div className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-200 dark:hover:bg-surface-dark cursor-pointer">
                  <span className="text-[10px] font-bold text-red-500 w-8">DEL</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400 truncate flex-1">/items/8821</span>
                  <span className="hidden group-hover:block text-[10px] text-red-500">404</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark">
          {/* Request Bar */}
          <div className="bg-white dark:bg-surface-dark border-b border-slate-200 dark:border-border-dark p-4">
            <div className="flex items-center gap-0 w-full max-w-5xl">
              <div className="relative z-10">
                <select
                  className="appearance-none bg-slate-100 dark:bg-background-dark border border-r-0 border-slate-300 dark:border-border-dark text-slate-700 dark:text-white rounded-l-lg py-2.5 pl-4 pr-10 font-bold text-sm focus:outline-none focus:ring-0 cursor-pointer hover:bg-slate-200 dark:hover:bg-[#1c222e]"
                  value={method}
                  onChange={(e) => setMethod(e.target.value)}
                >
                  <option>GET</option>
                  <option>POST</option>
                  <option>PUT</option>
                  <option>DELETE</option>
                  <option>PATCH</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                  <span className="material-symbols-outlined text-[18px]">expand_more</span>
                </div>
              </div>
              <input
                className="flex-1 bg-slate-100 dark:bg-background-dark border border-slate-300 dark:border-border-dark text-slate-900 dark:text-white text-sm py-2.5 px-4 focus:outline-none focus:border-primary focus:z-10 font-mono"
                placeholder="Enter request URL"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button
                onClick={handleSend}
                className="bg-primary hover:bg-primary-hover text-white font-bold py-2.5 px-6 rounded-r-lg flex items-center gap-2 transition-colors ml-[-1px] z-10 disabled:opacity-70"
                disabled={isLoading}
              >
                <span>{isLoading ? 'Sending...' : 'Send'}</span>
                {!isLoading && <span className="material-symbols-outlined text-[18px]">send</span>}
              </button>
              <button className="ml-3 p-2.5 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-background-dark transition-colors">
                <span className="material-symbols-outlined text-[20px]">save</span>
              </button>
            </div>
          </div>

          {/* Split Pane Content */}
          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
            {/* Left Pane: Request Configuration */}
            <div className="flex-1 flex flex-col min-w-0 border-r border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark">
              {/* Tabs */}
              <div className="flex border-b border-slate-200 dark:border-border-dark px-2 overflow-x-auto">
                {['Params', 'Authorization', 'Headers', 'Body', 'Settings'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2",
                      activeTab === tab
                        ? "text-primary border-primary"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 border-transparent"
                    )}
                  >
                    {tab}
                    {tab === 'Body' && <span className="ml-2 inline-block size-1.5 rounded-full bg-primary align-middle"></span>}
                  </button>
                ))}
              </div>

              {/* Tab Content Area */}
              <div className="flex-1 flex flex-col overflow-y-auto p-4">
                {activeTab === 'Params' && (
                  <>
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-sm font-bold dark:text-white">Query Parameters</h3>
                      <button className="text-primary text-sm font-medium hover:underline">Bulk Edit</button>
                    </div>
                    <div className="border border-slate-200 dark:border-border-dark rounded-lg overflow-hidden">
                      {/* Header Row */}
                      <div className="flex bg-slate-50 dark:bg-background-dark border-b border-slate-200 dark:border-border-dark">
                        <div className="w-10 flex items-center justify-center p-2 border-r border-slate-200 dark:border-border-dark">
                          <input className="rounded border-slate-300 text-primary focus:ring-primary bg-transparent" type="checkbox" />
                        </div>
                        <div className="flex-1 p-2 border-r border-slate-200 dark:border-border-dark text-xs font-bold uppercase text-slate-500">Key</div>
                        <div className="flex-1 p-2 text-xs font-bold uppercase text-slate-500">Value</div>
                      </div>
                      {/* Row 1 */}
                      <div className="flex border-b border-slate-200 dark:border-border-dark group">
                        <div className="w-10 flex items-center justify-center p-2 border-r border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark">
                          <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary bg-transparent" type="checkbox" />
                        </div>
                        <div className="flex-1 border-r border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark">
                          <input className="w-full h-full p-2 bg-transparent text-sm focus:outline-none dark:text-slate-200 font-mono" type="text" defaultValue="page" />
                        </div>
                        <div className="flex-1 bg-white dark:bg-surface-dark relative">
                          <input className="w-full h-full p-2 bg-transparent text-sm focus:outline-none dark:text-slate-200 font-mono" type="text" defaultValue="2" />
                          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {activeTab !== 'Params' && (
                  <div className="flex items-center justify-center h-full text-slate-500">
                    {activeTab} configuration placeholder
                  </div>
                )}
              </div>
            </div>

            {/* Right Pane: Response Area */}
            <div className="flex-1 flex flex-col min-w-0 bg-slate-50 dark:bg-background-dark relative border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-border-dark h-1/2 lg:h-auto">
              {/* Response Meta Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Status:</span>
                    <span className={cn("text-sm font-bold", response ? "text-green-500" : "text-slate-500")}>
                      {response ? "200 OK" : "---"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Time:</span>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{response ? "145ms" : "---"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Size:</span>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{response ? "1.2 KB" : "---"}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-slate-500 hover:text-primary p-1 rounded hover:bg-slate-100 dark:hover:bg-background-dark transition-colors">
                    <span className="material-symbols-outlined text-[20px]">content_copy</span>
                  </button>
                  <button className="text-slate-500 hover:text-primary p-1 rounded hover:bg-slate-100 dark:hover:bg-background-dark transition-colors">
                    <span className="material-symbols-outlined text-[20px]">download</span>
                  </button>
                </div>
              </div>

              {/* Response Navigation */}
              <div className="flex border-b border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark px-2">
                <button className="px-4 py-2 text-xs font-bold uppercase text-primary border-b-2 border-primary">Pretty</button>
                <button className="px-4 py-2 text-xs font-bold uppercase text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">Raw</button>
                <button className="px-4 py-2 text-xs font-bold uppercase text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">Preview</button>
                <div className="ml-auto flex items-center pr-2">
                  <select className="bg-transparent text-xs text-slate-500 dark:text-slate-400 font-medium focus:outline-none cursor-pointer">
                    <option>JSON</option>
                    <option>XML</option>
                    <option>HTML</option>
                    <option>Text</option>
                  </select>
                </div>
              </div>

              {/* Response Body */}
              <div className="flex-1 p-0 overflow-hidden relative bg-[#111318]">
                <div className="absolute inset-0 overflow-auto p-4 font-mono text-sm">
                  {response ? (
                    <pre className="text-slate-300">
                      {JSON.stringify(response, null, 2)}
                    </pre>
                  ) : (
                    <div className="flex items-center justify-center h-full text-slate-500">
                      {isLoading ? 'Loading...' : 'Send a request to see the response'}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
