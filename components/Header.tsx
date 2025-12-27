import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cloud-blue-600 to-cloud-blue-400 bg-clip-text text-transparent">
            CloudVision
          </Link>
          
          <div className="flex items-center gap-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-cloud-blue-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-cloud-blue-600 transition-colors font-medium"
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}