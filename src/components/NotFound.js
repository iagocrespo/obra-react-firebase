import React from "react";
import { Link } from "@reach/router";

const NotFound = props => (
  <>
    <div className="emptywhite-hack" />
    <div className="notfound-container">
      <h2 className="nf-text">Erro 404! Páxina non atopada!</h2>
      <div className="empty-hack" />
      <nav className="return-home">
        <Link to="/" className="link-container">
          Volver ó inicio
        </Link>
      </nav>
    </div>
  </>
);

export default NotFound;
