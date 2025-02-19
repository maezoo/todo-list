import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "To_Do" | "Doing" | "Done";
}

export const categoryState = atom({
  key: "category",
  default: "To_Do",
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState); // toDoState의 현재 상태를 가져옴
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
