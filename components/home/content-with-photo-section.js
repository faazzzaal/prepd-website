import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
export default function ContentWithPhotoSection() {
  return (
    <div className="section bg-warning-300 fugu-section-padding2 z-index">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="fugu-apps-thumb" id="rotatetwo">
              <img
                className="wow fadeInUpX"
                data-wow-delay=".10s"
                src="/images/all-img/influencer-feature-img.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-10 d-flex align-items-center">
            <div className="fugu-default-content large-content">
              <h2>Ready to get Chef'd?</h2>
              <p>
                Follow these simple steps to get your order within minutes! 
              </p>
              <ul>
                <li>&#x2022;Download the app </li>
                <li>&#x2022;Browse the menu by Foodie or by food type</li>
                <li>&#x2022;Place your order</li>
                <li>&#x2022;Prepare to be chef'd by your selected foodie</li>
              </ul>

              <div className="fugu-btn-wrap">
                <Link href={'#'} legacyBehavior>
                  <a className="fugu-btn">Get Started</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fugu-shape3">
        <img src="/images/shape/shape2.png" alt="" />
      </div>
    </div>
  );
}
