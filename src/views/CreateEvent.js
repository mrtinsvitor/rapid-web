import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Form, Button } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import SidebarCategories from "../components/add-new-post/SidebarCategories";

import api from '../utils/api';

const CreateEvent = () => {
  const [courseList, setCourseList] = useState([]);
  const [locationList, setLocationList] = useState([]);

  const { register, watch, handleSubmit, errors } = useForm();

  useEffect(() => {
    async function getCourses() {
      try {
        const courses = await api.get('/courses');
        return setCourseList(courses);
      } catch (error) {
        console.log(error);
      }
    }

    getCourses();
  }, []);

  useEffect(() => {
    async function getLocations() {
      try {
        const locations = await api.get('/locals');
        return setLocationList(locations);
      } catch (error) {
        console.log(error);
      }
    }

    getLocations();
  }, []);

  const onSubmit = async data => {
    try {
      const response = await api.post('/events/create-event', data);
      console.log('response', response);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Container fluid className="main-content-container px-4 pb-4">
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Novo Evento" className="text-sm-left" />
      </Row>

      <Form className="add-new-post" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col lg="8" md="12">
            <Editor register={register} errors={errors} courseList={courseList} locationList={locationList} watch={watch} />
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
