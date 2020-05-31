import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button
} from "shards-react";

const NotFoundEvent = () => {
  return (
    <div className="error">
      <div
        className="error__content"
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}
      >
        <h2>404</h2>
        <h3 style={{ fontSize: '1.8rem' }}>
          Parece que você não cadastrou nenhum evento ainda
        </h3>

        <Link to="cadastrar-evento">
          <Button pill className="mb-4" size="md">
            <i className="material-icons" style={{ marginRight: '7px' }}>add</i>
            Cadastrar Um Evento
          </Button>
        </Link>

        <img
          src={require("../../assets/images/relaxing-guy.svg")}
          alt="Homem relaxando no parque"
          style={{ alignSelf: 'center' }}
          width="35%"
        />
      </div>
    </div>
  );
}

export default NotFoundEvent;