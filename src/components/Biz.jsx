import React from "react";
import PropTypes from "prop-types";

function Biz(props){
  return (
    <div className= "biz">
      <h2>{props.name}</h2>
      <h3>{props.url}</h3>
    </div>
    );
}

Biz.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Biz;
