export default function Header() {
    return (
    <header className="fixed w-full flex h-[100px] justify-center items-center">
        <nav>
            <ul className="flex flex-row gap-x-20">
                <li><a className="a" href="#">Início</a></li>
                <li><a className="a" href="#">Sobre</a></li>
                <li><a className="a" href="#">Portfólio</a></li>
                <li><a className="a" href="#">Contato</a></li>
            </ul>
        </nav>
    </header>
    )
}