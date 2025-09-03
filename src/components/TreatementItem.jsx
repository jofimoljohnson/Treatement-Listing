import { useAppDispatch } from '../hook'
import { removeTreatment } from '../feature/treatements/treatementSlice'
import { toast } from 'react-toastify'


export default function TreatmentItem({ treatment }) {
const dispatch = useAppDispatch()


const handleDelete = () => {
if (!confirm(`Delete ${treatment.name}?`)) return
dispatch(removeTreatment(treatment.id))
toast.success('Deleted')
}


return (
<div className="flex items-center justify-between p-3 border rounded">
<div>
<div className="font-medium">{treatment.name}</div>
{treatment.meta?.duration && (
<div className="text-sm text-gray-500">{treatment.meta.duration}</div>
)}
</div>
<div>
<button onClick={handleDelete} className="px-3 py-1 rounded border">Remove</button>
</div>
</div>
)
}