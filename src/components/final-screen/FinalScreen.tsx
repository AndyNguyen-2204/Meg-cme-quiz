import React from "react";
import Model1 from "./images/Model1";
import Model2 from "./images/Model2";
import Model3 from "./images/Model3";
import {useAppContext} from "../context/dataContext"
function FinalScreen() {
  const {  handlePlayAgain } = useAppContext();
  return (
    <div className="final_screen">
      <div className="final_screen_content">
        <h4>Well done!</h4>
        <h5>Thanks for playing <br/> the Critical Minerals to <br/> Modern Life quiz</h5>
        <button type="button" onClick={()=>handlePlayAgain() } className="button_final_screen">Play Again</button>
        <div   className="final_screen_content_model">
          <Model1 />
          <Model2 />
          <Model3 />
        </div>
      </div>
    </div>
  );
}

export default FinalScreen;
