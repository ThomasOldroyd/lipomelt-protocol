
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
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-14">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold text-purple-800">LipoMelt</h1>
          <p className="mt-4 text-lg text-gray-600">Naturally Target Lipomas in 30 Days</p>
        </header>

        <section className="bg-white p-6 rounded-2xl shadow-xl space-y-4">
          <h2 className="text-2xl font-semibold text-purple-700">🧬 Why This Protocol</h2>
          <p>LipoMelt is a free 30-day wellness protocol designed to support the natural breakdown of lipomas through lifestyle, supplements, and topical treatments.</p>
          <p>Based on global health patterns, anti-inflammatory research, and fat cell metabolism, this protocol provides a step-by-step guide — no surgery required.</p>
        </section>

        <section className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-2xl shadow space-y-4 text-center">
          <h2 className="text-2xl font-semibold text-purple-700">🎁 Get the Free Protocol</h2>
          <p>Enter your email to receive the full PDF guide, tracker sheet, and calendar reminders.</p>
          <div className="ck_form_container ck_inline" data-uid="3f044018ce">
            <noscript>
              <a href="https://lipo-melt-protocol.kit.com/forms/3f044018ce">Click here to subscribe</a>
            </noscript>
          </div>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-xl text-center">
          <img src="/images/lipoma.jpg" alt="Untreated lipoma on arm" className="mx-auto rounded-xl shadow-lg w-full max-w-md" />
          <p className="mt-4 text-sm text-gray-500 italic">
            Lipomas left untreated can continue to grow. This can cause pain by putting pressure on ligaments, muscles, and nerves.
          </p>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-xl space-y-4">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">📅 30-Day Protocol Overview</h2>
          <ul className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>🌞 Morning: Take Bitter Melon + L-Carnitine</li>
            <li>🥗 Eat anti-inflammatory meals: turmeric, leafy greens, no dairy/sugar</li>
            <li>💧 Stay hydrated: 2+ liters of water/day</li>
            <li>💊 Midday: Take NMN + CoQ10 stack</li>
            <li>🌿 Apply castor oil pack to affected area (20 mins)</li>
            <li>🔦 Use red light therapy device (10 mins)</li>
            <li>🌙 Evening: Take liposomal curcumin + magnesium</li>
            <li>🛌 Gentle stretching or infrared sauna (if available)</li>
            <li>📝 Track changes in journal or checklist</li>
            <li>🔁 Repeat daily for 30 days</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">🧪 Recommended Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
            <div>
              <img src="https://m.media-amazon.com/images/I/61nxiFW1vZL._AC_SL1000_.jpg" className="h-24 mx-auto mb-2" alt="Curcumin" />
              <a href="https://www.amazon.com/s?k=liposomal+curcumin&tag=myaifactory-20" className="text-blue-600 underline">Liposomal Curcumin</a>
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/I/71vDIpgKUTL._AC_SL1500_.jpg" className="h-24 mx-auto mb-2" alt="NMN CoQ10 PQQ" />
              <a href="https://www.amazon.com/s?k=NMN+CoQ10+PQQ&tag=myaifactory-20" className="text-blue-600 underline">NMN + CoQ10 + PQQ</a>
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/I/61a9uOKpGoL._AC_SL1500_.jpg" className="h-24 mx-auto mb-2" alt="Red Light" />
              <a href="https://www.amazon.com/s?k=red+light+therapy+device&tag=myaifactory-20" className="text-blue-600 underline">Red Light Therapy Device</a>
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/I/71NrcD6eJ2L._AC_SL1500_.jpg" className="h-24 mx-auto mb-2" alt="Castor Oil" />
              <a href="https://www.amazon.com/s?k=castor+oil+pack+kit&tag=myaifactory-20" className="text-blue-600 underline">Castor Oil Pack Kit</a>
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/I/61IQyq5kW4L._AC_SL1000_.jpg" className="h-24 mx-auto mb-2" alt="Bitter Melon" />
              <a href="https://www.amazon.com/s?k=bitter+melon+extract&tag=myaifactory-20" className="text-blue-600 underline">Bitter Melon Extract</a>
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/I/61-WIHwPjuL._AC_SL1500_.jpg" className="h-24 mx-auto mb-2" alt="L-Carnitine" />
              <a href="https://www.amazon.com/s?k=L-Carnitine&tag=myaifactory-20" className="text-blue-600 underline">L-Carnitine</a>
            </div>
          </div>
        </section>

        <footer className="text-center text-xs text-gray-400 border-t pt-6">
          This content is for informational purposes only and is not medical advice. Always consult a healthcare provider before starting a new regimen.
          <br />
          © {new Date().getFullYear()} LipoMelt Protocol
        </footer>
      </div>
    </div>
  );
}

export default App;
