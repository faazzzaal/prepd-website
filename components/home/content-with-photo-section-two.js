/* eslint-disable @next/next/no-img-element */

export default function ContentWithPhotoSectionTwo() {
  return (
    <div className="section bg-warning-300 fugu-section-padding z-index">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-10 d-flex align-items-center">
            <div className="fugu-default-content large-content">
              <h2>Are you a Foodie Influencer Interested in Joining?</h2>
              <p>
                If you're looking to join Prep'd and share your dishes with your
                followers, we're ready! Joining Prep'd allows you to:
              </p>
              <div className="fugu-icon-list2">
                <ul>
                  <li>
                    <div className="fulo-list-icon">
                      <img src="/images/svg/download.svg" alt="" />
                    </div>
                    {/* <h4>Title Content</h4> */}
                    <p>
                      Connect directly with your followers and interact with
                      them via your food
                    </p>
                  </li>
                  <li>
                    <div className="fulo-list-icon">
                      <img src="/images/svg/link.svg" alt="" />
                    </div>
                    {/* <h4>Title Content</h4> */}
                    <p>
                      Tech enabled recipe management with 24/7 support staff
                    </p>
                  </li>
                  <li>
                    <div className="fulo-list-icon">
                      <img src="/images/svg/lightning-bolt.svg" alt="" />
                    </div>
                    {/* <h4>Title Content</h4> */}
                    <p>
                      App and Web Based dashboard to track sales and revenue
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="fugu-apps-thumb fugu-apps-thumb2"
              id="rotatethree"
              style={{ transform: 'rotate(0deg)' }}
            >
              <img
                className="wow fadeInUpX"
                data-wow-delay=".10s"
                src="/images/all-img/account-feature-img.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="fugu-shape5" style={{ zIndex: '-1' }}>
        <img src="/images/shape/shape2.png" alt="" />
      </div>
    </div>
  );
}
