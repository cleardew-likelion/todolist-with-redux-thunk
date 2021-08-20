import React, { useState } from "react";
import styled from "styled-components";
import { UnlockOutlined } from "@ant-design/icons";
import PasswordModal from "../common/PasswordModal";

const Lock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #119955;
  font-size: 20px;
  margin-top: 30px;
`;

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

interface TodoHeadProps {
  setIsLocked: (props: any) => void;
}

const TodoHead = ({ setIsLocked }: TodoHeadProps) => {
  //@TODO 현재 시간을 표시해야합니다.
  const now = new Date();
  const dayString = now.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const dateString = now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClick = () => {
    showModal();
  };

  return (
    <>
      <Lock>
        <UnlockOutlined onClick={handleClick} />
        <PasswordModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          setIsLocked={setIsLocked}
        />
      </Lock>
      <TodoHeadBlock>
        <DayText>{dayString}</DayText>
        <DateText>{dateString}</DateText>
      </TodoHeadBlock>
    </>
  );
};

export default React.memo(TodoHead);
