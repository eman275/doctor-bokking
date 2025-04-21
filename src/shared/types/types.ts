export interface DoctorType {
  id: number;
  name: string;
  photo: string;
  specialty:string;
  rating: number;
  availability: string[];
  location: string;
}

export interface BookingModal {
    name :string
  specialty:string
   location:string
time:string
}
