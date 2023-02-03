import React from "react";
interface HeaderProps {
  element?: any;
  quest_num: number;
  title: string;
}
function Header({ element, quest_num, title }: HeaderProps) {
  return (
    <>
      <div className="header">
        <div className="header_wrapper">
          <div className="header_number_question">{`q${quest_num}`}</div>
          {element && (
            <div
              className={
                element?.length > 1
                  ? "header_element several_element"
                  : "header_element"
              }>
              {element && element?.map((item: any, index: any) => {
                return <div key={index}>{item}</div>;
              })}
            </div>
          )}
        </div>
        <div
          className={
            element ? "header_question" : "header_question  non-element"
          }>
          <p dangerouslySetInnerHTML={{ __html: title }} />
        </div>
      </div>
    </>
  );
}

export default Header;
