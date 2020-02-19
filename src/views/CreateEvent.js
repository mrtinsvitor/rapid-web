import React, {useEffect} from "react";
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Form, Button } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import SidebarCategories from "../components/add-new-post/SidebarCategories";

const CreateEvent = () => {
  const { register, watch, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Container fluid className="main-content-container px-4 pb-4">
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Novo Evento" className="text-sm-left" />
      </Row>

      <Form className="add-new-post" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col lg="8" md="12">
            <Editor register={register} errors={errors} />
          </Col>

          <Col lg="4" md="12">
            <SidebarCategories register={register} errors={errors} watch={watch} />
            <Button type="submit" theme="success" block size="lg">Cadastrar</Button>
          </Col>

        </Row>
      </Form>
    </Container>
  );
}

export default CreateEvent;
