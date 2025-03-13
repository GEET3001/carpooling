import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preliminary from "./pages/Preliminary";
import UserLogin from "./pages/user/Login";
import UserSignup from "./pages/user/Signup";
import DriverLogin from "./pages/driver/Login";
import DriverSignup from "./pages/driver/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Preliminary />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/driver/login" element={<DriverLogin />} />
        <Route path="/driver/signup" element={<DriverSignup />} />
      </Routes>
    </Router>
  );
};

export default App;