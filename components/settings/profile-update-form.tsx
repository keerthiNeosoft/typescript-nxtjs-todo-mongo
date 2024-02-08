import React from "react";
import { useRef } from "react";

import classes from "./profile-update-form.module.css";

function ProfileUpdateForm(): React.JSX.Element {
  const oldPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);

  async function submitHandler(event): Promise<void> {
    event.preventDefault();

    if (
      oldPasswordRef.current.value === "" &&
      newPasswordRef.current.value === ""
    ) {
      let allLabels = document.getElementsByTagName("label");
      for (let i = 0; i < allLabels.length; i++) {
        if (allLabels[i].htmlFor.includes("error")) {
          allLabels[i].innerHTML = "Please enter password";
        }
      }
    } else {
      const passwordData: models.PasswordFormData = {
        oldPassword: oldPasswordRef.current.value,
        newPassword: newPasswordRef.current.value,
      };

      const response = await fetch("/api/user/change-password", {
        method: "PATCH",
        body: JSON.stringify(passwordData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data: models.ResponseJson = await response.json();
      document.getElementById("message").innerHTML = data.message;
    }
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <h1>Update your password</h1>
      <div className={classes.control}>
        <label htmlFor="new-password" className={classes.textlabel}>
          New Password
        </label>
        <input type="password" id="new-password" ref={newPasswordRef} />
        <label
          htmlFor="new-password-error"
          className={classes.errorlabel}
        ></label>
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password" className={classes.textlabel}>
          Old Password
        </label>
        <input type="password" id="old-password" ref={oldPasswordRef} />
        <label
          htmlFor="old-password-error"
          className={classes.errorlabel}
        ></label>
      </div>
      <div className={classes.action}>
        <label id="message" className={classes.msglabel}></label>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileUpdateForm;
