import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Recipes from "./pages/Recipes";
import RecipeId from "./pages/RecipeId";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
        <Routes>
          <Route path="/recipeId" element={<RecipeId/>} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="*" element={<Navigate to="recipes" />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
