import Link from "next/link";

export default function Header(){
    return(
<header>
<nav className="flex gap-4 bg-white text-black">
<Link href="/">Početna</Link>
<Link href="/onama">O nama</Link>
</nav>

</header>);

}