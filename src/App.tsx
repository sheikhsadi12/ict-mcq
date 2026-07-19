/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Gauge, Cpu } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col">
        <div className="bg-indigo-600 p-6 text-center relative">
          <div className="absolute top-4 right-4 bg-indigo-500/50 p-2 rounded-full">
             <Gauge className="w-5 h-5 text-white" />
          </div>
          <div className="flex justify-center mb-3">
             <Cpu className="w-12 h-12 text-indigo-100" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">ICT MUTU Study</h1>
          <p className="text-indigo-100 text-sm">MCQ Tracker Modules</p>
        </div>
        <div className="p-6">
          <div className="grid gap-4">
            {[1, 2, 3, 4, 5, 6].map((chapter) => (
              <a
                key={chapter}
                href={`/chapter${chapter}.html`}
                className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all group shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                    {chapter}
                  </div>
                  <div>
                    <h2 className="font-semibold text-slate-800">Chapter {chapter}</h2>
                    <p className="text-xs text-slate-500 group-hover:text-indigo-500 transition-colors">Study Tracker</p>
                  </div>
                </div>
                <div className="text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all">
                  →
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="bg-slate-50 p-4 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-600 font-medium italic tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
            Initially created by Rafeul Islam, later redesigned by the Mutu Study.
          </p>
        </div>
      </div>
    </div>
  );
}
