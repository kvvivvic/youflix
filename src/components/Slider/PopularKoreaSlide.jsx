import React from "react";
import Slider from "react-slick";
import PopularKorea from "./PopularKorea";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.module.css";
import NextArrow from "./Arrow/NextArrow";
import PrevArrow from "./Arrow/PrevArrow";

const PopularKoreaSlide = ({ popular }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true, // 자동 스크롤 사용 여부
    autoplaySpeed: 5000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    vertical: false, // 세로 방향 슬라이드 옵션
    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 960, //화면 사이즈 960px일 때
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768, //화면 사이즈 768px일 때
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Slider className=" max-w-screen-2xl mx-auto relative" {...settings}>
      {popular.map((popular) => {
        return <PopularKorea key={popular.id} popular={popular} />;
      })}
    </Slider>
  );
};

export default PopularKoreaSlide;
