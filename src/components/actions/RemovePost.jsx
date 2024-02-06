import { Button, message } from "antd";
import React, { useEffect } from "react";
import useRemoveCard from "../../hooks/useRemoveCard";
import { css } from "@emotion/css";

function RemovePost({ cardId, hover }) {
  const { data, removeCard } = useRemoveCard(cardId);
  //function hanldeDelet(cardId) { ... }: This line defines a function called hanldeDelet that takes a cardId parameter.
  function hanldeDelet(cardId) {
    removeCard(cardId);
  }
  //useEffect(() => { ... }, [data.deletingErr]);: This line uses the useEffect hook to handle the error message when there is an error in deleting the card. The hook takes a function that contains the logic to handle the error message, and an array of dependencies, which in this case is [data.deletingErr].
  useEffect(() => {
    if (data.deletingErr && hover === cardId) {
      message.error("مشکلی در اتصال ایجاد شده است");
    }
  }, [data.deletingErr]);
  return (
    <Button
      id={`Btn${cardId}`}
      className={style}
      type="primary"
      block
      onClick={() => hanldeDelet(cardId)}
      loading={hover === cardId && data.deleting}
    >
      <div>حذف پست</div>
    </Button>
  );
}

export default RemovePost;
const style = css`
  display: flex;
  justify-content: center;
`;
