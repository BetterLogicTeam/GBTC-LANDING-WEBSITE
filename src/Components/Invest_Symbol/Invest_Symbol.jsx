import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BiSolidChevronRightCircle } from "react-icons/bi";
// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

import "./Invest_Symbol.css";

const Invest_Symbol = () => {
  return (
    <div>
      <div className="investMain">
        <div className="heading">
          <h3>Invest in symbol: GBTC</h3>
        </div>

        <div className="container">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            // loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper mt-5"
          >
            <SwiperSlide>
              <img
                src="https://grayscale.com/wp-content/uploads/2023/06/Exclude-1.svg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://grayscale.com/wp-content/uploads/2023/06/Vector-1-1.svg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://grayscale.com/wp-content/uploads/2023/06/Vector-2-1.svg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://grayscale.com/wp-content/uploads/2023/06/tradestation_white-1-2.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://grayscale.com/wp-content/uploads/2023/06/Vector-3-1.svg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://grayscale.com/wp-content/uploads/2023/06/Exclude-1.svg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://grayscale.com/wp-content/uploads/2023/06/Vector-1-1.svg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://grayscale.com/wp-content/uploads/2023/06/Vector-2-1.svg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://grayscale.com/wp-content/uploads/2023/06/tradestation_white-1-2.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://grayscale.com/wp-content/uploads/2023/06/Vector-3-1.svg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>

          <h5 className="pt-4" style={{ textAlign: "center" }}>
            Or type <strong>symbol: GBTC&nbsp;</strong>into your brokerage
            account to see if it is offered on your platform of choice.
          </h5>
          <p className="hyperlinkongreen" style={{ fontWeight: 400 }}>
            Grayscale Investments, LLC is a digital currency asset manager and
            the sponsor of Grayscale<sup>®</sup> Bitcoin Trust (Symbol: GBTC).
            Investments in GBTC are speculative investments that involve high
            degrees of risk, including a partial or total loss of invested
            funds. Grayscale products are not suitable for any investor that
            cannot afford loss of the entire investment.{" "}
            <strong>
              To date, GBTC has not met its investment objective and the Shares
              quoted on OTCQX have not reflected the value of Bitcoin held by
              GBTC, less GBTC’s expenses and other liabilities, but instead have
              traded at both premiums and discounts to such value, which at
              times have been substantial.
            </strong>{" "}
            Go to{" "}
            <a href="https://www.otcmarkets.com/stock/GBTC">
              OTCMarkets.com/stock/GBTC
            </a>
            , the{" "}
            <a href="https://www.sec.gov/edgar/browse/?CIK=1588489&owner=exclude">
              SEC’s website
            </a>{" "}
            or our website <a href="/">Grayscale.com</a> for the annual report,
            which includes investment objectives, risks, fees and expenses, or{" "}
            <a href="/">Grayscale.com</a> for more information on Grayscale and
            our other investment vehicles. Read these materials carefully before
            investing. This content is not intended to be a solicitation for the
            creation of new Shares.
          </p>
        </div>
      </div>

      <div className="investMainTwo">
        <div className="heading_investTwo">
          <h3 class="elementor-heading-title elementor-size-large">
            Grayscale<sup>®</sup> Bitcoin Trust provides investors with:
          </h3>
        </div>
        <div className="container investMainTwoContainer">
          <div className="row investMainTwoRow">
            <div className="col-md-1"></div>
            <div className="col-md-1 txtend">
              <BiSolidChevronRightCircle className="arrow" />
            </div>
            <div className="col-md-4">
              <p>
                The ability to invest through tax-advantaged accounts, such as
                IRA or Roth IRAs.
              </p>
            </div>

            <div className="col-md-1 txtend">
              <BiSolidChevronRightCircle className="arrow" />
            </div>
            <div className="col-md-4">
              <p>
                An easy way to introduce Bitcoin exposure into your portfolio
                from a single ticker symbol: GBTC.
              </p>
            </div>
            <div className="col-md-1"></div>
          </div>

          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-1 txtend">
              <BiSolidChevronRightCircle className="arrow" />
            </div>
            <div className="col-md-4">
              <p>
                The convenience of Bitcoin exposure in your brokerage account.
              </p>
            </div>
            <div className="col-md-1 txtend">
              <BiSolidChevronRightCircle className="arrow" />
            </div>
            <div className="col-md-4">
              <p>
                Institutional-quality investment supported by a network of
                best-in-class service providers.
              </p>
            </div>
            <div className="col-md-1"></div>
          </div>

          <div className="investBtn mt-5">
          <button>
            Download Fact Sheet
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest_Symbol;
