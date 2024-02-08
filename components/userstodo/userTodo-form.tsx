import { useRef } from "react";

import classes from "./userTodo-form.module.css";

function UserTodoForm() {
  const todoRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = async (e) => {
    const todo = todoRef.current.value;

    let errorLabel;
    const alllabels = document.getElementsByTagName("label");
    for (let i = 0; i < alllabels.length; i++) {
      if (alllabels[i].htmlFor === "todo-error") {
        errorLabel = alllabels[i];
      }
    }

    if (todo === "") {
      e.preventDefault();
      errorLabel.innerHTML = "Please enter todo";
      return;
    } else {
      const response = await fetch("/api/user/add-todo", {
        method: "POST",
        body: JSON.stringify({ todo }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 401) {
        const errmsg = await response.json();
        errorLabel.innerHTML = errmsg;
      }
    }
  };

  return (
    <>
      <form className={classes.form} onSubmit={handleAddTodo}>
        <div className={classes.control}>
          <label htmlFor="todo" className={classes.textlabel}>
            Enter your Todo here
          </label>
          <input type="text" id="todo" ref={todoRef} />
          <label htmlFor="todo-error" className={classes.errorlabel}></label>
        </div>
        <div className={classes.action}>
          <button>Add TODO</button>
        </div>
      </form>
    </>
  );
}

export default UserTodoForm;
