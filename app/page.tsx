import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full mx-auto text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Welcome to Career Guidance</h2>
            <p className="text-muted-foreground">
              Find your perfect career path with personalized guidance
            </p>
          </div>

          <div className="space-y-4">
            <Button asChild className="w-full">
              <Link href="/login">Get Started</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
