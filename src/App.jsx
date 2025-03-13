import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preliminary from "./pages/Preliminary";
import UserLogin from "./pages/user/login";
import UserRegister from "./pages/user/register";
import DriverLogin from "./pages/driver/login";
import DriverRegister from "./pages/driver/register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Preliminary />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/driver/login" element={<DriverLogin />} />
        <Route path="/driver/register" element={<DriverRegister />} />
      </Routes>
    </Router>
  );
};

export default App;