import axiosAuth from "../lib/axios";

const getCountriesBySubregion = async (subregion) => {
  try {
    const response = await axiosAuth.get(
      `/subregion/${subregion}?fields=name`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};


export default getCountriesBySubregion;