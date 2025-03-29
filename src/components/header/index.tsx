import { NavLinks } from "@/utils/navLinks"
import Link from "next/link"

export const Header=()=>{
    return <header className="bg-blue-900 flex p-9 justify-between align-middle">
        <div>
          <h3 className="text-white">TechSHOP</h3>
        </div>
        <div>

        </div>
        <nav className="">
            <ul className="flex text-white ">
              {
                NavLinks.filter(l=>l.isNav).map((l,k)=><li className="mx-6 hover:text-emerald-400" key={k}>
                    <Link href={l.path} >{l.name}</Link>
                </li>)
              }
            </ul>
        </nav>
    </header>
}