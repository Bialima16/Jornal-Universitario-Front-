import React from "react";
import "../styles/profileDropdown.css";

export default function ProfileDropdown({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="profile-dropdown">
      <div className="dropdown-item">👤 Meu Perfil</div>
      <div className="dropdown-item">✏️ Editar Perfil</div>
      <div className="dropdown-item logout">🚪 Sair</div>
    </div>
  );
}