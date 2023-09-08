import { makeAutoObservable } from "mobx"

export class Task {
  task = [];
  constructor() {
    makeAutoObservable(this);
  }
  addTask(id, text,childs) {
    this.task.push({
      id,
      text,
      childs,
    });
  }
  addChilds(id, text,childs) {
    this.task.forEach((element) => {
      if (element.id === id) {
        element.childs.push({
          id: Number(`${id}.${id}`),
          text,
          childs,
        }) 
      }
    });
  } 
  removeTask(id){
    this.task.forEach((element,index)=>{
      if(element.id === id){
        this.task.splice(index,1)
      }else{
        element.childs.forEach((child,index)=>{
          if(child.id === id){
            element.childs.splice(index,1)
          }
        })
      }
    }) 
  } 
}

const test = new Task(); 