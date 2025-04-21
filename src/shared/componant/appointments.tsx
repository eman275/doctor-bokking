import React from 'react'
import { BookingModal } from '../types/types'
 interface AppointmentsProps {
    appointments:  BookingModal[]
 }
const Appointments = ({appointments}:AppointmentsProps) => {
  return (
   <div className="mt-4">
           <h2 className="text-xl font-bold mb-2">My Appointments</h2>
           <div className="space-y-4">
             {appointments?.length === 0 ? (
               <p className="text-gray-500">No appointments booked.</p>
             ) : (
               appointments.map((appointment: BookingModal, index: number) => (
                 <div key={index} className="border p-4 rounded-xl shadow">
                   <p className="font-semibold">{appointment.name}</p>
                   <p className="text-sm text-gray-500">{appointment.specialty}</p>
                   <p className="text-sm text-gray-400">{appointment.location}</p>
                   <p className="text-sm text-blue-600">{appointment.time}</p>
                 </div>
               ))
             )}
           </div>
         </div>
  )
}

export default Appointments
