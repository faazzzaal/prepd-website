/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { useState } from "react";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function VideoSectionThree() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="section bg-warning-200 fugu-section-padding2">
      <div className="container">
        <div className="fugu-section-title2">
          <div className="row">
            <div className="col-lg-6">
              <h2>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit
              </h2>
            </div>
            <div className="col-lg-5 offset-lg-1 d-flex align-items-center">
              <p>
                por tincidunt. Fusce vitae vehicula velit. Nam non urna
                consectetur elit sollicitudin vestibulum sed ac erat. Nunc diam
                eros, dapibus ac mauris nec
              </p>
            </div>
          </div>
        </div>
        <div
          className="fugu-video-thumb fugu-video-thumb2 wow fadeInUpX"
          data-wow-delay="0.10s"
        >
          <img src="/images/all-img/about/aboutus.jpeg" alt="" />
          <div className="fugu-popup">
            <img src="/images/all-img/v2/video-btn.png" alt="" />
            <div className="fugu-play-btn" onClick={() => setOpen(true)}>
              <img src="/images/all-img/play-btn.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        // videoId="E1xkXZs0cAQ"
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
