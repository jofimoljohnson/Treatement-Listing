// import { useState } from "react";
// import Header from "./components/Header";
// import Login from "./components/Login";
// import TreatementList from "./components/TreatementList";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const App = () => {
//     const [user, setUser] = useState(null);
//     return (
//         <div>
//             <ToastContainer position="top-right" />
//             {!user ? (
//                 <Login onLogin={(u) => setUser(u)} />
//             ) : (
//                 <div>
//                     <Header onLogout={() => setUser(null)} />
//                     <TreatementList />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Login from "./components/Login";
import TreatmentList from "./components/TreatementList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/treatments" element={<><Header /><TreatmentList /></>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
