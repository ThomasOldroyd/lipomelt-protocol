import React from 'react';
import './index.css';

function App() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">LipoMelt: Naturally Target Lipomas in 30 Days</h1>

      <section className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-2">📋 30-Day Protocol Overview</h2>
        <ol className="list-decimal ml-5 space-y-2 text-sm">
          <li>🌞 Morning: Apply topical castor oil compress, take L-Carnitine & NMN+CoQ10+PQQ stack</li>
          <li>🍴 Meal Timing: Eat within a 10-hour window. Include turmeric and bitter melon extract</li>
          <li>🔴 Midday: 10-15 mins of red light therapy on lipoma area</li>
          <li>💧 Hydration: Drink 2+ liters water, avoid sugary drinks</li>
          <li>🌙 Evening: Magnesium-rich meal, take curcumin supplement, stretch lightly</li>
          <li>🛌 Weekly: Track changes using checklist & reapply castor pack 4x/week</li>
        </ol>
      </section>

      <section className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold">🎁 Get the Full Free Protocol</h2>
        <p>Enter your email to receive the full PDF guide, tracker sheet, and calendar reminders.</p>
        <div>
          <script async data-uid="3f044018ce" src="https://lipo-melt-protocol.kit.com/3f044018ce/index.js"></script>
        </div>
      </section>

      <section className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <img src="/images/lipoma.jpg" alt="Untreated lipoma on arm" className="rounded-xl w-1/4 object-cover mx-auto" />
        <p className="text-sm italic text-gray-600 text-center">
          Lipomas left untreated can continue to grow. This can cause pain by putting pressure on ligaments, muscles, and nerves.
        </p>
      </section>

      <section className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-2">🧴 Recommended Products</h2>
        <ul className="space-y-2 text-blue-600 underline text-sm">
          <li>
            <img src="https://i.imgur.com/L4F7p5T.jpg" alt="Curcumin" className="w-12 inline mr-2" />
            <a href="https://amzn.to/3XYZCurcumin" target="_blank" rel="noopener noreferrer">Liposomal Curcumin with Piperine</a>
          </li>
          <li>
            <img src="https://i.imgur.com/gRorD4e.jpg" alt="NMN Stack" className="w-12 inline mr-2" />
            <a href="https://amzn.to/3XYZNMN" target="_blank" rel="noopener noreferrer">NMN + CoQ10 + PQQ Stack</a>
          </li>
          <li>
            <img src="https://i.imgur.com/o0Xv8hM.jpg" alt="Red Light Therapy" className="w-12 inline mr-2" />
            <a href="https://amzn.to/3XYZRedLight" target="_blank" rel="noopener noreferrer">Red Light Therapy Device</a>
          </li>
          <li>
            <img src="https://i.imgur.com/xohldQ3.jpg" alt="Castor Oil Pack" className="w-12 inline mr-2" />
            <a href="https://amzn.to/3XYZCastor" target="_blank" rel="noopener noreferrer">Castor Oil Pack Kit</a>
          </li>
          <li>
            <img src="https://i.imgur.com/YG6JwPG.jpg" alt="Bitter Melon" className="w-12 inline mr-2" />
            <a href="https://amzn.to/3XYZMelon" target="_blank" rel="noopener noreferrer">Bitter Melon Extract</a>
          </li>
          <li>
            <img src="https://i.imgur.com/pW6AfGR.jpg" alt="L-Carnitine" className="w-12 inline mr-2" />
            <a href="https://amzn.to/3XYZCarnitine" target="_blank" rel="noopener noreferrer">L-Carnitine</a>
          </li>
        </ul>
        <p className="text-xs mt-4 text-gray-500">Note: These are affiliate links. We may earn a small commission if you purchase through them.</p>
      </section>

      <footer className="text-xs text-center text-gray-400 pt-4">
        <p>© 2025 LipoMelt Protocol</p>
        <p>This content is for informational purposes only and is not medical advice. Always consult a healthcare provider before starting a new regimen.</p>
      </footer>
    </div>
  );
}

export default App;
