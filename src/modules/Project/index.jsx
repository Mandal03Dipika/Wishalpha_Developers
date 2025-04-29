import { lazy } from "react";

const CreateProject = lazy(() => import("./components/CreateProject"));
const Projects = lazy(() => import("./components/Projects"));

export { CreateProject, Projects };
