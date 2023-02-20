import { useState } from "react";

function useValidationHook() {
  const verifyEmail = (email) => {
    /**
     * zhyi.feynman@gmail.com
     * zhyi-feynman@gmail.com
     * zhyi_feynman@gmail.com
     * zhyi.feynman-ethan_john@gmail.com
     * ethan@gmail.com.hk
     * zhyi.feynman-ethan_john@gmail-yahoo.com.hk
     */
    const emailRegx =
      /^[a-zA-Z0-9]+([-_\.][a-zA-Z0-9]+)*@[a-zA-Z0-9-]+([*\.][a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    const OK = emailRegx.exec(email);
    return OK;
  };

  const verifyPassword = (password) => {
    /**
     * 8-20位字符、数字、_和.
     */
    const passwordRegx = /[a-zA-Z0-9_\.]{8,20}/;
    const OK = passwordRegx.exec(password);
    console.log(password);
    console.log(OK);
    return OK;
  };

  return { verifyEmail, verifyPassword };
}

export { useValidationHook };
