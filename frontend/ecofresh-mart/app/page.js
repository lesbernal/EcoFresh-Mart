"use client";

import Image from "next/image";
import {Zen_Kurenaido} from "next/font/google";
import { useState } from "react";

const zenKurenaido = Zen_Kurenaido({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [classification, setClassification] = useState("");
  const [organic, setOrganic] = useState(false);
  const [local, setLocal] = useState(false);
  const [pesticideFree, setPesticideFree] = useState(false);
  const [inventoryAmount, setInventoryAmount] = useState("");
  const [supplier, setSupplier] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {

    console.log({
      classification,
      organic,
      local,
      pesticideFree,
      inventoryAmount,
      supplier,
      searchQuery,
    });
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-200 font-[family-name:var(--font-geist-sans)]">
      
      <header className="bg-gray-200 text-green-800 py-4 w-full text-center rounded-lg shadow-md">
        <h1 className={`${zenKurenaido.className} text-4xl tracking-wide`}>
          EcoEnhance
        </h1>
      </header>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        {/* Search Box */}
        <div className="w-full flex gap-4">
          <input 
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div> 

        {/* Search Filters */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          
          {/* Classification Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="classification" className="text-sm font-medium text-gray-700">
              Classification
            </label>
            <select
              id="classification"
              value={classification}
              onChange={(e) => setClassification(e.target.value)}
              className="text-gray-500 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Classification</option>
              <option value="fruits">Fruits</option>
              <option value="vegetables">Vegetables</option>
              <option value="dairy">Dairy</option>
            </select>
          </div>
          
          {/* Supplier Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="supplier" className="text-sm font-medium text-gray-700">
              Supplier
            </label>
            <select
              id="supplier"
              value={supplier}
              onChange={(e) => setSupplier(e.target.value)}
              className="text-gray-500 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Supplier</option>
              <option value="supplier1">Supplier 1</option>
              <option value="supplier2">Supplier 2</option>
              <option value="supplier3">Supplier 3</option>
            </select>
          </div>

          {/* Organic Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="organic"
              checked={organic}
              onChange={() => setOrganic(!organic)}
              className="h-4 w-4 text-green-500"
            />
            <label htmlFor="organic" className="text-sm text-gray-700">Organic Only</label>
          </div>

          {/* Local Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="local"
              checked={local}
              onChange={() => setLocal(!local)}
              className="h-4 w-4 text-green-500"
            />
            <label htmlFor="local" className="text-sm text-gray-700">Local Only</label>
          </div>

          {/* Pesticide Free Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="pesticideFree"
              checked={pesticideFree}
              onChange={() => setPesticideFree(!pesticideFree)}
              className="h-4 w-4 text-green-500"
            />
            <label htmlFor="pesticideFree" className="text-sm text-gray-700">Pesticide Free</label>
          </div>

          {/* Inventory Amount Search */}
          <div className="flex flex-col">
            <label htmlFor="inventoryAmount" className="text-sm font-medium text-gray-700">
              Minimum Inventory Amount
            </label>
            <input
              type="number"
              id="inventoryAmount"
              value={inventoryAmount}
              onChange={(e) => setInventoryAmount(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Sort by Lowest Price */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleSearch()}
              className="bg-green-800 text-white p-3 rounded-lg shadow-sm hover:bg-green-600"
            >
              Search
            </button>
          </div>
        </div>

        <p className="text-lg text-gray-600 mt-4">Welcome to EcoEnhance by EcoFresh Mart! 🌿</p>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
