import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="mainHero">
        <div className="container fst_cont">
          <div className="row">
            <h1>
              <span class="superscript-fix">
                Grayscale<sup>®</sup> Bitcoin Trust
              </span>
            </h1>

            <a class="elementor-button elementor-size-md" role="button">
              <span class="elementor-button-content-wrapper">
                <span class="elementor-button-text">
                  Symbol: <strong>GBTC</strong>
                </span>
              </span>
            </a>

            <div class="elementor-widget-container">
              <div class="elementor-text-editor main_para elementor-clearfix">
                The world’s largest bitcoin investment vehicle,
                <br />
                accessible right from your brokerage account.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container scnd_cont">
        <div className="row">
          <div className="col-md-6">
            <img
              decoding="async"
              width={1280}
              height={808}
              src="https://grayscale.com/wp-content/uploads/2022/01/GBTC_campaign-page_img.jpg"
              className="attachment-full size-full wp-image-3514"
              alt="GBTC_campaign-page_img.jpg"
              srcSet="https://grayscale.com/wp-content/uploads/2022/01/GBTC_campaign-page_img.jpg 1280w, https://grayscale.com/wp-content/uploads/2022/01/GBTC_campaign-page_img-300x189.jpg 300w, https://grayscale.com/wp-content/uploads/2022/01/GBTC_campaign-page_img-1024x646.jpg 1024w, https://grayscale.com/wp-content/uploads/2022/01/GBTC_campaign-page_img-768x485.jpg 768w"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
          <div className="col-md-6 scnd_cont_heading">
            <div className="elementor-widget-wrap">
              <div
                className="elementor-element elementor-element-6859069a elementor-widget elementor-widget-heading"
                data-id="6859069a"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="">
                  <h4 className="elementor-heading-title elementor-size-default">
                    Grayscale<sup>®</sup> Bitcoin Trust{" "}
                    <strong>(Symbol: GBTC)</strong> offers you exposure to
                    Bitcoin through a familiar investment vehicle.
                  </h4>{" "}
                </div>
              </div>
              <div
                className="elementor-element elementor-element-d42e0b3 elementor-widget elementor-widget-text-editor"
                data-id="d42e0b3"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="pb-3">
                  <div className="elementor-text-editor a_ka_clr elementor-clearfix">
                    To get started, simply type in&nbsp;the{" "}
                    <strong>symbol: GBTC</strong>
                    &nbsp;into your brokerage account and start investing today!{" "}
                  </div>
                </div>
              </div>

              <div
                className="elementor-element elementor-element-1326d63 elementor-widget elementor-widget-text-editor"
                data-id="1326d63"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-text-editor a_ka_clr elementor-clearfix">
                    Don’t see it at your brokerage account?{" "}
                    <a
                      style={{ color: "#2AAD92 !important" }}
                      href="mailto:%5BYour%20Financial%20Advisor%27s%20Email%5D?subject=Interested%20in%20Grayscale%20Product%20Offerings&body=Hi%20%5BName%20Here%5D%2C%20%0A%0AI%20am%20interested%20in%20exploring%20the%20product%20offerings%20at%20Grayscale%20Investments.%20Please%20look%20at%20https%3A%2F%2Fwww.grayscale.com%2Fproducts%20and%20let%20me%20know%20when%20we%20can%20set%20some%20time%20aside%20to%20discuss.%0A%0AI%20am%20especially%20interested%20in%20%5Benter%20ticker(s)%20here%5D.%20%0A%0AI%20have%20included%20their%20contact%20form%20(https%3A%2F%2Fwww.grayscale.com%2Fcontact)%20if%20you%20would%20like%20to%20submit%20any%20questions.%20%0A%0AKind%20Regards%2C%20%0A%5BYour%20Name%5D%20%0A"
                    >
                      Consult your Financial Advisor.
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
