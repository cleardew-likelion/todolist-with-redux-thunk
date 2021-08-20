import React, { useState } from "react";
import styled from "styled-components";
import { Modal, Input } from "antd";
import { saveLock } from "../../utils/LockService";

const Wrapper = styled.div`
  width: 200px;
  margin: 20px 0;
`;

interface PasswordModalProps {
  isModalVisible: boolean;
  setIsModalVisible: (arg0: boolean) => void;
  setIsLocked: (arg0: boolean) => void;
}

const PasswordModal = ({
  isModalVisible,
  setIsModalVisible,
  setIsLocked,
}: PasswordModalProps) => {
  const [password, setPassword] = useState("");
  const handleOk = () => {
    saveLock(true, password);
    setIsLocked(true);
    setIsModalVisible(false);
    setPassword("");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setPassword(newValue);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <span>Please input password for your next visit.</span>
        <Wrapper>
          <Input.Password
            placeholder="input password"
            value={password}
            onChange={handleChange}
          />
        </Wrapper>
      </Modal>
    </>
  );
};

export default PasswordModal;
