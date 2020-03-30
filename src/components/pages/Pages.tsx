import React from "react";
import { TopPage } from './top/TopPage';
import { WorkPage } from './work/WorkPage';
import { ProgrammingPage } from "./programming/ProgrammingPage";
import { ApplicationPage } from "./application/ApplicationPage";

export const Pages = {
  top: {
    path: "/",
    name: "natsuume Home",
    Component: <TopPage></TopPage>,
  },
  work: {
    path: "/work",
    name: "Work",
    Component: (<WorkPage></WorkPage>),
  },
  programming: {
    path: "/programming",
    name: "Programming",
    Component: (<ProgrammingPage></ProgrammingPage>),
  },
  application: {
    path: "/application",
    name: "Application",
    Component: (<ApplicationPage></ApplicationPage>),
  }
} as const;