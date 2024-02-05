import { Button, message } from "antd";
import React, { useEffect } from "react";
import useRemoveCard from "../../hooks/useRemoveCard";
import { css } from "@emotion/css";

function RemovePost({ cardId, hover }) {
  const { data, removeCard } = useRemoveCard(cardId);
  function hanldeDelet(cardId) {
    removeCard(cardId);
  }
  useEffect(() => {
    if (data.deletingErr && hover === cardId) {
      message.error("مشکلی در اتصال ایجاد شده است");
    }
  }, [data.deletingErr]);
  return (
    <Button
      data-testid={`removeBtn${cardId}`}
      className={style}
      type="primary"
      block
      onClick={() => hover === cardId && hanldeDelet(cardId)}
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
