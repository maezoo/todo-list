import React from "react";
import { IToDo, toDoState, Categories } from "../atoms";
import { useSetRecoilState } from "recoil";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.Doing && (
        <button name={Categories.Doing + ""} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.To_Do && (
        <button name={Categories.To_Do + ""} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.Done && (
        <button name={Categories.Done + ""} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
