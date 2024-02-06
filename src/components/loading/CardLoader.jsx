import React from "react";
import { Card, Col, Skeleton } from "antd";
import { css } from "@emotion/css";
const { Meta } = Card;
function CardLoader({ id }) {
  return (
    <Col
      className={style}
      span={24}
      sm={{ span: 12 }}
      md={{ span: 8 }}
      lg={{ span: 6 }}
      key={id}
    >
      <Card
        cover={<Skeleton.Image active={true} />}
        actions={[
          <Skeleton.Button
            className="btn"
            active={true}
            size={"large"}
            shape={"default"}
            block={true}
          />,
        ]}
      >
        <Skeleton loading={true} active>
          <Meta title="Card title" description="This is the description" />
        </Skeleton>
      </Card>
    </Col>
  );
}

export default CardLoader;
const style = css`
  .ant-skeleton-image {
    width: 100% !important;
    height: 200px !important;
  }
  .btn {
    padding: 0 12px;
  }
`;
