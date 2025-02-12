import { useEffect, useState, lazy } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




// import { A20 } from "./componentsLinear/a/a20";
// import { B20 } from "./componentsLinear/b/b20";
// import { C20 } from "./componentsLinear/c/c20";
// import { D20 } from "./componentsLinear/d/d20";
// import { E20 } from "./componentsLinear/e/e20";

const A20 = lazy(() => import('./componentsLinear/a/a20'))
const B20 = lazy(() => import('./componentsLinear/b/b20'))
const C20 = lazy(() => import('./componentsLinear/c/c20'))
const D20 = lazy(() => import('./componentsLinear/d/d20'))
const E20 = lazy(() => import('./componentsLinear/e/e20'))



function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <A20 />
      <B20 />
      <C20 />
      <D20 />
      <E20 />

    </>
  )
}

export default App
