import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <p className=" text-green-600 text-5xl font-bold">Andrzej Herman</p>
      <p className="text-xl">Nr albumu: 99999</p>
      <Link href="/strona">Przejdź na drugą stronę</Link>
      <div className="mt-2">
        <Button className="bg-red-500 hover:bg-red-700">Kliknij</Button>
      </div>
    </div>
  );
}
