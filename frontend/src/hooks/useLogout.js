import { useAuthContext } from "./useAuthContext";
import useWorkoutsContext from "./useWorkoutsContext";

export const useLogout = () => {
  const { dispatch: authDispatch } = useAuthContext();
  const { dispatch: workoutsDispatch } = useWorkoutsContext();
  // remove user from storage
  const logout = () => {
    localStorage.removeItem("user");

    // dispatch logout action
    authDispatch({ type: "LOGOUT" });
    workoutsDispatch({ type: "SET_WORKOUTS", payload: null });
  };
  return logout;
};
