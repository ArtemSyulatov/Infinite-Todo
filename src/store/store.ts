import { makeAutoObservable } from "mobx";
import { TaskState } from "./TaskState/TaskState.js";
import { MobXProviderContext } from "mobx-react";
import { useContext } from "react";

export class Store {
  tasks: TaskState[] = [];
  selectedTask!: TaskState | null;
  taskHeight!: number;
  constructor() {
    makeAutoObservable(this);
  }
  addTask = (id: number, text: string, childs: TaskState[] = []) => {
    this.tasks.push(
      new TaskState(
        {
          id,
          text,
          title: "",
          childs,
        },
        this
      )
    );
  };
  removeTask = (id: number) => {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  };
  setSelectedTask = (task: TaskState | null) => {
    this.selectedTask = task;
  };
  // setHeight = (height:number) => {
  //     this.taskHeight = height
  // };
}

const store = new Store();
export const useStore = () => useContext(MobXProviderContext);
export default store;
