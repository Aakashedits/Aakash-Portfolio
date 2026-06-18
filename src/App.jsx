import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <BrowserRouter>
      <div className="text-white font-roboto-condensed">
        <main>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" index element={<Home />} />
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App