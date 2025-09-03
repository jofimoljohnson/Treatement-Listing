


import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name) {
      localStorage.setItem("user", name);
      navigate("/treatments");
    }
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-xl mb-4">Login</h2>
      <input 
        type="text" 
        placeholder="Enter Name" 
        className="border p-2 mb-4" 
        value={name} 
        onChange={(e) => setName(e.target.value)} />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2">Login</button>
    </div>
  );
}
