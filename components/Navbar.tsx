import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center" >
          <Image
            src="/career-logo.png?height=40&width=40"
            alt="Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <h1 className="text-2xl font-bold">Career Guidance</h1>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
