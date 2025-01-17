import React from "react";

const EventMod = (props) => {
  return (
    <td className={'Event ' + props.color}>
      <h5>{props.event}</h5>
    </td>
  );
};

export default EventMod;