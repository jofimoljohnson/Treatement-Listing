import { useState } from 'react'


export default function Login({ onLogin }) {
const [username, setUsername] = useState('')


const handleSubmit = (e) => {
e.preventDefault()
if (username.trim().length === 0) return
onLogin({ username })
}


return (
<div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
<form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded shadow">
<h2 className="text-lg font-medium mb-4">Sign in</h2>
<label className="block mb-2">Username</label>
<input
value={username}
onChange={(e) => setUsername(e.target.value)}
className="w-full p-2 border rounded mb-4"
placeholder="any name"
/>
<button className="w-full py-2 bg-blue-600 text-white rounded">Login</button>
</form>
</div>
)
}