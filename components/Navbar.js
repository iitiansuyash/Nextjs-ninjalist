import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return ( <nav>
        <div className="logo">
            <Image src="/img4.jpg" width={120} height={60}></Image>
            
            
        </div>
        <div className="menu">
        <Link href="/"><a className="navB">Home</a></Link>
        {/* <Link href="/about"><a>About</a></Link> */}
        <Link href="/ninjas"><a className="navB">Ninja_Listing</a></Link>
        </div>
    </nav> 
    );
}
 
export default Navbar;