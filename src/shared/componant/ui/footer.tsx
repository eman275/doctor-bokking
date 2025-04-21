export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-100 p-4 text-center text-sm text-gray-500 shadow-inner">
      © {new Date().getFullYear()} Doctor Booking. All rights reserved.
    </footer>
  );
}
