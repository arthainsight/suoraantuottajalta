import Link from "next/link";

export function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link className="logo" href="/">
          Suoraan Tuottajalta
        </Link>
        <nav className="nav" aria-label="Päänavigaatio">
          <Link href="/kartta">Kartta</Link>
          <Link href="/hakemisto">Hakemisto</Link>
          <Link href="/lisaa-kohde">Lisää kohde</Link>
        </nav>
      </div>
    </header>
  );
}
