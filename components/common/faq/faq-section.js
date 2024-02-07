import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function FaqSection() {
  return (
    <div className="section bg-warning-300 fugu-section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 position-relative">
            <div className="fugu-default-content">
              <h2>Ask if you have any questions about us.</h2>
              <p>
                We are ready to answer all your questions. Ask us any questions
                you may have.
              </p>
              <Link href={"/contact"} legacyBehavior>
                <a className="fugu-faq-btn">
                  Don't find the answer? Contact us here
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="fugu-accordion-wrap">
              <div className="fugu-accordion-item">
                <h4>How can I order?</h4>
                <p>
                  Download the Prep'd app here and order directly to your
                  doorstep.  
                </p>
              </div>
              <div className="fugu-accordion-item">
                <h4>Who prepares the food?</h4>
                <p>
                  Each dish is meticulously prepared in our cloud kitchen by top
                  chefs trained by your favorite foodie influencer.  
                </p>
              </div>
              <div className="fugu-accordion-item">
                <h4>How long can my delivery take?</h4>
                <p>
                  Depending on your location, each delivery may take up to 60
                  minutes. Pre-ordered dishes will arrive in the delivery window
                  selected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
