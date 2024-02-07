import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
export default function FeatureSectionTwo() {
  return (
    <div className="section bg-warning-400 fugu-section-padding3">
      <div className="container">
        <div className="fugu-section-title title-large">
          <h2>Prep'd, Sealed, Delivered, I'm yours!</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div
              className="fugu-iconbox-wrap wow fadeInUpX"
              data-wow-delay="0s"
            >
              <div className="fugu-iconbox-icon">
                {/* <img src="/images/all-img/icon1.png" alt="" /> */}
              </div>
              <div className="fugu-iconbox-data">
                <h4>Prep'd Foodies</h4>
                <p>
                  Prep'd Foodie Influencers are the force behind the platform,
                  they are the artists behind every dish design, and the
                  catalysts of the marketplace.
                </p>
                <Link href={'/'} legacyBehavior>
                  <a className="fugu-icon-btn">
                    Discover More{' '}
                    <img src="/images/svg/arrow-black-right.svg" alt="" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="fugu-iconbox-wrap wow fadeInUpX"
              data-wow-delay=".20s"
            >
              <div className="fugu-iconbox-icon">
                {/* <img src="/images/all-img/icon2.png" alt="" /> */}
              </div>
              <div className="fugu-iconbox-data">
                <h4>Prep'd Menu</h4>
                <p>
                  The Prep'd menu is designed by our Foodies with their
                  followers in mind. Through the Prep'd platform, you'll get to
                  taste meals you've seen but never tried!
                </p>
                <Link href={'/'} legacyBehavior>
                  <a className="fugu-icon-btn">
                    Discover More{' '}
                    <img src="/images/svg/arrow-black-right.svg" alt="" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
