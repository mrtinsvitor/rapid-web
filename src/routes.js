import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import UserProfile from "./views/UserProfile";
import CreateEvent from "./views/CreateEvent";
import ComponentsOverview from "./views/ComponentsOverview";
import Events from "./views/Events";
import MyEvents from "./views/MyEvents";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/eventos" />
  },
  {
    path: "/eventos",
    layout: DefaultLayout,
    component: Events
  },
  {
    path: "/meus-eventos",
    layout: DefaultLayout,
    component: MyEvents
  },
  {
    path: "/cadastrar-evento",
    layout: DefaultLayout,
    component: CreateEvent
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
];
