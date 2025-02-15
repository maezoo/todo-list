import React, { useState } from "react";
import { useForm } from "react-hook-form";

/* function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDoError("");
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setToDoError("To do should be longer");
    }
    console.log("submit");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          placeholder="Write a to do"
        ></input>
        <button>Add</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </div>
  );
} */

function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("email")} placeholder="Email"></input>
        <input {...register("firstName")} placeholder="First Name"></input>
        <input {...register("lastName")} placeholder="Last Name"></input>
        <input {...register("username")} placeholder="Username"></input>
        <input {...register("password")} placeholder="Password"></input>
        <input {...register("password1")} placeholder="Password1"></input>
        <button>Add</button>
      </form>
    </div>
  );
}
export default ToDoList;
