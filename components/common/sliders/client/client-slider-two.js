/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
export default function ClientSliderTwo() {
  const settting = {
    rows: 2,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    cssEase: "linear",
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="fugu-client-section">
      <div className="container">
        <div className="fugu-client-title">
          <h5>Trusted by 1600+ of the world's most popular companies</h5>
        </div>
        <div className="fugu-client-slider2">
          <Slider {...settting}>
            <div className="fugu-brand-logo">
              <img src="/images/logo/prepd-transparent.svg" alt="" />
            </div>
            <div className="fugu-brand-logo">
              <img src="/images/logo/prepd-transparent.svg" alt="" />
            </div>
            <div className="fugu-brand-logo">
              <img src="/images/logo/prepd-transparent.svg" alt="" />
            </div>
            <div className="fugu-brand-logo">
              <img src="/images/logo/prepd-transparent.svg" alt="" />
            </div>
            <div className="fugu-brand-logo">
              <img src="/images/logo/prepd-transparent.svg" alt="" />
            </div>
            <div className="fugu-brand-logo">
              <img src="/images/logo/prepd-transparent.svg" alt="" />
            </div>
            <div className="fugu-brand-logo">
              <img src="/images/logo/prepd-transparent.svg" alt="" />
            </div>
            <div className="fugu-brand-logo">
              <img src="/images/logo/prepd-transparent.svg" alt="" />
            </div>
            <div className="fugu-brand-logo">
              <img src="/images/logo/prepd-transparent.svg" alt="" />
            </div>
            <div className="fugu-brand-logo">
              <img src="/images/logo/prepd-transparent.svg" alt="" />
            </div>
            <div className="fugu-brand-logo">
              <img src="/images/logo/prepd-transparent.svg" alt="" />
            </div>
            <div className="fugu-brand-logo">
              <img src="/images/logo/prepd-transparent.svg" alt="" />
            </div>
            <div className="fugu-brand-logo">
              <img src="/images/logo/prepd-transparent.svg" alt="" />
            </div>
            <div className="fugu-brand-logo">
              <img src="/images/logo/prepd-transparent.svg" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
