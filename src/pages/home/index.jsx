import React from "react";
import PostCard from "../../components/card";
import { Row, message } from "antd";
import useGetAllPosts from "../../hooks/useGetAllPosts";
import CardLoader from "../../components/loading/CardLoader";
import Error from "../../components/Error";

function Home() {
  const { data, refetch } = useGetAllPosts();
  if (data && data.isLoading) {
    return (
      <Row gutter={[16, 24]}>
        {new Array(8).fill(null).map((_, index) => (
          <CardLoader id={index} key={index} />
        ))}
      </Row>
    );
  }
  if (data && data.isError && !data.isLoading) {
    message.error("مشکلی در اتصال ایجاد شده است");
    return <Error action={refetch} actionTxt={"تلاش مجدد"} />;
  }
  return (
    <div>
      <Row gutter={[16, 24]}>
        {data.data?.map((card) => (
          <PostCard
            key={card?.id}
            id={card?.id}
            name={card?.name}
            shortDesc={card?.shortDesc}
            desc={card?.desc}
            img={card?.img}
          />
        ))}
      </Row>
    </div>
  );
}

export default Home;
