import React from "react";
import { IToDo, toDoState } from "./atoms";
import { useSetRecoilState } from "recoil";

function ToDo({ text, category }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "Doing" && (
        <button name="Doing" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "To_Do" && (
        <button name="To_Do" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "Done" && (
        <button name="Done" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
