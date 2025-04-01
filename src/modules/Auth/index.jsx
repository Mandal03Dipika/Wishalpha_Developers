import { lazy } from "react";

const DeveloperProfile = lazy(() => import("./components/DeveloperProfile"));
const EditProfile = lazy(() => import("./components/EditProfile"));
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));

export { DeveloperProfile, EditProfile, Login, Register };
