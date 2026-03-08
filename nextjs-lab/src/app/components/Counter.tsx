'use client'

import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => count > 0 && setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div className="border p-4 rounded mt-4">
      <h2 className="text-xl font-bold">Count: {count}</h2>
      <div className="flex gap-2 mt-2">
        <button onClick={increment} className="bg-green-500 text-white px-3 py-1 rounded">Increment</button>
        <button onClick={decrement} className="bg-red-500 text-white px-3 py-1 rounded">Decrement</button>
        <button onClick={reset} className="bg-gray-500 text-white px-3 py-1 rounded">Reset</button>
      </div>
    </div>
  )
}