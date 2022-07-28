import axios from "axios";
import { ShippingDetailsFormType } from "pages/ShippingDetails/type";

const minifigsApi = axios.create({
  baseURL: "https://fiction-service.com/api/v3/order",
});

export const postOrder = (data: ShippingDetailsFormType) => {
  minifigsApi.post("/", { data });
};
