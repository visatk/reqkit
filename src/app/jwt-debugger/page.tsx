'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import * as jose from 'jose';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function JwtDebuggerPage() {
  const [encodedToken, setEncodedToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
  const [decodedHeader, setDecodedHeader] = useState<any>(null);
  const [decodedPayload, setDecodedPayload] = useState<any>(null);
  const [secret, setSecret] = useState('your-256-bit-secret');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    try {
      if (!encodedToken) {
        setDecodedHeader(null);
        setDecodedPayload(null);
        setIsValid(false);
        return;
      }
      const header = jose.decodeProtectedHeader(encodedToken);
      const payload = jose.decodeJwt(encodedToken);
      setDecodedHeader(header);
      setDecodedPayload(payload);
      setIsValid(true);
    } catch (e) {
      setIsValid(false);
      // Don't clear on error to allow partial editing
    }
  }, [encodedToken]);

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display selection:bg-primary/30 selection:text-primary">
      {/* Header Section */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111318] px-6 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 text-slate-900 dark:text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-2xl">code_blocks</span>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-tight">DevTools</h2>
          </Link>
          <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full ring-1 ring-slate-200 dark:ring-slate-700 bg-slate-50 dark:bg-[#1c1f27] focus-within:ring-primary transition-all">
              <div className="text-slate-400 flex items-center justify-center pl-3">
                <span className="material-symbols-outlined text-xl">search</span>
              </div>
              <input
                className="w-full min-w-0 flex-1 bg-transparent px-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
                placeholder="Search tools..."
              />
            </div>
          </label>
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium transition-colors">Tools</Link>
            <Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium transition-colors">APIs</Link>
            <Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium transition-colors">Docs</Link>
          </nav>
          <Button className="h-9 px-4 shadow-lg shadow-primary/20 text-sm font-bold">
            Sign In
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col px-4 py-8 md:px-8 lg:px-12 xl:px-40">
        {/* Breadcrumbs & Title */}
        <div className="mb-8 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-base">chevron_right</span>
            <Link href="#" className="hover:text-primary transition-colors">Security</Link>
            <span className="material-symbols-outlined text-base">chevron_right</span>
            <span className="text-slate-900 dark:text-white font-medium">JWT Debugger</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                JWT Debugger
              </h1>
              <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg">
                Decode, verify and generate JSON Web Tokens securely in your browser.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined text-lg">history</span>
                Recent
              </button>
              <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined text-lg">share</span>
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Debugger Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 h-full min-h-[600px]">
          {/* Left Column: Encoded Token */}
          <div className="flex flex-col gap-3 h-full">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                Encoded
                <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">Paste Token Here</span>
              </h3>
              <div className="flex gap-2">
                <button
                  className="p-1.5 text-slate-400 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors"
                  title="Clear"
                  onClick={() => setEncodedToken('')}
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
                <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors" title="Copy">
                  <span className="material-symbols-outlined">content_copy</span>
                </button>
              </div>
            </div>
            <div className="relative flex-1 group">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-focus-within:opacity-100 pointer-events-none rounded-xl transition-opacity"></div>
              <textarea
                className="w-full h-full min-h-[400px] lg:min-h-0 resize-none rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1c1f27] p-6 font-mono text-sm leading-6 text-slate-600 dark:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary shadow-sm outline-none transition-all break-all"
                placeholder="Paste your JWT here..."
                value={encodedToken}
                onChange={(e) => setEncodedToken(e.target.value)}
              ></textarea>
              {/* Floating Algorithm Badge (Mockup) */}
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-xs font-mono text-slate-500">
                {decodedHeader?.alg || '---'}
              </div>
            </div>
          </div>

          {/* Right Column: Decoded */}
          <div className="flex flex-col gap-6 h-full">
            {/* Header Section */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  Header
                  <span className="text-xs font-normal text-slate-500">Algorithm & Token Type</span>
                </h3>
                <button className="p-1 text-slate-400 hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-lg">content_copy</span>
                </button>
              </div>
              <div className="rounded-xl border-l-4 border-l-red-500 bg-white dark:bg-[#1c1f27] border-y border-r border-slate-200 dark:border-slate-700 p-5 font-mono text-sm shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-50">
                  <span className="material-symbols-outlined text-4xl text-slate-800 dark:text-slate-800 -rotate-12">code</span>
                </div>
                <pre className="relative z-10 text-slate-400 whitespace-pre-wrap">
                  {decodedHeader ? JSON.stringify(decodedHeader, null, 2) : '{}'}
                </pre>
              </div>
            </div>

            {/* Payload Section */}
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  Payload
                  <span className="text-xs font-normal text-slate-500">Data</span>
                </h3>
                <button className="p-1 text-slate-400 hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-lg">content_copy</span>
                </button>
              </div>
              <div className="rounded-xl border-l-4 border-l-purple-500 bg-white dark:bg-[#1c1f27] border-y border-r border-slate-200 dark:border-slate-700 p-5 font-mono text-sm shadow-sm relative flex-1 overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-50">
                  <span className="material-symbols-outlined text-4xl text-slate-800 dark:text-slate-800 -rotate-12">data_object</span>
                </div>
                <pre className="relative z-10 text-slate-400 whitespace-pre-wrap">
                  {decodedPayload ? JSON.stringify(decodedPayload, null, 2) : '{}'}
                </pre>
              </div>
            </div>

            {/* Signature Section */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  Verify Signature
                </h3>
                {isValid && (
                  <div className="flex items-center gap-1 text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Signature Verified
                  </div>
                )}
                {!isValid && (
                   <div className="flex items-center gap-1 text-xs text-red-500 bg-red-500/10 px-2 py-1 rounded">
                    <span className="material-symbols-outlined text-sm">error</span>
                    Invalid Signature
                  </div>
                )}
              </div>
              <div className="rounded-xl border-l-4 border-l-blue-500 bg-white dark:bg-[#1c1f27] border-y border-r border-slate-200 dark:border-slate-700 p-5 font-mono text-sm shadow-sm">
                <div className="flex flex-col gap-3">
                  <div className="text-slate-500">
                    HMACSHA256(
                    <br />&nbsp;&nbsp;base64UrlEncode(header) + "." +
                    <br />&nbsp;&nbsp;base64UrlEncode(payload),
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500">
                      <span className="material-symbols-outlined text-lg">key</span>
                    </div>
                    <input
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded text-slate-900 dark:text-white text-sm px-3 py-2 pl-10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder:text-slate-500"
                      placeholder="your-256-bit-secret"
                      type="text"
                      value={secret}
                      onChange={(e) => setSecret(e.target.value)}
                    />
                  </div>
                  <div className="text-slate-500">)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid (Bottom) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151921] hover:border-primary/50 transition-colors group cursor-pointer">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">lock</span>
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Secure Processing</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">All validation happens client-side. Your tokens never leave your browser.</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151921] hover:border-primary/50 transition-colors group cursor-pointer">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">schedule</span>
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Date Parsing</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">Automatically converts Unix timestamps (iat, exp, nbf) into human-readable dates.</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151921] hover:border-primary/50 transition-colors group cursor-pointer">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">integration_instructions</span>
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Algorithm Support</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">Supports HS256, RS256, ES256 and other standard signing algorithms.</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div>© 2023 DevTools Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
            <Link href="#" className="hover:text-primary">Contact</Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
