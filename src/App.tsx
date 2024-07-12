import LoginPage from "./pages/login/LoginPage";

import ClientDetails from "./pages/clientDetails/ClientDetails";
import CreateClient from "./pages/createClient/CreateClient";
import Cars from "./pages/cars/Cars";
import Accounting from "./pages/accounting/Accounting";
import CarDetails from "./pages/carDetails/CarDetails";

import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
// import { useSelector } from "react-redux";
// import { RootState } from "./redux/store";
function App() {
  // const { currentUser } = useSelector((state: RootState) => state.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            // currentUser ? <Navigate to="/" /> :
             <LoginPage />}
        />
        <Route
          path="/"
          element={
            // !currentUser ? 
            // <Navigate to="/login" /> : 
            <Layout />}
        >
          <Route index element={<Home />} />
          <Route path="/clientDetails/:id" element={<ClientDetails />} />
          <Route path="/createClient" element={<CreateClient />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/carDetails/:carId" element={<CarDetails />} />
          <Route path="/accounting" element={<Accounting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
