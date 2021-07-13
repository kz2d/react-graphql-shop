import { useQuery } from "@apollo/client";

const Query = ({ children, Querry, varr = {} }) => {
  const resp = useQuery(Querry, { errorPolicy: "all", variables: varr });
  const { data, loadingg } = resp;
  let loading = loadingg;
  if (typeof data == "undefined") {
    loading = true;
  }
  return children ? children(data, loading) : null;
};

export default Query;
