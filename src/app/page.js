import Navbar  from "@/app/components/header";
import Executive from "@/app/components/Executive";


export default function Home() {
  return (
    <main className="font-sans">

      {/* NAVBAR */}
    
      <Executive />

     
      <footer className="text-center py-6 bg-gray-200">
        © 2026 Devesh Siwal. Strategic Leadership  ·  25 Years
      </footer>

    </main>
  );
}