import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaFilePdf, FaRegCalendarAlt, FaHandPointRight } from "react-icons/fa";

const dummyPDFLink =
  "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

const WhoIsWhoAnimation = keyframes`
from {
  -moz-transform: translateY(100%);
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
}
to {
  -moz-transform: translateY(-100%);
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
}
`;

const NotificiationBoard = styled.div`
  width: 100%;
  min-height: 200px;
  border: 1px solid #000;
  border-radius: 8px;
  background-color: #fff;
`;

const ToggleBtn = styled.button`
  font-size: 18px;
  color: red;
  font-weight: 600;
  text-align: center;
  padding: 6px 0;
  border: 0;
  border-top-left-radius: ${({ leftBtn }) => (leftBtn ? "8px" : "0")};
  border-top-right-radius: ${({ rightBtn }) => (rightBtn ? "8px" : "0")};
  background-color: ${({ btnActive }) => (btnActive ? "#d0d0d0" : "#fff")};
`;

const NotificationTitle = styled.div`
  font-size: 18px;
  color: red;
  font-weight: 600;
  text-align: center;
  padding: 6px 0;
`;

// const DividerLine = styled.div`
//   width: 90%;
//   margin: 0 auto;
//   border-top: 1px solid #808080;
// `;

const ScrollText = styled.div`
  height: 150px;
  text-align: center;
  /* animation properties */
  -moz-transform: translateY(100%);
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  -moz-animation: ${WhoIsWhoAnimation} 10s linear infinite;
  -webkit-animation: ${WhoIsWhoAnimation} 10s linear infinite;
  animation: ${WhoIsWhoAnimation} 10s linear infinite;
`;

const GalleryImg = styled.img`
  width: 80%;
  height: 100px;
`;

const MovableText = styled.div`
  width: 90%;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`;

const MovableDate = styled.div`
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  color: blue;
  cursor: pointer;
`;

const MovablePdf = styled.div`
  font-size: 12px;
  font-weight: 400;
  text-align: right;
  color: red;
  cursor: pointer;
`;

const AdminTitle = styled.div`
  font-size: 18px;
  color: #480b93;
  font-weight: 600;
  text-align: center;
  padding: 6px 2px;
`;

const PersonImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const BorderLine = styled.div`
  border-left: 1px solid #000;
`;

const GalleryDoc = () => {
  const openPdf = () => window.open(dummyPDFLink, "_blank");
  return (
    <ScrollText>
      <MovableText>
        <FaHandPointRight style={{ marginRight: "5px", marginBottom: "3px" }} />
        Notice: Beach cleaning of Burmanalla and surrounding areas
      </MovableText>
      <div className="d-flex mx-5 mb-4 justify-content-between">
        <MovableDate>
          <FaRegCalendarAlt
            style={{ marginRight: "5px", marginBottom: "3px" }}
          />
          11/07/2023
        </MovableDate>

        <MovablePdf onClick={openPdf}>
          454kb
          <FaFilePdf style={{ marginLeft: "3px", marginBottom: "3px" }} />
        </MovablePdf>
      </div>
      <MovableText>
        <FaHandPointRight style={{ marginRight: "5px", marginBottom: "3px" }} />
        Notice: Guidelines for immersion of Idol
      </MovableText>
      <div className="d-flex mx-5 mb-4 justify-content-between">
        <MovableDate>
          <FaRegCalendarAlt
            style={{ marginRight: "5px", marginBottom: "3px" }}
          />
          13/10/2023
        </MovableDate>

        <MovablePdf onClick={openPdf}>
          396kb
          <FaFilePdf style={{ marginLeft: "3px", marginBottom: "3px" }} />
        </MovablePdf>
      </div>

      <MovableText>
        <FaHandPointRight style={{ marginRight: "5px", marginBottom: "3px" }} />
        Notice: Will be convenend on 23rd August, 2022 at 03.00PM in the
        Conference Hall of Zilla Prishad, SA under the Chairmanship of
        Adhyaksha, ZPSA
      </MovableText>
      <div className="d-flex mx-5 mb-4 justify-content-between">
        <MovableDate>
          <FaRegCalendarAlt
            style={{ marginRight: "5px", marginBottom: "3px" }}
          />
          17/11/2023
        </MovableDate>

        <MovablePdf onClick={openPdf}>
          502kb
          <FaFilePdf style={{ marginLeft: "3px", marginBottom: "3px" }} />
        </MovablePdf>
      </div>
    </ScrollText>
  );
};

