import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const dispatch = useAuthContext();
  // remove user from storage
  const logout = () => {
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
  };
  return logout;
};
