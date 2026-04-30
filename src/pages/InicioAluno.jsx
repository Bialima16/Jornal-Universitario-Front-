import React from "react";
import "../styles/inicioAluno.css";
import HeaderAluno from "../components/HeaderAluno";
import Footer from "../components/Footer";

export default function InicioAluno() {
  return (
    <>
      <HeaderAluno />

      <div className="home-container">
        {/* Categorias */}
        <div className="categories">
          {[
            "Geral",
            "Eventos",
            "Cultura",
            "Notícias",
            "Acadêmico",
            "Carreiras",
            "Esportes",
            "Tecnologia"

          ].map((item, index) => (
            <button key={index} className="category-btn">
              {item}
            </button>
          ))}
        </div>

        <div className="content">
          {/* Conteúdo principal */}
          <div className="main-content">
            {/* Banner */}
            <div className="banner">
              <div className="banner-text">
                <h1>
                  FEIRA DE <span>PROFISSÕES</span>
                </h1>
                <h2>UNIFOR 2026</h2>
                <button className="btn-primary">Leia Mais</button>
              </div>
            </div>

            {/* Últimas notícias */}
            <div className="news-section">
              <div className="section-header">
                <h3>Últimas notícias</h3>
                <span className="ver-todos">Ver todos</span>
              </div>

              <div className="news-cards">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="news-card">
                    <div className="news-image" />
                    <div className="news-content">
                      <span className="tag">ACADÊMICO</span>
                      <h4>Título da notícia exemplo</h4>
                      <p>
                        Pequena descrição da notícia exibida nesta seção para
                        contextualizar o usuário.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            <div className="events-box">
              <div className="events-header">
                <h3>Próximos eventos</h3>
                <span>Ver todos</span>
              </div>

              <div className="event-item">
                <div className="event-date">
                  <strong>22</strong>
                  <span>MAI</span>
                </div>
                <div>
                  <p className="event-category">PALESTRA</p>
                  <p className="event-title">
                    Inteligência Artificial e o Futuro do Trabalho
                  </p>
                </div>
              </div>

              <div className="event-item">
                <div className="event-date">
                  <strong>24</strong>
                  <span>MAI</span>
                </div>
                <div>
                  <p className="event-category">CULTURA</p>
                  <p className="event-title">
                    Festival de Música Unifloral 2024
                  </p>
                </div>
              </div>

              <button className="btn-outline">
                Ver Todos os Eventos
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}