import Link from "next/link";
export default function Navbar() {
    return (
        <>
        
        <header className="bg-blue-900 py-10">
           <nav className="container">
               <Link href="/"><a><img src="/assets/images/logo/logo.png" className="h-20" /></a></Link>
           </nav>
        </header>
        </>
      )
}