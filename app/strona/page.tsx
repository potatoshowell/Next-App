import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Strona() {
  return (
    <div>
      <div className="p-6">
        <Dialog>
          <DialogTrigger>
            <Button>Otwórz okienko</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Tytuł okienka?</DialogTitle>
              <DialogDescription>Jakaś treść</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mb-4">Cristiano Ronaldo</div>
      <Image src="/ronaldo.jpg" alt="Ronaldo" width={600} height={800} />
    </div>
  );
}
