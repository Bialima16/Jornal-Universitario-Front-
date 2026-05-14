import React, { useState } from "react";
import PerfilModal from "./PerfilModal";
import "../styles/headerAluno.css";

export default function HeaderAluno() {
  const [open, setOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="logo">UniJornal</div>

      <nav className="nav-links">
        <a href="#">Início</a>
        <a href="#">Notícias</a>
        <a href="#">Eventos</a>
        <a href="#">Explorar</a>
      </nav>

      <div className="header-right">
        <div className="profile" onClick={() => setOpen(!open)}>
          👤 <span>Olá, Bia</span>
        </div>

        <PerfilModal isOpen={open} />
      </div>
    </header>
  );
}