const GalleryCard = () => {
  const Event1 = require("../../assets/images/event1.jpg");
  const Event2 = require("../../assets/images/event2.jpg");
  const Event3 = require("../../assets/images/event3.jpg");

  return (
    <ScrollText>
      <div>
        <GalleryImg src={Event1} alt="event1" />
        <p className="p-2">Event-1</p>
      </div>
      <div>
        <GalleryImg src={Event2} alt="event2" />
        <p className="p-2">Event-2</p>
      </div>
      <div>
        <GalleryImg src={Event3} alt="event3" />
        <p className="p-2">Event-3</p>
      </div>
    </ScrollText>
  );
};

export const WhoIsWho = () => {
  const [activeButton, setActiveButton] = useState("left");
  const Person1 = require("../../assets/images/person1.jpg");
  const Person2 = require("../../assets/images/person2.jpg");
  const Person3 = require("../../assets/images/person3.jpg");
  return (
    <div style={{ padding: "20px", backgroundColor: "#fef2f2" }}>
      <div className="d-flex row justify-content-around">
        <div className="d-flex col-3 mb-2">
          <NotificiationBoard>
            <div className="d-flex">
              <ToggleBtn
                className="flex-fill"
                btnActive={activeButton === "left"}
                leftBtn
                onClick={() => setActiveButton("left")}
              >
                Notices
              </ToggleBtn>
              <BorderLine />
              <ToggleBtn
                className="flex-fill"
                btnActive={activeButton === "right"}
                rightBtn
                onClick={() => setActiveButton("right")}
              >
                Tenders
              </ToggleBtn>
            </div>
            <div
              className="overflow-hidden"
              style={{ backgroundColor: "#f2c79140", paddingTop: "10px" }}
            >
              <GalleryDoc />
            </div>
          </NotificiationBoard>
        </div>

        <div className="d-flex col-2 mb-2">
          <NotificiationBoard>
            <AdminTitle>Adhyaksh's Desk</AdminTitle>
            <div
              style={{
                backgroundColor: "#f2c79140",
                paddingTop: "10px",
                textAlign: "center",
              }}
            >
              <PersonImage src={Person1} alt="event1" />
              <p className="p-2">SHRI SANJAY KUMAR SINGH</p>
            </div>
          </NotificiationBoard>
        </div>

        <div className="d-flex col-2 mb-2">
          <NotificiationBoard>
            <AdminTitle>Up-Adhyaksh's Desk</AdminTitle>

            <div
              style={{
                backgroundColor: "#f2c79140",
                paddingTop: "10px",
                textAlign: "center",
              }}
            >
              <PersonImage src={Person2} alt="event2" />
              <p className="p-2">SHRI BOOMINATHAN</p>
            </div>
          </NotificiationBoard>
        </div>

        <div className="d-flex col-2 mb-2">
          <NotificiationBoard>
            <AdminTitle>CEO's Desk</AdminTitle>
            <div
              style={{
                backgroundColor: "#f2c79140",
                paddingTop: "10px",
                textAlign: "center",
              }}
            >
              <PersonImage src={Person3} alt="event3" />
              <p className="p-2">MS. SMITHA R,IAS</p>
            </div>
          </NotificiationBoard>
        </div>

        <div className="d-flex col-3 mb-2">
          <NotificiationBoard>
            <NotificationTitle>Spotlight</NotificationTitle>
            <div
              className="overflow-hidden"
              style={{ backgroundColor: "#f2c79140", paddingTop: "10px" }}
            >
              <GalleryCard />
            </div>
          </NotificiationBoard>
        </div>
      </div>
    </div>
  );
};
