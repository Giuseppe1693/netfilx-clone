import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-3xl font-semibold mb-6">Netflix React - Gallerie</h1>
        <Gallery query="Harry Potter" title="Harry Potter" />
        <Gallery query="The Lord of the Rings" title="Lord of the Rings" />
        <Gallery query="Star Wars" title="Star Wars" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
