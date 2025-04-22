
import React from 'react';
import './index.css';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-14">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold text-purple-800">LipoMelt</h1>
          <p className="mt-4 text-lg text-gray-600">Naturally Target Lipomas in 30 Days</p>
        </header>

        <section className="bg-white p-6 rounded-2xl shadow-xl space-y-4">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">📅 30-Day Protocol Overview</h2>
          <ul className="list-decimal pl-6 space-y-2 text-gray-700 text-left">
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

        <section className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-2xl shadow space-y-4 text-center">
          <h2 className="text-2xl font-semibold text-purple-700">🎁 Get the Full Free Protocol</h2>
          <p>Enter your email to receive the full PDF guide, tracker sheet, and calendar reminders.</p>
          <div dangerouslySetInnerHTML={ __html: `
<form action="https://app.kit.com/forms/7946917/subscriptions" method="post">
  <input type="email" name="email_address" placeholder="Email Address" required class="border p-2 rounded w-full" />
  <button type="submit" class="mt-2 bg-pink-400 text-white font-bold py-2 px-4 rounded">Send me the guide</button>
</form>
` } />
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-xl text-center">
          <img src="/images/lipoma.jpg" alt="Untreated lipoma on arm" className="mx-auto rounded-xl shadow-lg w-full max-w-xs" />
          <p className="mt-4 text-sm text-gray-500 italic">
            Lipomas left untreated can continue to grow. This can cause pain by putting pressure on ligaments, muscles, and nerves.
          </p>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">🧪 Recommended Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
            <div>
              <img src="/images/curcumin.jpg" className="h-24 mx-auto mb-2" alt="Curcumin" />
              <p className="text-blue-600 underline">Liposomal Curcumin</p>
            </div>
            <div>
              <img src="/images/nmn.jpg" className="h-24 mx-auto mb-2" alt="NMN" />
              <p className="text-blue-600 underline">NMN + CoQ10 + PQQ</p>
            </div>
            <div>
              <img src="/images/redlight.jpg" className="h-24 mx-auto mb-2" alt="Red Light" />
              <p className="text-blue-600 underline">Red Light Therapy</p>
            </div>
            <div>
              <img src="/images/castoroil.jpg" className="h-24 mx-auto mb-2" alt="Castor Oil" />
              <p className="text-blue-600 underline">Castor Oil Pack</p>
            </div>
            <div>
              <img src="/images/bittermelon.jpg" className="h-24 mx-auto mb-2" alt="Bitter Melon" />
              <p className="text-blue-600 underline">Bitter Melon</p>
            </div>
            <div>
              <img src="/images/lcarnitine.jpg" className="h-24 mx-auto mb-2" alt="L-Carnitine" />
              <p className="text-blue-600 underline">L-Carnitine</p>
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
