import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import UserProfile from "./views/UserProfile";
import CreateEvent from "./views/CreateEvent";
import ComponentsOverview from "./views/ComponentsOverview";
import HomeEventList from "./views/HomeEventList";
import AllEvents from "./views/AllEvents";
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
