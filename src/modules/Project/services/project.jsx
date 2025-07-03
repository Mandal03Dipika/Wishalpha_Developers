import axiosClient from "@/library/axios";

export const createProjectService = async (payLoad) => {
    try {
      const res = await axiosClient.post("/api/project/create", payLoad, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      return res.data;
    } catch (error) {
      console.error(error.response?.data || error.message);
      throw error;
    }
  };
  
  export const uploadProjectService = async (payLoad) => {
    try {
      const res = await axiosClient.post("/api/project/upload", payLoad, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "multipart/form-data", 
        },
      });
      return res.data;
    } catch (error) {
      console.error(error.response?.data || error.message);
      throw error;
    }
  };