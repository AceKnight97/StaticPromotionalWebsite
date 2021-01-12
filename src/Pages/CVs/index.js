import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import _ from "lodash";
import { } from "antd";
import avatarIc from "../../Images/Pages/CVs/myAvatar.jpg";
import hcmusIC from "../../Images/Pages/CVs/logo-khtn.png";

const MyCV = (props) => {
  const { className } = props;

  const showHeader = () => (
    <div className="my-cv-header">
      <img src={avatarIc} className="my-cv-avatar" />

      <div className='contact-info'>
        <div className='contact-info-name'>
          <span>Truong Thanh Triet</span>
        </div>

        <div className='contact-info-phone-email'>
          <span>(+84) 819 541 897</span>
          <span>/</span>
          <span>tttriet1997@gmail.com</span>
        </div>

        <div className='contact-info-address'>
          <span>327 Le Van Luong street, District 7, Hochiminh city</span>
        </div>
      </div>

      <img src={hcmusIC} className="uni-logo" />
    </div>
  );

  return (
    <div className={classnames("my-cv-wrapper", className)}>
      <div className="my-cv-main">{showHeader()}</div>
    </div>
  );
};

MyCV.defaultProps = {
  className: "",
};
MyCV.propTypes = {
  className: PropTypes.string,
};

export default MyCV;
