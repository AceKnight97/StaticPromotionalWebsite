import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import _ from "lodash";
import {} from "antd";
import avatarIc from "../../Images/Pages/CVs/myAvatar.jpg";

const MyCV = (props) => {
  const { className } = props;

  const showHeader = () => (
    <div className="my-cv-header">
      <img src={avatarIc} className="my-cv-avatar" />
      <span>My CV</span>
      <span>My CV</span>
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
