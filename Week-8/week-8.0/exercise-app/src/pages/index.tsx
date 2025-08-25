import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      
     <div className="flex items-start h-32 bg-gray-400">
  <div className="bg-red-400 p-13">A</div>
  <div className="bg-green-400 p-8">B</div>
  <div className="bg-blue-400 p-12">C</div>
</div>



</div>
  );
}
