
import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hook'
import { addTreatment } from '../feature/treatements/treatementSlice'
import { toast } from 'react-toastify'

const AVAILABLE = [
{ id: 't1', name: 'Physiotherapy', meta: { duration: '30m' } },
{ id: 't2', name: 'Chemotherapy', meta: { duration: '1h' } },
{ id: 't3', name: 'Radiation', meta: { duration: '45m' } },
{ id: 't4', name: 'Counselling', meta: { duration: '40m' } },
]

const AddTreatementModel = ({ open, onClose }) => {
    const dispatch = useAppDispatch()
const existing = useAppSelector((s) => s.treatments.items)
const [selectedIds, setSelectedIds] = useState(new Set())


useEffect(() => {
if (!open) setSelectedIds(new Set())
}, [open])


if (!open) return null


const toggle = (id) => {
const s = new Set(selectedIds)
if (s.has(id)) s.delete(id)
else s.add(id)
setSelectedIds(s)
}


const handleSave = () => {
if (selectedIds.size === 0) {
toast.info('Select at least one treatment')
return
}


const toAdd = AVAILABLE.filter((t) => selectedIds.has(t.id))


toAdd.forEach((t) => {
if (existing.find((x) => x.id === t.id)) {
toast.error(`${t.name} already exists`)
} else {
dispatch(addTreatment(t))
toast.success(`${t.name} added`)
}
})


onClose()
}
  return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
<div className="bg-white rounded-lg w-full max-w-lg p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold">Add Treatments</h3>
<button onClick={onClose} className="text-gray-600">Close</button>
</div>


<div className="grid gap-3">
{AVAILABLE.map((t) => (
<label
key={t.id}
className="flex items-center gap-3 p-3 border rounded cursor-pointer hover:bg-gray-50"
>
<input
type="checkbox"
checked={selectedIds.has(t.id)}
onChange={() => toggle(t.id)}
/>
<div>
<div className="font-medium">{t.name}</div>
<div className="text-sm text-gray-500">{t.meta.duration}</div>
</div>
</label>
))}
</div>


<div className="mt-4 flex justify-end gap-2">
<button onClick={onClose} className="px-4 py-2 rounded border">Cancel</button>
<button onClick={handleSave} className="px-4 py-2 rounded bg-blue-600 text-white">Save</button>
</div>
</div>
</div>  )
}

export default AddTreatementModel