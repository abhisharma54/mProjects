import "./App.css";
import {
  Header,
  Home,
  Contact,
  BMICalculator,
  PasswordGenerator,
  UnitConverter,
  CurrencyConverter,
  AiChat,
  About,
  FoodItem,
  Recipe,
} from "./Components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-full min-h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="bmi-calculator" element={<BMICalculator />} />
            <Route path="password-generator" element={<PasswordGenerator />} />
            <Route path="unit-converter" element={<UnitConverter />} />
            <Route path="currency-converter" element={<CurrencyConverter />} />
            <Route path="ai-chat" element={<AiChat />} />
            <Route path="food-item" element={<FoodItem />} />
            <Route path="food-item/:foodId" element={<Recipe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
