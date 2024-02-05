import { css } from "@emotion/css";
import { Button } from "antd";
import React from "react";

function Error({ action, actionTxt }) {
  return (
    <div className={style}>
      <div className="imgWrapper">
        <img className="img" src="/Error.png" />
      </div>

      <div>
        <Button onClick={action}>
          <div>{actionTxt}</div>
        </Button>
      </div>
    </div>
  );
}

export default Error;
const style = css`
  height: 86.3vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .imgWrapper {
    position: relative;
    aspect-ratio: 10/3;
    height: 100%;
    max-width: 350px;
    max-height: 50vh;
    width: 100%;
    margin: 0 auto;
    .img {
      border-radius: 10px;
      position: absolute;
      height: 100%;
      width: 100%;
      inset: 0px;
      object-fit: contain;
      object-position: center center;
      max-height: 500px;
    }
  }
`;
