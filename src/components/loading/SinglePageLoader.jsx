import { css } from "@emotion/css";
import { Skeleton } from "antd";
import React from "react";

function SinglePageLoader() {
  return (
    <div className={style}>
      <div>
        <Skeleton.Image active={true} block />
      </div>
      <div className="bodyPage">
        <Skeleton paragraph={{ rows: 10 }} />
      </div>
    </div>
  );
}

export default SinglePageLoader;
const style = css`
  .ant-skeleton {
    width: 100% !important;
  }
  .ant-skeleton-image {
    width: 100% !important;
    height: 500px !important;
  }
  .btn {
    padding: 0 12px;
  }
  .bodyPage {
    margin-top: 1rem;
    background: #e6e6e6;
    padding: 12px;
    border-radius: 5px;
  }
`;
