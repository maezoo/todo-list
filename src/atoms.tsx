import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "To_Do" | "Doing" | "Done";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState); // toDoState의 현재 상태를 가져옴
    return [
      toDos.filter((toDo) => toDo.category === "To_Do"),
      toDos.filter((toDo) => toDo.category === "Doing"),
      toDos.filter((toDo) => toDo.category === "Done"),
    ];
  },
});
