import { makeAutoObservable } from "mobx";
import { TaskState } from "./TaskState/TaskState";
import { MobXProviderContext } from "mobx-react";
import {useContext} from 'react'
class Store {
  tasks = [];
  
  constructor() {
    makeAutoObservable(this);
  }

  addTask = (id, text, childs = []) => {
    this.tasks.push(
      new TaskState({
        id,
        text,
        childs,
      })
    );
  };
  // addChilds = (id, text) => {
  //   this.tasks.forEach((element) => {
  //     if (element.id === id) {
  //       element.childs.push({
  //         id: Number(`${id}.${id}`),
  //         text,
  //       });
  //     }
  //   });
  // };
  removeTask = (id) => {
    this.tasks.forEach((element, index) => {
      if (element.id === id) {
        this.tasks.splice(index, 1);
      } else {
        element.childs.forEach((child, index) => {
          if (child.id === id) {
            element.childs.splice(index, 1);
          }
        });
      }
    });
  };
}

const store = new Store();
console.log(store)
export const useStore = () => useContext(MobXProviderContext);
export default store;
