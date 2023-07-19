import React from "react";
import { GeneratorBox, Header, Navbar } from "./components";

export default function App() {
  return (
    <main className="max-w-2xl mx-auto px-4">
      <div className="w-full space-y-6">
        <Navbar />
        <Header />
        <GeneratorBox />
      </div>
    </main>
  );
}
