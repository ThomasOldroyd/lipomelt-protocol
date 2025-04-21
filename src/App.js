
import React from 'react';
import './index.css';

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

      <section className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold">📬 Get the Full Free Protocol</h2>
        <p>Enter your email to receive the full PDF guide, tracker sheet, and calendar reminders.</p>
        <div dangerouslySetInnerHTML={{ __html: `
          <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
          <form action="https://app.kit.com/forms/7946917/subscriptions" method="post">
            <input type="email" name="email_address" placeholder="Email Address" required class="border p-2 rounded w-full" />
            <button type="submit" class="mt-2 bg-pink-400 text-white font-bold py-2 px-4 rounded">Send me the guide</button>
          </form>
        `}} />
      </section>

      <section className="bg-white rounded-xl shadow-md p-6">
        <img src="/images/lipoma.jpg" alt="Untreated lipoma on arm" className="rounded-xl w-full object-cover max-w-md mx-auto" />
        <p className="text-sm italic text-gray-600 mt-2">
          Lipomas left untreated can continue to grow. This can cause pain by putting pressure on ligaments, muscles, and nerves.
        </p>
      </section>

      <section className="bg-white rounded-xl shadow-md p-6 space-y-2">
        <h2 className="text-xl font-semibold">🧴 Recommended Products</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="#" className="text-blue-600 underline">Liposomal Curcumin with Piperine</a></li>
          <li><a href="#" className="text-blue-600 underline">NMN + CoQ10 + PQQ Stack</a></li>
          <li><a href="#" className="text-blue-600 underline">Red Light Therapy Device</a></li>
          <li><a href="#" className="text-blue-600 underline">Castor Oil Pack Kit</a></li>
          <li><a href="#" className="text-blue-600 underline">Bitter Melon Extract</a></li>
          <li><a href="#" className="text-blue-600 underline">L-Carnitine</a></li>
        </ul>
        <p className="text-xs text-gray-600 mt-2">
          Note: These are affiliate links. We may earn a small commission if you purchase through them.
        </p>
      </section>

      <footer className="text-sm text-gray-600 text-center mt-10">
        <p>© 2025 LipoMelt Protocol</p>
        <p>This content is for informational purposes only and is not medical advice. Always consult a healthcare provider before starting a new regimen.</p>
      </footer>
    </div>
  );
}

export default App;
