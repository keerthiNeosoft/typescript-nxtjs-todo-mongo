import React from "react";
import { useRouter } from "next/router";
import DeleteIcon from "@mui/icons-material/Delete";

import classes from "./todos-list.module.css";

function TodosList({ data }): React.JSX.Element {
  const router = useRouter();
  const handleDelete = async (todo: string) => {
    const toDelete: boolean = confirm(`You are deleting "${todo}"`);
    if (!toDelete) {
      return;
    }
    const response = await fetch("/api/user/delete-todo", {
      method: "DELETE",
      body: JSON.stringify({ todo: todo }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 201) {
      router.reload();
    }
  };

  return (
    <section className={classes.listing}>
      <h3>All your TODOs</h3>
      <ol>
        {data.length > 0 ? (
          data.map((todo: models.TodoElement, index: number) => {
            return (
              <li>
                <input key={index} value={todo.todo} disabled />
                <span
                  className={classes.iconbtn}
                  onClick={() => handleDelete(todo.todo)}
                >
                  <DeleteIcon />
                </span>
              </li>
            );
          })
        ) : (
          <p>Yet to add todo list</p>
        )}
      </ol>
    </section>
  );
}

export default TodosList;
