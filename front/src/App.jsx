import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Product from './pages/product'
import Test from './pages/test'
import Error404 from './pages/error404'
import Entete from './layout/entete'
import Pied from './layout/pied'
import ConnexionInscription from './pages/connexion-inscription'

function App() {

  return (
    <>
      <BrowserRouter>
        <Entete />
        <Routes>
          <Route path="/" element={<Product />} ></Route>
          <Route path="connexion-inscription" element={<ConnexionInscription />} ></Route>
          <Route path="*" element={<Error404 />} ></Route>
        </Routes>
        <Pied />
      </BrowserRouter>
    </>
  )
}

export default App
