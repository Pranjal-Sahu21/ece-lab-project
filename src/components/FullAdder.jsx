import React, { useState } from "react";
import { fullAdder } from "../assets";

export default function FullAdder() {
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);
  const [carryIn, setCarryIn] = useState(0);

  // Full Adder logic
  const sum = inputA ^ inputB ^ carryIn;
  const carry =
    (inputA && inputB) || (inputA && carryIn) || (inputB && carryIn) ? 1 : 0;

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-6">Full Adder</h1>
      <div className="w-full max-w-6xl mx-auto p-6 space-y-6 min-h-screen">
        {/* Image + Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full h-48 flex items-center justify-center border-2 border-dashed rounded-2xl">
            <img src={fullAdder} alt="fullAdder" className="h-full" />
          </div>

          <div className="p-4 rounded-xl bg-gray-100">
            <h2 className="text-xl font-semibold mb-2">
              Full Adder Description
            </h2>
            <p className="text-gray-700 text-sm">
              A Full Adder adds three single-bit inputs: A, B, and Carry-In
              (Cin). It produces a <strong>Sum</strong> and a{" "}
              <strong>Carry-Out</strong>. The Full Adder is typically built
              using two Half Adders and an OR gate.
            </p>
          </div>
        </div>

        {/* Truth Table + Interactive Working */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Truth Table */}
          <div className="p-4 rounded-xl bg-gray-100">
            <h2 className="text-xl font-semibold mb-3">Truth Table</h2>
            <table className="w-full text-center border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">A</th>
                  <th className="border p-2">B</th>
                  <th className="border p-2">Cin</th>
                  <th className="border p-2">Sum</th>
                  <th className="border p-2">Carry</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">0</td>
                  <td className="border p-2">0</td>
                  <td className="border p-2">0</td>
                  <td className="border p-2">0</td>
                  <td className="border p-2">0</td>
                </tr>
                <tr>
                  <td className="border p-2">0</td>
                  <td className="border p-2">0</td>
                  <td className="border p-2">1</td>
                  <td className="border p-2">1</td>
                  <td className="border p-2">0</td>
                </tr>
                <tr>
                  <td className="border p-2">0</td>
                  <td className="border p-2">1</td>
                  <td className="border p-2">0</td>
                  <td className="border p-2">1</td>
                  <td className="border p-2">0</td>
                </tr>
                <tr>
                  <td className="border p-2">0</td>
                  <td className="border p-2">1</td>
                  <td className="border p-2">1</td>
                  <td className="border p-2">0</td>
                  <td className="border p-2">1</td>
                </tr>
                <tr>
                  <td className="border p-2">1</td>
                  <td className="border p-2">0</td>
                  <td className="border p-2">0</td>
                  <td className="border p-2">1</td>
                  <td className="border p-2">0</td>
                </tr>
                <tr>
                  <td className="border p-2">1</td>
                  <td className="border p-2">0</td>
                  <td className="border p-2">1</td>
                  <td className="border p-2">0</td>
                  <td className="border p-2">1</td>
                </tr>
                <tr>
                  <td className="border p-2">1</td>
                  <td className="border p-2">1</td>
                  <td className="border p-2">0</td>
                  <td className="border p-2">0</td>
                  <td className="border p-2">1</td>
                </tr>
                <tr>
                  <td className="border p-2">1</td>
                  <td className="border p-2">1</td>
                  <td className="border p-2">1</td>
                  <td className="border p-2">1</td>
                  <td className="border p-2">1</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Interactive Working */}
          <div className="p-4 rounded-xl bg-gray-100 space-y-4">
            <h2 className="text-xl font-semibold">Working (Interactive)</h2>

            <div className="flex items-center justify-around gap-6">
              {/* Input A */}
              <div className="flex flex-col items-center">
                <div
                  onClick={() => setInputA(inputA === 0 ? 1 : 0)}
                  className={`w-12 h-12 rounded-full cursor-pointer shadow border-2 transition-all duration-300 ${
                    inputA
                      ? "bg-green-500 border-green-700 shadow-[0_0_15px_rgba(0,255,0,0.7)]"
                      : "bg-red-500 border-red-700 shadow-[0_0_15px_rgba(255,0,0,0.7)]"
                  }`}
                ></div>
                <span className="mt-2 font-semibold">A: {inputA}</span>
              </div>

              {/* Input B */}
              <div className="flex flex-col items-center">
                <div
                  onClick={() => setInputB(inputB === 0 ? 1 : 0)}
                  className={`w-12 h-12 rounded-full cursor-pointer shadow border-2 transition-all duration-300 ${
                    inputB
                      ? "bg-green-500 border-green-700 shadow-[0_0_15px_rgba(0,255,0,0.7)]"
                      : "bg-red-500 border-red-700 shadow-[0_0_15px_rgba(255,0,0,0.7)]"
                  }`}
                ></div>
                <span className="mt-2 font-semibold">B: {inputB}</span>
              </div>

              {/* Carry In */}
              <div className="flex flex-col items-center">
                <div
                  onClick={() => setCarryIn(carryIn === 0 ? 1 : 0)}
                  className={`w-12 h-12 rounded-full cursor-pointer shadow border-2 transition-all duration-300 ${
                    carryIn
                      ? "bg-green-500 border-green-700 shadow-[0_0_15px_rgba(0,255,0,0.7)]"
                      : "bg-red-500 border-red-700 shadow-[0_0_15px_rgba(255,0,0,0.7)]"
                  }`}
                ></div>
                <span className="mt-2 font-semibold">Cin: {carryIn}</span>
              </div>
            </div>

            {/* Sum & Carry Out */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {/* Sum */}
              <div className="flex flex-col items-center p-4 rounded-xl space-y-3">
                <div
                  className={`w-14 h-14 rounded-full shadow border-2 transition-all duration-300 ${
                    sum
                      ? "bg-green-500 border-green-700 shadow-[0_0_15px_rgba(0,255,0,0.7)]"
                      : "bg-red-500 border-red-700 shadow-[0_0_15px_rgba(255,0,0,0.7)]"
                  }`}
                ></div>
                <h3 className="text-lg font-semibold">Sum: {sum}</h3>
              </div>

              {/* Carry Out */}
              <div className="flex flex-col items-center p-4 rounded-xl space-y-3">
                <div
                  className={`w-14 h-14 rounded-full shadow border-2 transition-all duration-300 ${
                    carry
                      ? "bg-green-500 border-green-700 shadow-[0_0_15px_rgba(0,255,0,0.7)]"
                      : "bg-red-500 border-red-700 shadow-[0_0_15px_rgba(255,0,0,0.7)]"
                  }`}
                ></div>
                <h3 className="text-lg font-semibold">Carry: {carry}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
