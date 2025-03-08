import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Career Guidance</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full mx-auto text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Welcome to Career Guidance</h2>
            <p className="text-muted-foreground">Find your perfect career path with personalized guidance</p>
          </div>

          <div className="space-y-4">
            <Button asChild className="w-full">
              <Link href="/auth">Get Started</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t py-4">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Career Guidance Platform. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

