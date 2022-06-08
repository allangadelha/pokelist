import Link from "next/link";
import Image from "next/image";
import pokeball from '../../public/images/pokeball.png';

export default function Navbar() {

    return (
        <nav>
            <div>
                <Image src={pokeball} width="30" height="30" alt="Pokelist" />
                <h1>Pokelist</h1>
            </div>
            <ul>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/about"><a>About</a></Link>
                </li>
            </ul>
        </nav>
    )
}