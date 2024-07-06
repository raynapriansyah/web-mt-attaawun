import Image from "next/image";
import { Button } from "~/components/ui/button";
import { MapPinned, UserRound } from "lucide-react";

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <Image
          src="/logo.png"
          width={250}
          height={250}
          alt="Picture of the author"
        />
      </div>
      <div className="text-black text-center">
        <h1 className="text-4xl font-bold mb-4">MAJELIS TA&apos;LIM</h1>
        <h1 className="text-4xl font-bold mb-4">AT-TA&apos;AWUN</h1>
        <p className="text-lg">
          Kp. Sawah Asep RT. 11 RW. 04 Desa Srogol Kecamatan Cigombong Kabupaten
          Bogor
        </p>
        <p className="text-lg">Kode Pos 16110</p>
      </div>
      <section className="mt-6 space-x-6">
        <Button variant="outline" className="bg-black text-white rounded-xl">
          <MapPinned size={25} className="mr-2" />
          Maps
        </Button>
        <Button variant="outline" className="bg-black text-white rounded-xl">
          <UserRound size={25} className="mr-2" />
          Kontak
        </Button>
      </section>
    </div>
  );
}
