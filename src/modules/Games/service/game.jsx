import axiosClient from '@/library/axios';

export const getAllGamesService = async() => {
    try {
        const res = await axiosClient.get("/api/projects/developer", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        return res.data;
      } catch (error) {
        console.error(error.response?.data || error.message);
        throw error;
      }
}