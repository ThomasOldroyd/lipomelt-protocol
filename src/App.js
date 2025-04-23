
import React from 'react';

function App() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">LipoMelt: Naturally Target Lipomas in 30 Days</h1>

      <section className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-2">📋 Protocol Overview</h2>
        <p>This 30-day protocol focuses on inflammation reduction, lymphatic drainage, and fat metabolism support through supplements and lifestyle practices.</p>
        <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
          <li>✅ Curcumin with Piperine to support anti-inflammatory response</li>
          <li>✅ NMN + CoQ10 for mitochondrial health</li>
          <li>✅ Red light therapy to assist fat cell metabolism</li>
          <li>✅ Castor oil packs and massage to promote drainage</li>
        </ul>
      </section>

      <section className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-2">🎁 Get the Full Free Protocol</h2>
        <p>Enter your email to receive the full PDF guide, tracker sheet, and calendar reminders.</p>
        <div>
          <script async data-uid="3f044018ce" src="https://lipo-melt-protocol.kit.com/3f044018ce/index.js"></script>
        </div>
      </section>

      <section className="bg-white rounded-xl shadow-md p-6">
        <img src="/images/lipoma.jpg" alt="Untreated lipoma on arm" className="rounded-xl w-1/4 object-cover mx-auto" />
        <p className="text-center text-sm italic text-gray-600 mt-2">Lipomas left untreated can continue to grow. This can cause pain by putting pressure on ligaments, muscles, and nerves.</p>
      </section>

      <section className="bg-white rounded-xl shadow-md p-6 space-y-2">
        <h2 className="text-xl font-semibold mb-2">🧴 Recommended Products</h2>
        <ul className="list-disc ml-6 text-blue-600 underline space-y-1">
          <li><a href="https://amzn.to/curcumin" target="_blank" rel="noopener noreferrer">Liposomal Curcumin with Piperine</a> <img src="https://images-na.ssl-images-amazon.com/images/I/61NRFb5pYKL._AC_SL1500_.jpg" className="h-12 inline ml-2" /></li>
          <li><a href="https://amzn.to/nmnstack" target="_blank" rel="noopener noreferrer">NMN + CoQ10 + PQQ Stack</a> <img src="https://images-na.ssl-images-amazon.com/images/I/61K2VwFVq-L._AC_SL1500_.jpg" className="h-12 inline ml-2" /></li>
          <li><a href="https://amzn.to/redlight" target="_blank" rel="noopener noreferrer">Red Light Therapy Device</a> <img src="https://images-na.ssl-images-amazon.com/images/I/61B3ZB3jUvL._AC_SL1500_.jpg" className="h-12 inline ml-2" /></li>
          <li><a href="https://amzn.to/castor" target="_blank" rel="noopener noreferrer">Castor Oil Pack Kit</a> <img src="https://images-na.ssl-images-amazon.com/images/I/81UdGmq6JhL._AC_SL1500_.jpg" className="h-12 inline ml-2" /></li>
          <li><a href="https://amzn.to/bittermelon" target="_blank" rel="noopener noreferrer">Bitter Melon Extract</a> <img src="https://images-na.ssl-images-amazon.com/images/I/71K1I1oZLfL._AC_SL1500_.jpg" className="h-12 inline ml-2" /></li>
          <li><a href="https://amzn.to/carnitine" target="_blank" rel="noopener noreferrer">L-Carnitine</a> <img src="https://images-na.ssl-images-amazon.com/images/I/61M1OcsZPCL._AC_SL1500_.jpg" className="h-12 inline ml-2" /></li>
        </ul>
        <p className="text-xs text-gray-500 mt-2">Note: These are affiliate links. We may earn a small commission if you purchase through them.</p>
      </section>

      <footer className="text-center text-xs text-gray-500 mt-10">
        <p>© 2025 LipoMelt Protocol</p>
        <p>This content is for informational purposes only and is not medical advice. Always consult a healthcare provider before starting a new regimen.</p>
      </footer>
    </div>
  );
}

export default App;
