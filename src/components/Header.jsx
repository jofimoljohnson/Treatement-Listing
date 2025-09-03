

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearTreatments } from "../Feature/treatements/treatementSlice";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(clearTreatments());
    navigate("/");
  };

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="font-bold">Treatment Management</h1>
      <button onClick={handleLogout} className="bg-red-500 px-4 py-1">Logout</button>
    </div>
  );
}
