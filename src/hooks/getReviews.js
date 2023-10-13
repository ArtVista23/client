import { useQuery } from "react-query";
import axios from "axios";

const fetchReviews = ({ queryKey }) => {
  const model_id = queryKey[1];
  const data = axios.get(`${import.meta.env.VITE_HOST}/api/user/getReviews`, {
    params: {
      model_id: model_id,
    },
  });
  return data;
};

export const getReviews = (model_id) => {
  return useQuery(["getReviews", model_id], fetchReviews, {
    select: (data) => {
      const details = data.data.map((item) => item);
      return details;
    },
    refetchOnWindowFocus: false,
  });
};
