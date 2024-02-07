/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
export default function TestimonialSliderOne() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="fugu-testimonial-section fugu-section-padding2">
      <div className="container">
        <div className="fugu-section-title title-large">
          <h2>User feedback</h2>
        </div>
        <div className="fugu-testimonial-slider">
          <Slider {...settings}>
            <div className="fugu-testimonial-card">
              <div className="fugu-testimonial-author-wrap">
                <div className="fugu-testimonial-author-thumb">
                  <img src="/images/all-img/testimonial1.png" alt="" />
                </div>
                <div className="fugu-testimonial-author-data">
                  <h5>Marcel Gafam</h5>
                  <span>@margafam</span>
                </div>
              </div>
              <h4>Very satisfied 😊</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                fugiat ipsa labore dolores vero error, cum fugit sit explicabo,
                ab illo culpa ad vel expedita nulla sunt eum, obcaecati nobis.
              </p>
            </div>
            <div className="fugu-testimonial-card">
              <div className="fugu-testimonial-author-wrap">
                <div className="fugu-testimonial-author-thumb">
                  <img src="/images/all-img/testimonial2.png" alt="" />
                </div>
                <div className="fugu-testimonial-author-data">
                  <h5>Patrick Perfetto</h5>
                  <span>@patrickfetto</span>
                </div>
              </div>
              <h4>Really happy with the app 💰</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                fugiat ipsa labore dolores vero error, cum fugit sit explicabo,
                ab illo culpa ad vel expedita nulla sunt eum, obcaecati nobis.
              </p>
            </div>
            <div className="fugu-testimonial-card">
              <div className="fugu-testimonial-author-wrap">
                <div className="fugu-testimonial-author-thumb">
                  <img src="/images/all-img/testimonial3.png" alt="" />
                </div>
                <div className="fugu-testimonial-author-data">
                  <h5>Alex Zansir</h5>
                  <span>@alexzan</span>
                </div>
              </div>
              <h4>I love it! ❤️</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                fugiat ipsa labore dolores vero error, cum fugit sit explicabo,
                ab illo culpa ad vel expedita nulla sunt eum, obcaecati nobis.
              </p>
            </div>
            <div className="fugu-testimonial-card">
              <div className="fugu-testimonial-author-wrap">
                <div className="fugu-testimonial-author-thumb">
                  <img src="/images/all-img/testimonial1.png" alt="" />
                </div>
                <div className="fugu-testimonial-author-data">
                  <h5>Marcel Gafam</h5>
                  <span>@margafam</span>
                </div>
              </div>
              <h4>Very satisfied 😊</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                fugiat ipsa labore dolores vero error, cum fugit sit explicabo,
                ab illo culpa ad vel expedita nulla sunt eum, obcaecati nobis.
              </p>
            </div>
            <div className="fugu-testimonial-card">
              <div className="fugu-testimonial-author-wrap">
                <div className="fugu-testimonial-author-thumb">
                  <img src="/images/all-img/testimonial2.png" alt="" />
                </div>
                <div className="fugu-testimonial-author-data">
                  <h5>Patrick Perfetto</h5>
                  <span>@patrickfetto</span>
                </div>
              </div>
              <h4>Really happy with the app 💰</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                fugiat ipsa labore dolores vero error, cum fugit sit explicabo,
                ab illo culpa ad vel expedita nulla sunt eum, obcaecati nobis.
              </p>
            </div>
            <div className="fugu-testimonial-card">
              <div className="fugu-testimonial-author-wrap">
                <div className="fugu-testimonial-author-thumb">
                  <img src="/images/all-img/testimonial3.png" alt="" />
                </div>
                <div className="fugu-testimonial-author-data">
                  <h5>Alex Zansir</h5>
                  <span>@alexzan</span>
                </div>
              </div>
              <h4>I love it! ❤️</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                fugiat ipsa labore dolores vero error, cum fugit sit explicabo,
                ab illo culpa ad vel expedita nulla sunt eum, obcaecati nobis.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
