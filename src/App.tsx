import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
// import * as Telegram from "@twa-dev/types"
import WebApp from "@twa-dev/sdk"

import reactLogo from "@/assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)
  const [initData, setInitData] = useState<string>()

  useEffect(() => {
    const data = WebApp.initData
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      console.error("❌ Open this app in Telegram")
      return
    }
    console.log("✅Telegram WebApp Available", data)
    setInitData(data)
    WebApp.expand()
  }, [])

  return (
    <div className="flex flex-col gap-10">
      <Link to={`/test`}>Go to Test Page</Link>
      <div className="flex gap-4 items-center justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold">Hello world!</h1>

      <div className="flex flex-col gap-4 max-w-xs overflow-auto">
        <h2 className="font-semibold">Telegram WebApp Data</h2>
        {initData ? (
          <pre className="text-xs">{JSON.stringify(initData, null, 2)}</pre>
        ) : (
          <p>Loading initData...</p>
        )}
      </div>

      <div className="flex flex-col justify-center">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
