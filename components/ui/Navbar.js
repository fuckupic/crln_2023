import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="z-[100] bg-transparent top-0 flex w-[100%] flex-row justify-between items-center">
      <div className="flex bg-white flex-row justify-between border-2 border-black w-[100%]">
        <div className="logo border-r-2 border-black !aspect-square w-16 md:w-20 max-w-20 h-16 md:h-20 flex justify-center items-center">
          <Link href="/" passHref>
            <Image src="logo.svg" alt="logo" width={30} height={30} />
          </Link>
        </div>
        <div className="logo border-l-2 border-black !aspect-square w-16 md:w-20 h-16 md:h-20 flex justify-center items-center">
          <Image src="logo.svg" alt="logo" width={30} height={30} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
