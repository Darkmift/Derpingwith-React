import React from "react";

const Alert = props => {
  const { alert } = props;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fa fa-info-circle" />
        &nbsp;{alert.msg}
      </div>
    )
  );
};

export default Alert;
