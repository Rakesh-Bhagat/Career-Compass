import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
    return <header className="border-b">
    <div className="container mx-auto py-4 px-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Career Guidance</h1>
      <ThemeToggle />
    </div>
  </header>
}