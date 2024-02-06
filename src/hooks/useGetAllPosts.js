import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../data-services/data";

function useGetAllPosts() {
  const dispatch = useDispatch();
  //get response of dispatch
  const data = useSelector((state) => state.combined);
  //use dispatch for first load to get all cards
  useEffect(() => {
    if (!data.data) {
      dispatch(fetchCards());
    }
  }, []);
  //if somthing change and want to rerender to get new values this function useful it already use in retry when err happening to get data without reload page
  function refetch() {
    dispatch(fetchCards());
  }
  return { data, refetch };
}

export default useGetAllPosts;
