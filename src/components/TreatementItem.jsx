import { useAppDispatch } from "../hook";
import { deleteTreatment } from "../Feature/treatements/treatementSlice";
import { toast } from "react-toastify";

const TreatementItem = ({ treatment }) => {
    const dispatch = useAppDispatch();

    const handleDelete = async () => {
        if (!confirm(`Delete ${treatment.name}?`)) return;
        try {
            await dispatch(deleteTreatment(treatment.id)).unwrap();
            toast.success("Deleted");
        } catch (err) {
            console.log(err);
            toast.error("Failed to delete");
        }
    };
    return (
        <div className="flex items-center justify-between p-3 border rounded">
            <div>
                <div className="font-medium">{treatment.name}</div>
                {treatment.meta?.duration && <div className="text-sm text-gray-500">{treatment.meta.duration}</div>}
            </div>
            <div>
                <button onClick={handleDelete} className="px-3 py-1 rounded border">
                    Remove
                </button>
            </div>
        </div>
    );
};

export default TreatementItem;
