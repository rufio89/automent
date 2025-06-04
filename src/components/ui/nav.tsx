import Link from "next/link"
import { Button } from "./button"

export function Nav() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Automis</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/intake">
              <Button variant="outline">Start Assessment</Button>
            </Link>
            <Link href="/">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Book a Call
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 