import { create } from 'zustand';

interface BookingState {
  selectedTime: string | null;
  error: string | null;
  setSelectedTime: (time: string) => void;
  clear: () => void;
  setError: (msg: string) => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  selectedTime: null,
  error: null,
  setSelectedTime: (time) => set({ selectedTime: time, error: null }),
  setError: (msg) => set({ error: msg }),
  clear: () => set({ selectedTime: null, error: null }),
}));
