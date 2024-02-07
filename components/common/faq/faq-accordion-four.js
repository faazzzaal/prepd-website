/* eslint-disable @next/next/no-img-element */
import { Accordion } from "react-bootstrap";

export default function FaqAccordionFour() {
  return (
    <div className="fugu--faq-section fugu--section-padding white-version">
      <div className="container">
        <div className="fugu--section-title">
          <div className="fugu--default-content content-sm content-black">
            <h2>If you need to know anything about NFTs, just ask us!</h2>
          </div>
        </div>
        <div className="fugu--accordion-one accordion-five">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>How can I order?</Accordion.Header>
              <Accordion.Body>
                Download the Prep'd app here and order directly to your
                doorstep.  
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Who prepares the food?</Accordion.Header>
              <Accordion.Body>
                Each dish is meticulously prepared in our cloud kitchen by top
                chefs trained by your favorite foodie influencer. .
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                How long can my delivery take?
              </Accordion.Header>
              <Accordion.Body>
                Depending on your location, each delivery may take up to 60
                minutes. Pre-ordered dishes will arrive in the delivery window
                selected.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
