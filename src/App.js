
import React from 'react';

function App() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">LipoMelt: Naturally Target Lipomas in 30 Days</h1>

      <section className="bg-white rounded-xl shadow-md p-6">
        <p>
          LipoMelt is a free 30-day wellness protocol designed to support the natural
          breakdown of lipomas through lifestyle, supplements, and topical treatments.
        </p>
        <p>
          Based on global health patterns, anti-inflammatory research, and fat cell
          metabolism, this protocol provides a step-by-step guide — no surgery required.
        </p>
      </section>

      <section className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <h2 className="text-xl font-semibold">🎁 Get the Free Protocol</h2>
        <p>Enter your email to receive the full PDF guide, tracker sheet, and calendar reminders.</p>
        <div>
          <script async data-uid="3f044018ce" src="https://lipo-melt-protocol.kit.com/3f044018ce/index.js"></script>
        </div>
      </section>

      <section className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <img src="/lipoma.jpg" alt="Untreated lipoma on arm" className="rounded-xl w-full object-cover" />
        <p className="text-sm italic text-gray-600">
          Lipomas left untreated can continue to grow. This can cause pain by putting pressure on ligaments, muscles, and nerves.
        </p>
      </section>

      <section className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <h2 className="text-xl font-semibold">🧪 Recommended Products</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><a href="https://www.amazon.com/s?k=liposomal+curcumin&tag=myaifactory-20" className="text-blue-600 underline">Liposomal Curcumin with Piperine</a></li>
          <li><a href="https://www.amazon.com/s?k=NMN+CoQ10+PQQ&tag=myaifactory-20" className="text-blue-600 underline">NMN + CoQ10 + PQQ Stack</a></li>
          <li><a href="https://www.amazon.com/s?k=red+light+therapy+device&tag=myaifactory-20" className="text-blue-600 underline">Red Light Therapy Device</a></li>
          <li><a href="https://www.amazon.com/s?k=castor+oil+pack+kit&tag=myaifactory-20" className="text-blue-600 underline">Castor Oil Pack Kit</a></li>
          <li><a href="https://www.amazon.com/s?k=bitter+melon+extract&tag=myaifactory-20" className="text-blue-600 underline">Bitter Melon Extract</a></li>
          <li><a href="https://www.amazon.com/s?k=L-Carnitine&tag=myaifactory-20" className="text-blue-600 underline">L-Carnitine</a></li>
        </ul>
        <p className="text-sm text-gray-500">Note: These are affiliate links. We may earn a small commission if you purchase through them.</p>
      </section>

      <section className="bg-white rounded-xl shadow-md p-6 space-y-2 text-sm text-gray-500">
        <p>This content is for informational purposes only and is not medical advice. Always consult a healthcare provider before starting a new regimen.</p>
        <p className="text-xs">© {new Date().getFullYear()} LipoMelt Protocol</p>
      </section>
    </div>
  );
}

export default App;
