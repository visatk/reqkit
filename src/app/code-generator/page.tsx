'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function CodeGeneratorPage() {
  const [language, setLanguage] = useState('Python');
  const [inputCode, setInputCode] = useState(`curl -X POST https://api.example.com/v1/users \\
-H "Content-Type: application/json" \\
-d '{"username": "dev_user", "role": "admin"}'`);
  const [outputCode, setOutputCode] = useState('');

  const generateCode = (lang: string) => {
    switch (lang) {
      case 'Python':
        return `import requests

url = "https://api.example.com/v1/users"

payload = {
    "username": "dev_user",
    "role": "admin"
}
headers = {
    "Content-Type": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)`;
      case 'JavaScript':
        return `const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "username": "dev_user",
  "role": "admin"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://api.example.com/v1/users", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));`;
      case 'Node.js':
        return `const axios = require('axios');
let data = JSON.stringify({
  "username": "dev_user",
  "role": "admin"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.example.com/v1/users',
  headers: {
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});`;
      case 'PHP':
        return `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.example.com/v1/users',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
    "username": "dev_user",
    "role": "admin"
}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;`;
      case 'Go':
        return `package main

import (
  "fmt"
  "strings"
  "net/http"
  "io"
)

func main() {

  url := "https://api.example.com/v1/users"
  method := "POST"

  payload := strings.NewReader(\`{
    "username": "dev_user",
    "role": "admin"
}\`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Content-Type", "application/json")

  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := io.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}`;
      default:
        return '// Select a language to generate code';
    }
  };

  useEffect(() => {
    setOutputCode(generateCode(language));
  }, [language]);

  return (
    <>
      <Header />
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 py-8 md:py-12">
        {/* Hero Section */}
        <div className="mb-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 border border-primary/20">
            <span className="material-symbols-outlined text-sm">bolt</span>
            <span>NEW: Added Rust & Go Support</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight text-slate-900 dark:text-white">
            API Code <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Generator</span> & Converter
          </h2>
          <p className="text-slate-500 dark:text-[#9da6b9] text-lg max-w-2xl leading-relaxed">
            Transform raw HTTP requests or cURL commands into production-ready code snippets for any language instantly. Debug faster, build better.
          </p>
        </div>

        {/* Tool Interface */}
        <div className="grid lg:grid-cols-2 gap-6 items-start h-full">
          {/* Input Column */}
          <div className="flex flex-col gap-4 h-full">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-[#9da6b9]">Input Request</label>
              <div className="flex gap-2">
                <button className="text-xs font-medium px-2 py-1 rounded hover:bg-slate-200 dark:hover:bg-[#282e39] text-primary transition-colors">Load Example</button>
                <button
                  className="text-xs font-medium px-2 py-1 rounded hover:bg-slate-200 dark:hover:bg-[#282e39] text-slate-500 dark:text-[#9da6b9] transition-colors"
                  onClick={() => setInputCode('')}
                >
                  Clear
                </button>
              </div>
            </div>
            <div className="relative group flex-1 min-h-[400px]">
              <textarea
                className="w-full h-full min-h-[400px] bg-white dark:bg-[#1c1f27] border border-slate-200 dark:border-[#3b4354] rounded-xl p-5 font-mono text-sm leading-6 resize-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all custom-scrollbar text-slate-800 dark:text-slate-300 shadow-sm"
                placeholder="Paste cURL here..."
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
              ></textarea>
              {/* Floating Action Button inside textarea area */}
              <div className="absolute bottom-4 right-4">
                <Button className="shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 px-4">
                  <span className="material-symbols-outlined text-lg">transform</span>
                  <span className="font-bold text-sm">Convert</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Output Column */}
          <div className="flex flex-col gap-4 h-full">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <label className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-[#9da6b9]">Generated Code</label>
              {/* Language Selector */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar">
                {['Python', 'JavaScript', 'Node.js', 'PHP', 'Go'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={cn(
                      "whitespace-nowrap px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
                      language === lang
                        ? "bg-primary/10 text-primary font-bold border border-primary/20"
                        : "hover:bg-slate-200 dark:hover:bg-[#282e39] text-slate-600 dark:text-slate-400"
                    )}
                  >
                    {lang}
                  </button>
                ))}
                <button className="whitespace-nowrap px-2 py-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-[#282e39] text-slate-600 dark:text-slate-400 transition-colors">
                  <span className="material-symbols-outlined text-lg align-middle">more_horiz</span>
                </button>
              </div>
            </div>
            <div className="flex-1 bg-[#0d1117] border border-slate-200 dark:border-[#3b4354] rounded-xl overflow-hidden flex flex-col shadow-lg min-h-[400px]">
              {/* Code Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-[#3b4354]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
                  <span className="ml-2 text-xs text-slate-400 font-mono">
                    {language === 'Python' ? 'requests.py' :
                     language === 'JavaScript' ? 'script.js' :
                     language === 'Node.js' ? 'index.js' :
                     language === 'PHP' ? 'script.php' :
                     language === 'Go' ? 'main.go' : 'code.txt'}
                  </span>
                </div>
                <button className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors group">
                  <span className="material-symbols-outlined text-sm group-hover:scale-110 transition-transform">content_copy</span>
                  <span className="text-xs font-medium">Copy</span>
                </button>
              </div>
              {/* Code Content */}
              <div className="flex-1 p-5 overflow-auto custom-scrollbar font-mono text-sm leading-relaxed relative">
                <pre><code className="text-slate-300 whitespace-pre-wrap break-all">
                  {outputCode}
                </code></pre>

                {/* Tooltip Example */}
                <div className="absolute top-[180px] left-[100px] hidden lg:flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/40 rounded px-2 py-1 text-xs text-primary animate-pulse pointer-events-none">
                  <span className="material-symbols-outlined text-sm">info</span>
                  <span>Validates status automatically</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white dark:bg-[#161920] border border-slate-200 dark:border-[#282e39] hover:border-primary/50 transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">security</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Secure & Private</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              All conversions happen client-side in your browser. No API keys or data ever leave your device.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-[#161920] border border-slate-200 dark:border-[#282e39] hover:border-primary/50 transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">history</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">History & Sync</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Access your past 50 requests instantly. Sign in to sync across devices seamlessly.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-[#161920] border border-slate-200 dark:border-[#282e39] hover:border-primary/50 transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">api</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Multi-Language</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Support for over 20+ programming languages and libraries including Python, JS, Go, and Rust.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
