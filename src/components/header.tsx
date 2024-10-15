import Link from "next/link"

export default function Header(){
    return(
        <div className="header">
            <header>

            
            <ul className="header-button">

                <Link href={"/"}><li className="list">Home</li>
                </Link>

               <Link href={"/about"}> <li className="list">About</li>
               </Link>

               <Link href={"/contact-us"}><li  className="list">Contact-us</li>
               </Link>
            </ul>
            
            
            </header>
              
        </div>
    )
}