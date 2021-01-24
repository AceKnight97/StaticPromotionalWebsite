import React from "react";
import classnames from "classnames";
import {
  MailOutlined,
  PhoneOutlined,
  DollarOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import _ from "lodash";
import avatarIc from "../../Images/Pages/CVs/myAvatar.jpg";
import hcmusIC from "../../Images/Pages/CVs/logo-khtn.png";
import BodyTopic from "./Layout/bodyTopic";
import ReferenceItem from "./Layout/referenceItem";
import InfoRow from "./Layout/infoRow";

const MyCV2 = () => {
  const showHeader = () => (
    <div className="my-cv-2-header">
      <img src={avatarIc} className="my-cv-2-avatar" alt="Avatar img" />

      <div className="my-cv-2-names">
        <div className="my-cv-2-lastname">
          <span>Truong Thanh</span>
        </div>
        <div className="my-cv-2-firstname">
          <span>Triet</span>
        </div>
        <div className="my-cv-2-role">
          <span>Web-App developer</span>
        </div>
      </div>
    </div>
  );

  const showGeneralInfo = () => {
    const arr = [
      {
        icon: <MailOutlined />,
        title: "tttriet1997@gmail.com",
      },
      {
        icon: <PhoneOutlined />,
        title: "(+84) 819 541 897",
      },
      {
        icon: <DollarOutlined />,
        title: "https://aceknight97.github.io/greeting",
      },
      {
        icon: <EnvironmentOutlined />,
        title: "District 7, Hochiminh city",
      },
    ];
    return _.map(arr, (x, i) => (
      <InfoRow
        className={i === 0 ? "mt24" : "mt16"}
        key={i}
        icon={x.icon}
        title={x.title}
      />
    ));
  };

  const showIndustryKnowledge = () => {
    const arr = [
      "Web-App Develop",
      "Technical Research",
      "Team work",
      "Project progressing",
    ];
    return (
      <div className="my-cv-2-body">
        <div className="my-cv-2-body-title">
          <span>Industry Knowledge</span>
        </div>

        {_.map(arr, (x, i) => (
          <div key={i} className="my-cv-2-body-content">
            <span>{`● ${x}`}</span>
          </div>
        ))}
      </div>
    );
  };

  const showLanguages = () => {
    const arr = ["Vietnamese", "English"];
    return (
      <div className="my-cv-2-body">
        <div className="my-cv-2-body-title">
          <span>Languages</span>
        </div>

        {_.map(arr, (x, i) => (
          <div key={i} className="my-cv-2-body-content">
            <span>{x}</span>
          </div>
        ))}
      </div>
    );
  };

  const showSocial = () => {
    const arr = [
      "https://www.facebook.com/profile.php?id=100015087697713",
      "https://www.linkedin.com/in/tri%E1%BA%BFt-tr%C6%B0%C6%A1ng-thanh-89a92b161/",
    ];
    return (
      <div className="my-cv-2-body">
        <div className="my-cv-2-body-title">
          <span>Social</span>
        </div>

        {_.map(arr, (x, i) => (
          <div key={i} className="my-cv-2-body-link">
            <span>{x}</span>
          </div>
        ))}
      </div>
    );
  };

  const showLeft = () => (
    <div className="my-cv-2-left">
      {showHeader()}
      {showGeneralInfo()}
      {showIndustryKnowledge()}
      {showLanguages()}
      {showSocial()}
    </div>
  );

  return (
    <div className="my-cv-wrapper">
      <div className="my-cv-2-main">
        {showLeft()}

        <div className="my-cv-2-right">
          <span>asdasdsd</span>
        </div>
      </div>
    </div>
  );
};

MyCV2.defaultProps = {};
MyCV2.propTypes = {};

export default MyCV2;
