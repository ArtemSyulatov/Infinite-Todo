import { action, makeObservable, observable } from "mobx";

export class TaskState {
  id;
  text;
  title;
  childs = []
  isChecked = false
  constructor({text,title}) {
    this.id = Math.random()
    this.text = text;
    this.title = title;
    makeObservable(this, {
      text: observable,
      title: observable,
      childs: observable,
      isChecked: observable,
      setIsChecked:action,
      addChild:action
    });
  }
  setIsChecked(){ 
    this.isChecked = !this.isChecked
  } 
  addChild({text,title}){
    this.childs.push(new TaskState({text,title}))
  } 
  
}
