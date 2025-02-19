import { atom, selector } from "recoil";

export enum Categories {
  "To_Do" = "To_Do",
  "Doing" = "Doing",
  "Done" = "Done",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "Category",
  default: Categories.To_Do,
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
