function Footer(){
    return (
            <footer className="rodape">
                <p> &copy; {new Date().getFullYear()}Todos os direitos reservados</p>
            </footer>
    )
}export default Footer;
//&copy -> simbolo do copyright
//Date() -> pega a data atual
//getFullYear() -> pega apenas o ano