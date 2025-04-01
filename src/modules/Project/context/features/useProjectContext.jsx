import { useContext } from "react";
import ProjectContext from "../ProjectContext";

const useProjectContext = () => {
  return useContext(ProjectContext);
};

export default useProjectContext;
