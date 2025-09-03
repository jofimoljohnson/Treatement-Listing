


import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddTreatementModel({ onClose, onSave }) {
  const [name, setName] = useState("");

  const handleSave = () => {
    if (name.trim()) {
      onSave({ id: uuidv4(), name });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded w-80">
        <h2 className="text-lg mb-4">Add Treatment</h2>
        <input 
          type="text" 
          placeholder="Treatment name" 
          className="border p-2 w-full mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)} />
        <div className="flex justify-end">
          <button className="mr-2 px-4 py-2 bg-gray-300" onClick={onClose}>Cancel</button>
          <button className="px-4 py-2 bg-blue-500 text-white" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}
