import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient("");

const useResults = () =>
  useQuery({
    queryKey: ["results"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60, //1 hr
  });

export default useResults;
