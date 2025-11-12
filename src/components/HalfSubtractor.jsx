import React, { useState } from "react";
import { halfSubtractor } from "../assets";

export default function HalfSubtractor() {
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);

  const difference = inputA ^ inputB;
  const borrow = inputA === 0 && inputB === 1 ? 1 : 0;

  return (
    <div id="subtractors" className="pt-25">
      <h1 className="text-3xl font-bold text-center mb-6 underline">HALF SUBTRACTOR</h1>
      <div className="w-full max-w-6xl mx-auto p-6 space-y-6 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full h-48 flex items-center justify-center rounded-2xl">
            <img src={halfSubtractor} alt="halfSubtractor" className="w-[95%]" />
          </div>

          <div className="p-4 rounded-xl bg-gray-100 h-full flex flex-col justify-center shadow-lg">
            <h2 className="text-xl font-semibold mb-2">
              Half Subtractor Description
            </h2>
            <p className="text-gray-700 text-sm">
              A Half Subtractor subtracts one single-bit input (B) from another
              (A). It produces a <strong>Difference</strong> and a{" "}
              <strong>Borrow</strong>. Difference = A XOR B, Borrow = NOT(A) AND
              B.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl bg-gray-100 shadow-lg">
            <h2 className="text-xl font-semibold mb-3">Truth Table</h2>
            <table className="w-full text-center border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">A</th>
                  <th className="border p-2">B</th>
                  <th className="border p-2">Difference</th>
                  <th className="border p-2">Borrow</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">0</td>
                  <td className="border p-2">0</td>
                  <td className="border p-2">0</td>
                  <td className="border p-2">0</td>
                </tr>
                <tr>
                  <td className="border p-2">0</td>
                  <td className="border p-2">1</td>
                  <td className="border p-2">1</td>
                  <td className="border p-2">1</td>
                </tr>
                <tr>
                  <td className="border p-2">1</td>
                  <td className="border p-2">0</td>
                  <td className="border p-2">1</td>
                  <td className="border p-2">0</td>
                </tr>
                <tr>
                  <td className="border p-2">1</td>
                  <td className="border p-2">1</td>
                  <td className="border p-2">0</td>
                  <td className="border p-2">0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-gray-100 shadow-lg space-y-4">
            <h2 className="text-xl font-semibold">Working (Interactive)</h2>

            <div className="flex items-center justify-around gap-6">
              <div className="flex flex-col items-center">
                <div
                  onClick={() => setInputA(inputA === 0 ? 1 : 0)}
                  className={`w-12 h-12 rounded-full cursor-pointer shadow border-2 transition-all duration-300 ${
                    inputA
                      ? "bg-green-500 border-green-700 shadow-[0_0_15px_rgba(0,255,0,0.7)]"
                      : "bg-red-500 border-red-700 shadow-[0_0_15px_rgba(255,0,0,0.7)]"
                  }`}
                />
                <span className="mt-2 font-semibold">A: {inputA}</span>
              </div>

              <div className="flex flex-col items-center">
                <div
                  onClick={() => setInputB(inputB === 0 ? 1 : 0)}
                  className={`w-12 h-12 rounded-full cursor-pointer shadow border-2 transition-all duration-300 ${
                    inputB
                      ? "bg-green-500 border-green-700 shadow-[0_0_15px_rgba(0,255,0,0.7)]"
                      : "bg-red-500 border-red-700 shadow-[0_0_15px_rgba(255,0,0,0.7)]"
                  }`}
                />
                <span className="mt-2 font-semibold">B: {inputB}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex flex-col items-center p-4 rounded-xl space-y-3">
                <div
                  className={`w-14 h-14 rounded-full shadow border-2 transition-all duration-300 ${
                    difference
                      ? "bg-green-500 border-green-700 shadow-[0_0_15px_rgba(0,255,0,0.7)]"
                      : "bg-red-500 border-red-700 shadow-[0_0_15px_rgba(255,0,0,0.7)]"
                  }`}
                />
                <h3 className="text-lg font-semibold">
                  Difference: {difference}
                </h3>
              </div>

              <div className="flex flex-col items-center p-4 rounded-xl space-y-3">
                <div
                  className={`w-14 h-14 rounded-full shadow border-2 transition-all duration-300 ${
                    borrow
                      ? "bg-green-500 border-green-700 shadow-[0_0_15px_rgba(0,255,0,0.7)]"
                      : "bg-red-500 border-red-700 shadow-[0_0_15px_rgba(255,0,0,0.7)]"
                  }`}
                />
                <h3 className="text-lg font-semibold">Borrow: {borrow}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
