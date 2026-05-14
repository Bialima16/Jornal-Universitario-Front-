import Header from "../components/Header";
import "../styles/home.css";

const Home = ({ onOpenLogin }) => {
    return (
        <div className="home">
            <Header onOpenLogin={onOpenLogin} />

            <section className="hero" id="inicio">
                <p className="efeito">Conectando universidades e estudantes</p>
                <h1>JORNAL UNIVERSITÁRIO</h1>
                <p className="subtitle">
                    Tudo o que sua universidade precisa para<br /> informar, organizar e conectar.
                </p>
                <button className="btn-dark">Saiba mais</button>
            </section>

            <section className="proposta" id="proposta">
                <div className="proposta-item">
                    <img src="/imgs/proposta1.png" alt="Benefícios" />

                    <div className="proposta-text">
                        <h2>Comunicação universitária,<br /> simplificada</h2>
                        <p>
                            O UniJornal propõe reunir, em um único ambiente digital, todas as
                            informações relevantes do universo acadêmico. Com uma estrutura
                            organizada e intuitiva, a plataforma facilita tanto a publicação
                            por parte das universidades quanto o acesso rápido
                            e eficiente para os estudantes.
                        </p>
                    </div>
                </div>

                <div className="proposta-item reverse">
                    <div className="proposta-text">
                        <h2>Tudo o que acontece na sua <br /> universidade, em um só lugar</h2>
                        <p>
                            Acompanhe notícias, eventos e comunicados do seu campus de
                            forma simples e organizada. O UniJornal conecta estudantes
                            às suas universidades, facilitando o acesso à informação e
                            fortalecendo a comunicação acadêmica.
                        </p>
                    </div>

                    <img src="/imgs/proposta1.png" alt="Benefícios" />
                </div>
            </section>

            <section className="benefits" id="beneficios">
                <h2>Por que usar o UniJornal?</h2>

                <div className="benefits-grid">
                    <div>
                        <h3>Centralização</h3>
                        <p>Todas as informações acadêmicas reunidas em um só lugar.</p>
                    </div>

                    <div>
                        <h3>Engajamento</h3>
                        <p>Estimule a participação dos alunos com conteúdo relevante.</p>
                    </div>

                    <div>
                        <h3>Acessibilidade</h3>
                        <p>Acesso fácil via celular, tablet ou computador.</p>
                    </div>
                </div>
            </section>


            <section className="access" id="acesso">
                <h2>Como você deseja acessar?</h2>
                <div className="access-cards">
                    <div className="card aluno">
                        <span className="tag">Para estudantes</span>
                        <h3>Sou Aluno</h3>
                        <p>
                            Acompanhe notícias, eventos e tudo o que acontece na sua universidade.
                        </p>
                        <button onClick={() => window.location.href = "/cadastro-aluno"}>
                            Criar meu perfil →
                        </button>
                    </div>
                    <div className="card universidade">
                        <span className="tag">Para universidades</span>
                        <h3>Sou Instituição/Universidade</h3>
                        <p>
                            Publique conteúdos, divulgue eventos e mantenha sua comunidade informada.
                        </p>
                        <button onClick={() => window.location.href = "/cadastro-universidade"}>
                            Cadastrar instituição →
                        </button>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-content">
                    <h3>UniJornal</h3>
                    <div className="links">
                        <span>Início</span>
                        <span>Sobre</span>
                        <span>Contato</span>
                    </div>
                    <p>© 2026 UniJornal. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;