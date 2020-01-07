import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput, FormTextarea, FormGroup, Row, Col, Button } from "shards-react";

import placeholderEventImage from '../../assets/event-image-placeholder.png';

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const Editor = () => (
  <Card small className="mb-3">
    <CardBody>
      <Form className="add-new-post">
        <FormGroup>
          <label htmlFor="title" className="input-required">Título do Evento</label>
          <FormInput id="title" size="md" className="mb-3" placeholder="Digite o título do evento" required />
        </FormGroup>

        <FormGroup>
          <label htmlFor="target-audience">Público Alvo</label>
          <FormInput id="target-audience" size="md" className="mb-3" placeholder="Digite o público alvo separados por vírgula" />
        </FormGroup>

        <FormGroup>
          <label htmlFor="description">Descrição</label>
          <FormTextarea id="description" size="md" placeholder="Digite a descrição do evento" onChange={null} />
        </FormGroup>

        <FormGroup>
          <label htmlFor="cover-image">Foto de Capa</label>
          <Row>
            <Col>
              <div style={{ textAlign: 'center' }}>
                <img src={placeholderEventImage} alt="Foto de Capa do Evento" style={{ maxWidth: '100%' }} />
              </div>
            </Col>
            <Col style={{ display: 'flex', alignSelf: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <div className="custom-file mb-3">
                <input type="file" className="custom-file-input" id="cover-image" />
                <label className="custom-file-label" htmlFor="cover-image">
                  Selecionar foto...
                </label>
              </div>
              <div>
                <Button theme="danger" pill outline block>Excluir Foto</Button>
              </div>
            </Col>
          </Row>
        </FormGroup>
      </Form>
    </CardBody>
  </Card>
);

export default Editor;
