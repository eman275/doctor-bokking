import React, { useState } from "react";
import { mockDoctors } from "../data/data";
import { Button } from "./ui/button";
import { DoctorType } from "../types/types";
import { useBookingStore } from "../stores/useBookingStore";

interface DoctorsCardsProps {
  setSelectedDoctor(value: DoctorType | null): void;
  setShowModal(value: boolean): void;
}

const DoctorsCards = ({ setSelectedDoctor, setShowModal }: DoctorsCardsProps) => {
  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");
  const { clear } = useBookingStore();

  const specialties = Array.from(new Set(mockDoctors.map((doc) => doc.specialty)));
  const allTimeSlots = Array.from(new Set(mockDoctors.flatMap((doc) => doc.availability)));

  const filteredDoctors = mockDoctors.filter((doc) => {
    const matchSpecialty = specialtyFilter ? doc.specialty === specialtyFilter : true;
    const matchAvailability = availabilityFilter
      ? doc.availability.includes(availabilityFilter)
      : true;
    return matchSpecialty && matchAvailability;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4" id="directory-heading">
        Doctor Directory
      </h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6" aria-labelledby="directory-heading">
        <div>
          <label htmlFor="specialtyFilter" className="sr-only">
            Filter by Specialty
          </label>
          <select
            id="specialtyFilter"
            className="border rounded px-4 py-2"
            value={specialtyFilter}
            onChange={(e) => setSpecialtyFilter(e.target.value)}
            aria-label="Filter doctors by specialty"
          >
            <option value="">All Specialties</option>
            {specialties.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="availabilityFilter" className="sr-only">
            Filter by Availability
          </label>
          <select
            id="availabilityFilter"
            className="border rounded px-4 py-2"
            value={availabilityFilter}
            onChange={(e) => setAvailabilityFilter(e.target.value)}
            aria-label="Filter doctors by availability"
          >
            <option value="">All Time Slots</option>
            {allTimeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDoctors.map((doc) => {
          const headingId = `doctor-name-${doc.id}`;
          return (
            <div
              key={`${doc.id}-${doc.name}`}
              className="border rounded-2xl p-4 shadow"
              role="group"
              aria-labelledby={headingId}
            >
              <div className="flex items-center gap-4">
                <img
                  src={doc.photo}
                  alt={`Photo of Dr. ${doc.name}`}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h2 id={headingId} className="text-lg font-semibold">
                    {doc.name}
                  </h2>
                  <p className="text-sm text-gray-500">{doc.specialty}</p>
                  <p className="text-sm text-gray-400">{doc.location}</p>
                  <p className="text-sm text-yellow-600" aria-label={`Rating ${doc.rating} stars`}>
                    ⭐ {doc.rating}
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-3 text-sm text-gray-600">
                <p className="sr-only">Available appointment times:</p>
                <div aria-describedby={headingId}>
                  {doc.availability.map((slot) => (
                    <span
                      key={slot}
                      className="inline-block mr-2 bg-gray-100 px-2 py-1 rounded"
                    >
                      {slot}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                className="mt-4 w-full bg-secondary-6"
                onClick={() => {
                  setSelectedDoctor(doc);
                  setShowModal(true);
                  clear();
                }}
                aria-label={`Book appointment with Dr. ${doc.name}`}
              >
                Book Appointment
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DoctorsCards;
