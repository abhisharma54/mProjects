import './App.css'
import { Header, Home, Contact, BMICalculator, PasswordGenerator, UnitConverter, CurrencyConverter, AiChat, About } from './Components/index'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Header />}>
    <Route index element={<Home />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/about' element={<About />} />
    <Route path='/bmi-calculator' element={<BMICalculator />} />
    <Route path='/password-generator' element={<PasswordGenerator />} />
    <Route path='/unit-converter' element={<UnitConverter />} />
    <Route path='/currency-converter' element={<CurrencyConverter />} />
    <Route path='/ai-chat' element={<AiChat />} />
    </Route>
    </>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
