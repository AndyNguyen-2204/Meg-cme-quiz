import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../button/button";
import { useAppContext } from "../context/dataContext";
import Traced_one from "../splashScreen/traced_svg/traced_one";
import Cobalt from "../../assets/images/Cobalt.png";
import useWindowDimensions from "../../hook/useWindowDimensions";
export default function Second_screen() {
  const graph = useRef(null);
  const { data, setData } = useAppContext();
  const { choiceStore } = useAppContext();
  const { width }: any = useWindowDimensions();
  const quantity_questTrue = data.screen_1.answers.filter(
    (e: any) => e.answer === true
  );
  const choiceTrue = choiceStore.filter((e: any) => e.answer === true);
  useEffect(() => {
    const ciclegraph: any = graph.current;
    const circleElements = ciclegraph.childNodes;
    let angle;
    if (circleElements.length === 2) {
      angle = 360 - 180;
    } else {
      angle = 360 - 90;
    }
    let dangle = 360 / circleElements.length;

    for (let i = 0; i < circleElements.length; i++) {
      let circle = circleElements[i];
      angle += dangle;
      if (width >= 950) {
        circle.style.transform = `rotate(${angle}deg) translate(${
          ciclegraph.clientWidth / 2.3
        }px) rotate(-${angle}deg)`;
      }
      if (950 > width) {
        circle.style.transform = `rotate(${angle}deg) translate(${
          ciclegraph.clientWidth / 2.3
        }px) rotate(-${angle}deg)`;
      }
      if (840 >= width) {
        circle.style.transform = `rotate(${angle}deg) translate(${
          ciclegraph.clientWidth / 2.7
        }px) rotate(-${angle}deg)`;
      }
      if (810 >= width) {
        circle.style.transform = `rotate(${angle}deg) translate(${
          ciclegraph.clientWidth / 3.2
        }px) rotate(-${angle}deg)`;
      }
      if (580 >= width) {
        circle.style.transform = `rotate(${angle}deg) translate(${
          ciclegraph.clientWidth / 2.3
        }px) rotate(-${angle}deg)`;
      }
    }
  }, [width]);

  return (
    <div className="wrap_second_screen">
      <hr />
      <div className="content_top_second_screen">
        <span>{`Q${data.quest_num}`}</span>
        <p>
          {choiceTrue.length > 0 ? "Congratulations!" : ""} You scored{" "}
          <i>
            {choiceTrue.length}/{quantity_questTrue?.length}
          </i>
        </p>
      </div>
      <div className="content_mid_second_screen">
        <div className="img_mid">
          <div className="img_mid_inner">
            <img className={`img_mid_inner_${data.quest_num}`} src={data.screen_2.image.image} alt="" style={{width:data.screen_2.image.width, height:data.screen_2.image.height}}/>
          </div>
        </div>
        <div className="ciclegraph" ref={graph}>
          {quantity_questTrue?.length > 0
            ? quantity_questTrue?.map((el: any, index: number) => (
                <div
                  key={index}
                  className={choiceStore.includes(el) ? "circle true" : "circle false"}>
                  <div className="img_question">{el.icon}</div>
                  <span>{el.text}</span>
                </div>
              ))
            : ""}
        </div>
      </div>
      <div className="bottom_wrapper">
        {data.screen_2.model ? (
          <div className="content_bottom_second_screen">
            <p
              dangerouslySetInnerHTML={{ __html: data.screen_2.description }}
            />
            <div>{data.screen_2.model}</div>
          </div>
        ) : (
          <div className="content_button_second_q8">
            <p
              dangerouslySetInnerHTML={{ __html: data.screen_2.description }}
            />
          </div>
        )}
        <div className="button_screen2">
          <Link to="/first-screen">
            <Button name_btn="Go Back" style="Go back" />
          </Link>
          <Link to="/third-screen">
            <Button name_btn="View Map" style="View Map" />
          </Link>
        </div>
      </div>
    </div>
  );
}
