import React from 'react'
import Image from "next/image";


const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">Doctor Booking</h1>
      <nav className="flex gap-4">
      <Image
          src="/src/medical-appointment.png"  
          alt="Doctor Booking Logo"
          width={150}
          height={40}
          className="h-auto w-auto"
        />
      </nav>
    </header>
  )
}

export default Header
