import { css } from "@emotion/css";
import useInfo from "../../hooks/useInfo";
import { FloatButton, message } from "antd";
import { useNavigate } from "react-router-dom";
import Error from "../../components/Error";
import SinglePageLoader from "../../components/loading/SinglePageLoader";

function SinglePage() {
  const { info, data, refetch } = useInfo();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  if (data.isLoading) {
    return <SinglePageLoader />;
  }
  if (data.isError && !data.isLoading) {
    message.error("مشکلی در اتصال ایجاد شده است");
    return <Error action={refetch} actionTxt={"تلاش مجدد"} />;
  }
  return (
    <div className={style}>
      <div className="imgWrapper">
        <img loading="lazy" className="img" src={info.img} alt="mainImage" />
      </div>
      <div className="bodyPage">
        <h1 className="title">{info.name}</h1>
        <p className="desc">{info.desc}</p>
      </div>
      <FloatButton
        onClick={goBack}
        data-testid="backLink"
        icon={<img src="/arrow-back.svg" />}
        type="primary"
        style={{
          right: 24,
        }}
      />
    </div>
  );
}

export default SinglePage;
const style = css`
  .imgWrapper {
    position: relative;
    aspect-ratio: 10 / 3;
    height: 100%;
    .img {
      border-radius: 10px;
      position: absolute;
      height: 100%;
      width: 100%;
      inset: 0px;
      object-fit: cover;
      object-position: center center;
      max-height: 500px;
    }
  }
  .title {
    font-size: 2.4rem;
    font-weight: bold;
    color: var(--text);
    font-family: "Sahel FD", serif;
    line-height: 1.8;
    text-align: justify;
  }
  .desc {
    text-align: justify;
    line-height: 30px;
    font-size: 14px;
  }
  .bodyPage {
    margin-top: 1rem;
    background: #e6e6e6;
    padding: 12px;
    border-radius: 5px;
  }
  .ant-float-btn-icon {
    display: flex;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 23px;
    }
  }
`;
