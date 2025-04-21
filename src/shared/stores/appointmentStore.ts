import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DoctorType } from '../types/types';

type Appointment = DoctorType & { time: string };

interface AppointmentState {
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
  isAlreadyBooked: (doctorId: string, time: string) => boolean;
}

export const useAppointmentStore = create(
  persist<AppointmentState>(
    (set, get) => ({
      appointments: [],
      addAppointment: (appointment) => {
        set((state) => ({
          appointments: [...state.appointments, appointment],
        }));
      },
      isAlreadyBooked: (doctorId, time) => {
        return get().appointments.some(
          (appt) => appt?.id === doctorId && appt.time === time
        );
      },
    }),
    {
      name: 'appointment-storage',
    }
  )
);
