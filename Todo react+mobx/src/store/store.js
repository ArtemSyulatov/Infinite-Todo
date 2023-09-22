import { makeAutoObservable } from "mobx";
import { TaskState } from "./TaskState/TaskState";
import { MobXProviderContext } from "mobx-react";
import { useContext } from "react";
class Store {
  tasks = [];
  constructor() {
    makeAutoObservable(this);
  }
  addTask = (id, text, childs = []) => {
    this.tasks.push(
      new TaskState(
        {
          id,
          text,
          childs,
        },
        this
      )
    );
  };
  removeTask = (id) => {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  };
    
}

const store = new Store();
export const useStore = () => useContext(MobXProviderContext);
export default store;
