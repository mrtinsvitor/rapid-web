import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Form, Button, Alert } from "shards-react";

import api from '../utils/api';

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import SidebarInfo from "../components/add-new-post/SidebarInfo";
import EventSubmitModal from "../components/EventSubmitModal/EventSubmitModal";

const CreateEvent = ({ history }) => {
  const [studyFieldList, setStudyFieldList] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [submitModal, toggleSubmitModal] = useState(false);
  const [createdEvent, setCreatedEvent] = useState({});
  const [alert, setAlert] = useState({ visible: false });

  const { register, watch, handleSubmit, errors } = useForm();
  const studyFieldId = watch('studyFieldId');

  useEffect(() => {
    async function getStudyFields() {
      try {
        const courses = await api.get('/study-fields');
        return setStudyFieldList(courses);
      } catch (error) {
        console.log(error);
      }
    }

    getStudyFields();
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
      data.professorId = '1';

      const response = await api.post('/events/create-event', data);
      await setCreatedEvent(response.data);
      return toggleSubmitModal(true);
    } catch (error) {
      return setAlert({ visible: true, message: 'Ocorreu um erro, tente novamente.', type: 'danger' });
    }
  };

  // const addCourse = () => {
  //   if (courseId > 0) {

  //     if (selectedCourses.find(course => courseId == course.id)) {
  //       return;
  //     }

  //     const course = courseList.find(course => courseId == course.id);

  //     if (course)
  //       return setSelectedCourses([...selectedCourses, course]);
  //   }
  // }

  // const removeCourse = (id) => {
  //   setSelectedCourses(selectedCourses.filter(course => course.id !== id));
  // }

  const dismissAlert = (alert) => {
    return setAlert({ ...alert, visible: false });
  }

  return (
    <Container fluid className="main-content-container px-4 pb-4">
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Novo Evento" className="text-sm-left" />
      </Row>

      <>
        <Alert className="mb-3" open={alert.visible} theme={alert.type} dismissible={() => dismissAlert(alert)}>
          {alert.message}
        </Alert>
      </>

      <Form className="add-new-post" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col lg="8" md="12">
            <Editor
              register={register}
              errors={errors}
              studyFieldList={studyFieldList}
              locationList={locationList}
              selectedCourses={selectedCourses}
              studyFieldId={studyFieldId}
            />
          </Col>

          <Col lg="4" md="12">
            <SidebarInfo register={register} errors={errors} watch={watch} />
            <Button type="submit" theme="success" block size="lg">Cadastrar</Button>
          </Col>

        </Row>
      </Form>

      <EventSubmitModal open={submitModal} toggle={toggleSubmitModal} qrCodeValue={createdEvent.id} eventName={createdEvent.name} history={history} />
    </Container>
  );
}

export default CreateEvent;
