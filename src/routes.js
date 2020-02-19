import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Login from './views/Login';
import SignUp from "./views/SignUp";

import UserProfile from "./views/UserProfile";
import CreateEvent from "./views/CreateEvent";
import ComponentsOverview from "./views/ComponentsOverview";
import HomeEventList from "./views/HomeEventList";
import AllEvents from "./views/AllEvents";
import MyEvents from "./views/MyEvents";
import Event from "./views/Event";

export default {
  open: [
    {
      path: "/login",
      component: Login
    },
    {
      path: "/registrar",
      component: SignUp
    },
  ],
  closed: [
    {
      path: "/",
      exact: true,
      layout: DefaultLayout,
      component: () => <Redirect to="/login" />
    },

    {
      path: "/eventos",
      layout: DefaultLayout,
      component: HomeEventList
    },
    {
      path: "/meus-eventos",
      layout: DefaultLayout,
      component: MyEvents
    },
    {
      path: "/todos-eventos",
      layout: DefaultLayout,
      component: AllEvents
    },
    {
      path: "/cadastrar-evento",
      layout: DefaultLayout,
      component: CreateEvent
    },
    {
      path: "/detalhes-evento/:id",
      layout: DefaultLayout,
      component: Event
    },
    {
      path: "/components-overview",
      layout: DefaultLayout,
      component: ComponentsOverview
    },
    {
      path: "/perfil",
      layout: DefaultLayout,
      component: UserProfile
    },
  ]
};