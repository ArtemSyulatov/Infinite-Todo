import { makeAutoObservable } from "mobx";

class Task {
  task = [];
  constructor() {
    makeAutoObservable(this);
  }

  addTask = (id, text, childs = [] ) => {
    this.task.push({
      id,
      text,
      childs,
    });
  };
  addChilds = (id) => {
    this.task.forEach((element) => {
      if (element.id === id) {
        element.childs.push({
          id: Number(`${id}.${id}`), 
        });
      }
    });
  };
  removeTask = (id) => {
    this.task.forEach((element, index) => {
      if (element.id === id) {
        this.task.splice(index, 1);
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

const store = new Task()

export default store;
