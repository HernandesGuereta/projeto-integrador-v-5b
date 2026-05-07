import "./MenuHorizontal.css"

function MenuHorizontal() {
  return (
    <header className="header">
        <nav className="menu-horizontal">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default MenuHorizontal;
