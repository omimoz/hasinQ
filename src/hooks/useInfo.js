import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchSingleCard } from "../data-services/data";

const useInfo = () => {
  const location = useLocation();
  const initialId = location.pathname.replace("/", "");
  const initialData = location?.state;

  const dispatch = useDispatch();
  const data = useSelector((state) => state.combined);
  const [info, setInfo] = useState({
    img: initialData?.img,
    desc: initialData?.desc,
    name: initialData?.name,
    id: initialData?.id,
  });

  useEffect(() => {
    if (!info.id) {
      dispatch(fetchSingleCard(initialId));
    }
  }, []);
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
  function refetch() {
    dispatch(fetchSingleCard(initialId));
  }

  return { info, data, refetch };
};

export default useInfo;
