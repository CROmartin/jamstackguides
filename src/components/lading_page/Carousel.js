import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import CarouselCard from "./CarouselCard"
import Left from "../../svg/double-left.svg"
import Right from "../../svg/double-right.svg"

const CarouselStyle = styled.div`
  margin-bottom: 64px;
  .slick-loading .slick-list {
    background: #fff url("./ajax-loader.gif") center center no-repeat;
  }

  /* Icons */
  @font-face {
    font-family: "slick";
    font-weight: normal;
    font-style: normal;

    src: url("./fonts/slick.eot");
    src: url("./fonts/slick.eot?#iefix") format("embedded-opentype"),
      url("./fonts/slick.woff") format("woff"),
      url("./fonts/slick.ttf") format("truetype"),
      url("./fonts/slick.svg#slick") format("svg");
  }
  /* Arrows */
  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: block;

    width: 20px;
    height: 100%;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    /* transform: translate(0, -50%); */

    cursor: pointer;

    color: transparent;
    border: none;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    /* color: transparent;
    outline: none;
    background: transparent; */
  }
  .slick-prev:hover:before,
  .slick-prev:focus:before,
  .slick-next:hover:before,
  .slick-next:focus:before {
    opacity: 1;
  }
  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before {
    opacity: 0.25;
  }

  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 20px;
    line-height: 1;

    opacity: 0.75;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev {
    left: -25px;
  }
  [dir="rtl"] .slick-prev {
    right: -25px;
    left: auto;
  }
  .slick-prev:before {
    content: "←";
  }
  [dir="rtl"] .slick-prev:before {
    content: "→";
  }

  .slick-next {
    right: -25px;
  }
  [dir="rtl"] .slick-next {
    right: auto;
    left: -25px;
  }
  .slick-next:before {
    content: "→";
  }
  [dir="rtl"] .slick-next:before {
    content: "←";
  }

  /* Dots */
  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .slick-dots {
    position: absolute;
    bottom: -40px;

    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;

    text-align: center;
  }
  .slick-dots li {
    position: relative;

    display: inline-block;

    width: 20px;
    height: 20px;
    margin: 0 5px;
    padding: 0;

    cursor: pointer;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;

    display: block;

    width: 20px;
    height: 20px;
    padding: 5px;

    cursor: pointer;

    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
  }
  .slick-dots li button:hover,
  .slick-dots li button:focus {
    outline: none;
  }
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 1;
  }
  .slick-dots li button:before {
    font-family: "slick";
    font-size: 24px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: "⦿";
    text-align: center;

    opacity: 0.25;
    color: #728b8c;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #728b8c;
  }
  .slick-slider {
    position: relative;

    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;

    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;

    content: "";
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
  }
  [dir="rtl"] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;

    height: auto;

    border: 1px solid transparent;
  }
  /* .slick-arrow.slick-hidden {
    display: none;
  } */

  /// moj css
  .slick-slider {
    width: 81.65%; // POPRAVI
    max-width: 988px; // OVO JE OFF
    margin: auto;
  }

  .slick-arrow {
    background: rgba(47, 72, 88, 0.5);
    opacity: 0 !important;
    transition: opacity 1s;
  }

  .slick-slider {
    :hover {
      cursor: pointer;

      .slick-arrow {
        opacity: 1 !important;
        transition: opacity 1s;
      }
    }

    @media (max-device-width: 780px) {
      .slick-arrow {
        opacity: 1 !important;
        transition: opacity 1s;
      }
    }
  }

  .inline-block {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .slick-next {
    transform: scale(2) translate(-21px, -26%);

    :before {
      display: none;
    }
    color: #f2f6ef;
  }
  .slick-prev {
    transform: scale(2) translate(22px, -26%);
    z-index: 1;

    :before {
      display: none;
    }

    color: #f2f6ef;
  }
`

const Holder = styled.div`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  flex-direction: column !important;
  height: 48.5% !important;
  /* transform: scale(2) translate(0, -39px) !important; */
  opacity: 1 !important;
  /* border-radius: 2px; */
`
function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    arrow: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <Holder>
        <Right />
      </Holder>
    ),
    prevArrow: (
      <Holder>
        <Left />
      </Holder>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <CarouselStyle>
      <Slider {...settings}>
        <div>
          <CarouselCard />
        </div>
        <div>
          <CarouselCard />
        </div>
        <div>
          <CarouselCard />
        </div>
        <div>
          <CarouselCard />
        </div>
        <div>
          <CarouselCard />
        </div>
        <div>
          <CarouselCard />
        </div>
      </Slider>
    </CarouselStyle>
  )
}

export default Carousel
