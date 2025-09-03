import  { useState } from 'react'
import Header from './components/Header'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import TreatmentList from './components/TreatementList'


export default function App() {
const [user, setUser] = useState(null)


return (
<div>
<ToastContainer position="top-right" />
{!user ? (
<Login onLogin={(u) => setUser(u)} />
) : (
<div>
<Header onLogout={() => setUser(null)} />
<TreatmentList />
</div>
)}
</div>
)
}