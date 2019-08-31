import { setFetchingTasks, receiveTasks } from "../redux/tasks";
import Axios from "axios";

export const requestTasksThunk = () => {
  return (dispatch, getState) => {
    dispatch(setFetchingTasks(true));

    Axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        const { data } = response;
        dispatch(receiveTasks({
          data,
          error: null,
        }));
      })
      .catch(error => {
        console.warn(error)
        dispatch(receiveTasks({
          data: [],
          error: error.message
        }))
      })
      .finally(() => {
        dispatch(setFetchingTasks(false));
      });
  }
}