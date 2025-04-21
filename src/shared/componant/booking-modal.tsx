"use client";
import React from "react";
import { DialogHeader } from "./ui/dialog";
import { Button } from "./ui/button";
import { DoctorType } from "../types/types";
import { useBookingStore } from "../stores/useBookingStore";
import { useAppointmentStore } from "../stores/appointmentStore";
import toast from "react-hot-toast";

interface BookingModalProps {
  selectedDoctor: DoctorType | null;
  bookAppointment(doctor: DoctorType, time: string): void;
  setShowModal(value: boolean): void;
}

const BookingModal = ({
  selectedDoctor,
  bookAppointment,
  setShowModal,
}: BookingModalProps) => {
  const { selectedTime, setSelectedTime, error, setError, clear } =
    useBookingStore();

  const isAlreadyBooked = useAppointmentStore((state) => state.isAlreadyBooked);

  const handleConfirm = () => {
    if (!selectedDoctor || !selectedTime) {
      setError("Please select a time before confirming.");
      return;
    }

    const booked = isAlreadyBooked(String(selectedDoctor?.id), selectedTime);

    if (booked) {
        toast.error(
          `You already booked an appointment with ${selectedDoctor.name} at ${selectedTime}`,
          {
            style: {
              background: "#f87171", // red-400
              color: "#fff",
            },
          }
        );
      } else {
        bookAppointment(selectedDoctor, selectedTime);
        toast.success(
          `Appointment booked with ${selectedDoctor.name} at ${selectedTime}`,
          {
            style: {
              background: "#4ade80", // green-400
              color: "#fff",
            },
          }
        );
      setShowModal(false);
    }

    clear();
  };

  return (
    <div>
      <DialogHeader>
        Book Appointment with:
        <span className="font-bold text-error-6 ml-2">
          {selectedDoctor?.name}
        </span>
      </DialogHeader>
      <div className="flex flex-col gap-2 mt-4">
        {selectedDoctor?.availability.map((slot) => (
          <Button
            key={slot}
            onClick={() => setSelectedTime(slot)}
            variant={selectedTime === slot ? "solid" : "outlined"}
            aria-label={`Select appointment time: ${slot}`}
          >
            {slot}
          </Button>
        ))}

        {error && <p className="text-error-6 text-sm">{error}</p>}
        <div className="flex items-center justify-around">
          <Button onClick={handleConfirm} className="bg-secondary-6">
            Confirm
          </Button>
          <Button
            variant="glassy"
            onClick={() => {
              clear();
              setShowModal(false);
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
