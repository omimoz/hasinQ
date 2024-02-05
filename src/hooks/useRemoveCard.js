import { useDispatch, useSelector } from "react-redux";
import { deleteCard } from "../data-services/data";
function useRemoveCard(cardId) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.combined);
  function removeCard(cardId) {
    dispatch(deleteCard(cardId));
  }

  return { data, removeCard };
}

export default useRemoveCard;
