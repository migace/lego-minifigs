import axios from "axios";

const minifigsApi = axios.create({
  baseURL: "https://rebrickable.com/api/v3/lego/minifigs",
  headers: {
    Authorization: `key ${process.env.REACT_APP_REPRICABLE_API_KEY}`,
  },
});

export const getMinifigs = (search: string) => {
  const params = new URLSearchParams({ search });

  return minifigsApi
    .get("/", { params })
    .then((response) => response.data.results);
};

export const getMinifigParts = (set_num: string) =>
  minifigsApi
    .get(`/${set_num}/parts/`)
    .then((response) => response.data.results);
