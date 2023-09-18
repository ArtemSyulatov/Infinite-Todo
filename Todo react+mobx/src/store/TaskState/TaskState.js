import { action, makeObservable, observable } from "mobx";

export class TaskState {
  id;
  text;
  title;
  parent;
  childs = [];
  isChecked = false;
  inputToggle = false;
  constructor({ text, title }, parent) {
    this.parent = parent;
    this.id = Math.random();
    this.text = text;
    this.title = title;
    makeObservable(this, {
      inputToggle: observable,
      text: observable,
      title: observable,
      childs: observable,
      isChecked: observable,
      toggleInput: action,
      setIsChecked: action,
      addChild: action,
      remove: action,
      removeTask: action,
      setText:action,
    });
  }
  setIsChecked() {
    this.isChecked = !this.isChecked;
  }
  addChild({ text, title }) {
    this.childs.push(new TaskState({ text, title }, this));
  }
  remove() {
    this.parent.removeTask(this.id);
  }
  removeTask(id) {
    this.childs = this.childs.filter((elem) => elem.id !== id);
  }
  toggleInput() {
    this.inputToggle = !this.inputToggle;
  }
  setText(text){
    this.text = text
  }
}
