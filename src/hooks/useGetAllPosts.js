import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../data-services/data";

function useGetAllPosts() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.combined);

  useEffect(() => {
    if (!data.data) {
      dispatch(fetchCards());
    }
  }, []);

  function refetch() {
    dispatch(fetchCards());
  }
  return { data, refetch };
}

export default useGetAllPosts;
