/* eslint-disable @next/next/no-img-element */
import dynamic from 'next/dynamic';
import { useState } from 'react';
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });

export default function VideoSectionTwo() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="section bg-warning-400 fugu-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-1 order-lg-2">
            <div
              className="fugu-video-thumb wow fadeInUpX"
              data-wow-delay=".20s"
            >
              <img src="/images/all-img/video-thumb.png" alt="" />
              <div className="fugu-popup">
                <img src="/images/all-img/video-btn.png" alt="" />
                <div class="fugu-popup">
                  <div
                    class="fugu-play-btn"
                    style={{ position: 'relative', top: '0.8rem' }}
                  >
                    <img src="/images/all-img/play-btn.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-10 d-flex align-items-center">
            <div className="fugu-default-content large-content">
              <h2>Title Content</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                fugiat ipsa labore dolores vero error, cum fugit sit explicabo,
                ab illo culpa ad vel expedita nulla sunt eum, obcaecati nobis.
              </p>
              <div className="fugu-icon-list">
                <ul>
                  <li>
                    <img src="/images/svg/check1.svg" alt="" />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </li>
                  <li>
                    <img src="/images/svg/check1.svg" alt="" />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </li>
                  <li>
                    <img src="/images/svg/check1.svg" alt="" />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="E1xkXZs0cAQ"
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
