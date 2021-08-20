import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { DatePicker, Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Itodo } from "../../utils/TodoService";

const CircleButton = styled.button`
  background: #33bb77;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  left: 50%;
  transform: translate(50%, 0%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
`;

const InsertForm = styled.form`
  display: flex;
  align-items: center;
  background: #eeeeee;
  padding-left: 40px;
  padding-top: 36px;
  padding-right: 60px;
  padding-bottom: 36px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #dddddd;
  width: 100%;
  outline: none;
  font-size: 21px;
  box-sizing: border-box;
  color: #119955;
  &::placeholder {
    color: #dddddd;
    font-size: 16px;
  }
`;

interface TodoCreateProps {
  nextId: number;
  createTodo: (todo: Itodo) => void;
  incrementNextId: () => void;
}

const TodoCreate = ({
  nextId,
  createTodo,
  incrementNextId
}: TodoCreateProps) => {
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) {
      Modal.warning({
        title: "Umm... I think you have noting to do!",
        content: "Please write somthing about your work."
      });
    } else if (!date) {
      Modal.warning({
        title: "Due date is needed!",
        content: "Please set due date for your work."
      });
    } else {
      createTodo({
        id: nextId,
        text: value,
        done: false,
        due: date
      });
      incrementNextId();
      setValue("");
      setDate("");
    }
  };

  const handleDateChange = (date: any, dateString: any) => {
    setDate(dateString);
  };

  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              autoFocus
              placeholder="What's need to be done?"
              onChange={handleChange}
              value={value}
            />
            <DatePicker
              onChange={handleDateChange}
              value={date ? moment(date) : null}
            />
          </InputGroup>
          <CircleButton>
            <PlusCircleOutlined />
          </CircleButton>
        </InsertForm>
      </InsertFormPositioner>
    </>
  );
};

export default React.memo(TodoCreate);
