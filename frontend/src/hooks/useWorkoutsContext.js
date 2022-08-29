import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutContext";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error(
      "useWorkoutContext must be used inside a WorkoutsContextProvider"
    );
  }
  return context;
};

export default useWorkoutsContext;
