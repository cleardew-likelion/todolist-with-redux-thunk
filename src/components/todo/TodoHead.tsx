import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 24px;
  border-bottom: 3px solid #33bb77;
`;

const DateText = styled.div`
  font-size: 26px;
  color: #119955;
  padding-left: 10px;
`;

const DayText = styled.div`
  font-size: 22px;
  color: #119955;
  padding-top: 5px;
`;

const TodoHead = () => {
  const now = new Date();
  const dayString = now.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const dateString = now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <TodoHeadBlock>
        <DayText>{dayString}</DayText>
        <DateText>{dateString}</DateText>
      </TodoHeadBlock>
    </>
  );
};

export default React.memo(TodoHead);
