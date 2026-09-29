import Link from 'next/link';
export default function Header(){return <header className="header"><div className="container nav"><Link className="brand" href="/">Tool<span>Box</span></Link><nav className="navlinks"><Link href="/tools">All Tools</Link><Link href="/categories/image-tools">Image</Link><Link href="/categories/pdf-tools">PDF</Link><Link href="/about">About</Link></nav></div></header>}
