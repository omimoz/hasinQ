import React, { useState } from "react";
import { Card, Col } from "antd";
import { Link } from "react-router-dom";
import RemovePost from "../../components/actions/RemovePost";
import { css } from "@emotion/css";
const { Meta } = Card;
function PostCard({ id, name, desc, img, shortDesc }) {
  //this state help to idendify which card action on that I think we can use ref also but I preffer this way
  const [hover, setHover] = useState();
  return (
    <Col
      data-testid="card"
      className={style}
      span={24}
      sm={{ span: 12 }}
      md={{ span: 8 }}
      lg={{ span: 6 }}
      key={id}
    >
      <Link
        to={`${id}`}
        state={{ id, name, desc, img }}
        data-testid={`cardLink${id}`}
      >
        <Card
          cover={<img alt="example" src={img} />}
          actions={[
            <div
              onMouseEnter={() => {
                setHover(id);
              }}
              onMouseLeave={() => setHover("")}
              key={`delete/${id}`}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <RemovePost cardId={id} hover={hover} />
            </div>,
          ]}
        >
          <Meta title={name} description={shortDesc} />
        </Card>
      </Link>
    </Col>
  );
}

export default PostCard;
const style = css`
  ul.ant-card-actions {
    padding: 0 10px !important;
  }
`;
