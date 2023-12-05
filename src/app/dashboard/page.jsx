"use client"
import {signOut} from 'next-auth/react'

function DashboardPage() {
  return (
    <section className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <div>
        <h1 className="text-white text-5xl">Dashboard</h1>
        <a href='http://127.0.0.1:5000/'>
        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
          Registrar
        </button>
        </a>
      </div>
    </section>
  )
}
export default DashboardPage