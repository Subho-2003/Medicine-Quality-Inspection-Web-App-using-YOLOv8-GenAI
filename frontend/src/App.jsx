import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Explore from "./Component/Explore";
import AboutUs from "./Component/AboutUs";
import SignIn from "./Component/SignIn";
import Register from "./Component/Register";
import Model from "./Component/Model";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import DetailForm from "./Component/DetailForm";
import QRScanner from "./Component/qr_scanner";
import AllMedicines from "./Component/medicines";
import DamageChecker from "./Component/DamageCheck"

// App.jsx
function App() {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          {/* SignIn and Register do not have Header and Footer */}
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          
          {/* Other routes will have Header and Footer */}
          <Route
            path="/explore"
            element={
              <>
                <Header />
                <Explore />
                <Footer />
              </>
            }
          />
          <Route
            path="/aboutus"
            element={
              <>
                <Header />
                <AboutUs />
                <Footer />
              </>
            }
          />
           <Route
            path="/damage"
            element={
              <>
                <Header />
                <DamageChecker/>
                <Footer />
              </>
            }
          />
          <Route
            path="/model"
            element={
              <>
                <Header />
                <Model />
                <Footer />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Header />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/Detailform"
            element={
              <>
                <Header />
                <DetailForm />
                <Footer />
              </>
            }
          />
          <Route
            path="/qr-scanner"
            element={
              <>
                <Header />
                <QRScanner />
                <Footer />
              </>
            }
          />
          <Route
            path="/medicines"
            element={
              <>
                <Header />
                <AllMedicines />
                <Footer />
              </>
            }
          />
          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
