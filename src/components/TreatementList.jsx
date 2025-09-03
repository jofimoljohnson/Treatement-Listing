

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTreatments, createTreatment, removeTreatment } from "../Feature/treatements/treatementSlice";
import { toast } from "react-toastify";
// import TreatmentModal from "./TreatmentModal";
import AddTreatementModel from "./AddTreatementModel";

export default function TreatmentList() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.treatments);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchTreatments());
  }, [dispatch]);

  const handleAdd = (treatment) => {
    if (items.some((t) => t.name === treatment.name)) {
      toast.error("Duplicate treatment!");
      return;
    }
    dispatch(createTreatment(treatment));
    toast.success("Treatment added!");
  };

  return (
    <div className="p-6">
      <button onClick={() => setShowModal(true)} className="bg-green-500 text-white px-4 py-2 mb-4 float-right">Add</button>
      <ul>
        {items.map((t) => (
          <li key={t.id} className="flex justify-between p-2 border-b">
            {t.name}
            <button 
              className="bg-red-500 text-white px-2 py-1"
              onClick={() => dispatch(removeTreatment(t.id))}
            >Remove</button>
          </li>
        ))}
      </ul>
      {showModal && <AddTreatementModel onClose={() => setShowModal(false)} onSave={handleAdd} />}
    </div>
  );
}
