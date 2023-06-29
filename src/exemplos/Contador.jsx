import { useState } from 'react'
import './Contador.css'

export function Contador() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Contador</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}
