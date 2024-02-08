import React, { useState } from "react";
import TodosList from "../todosList/todos-list";
import classes from "./user-profile.module.css";
import UserTodoForm from "../userstodo/userTodo-form";

function UserProfile({
  user,
  data,
}: models.UserProfileProps): React.JSX.Element {
  return (
    <section className={classes.profile}>
      <h1>Now listing {user}'s todo list</h1>
      <div className={classes.todoslist}>
        <UserTodoForm />
        <TodosList data={data} />
      </div>
    </section>
  );
}

export default UserProfile;
