import { DoctorType } from "../types/types";

export const mockDoctors : DoctorType[] = [
  {
    id: 1,
    name: 'Dr. Sarah Ahmed',
    photo: 'https://images.squarespace-cdn.com/content/v1/5f3d0229481bc56aa3f29b27/af2e0ea2-398c-419a-b142-52cf0908882c/Ain.png',
    specialty: 'Cardiology',
    rating: 4.8,
    availability: ['10:00 AM', '2:00 PM'],
    location: 'Cairo, Egypt'
  },
  {
    id: 2,
    name: 'Dr. John Doe',
    photo: 'https://images.squarespace-cdn.com/content/v1/5f3d0229481bc56aa3f29b27/eb0e533d-0a02-457b-8db4-677492919e32/Magdalene.png',
    specialty: 'Dermatology',
    rating: 4.6,
    availability: ['11:00 AM', '3:30 PM'],
    location: 'Alexandria, Egypt'
  },
  {
    id: 3,
    name: 'Dr. Leila Hassan',
    photo: 'https://images.squarespace-cdn.com/content/v1/5f3d0229481bc56aa3f29b27/af2e0ea2-398c-419a-b142-52cf0908882c/Ain.png',
    specialty: 'Pediatrics',
    rating: 4.9,
    availability: ['9:00 AM', '1:00 PM'],
    location: 'Giza, Egypt'
  },
  {
    id: 4,
    name: 'Dr. Omar Khaled',
    photo: 'https://images.squarespace-cdn.com/content/v1/5f3d0229481bc56aa3f29b27/ff816fd5-c93c-45e6-8973-765b15553e61/nifail.png',
    specialty: 'Neurology',
    rating: 4.7,
    availability: ['8:30 AM', '4:00 PM'],
    location: 'Cairo, Egypt'
  },
  {
    id: 5,
    name: 'Dr. Noura Fathy',
    photo: 'https://images.squarespace-cdn.com/content/v1/5f3d0229481bc56aa3f29b27/eb0e533d-0a02-457b-8db4-677492919e32/Magdalene.png',
    specialty: 'Orthopedics',
    rating: 4.5,
    availability: ['12:00 PM', '6:00 PM'],
    location: 'Mansoura, Egypt'
  },
  {
    id: 6,
    name: 'Dr. Karim Adel',
    photo: '/doctor6.jpg',
    specialty: 'ENT',
    rating: 4.4,
    availability: ['10:30 AM', '5:30 PM'],
    location: 'Tanta, Egypt'
  },
  {
    id: 7,
    name: 'Dr. Maya Samir',
    photo: '/doctor7.jpg',
    specialty: 'General Medicine',
    rating: 4.2,
    availability: ['7:00 AM', '12:00 PM'],
    location: 'Zagazig, Egypt'
  },
  {
    id: 8,
    name: 'Dr. Hossam Nabil',
    photo: '/doctor8.jpg',
    specialty: 'Psychiatry',
    rating: 4.6,
    availability: ['1:00 PM', '6:00 PM'],
    location: 'Ismailia, Egypt'
  }
];
