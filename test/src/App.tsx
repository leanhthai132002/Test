import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Product from './product/Product'
import ProductForm from './product/ProductForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Product/>} />
          <Route path="add" element={<ProductForm/>} />
          <Route path="edit/:id" element={<ProductForm/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
