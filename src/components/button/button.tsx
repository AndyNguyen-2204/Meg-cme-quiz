import React from "react";
import Line_button_left from "./line_button/line_button_left";
import Line_button_right from "./line_button/line_button_right";
interface StateButton {
  name_btn: String;
  style: String;
}
export default function Button({ name_btn, style }: StateButton) {
  return (
    <>
      {style === "Go back" && (
        <div className="wrap_button_left">
          <div className="line">
            <Line_button_left />
          </div>
          <div className="content_button">
            <span>{name_btn} </span>
          </div>
        </div>
      )}
      {style === "Submit" && (
        <div className="wrap_button_right">
          <div className="content_button">
            <span>{name_btn} </span>
          </div>
          <div className="line">
            <Line_button_right />
          </div>
        </div>
      )}
       {style === "View Map" && (
        <div className="wrap_button_right view_map">
          <div className="content_button">
            <span>{name_btn} </span>
          </div>
          <div className="line">
            <Line_button_right />
          </div>
        </div>
      )}
      {style === "Next Question" && (
        <div className="wrap_button_right next_question">
          <div className="content_button">
            <span>{name_btn} </span>
          </div>
          <div className="line">
            <Line_button_right />
          </div>
        </div>
      )}
    </>
  );
}
