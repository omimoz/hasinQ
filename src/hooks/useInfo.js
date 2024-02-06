import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchSingleCard } from "../data-services/data";

const useInfo = () => {
  //two ways user access to single page info direct and click on card if click on card we don't use api call just pass data from parent but if user directly come we need to id so we use uselocation hook to get id from url
  const location = useLocation();
  const initialId = location.pathname.replace("/", "");
  //this data passed from lINK component
  const initialData = location?.state;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.combined);
  const [info, setInfo] = useState({
    img: initialData?.img,
    desc: initialData?.desc,
    name: initialData?.name,
    id: initialData?.id,
  });
  //if info.id is exit we dont need to get data it's already exist
  useEffect(() => {
    if (!info.id) {
      dispatch(fetchSingleCard(initialId));
    }
  }, [initialId]);
  //when dispatch done we use set state to set new value we use useState beacuse we don't want use dispatch when user come from home page
  useEffect(() => {
    if (!info.id && data.data) {
      setInfo((prevInfo) => ({
        ...prevInfo,
        img: data.data.img,
        desc: data.data.desc,
        name: data.data.name,
        id: data.data.id,
      }));
    }
  }, [data]);
  //refetch to load again data without reload page it's mostly use in Error handling
  function refetch() {
    dispatch(fetchSingleCard(initialId));
  }
  console.log(initialId);
  return { info, data, refetch };
};

export default useInfo;
