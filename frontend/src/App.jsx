import { useState } from "react";
import Home from "./pages/Home/Home";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import AdminNavbar from "./components/Navbar/AdminNavbar";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ForgotPassword/ResetPassword";

function App() {
  const [isUser, setIsUser] = useState(localStorage.getItem("isUser"));
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin"));
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-blue-100 dark:bg-gray-900 dark:text-gray-50">
        {isAdmin ? (
          <>
            <AdminNavbar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
          </>
        ) : (
          <>
            <Navbar isUser={isUser} setIsUser={setIsUser} />
          </>
        )}
        <div className="pt-16 min-h-screen flex flex-col items-center justify-center">
          <Routes>
            {!isUser ? (
              <>
                <Route
                  path="/"
                  element={
                    isAdmin ? (
                      <Navigate to={"/admin"} />
                    ) : (
                      <SignUp setIsUser={setIsUser} />
                    )
                  }
                />
                <Route
                  path="/signin"
                  element={<SignIn setIsUser={setIsUser} />}
                />
                <Route
                  path="/signup"
                  element={<SignUp setIsUser={setIsUser} />}
                />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
              </>
            ) : (
              <>
                {/* <Route exact path="/" element={<Home isUser={isUser} />} />
                <Route path="*" element={<Error isUser={isUser} />} /> */}
              </>
            )}
          </Routes>
        </div>
        {isAdmin ? <></> : <>{/* <Footer isUser={isUser} /> */}</>}
      </div>
    </>
  );
}

export default App;
