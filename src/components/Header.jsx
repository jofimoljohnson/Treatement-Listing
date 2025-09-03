import React from 'react'
import { useAppDispatch } from '../hook'
import { clearAll } from '../feature/treatements/treatementSlice'


export default function Header({ onLogout }) {
const dispatch = useAppDispatch()


const handleLogout = () => {
dispatch(clearAll())
if (onLogout) onLogout()
}


return (
<header className="flex items-center justify-between p-4 bg-white shadow">
<h1 className="text-xl font-semibold">Treatment Manager</h1>
<div>
<button
className="px-3 py-1 rounded-md border hover:bg-gray-50"
onClick={handleLogout}
>
Logout
</button>
</div>
</header>
)
}