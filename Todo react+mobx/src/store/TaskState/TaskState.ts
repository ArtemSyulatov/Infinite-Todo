import {action, makeObservable, observable} from "mobx";
import {Store} from "../store";

type Text = {
    id?:number
    childs?:TaskState[]
    text: string;
    title: string
}

export class TaskState {
    id: number;
    text: string;
    title: string;
    parent: Store | TaskState;
    childs: TaskState[] = [];
    isChecked: boolean  = false;
    inputToggle: boolean = true;
    isChildsOpened: boolean = false;

    constructor({text, title}: Text, parent: Store | TaskState) {
        this.parent = parent;
        this.id = Math.random();
        this.text = text;
        this.title = title;
        makeObservable(this, {
            inputToggle: observable,
            isChildsOpened: observable,
            text: observable,
            title: observable,
            childs: observable,
            isChecked: observable,
            toggleInput: action,
            setIsChecked: action,
            addChild: action,
            remove: action,
            removeTask: action,
            setText: action,
            openChilds: action,
            setTitle: action,
        });
    }

    setIsChecked() {
        this.isChecked = !this.isChecked;
    }

    addChild({text, title}: Text) {
        this.childs.push(new TaskState({text, title}, this));
    }

    remove() {
        this.parent.removeTask(this.id);
    }

    removeTask(id: number) {
        this.childs = this.childs.filter((elem) => elem.id !== id);
    }

    toggleInput() {
        this.inputToggle = !this.inputToggle;
    }

    setText(text: string): void {
        this.text = text;
    }

    openChilds() {
        this.isChildsOpened = !this.isChildsOpened;
    }

    setTitle(title: string): void {
        this.title = title
    }
}
