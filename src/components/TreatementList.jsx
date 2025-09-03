import  { useState } from 'react'
import { useAppSelector } from '../hook'

import TreatmentItem from './TreatementItem'
import AddTreatementModel from './AddTreatementModel'

export default function TreatmentList() {
const { items } = useAppSelector((s) => s.treatments)
const [isModalOpen, setIsModalOpen] = useState(false)


return (
<div className="min-h-screen bg-gray-50 p-6">
<div className="max-w-4xl mx-auto">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-semibold">Your Treatments</h2>
<button
onClick={() => setIsModalOpen(true)}
className="px-4 py-2 bg-blue-600 text-white rounded"
>
Add
</button>
</div>


<div className="space-y-3">
{items.length === 0 && (
<div className="text-gray-500">No treatments yet. Add one.</div>
)}


{items.map((t) => (
<TreatmentItem key={t.id} treatment={t} />
))}
</div>
</div>


<AddTreatementModel open={isModalOpen} onClose={() => setIsModalOpen(false)} />
</div>
)
}