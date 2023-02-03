import React, { useContext, useEffect, useState } from "react";
import Button from "../button/button";
import { data_screen1 } from "./data_screen1";
import { useAppContext } from "../context/dataContext";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
interface Data_Choose {
  id: number;
  icon: any;
  text: string;
  answer: boolean;
}
export default function Screen() {
  const [choose, setChoose] = useState<number[]>([]);
  const [dtchoose, setDtchoose] = useState<Data_Choose[]>([]);
  const { setChoiceStore, handlePrev } = useAppContext();
  const { data } = useAppContext();
  const quantity_questTrue = data.screen_1.answers.filter(
    (e: any) => e.answer === true
  );
  const chooseItem = (el: any, index: number) => {
    if (choose.includes(index)) {
      setChoose(choose.filter((e) => e !== index));
    } else if (choose.length < quantity_questTrue.length) {
      setChoose([...choose, index]);
    }
    if (dtchoose.includes(el)) {
      setDtchoose(dtchoose.filter((e) => e.id !== index));
    } else if (dtchoose.length < quantity_questTrue.length) {
      setDtchoose([...dtchoose, el]);
    }
  };
  return (
    <div className="wrap_first_screen">
      <hr />
      <div className="top_content ">
        <Header
          quest_num={data.quest_num}
          element={data.screen_1.element}
          title={data.screen_1.question}
        />
      </div>
    <div className="img_first_screen">
        <img className={`img_first_screen_${data.quest_num}`} src={data.screen_1.image.image} alt="" style={{width:data.screen_1.image.width, height:data.screen_1.image.height}}/>
      </div>
      <div className="bottom_wrapper">
        <div className="select_answers">
          <h1>Select Answers</h1>
          <div className="list_answers">
            {data.screen_1.answers.map((el: any, index: number) => (
              <div
                key={index}
                onClick={() => chooseItem(el, index)}
                className="answers_inner">
                <div
                  className={
                    choose.includes(index)
                      ? "img_answers active"
                      : "img_answers"
                  }>
                  {el.icon}
                </div>
                <p>{el.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className={
            choose.length === 0
              ? "button_screen1 null"
              : "button_screen1 has_value "
          }>
          <div onClick={() => handlePrev()}>
            <Button name_btn="Go Back" style="Go back" />
          </div>
          <div onClick={() => setChoiceStore(dtchoose)}>
            <Link to="/second-screen">
              <Button name_btn="Submit" style="Submit" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
