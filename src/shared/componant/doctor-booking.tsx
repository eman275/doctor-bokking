"use client";
import React, { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { DoctorType } from "../types/types";
import Appointments from "./appointments";
import DoctorsCards from "./doctors-cards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import BookingModal from "./booking-modal";
import { useAppointmentStore } from "../stores/appointmentStore";

export default function DoctorBookingUI() {
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorType | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [, setAlreadyBooked] = useState(false);
 

  const appointments = useAppointmentStore((state) => state.appointments);
  const addAppointment = useAppointmentStore((state) => state.addAppointment);
  const isAlreadyBooked = useAppointmentStore((state) => state.isAlreadyBooked);

  const bookAppointment = (doctor: DoctorType, time: string) => {
    const booked = isAlreadyBooked(String(doctor?.id), time);

    if (booked) {
      setAlreadyBooked(true);

      return;
    }

    addAppointment({ ...doctor, time });
    setShowModal(false);
    setAlreadyBooked(false);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Tabs defaultValue="directory">
        <TabsList className="mb-4 w-full justify-between  lg:w-[44%] ">
          <TabsTrigger value={"directory"} className="flex-1 px-4">
            Doctor Directory
          </TabsTrigger>
          <TabsTrigger value={"appointments"} className="flex-1 px-4">
            My Appointments
          </TabsTrigger>
        </TabsList>
        <TabsContent value={"directory"}>
          <DoctorsCards
            setSelectedDoctor={setSelectedDoctor}
            setShowModal={setShowModal}
          />
        </TabsContent>
        <TabsContent value={"appointments"}>
          <Appointments appointments={appointments} />
        </TabsContent>
      </Tabs>

      <Dialog open={showModal} onOpenChange={() => setShowModal(false)}>
        <DialogContent className="w-[90%] md:w-[50%] h-[80%] gap-4 px-6 py-[60px] lg:py-10">
    
            <BookingModal
              selectedDoctor={selectedDoctor}
              bookAppointment={bookAppointment}
              setShowModal={setShowModal}
            />
          {/* )} */}
        </DialogContent>
      </Dialog>
    </div>
  );
}
