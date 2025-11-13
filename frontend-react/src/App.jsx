import { useState } from 'react'
import './assets/css/style.css'
import Header from './components/Header.jsx'
import Footer from './components/footer.jsx'
import Main from './components/Main.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
