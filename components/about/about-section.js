/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
export default function AboutSection() {
  return (
    <div className="fugu-about-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-6">
            <div className="fugu-about-thumb">
              <img
                className="wow fadeInLeft"
                data-wow-delay=".10s"
                src="/images-placeholder/all-img/about/about-thumb1.png"
                alt=""
              />
              <div className="fugu-about-thumb2">
                <img
                  className="wow fadeInUpX"
                  data-wow-delay=".30s"
                  src="/images-placeholder/all-img/about/about-thumb2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 col-md-11 d-flex align-items-center">
            <div className="fugu-default-content">
              <h2>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </h2>
              <p>
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
              <p>
                but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and
                more rec
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
