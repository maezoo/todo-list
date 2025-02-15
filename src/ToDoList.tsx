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
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", { required: true })}
          placeholder="Email"
        ></input>
        <input
          {...register("firstName", { required: true })}
          placeholder="First Name"
        ></input>
        <input
          {...register("lastName", { required: true })}
          placeholder="Last Name"
        ></input>
        <input
          {...register("username", { required: true, minLength: 10 })}
          placeholder="Username"
        ></input>
        <input
          {...register("password", { required: true, minLength: 5 })}
          placeholder="Password"
        ></input>
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Password is too short.",
            },
          })}
          placeholder="Password1"
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}
export default ToDoList;
