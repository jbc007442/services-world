import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";

import Home from "./pages/Home";
import RefundPolicy from "./pages/RefundPolicy";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">

        <Header />

        <main className="flex-1">
          <Routes>

            <Route path="/" element={<Home />} />

            <Route
              path="/refund-policy"
              element={<RefundPolicy />}
            />

            <Route
              path="/terms-and-conditions"
              element={<TermsConditions />}
            />

            <Route
              path="/privacy-policy"
              element={<PrivacyPolicy />}
            />

          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;
