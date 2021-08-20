import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { loadLock, saveLock } from "../../utils/LockService";

const PasswordContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: ceneter;
  align-items: center;
  margin: 30px auto 0;
`;

const Wrapper = styled.div`
  width: 200px;
  margin: 20px 0;
`;

interface PasswordProps {
  setIsLocked: (props: any) => void;
}

const Password = ({ setIsLocked }: PasswordProps) => {
  const [password, setPassword] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setPassword(newValue);
  };

  const handleClick = () => {
    const lock = loadLock();
    if (lock.password === password) {
      saveLock(false, "");
      setIsLocked(false);
    }
  };

  return (
    <PasswordContainer>
      <LockOutlined />
      <h1>Your TodoList is locked now!</h1>
      <p>Please unlocked with your password!</p>
      <Wrapper>
        <Input.Password
          placeholder="input password"
          value={password}
          onChange={handleChange}
        />
      </Wrapper>
      <Button type="primary" onClick={handleClick}>
        Unlock
      </Button>
    </PasswordContainer>
  );
};

export default Password;
