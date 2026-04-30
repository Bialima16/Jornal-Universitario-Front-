import React from "react";
import "../styles/inicioUniversidade.css";

export default function InicioUniversidade() {
  return (
    <div className="dashboard-container">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div>
          <div className="sidebar-header">
            <h2>Universidade de Fortaleza</h2>
            <span>Painel da Universidade</span>
          </div>

          <nav className="sidebar-menu">
            <button className="menu-item active">
              🏠 Painel Geral
            </button>
          </nav>
        </div>

        <div className="sidebar-footer">
          <div className="user-info">
            <div className="avatar"></div>
            <div>
              <strong>Luísa Magalhães</strong>
              <p>Editora</p>
            </div>
          </div>

          <button className="logout">Sair</button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="dashboard-content">

        {/* TOPO */}
        <div className="topbar">
          <div>
            <h1>Painel da Universidade</h1>
            <p>
              Gerencie conteúdos, eventos e comunicações do seu campus
            </p>
          </div>

          <button className="btn-primary">
            + Nova Publicação
          </button>
        </div>

        {/* MÉTRICAS */}
        <div className="stats">
          <div className="stat-card">
            <h4>Notícias publicadas</h4>
            <h2>24</h2>
            <span className="positive">+ 12 este mês</span>
          </div>

          <div className="stat-card">
            <h4>Eventos Ativos</h4>
            <h2>8</h2>
            <span className="positive">+ 3 este mês</span>
          </div>

          <div className="stat-card">
            <h4>Visualizações</h4>
            <h2>1.2k</h2>
            <span className="positive">+ 18% este mês</span>
          </div>

          <div className="stat-card">
            <h4>Rascunhos</h4>
            <h2>3</h2>
            <span className="link">Ver Rascunhos</span>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div className="bottom-section">
          <div className="box large">
            <h3>Últimas publicações</h3>
            <div className="placeholder"></div>
          </div>

          <div className="box">
            <h3>Próximos Eventos</h3>
            <div className="placeholder"></div>
          </div>
        </div>

        <div className="box full">
          <h3>Outras informações</h3>
          <div className="placeholder"></div>
        </div>

      </main>
    </div>
  );
}