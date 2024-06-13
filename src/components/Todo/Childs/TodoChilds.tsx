import { observer } from "mobx-react-lite";
import classes from "../Todo.module.scss";
import { Todo } from "../Todo";
import { TaskState } from "../../../store/TaskState/TaskState";

interface TodoChilds {
  task?: TaskState;
  force: () => void;
}

export const TodoChilds = observer(({ task, force }: TodoChilds) => {
  return (
    <div className={classes.Childs}>
      {task?.isChildsOpened
        ? task?.childs.map((element) => {
            return <Todo force={force} key={element.id} task={element} />;
          })
        : null}
    </div>
  );
});
