
import React, { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://lipo-melt-protocol.kit.com/3f044018ce/index.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">
        <h1 className="text-4xl font-bold text-center text-gray-900">LipoMelt: Naturally Target Lipomas in 30 Days</h1>

        <section className="bg-white rounded-xl shadow-md p-6 space-y-3">
          <p>
            LipoMelt is a free 30-day wellness protocol designed to support the natural breakdown of lipomas through lifestyle, supplements, and topical treatments.
          </p>
          <p>
            Based on global health patterns, anti-inflammatory research, and fat cell metabolism, this protocol provides a step-by-step guide — no surgery required.
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 space-y-3">
          <h2 className="text-2xl font-semibold">🎁 Get the Free Protocol</h2>
          <p>Enter your email to receive the full PDF guide, tracker sheet, and calendar reminders.</p>
          <div className="ck_form_container ck_inline" data-uid="3f044018ce"></div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 space-y-3">
          <img src="/lipoma.jpg" alt="Untreated lipoma on arm" className="rounded-xl w-full max-w-md mx-auto" />
          <p className="text-sm italic text-gray-600 text-center">
            Lipomas left untreated can continue to grow. This can cause pain by putting pressure on ligaments, muscles, and nerves.
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 space-y-3">
          <h2 className="text-2xl font-semibold">🧪 Recommended Products</h2>
          <ul className="list-disc pl-6 space-y-2 text-blue-600 underline">
            <li><a href="https://www.amazon.com/s?k=liposomal+curcumin&tag=myaifactory-20">Liposomal Curcumin with Piperine</a></li>
            <li><a href="https://www.amazon.com/s?k=NMN+CoQ10+PQQ&tag=myaifactory-20">NMN + CoQ10 + PQQ Stack</a></li>
            <li><a href="https://www.amazon.com/s?k=red+light+therapy+device&tag=myaifactory-20">Red Light Therapy Device</a></li>
            <li><a href="https://www.amazon.com/s?k=castor+oil+pack+kit&tag=myaifactory-20">Castor Oil Pack Kit</a></li>
            <li><a href="https://www.amazon.com/s?k=bitter+melon+extract&tag=myaifactory-20">Bitter Melon Extract</a></li>
            <li><a href="https://www.amazon.com/s?k=L-Carnitine&tag=myaifactory-20">L-Carnitine</a></li>
          </ul>
          <p className="text-sm text-gray-500 mt-2">Note: These are affiliate links. We may earn a small commission if you purchase through them.</p>
        </section>

        <footer className="text-center text-xs text-gray-400 pt-10">
          This content is for informational purposes only and is not medical advice. Always consult a healthcare provider before starting a new regimen.
          <br />
          © {new Date().getFullYear()} LipoMelt Protocol
        </footer>
      </div>
    </div>
  );
}

export default App;
