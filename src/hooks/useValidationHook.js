import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useVerifyUserMutation } from "../store";

function useValidationHook() {
  const [verifyUser, verifyUserResults] = useVerifyUserMutation();
  const [verifyResult, setVerifyResult] = useState(false);

  useEffect(() => {
    if (verifyUserResults.isSuccess) {
      setVerifyResult(true);
    } else if (verifyUserResults.isError) {
      setVerifyResult(false);
    }
  }, [verifyUserResults.isLoading]);

  const verifyUserToken = (token, type) => {
    verifyUser({ token, type });
  };

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
     * 8-20位字母、数字、_和.
     */
    const passwordRegx = /[a-zA-Z0-9_\.]{8,20}/;
    const OK = passwordRegx.exec(password);
    return OK;
  };

  const verifyRepeatPassword = (password, repeatPassword) => {
    return password === repeatPassword;
  };

  const verifyUserName = (userName) => {
    /**
     * 1-10位字母、数字
     */
    const userNameRegx = /[a-zA-Z0-9]{1,10}/;
    const OK = userNameRegx.exec(userName);
    return OK;
  };

  return {
    verifyEmail,
    verifyPassword,
    verifyRepeatPassword,
    verifyUserName,
    verifyUserToken,
    verifyResult,
    setVerifyResult,
  };
}

export { useValidationHook };
