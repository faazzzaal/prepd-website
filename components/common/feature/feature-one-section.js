/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function FeatureOneSection() {
  return (
    <div className="section bg-warning-200 fugu-section-padding3">
      <div className="container">
        <div className="fugu-section-title">
          <h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div
              className="fugu-iconbox-wrap2 wow fadeInUpX"
              data-wow-delay="0s"
            >
              <div className="fugu-iconbox-icon2">
                <img src="/images/all-img/v2/icon1.png" alt="" />
              </div>
              <div className="fugu-iconbox-data2">
                <h4>Whe Class aptent taciti sociosqu ad</h4>
                <p>
                  sagittis efficitur accumsan. Etiam commodo lectus dui, in
                  suscipit
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="fugu-iconbox-wrap2 wow fadeInUpX"
              data-wow-delay="0.20s"
            >
              <div className="fugu-iconbox-icon2">
                <img src="/images/all-img/v2/icon2.png" alt="" />
              </div>
              <div className="fugu-iconbox-data2">
                <h4> Lorem Ipsum passage</h4>
                <p>
                  Sed auctor sed erat a sodales. Class aptent taciti sociosqu ad
                  litora torquent
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
            <div
              className="fugu-iconbox-wrap2 wow fadeInUpX"
              data-wow-delay="0.30s"
            >
              <div className="fugu-iconbox-icon2">
                <img src="/images/all-img/v2/icon3.png" alt="" />
              </div>
              <div className="fugu-iconbox-data2">
                <h4>lorem ipsum dolor sit amet, consectetur a</h4>
                <p>
                  lectus dui, in suscipit urna bibendum sit amet. Phasellus
                  faucibus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
