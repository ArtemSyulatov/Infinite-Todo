import { observer } from "mobx-react-lite";
import icon from "../../../../public/icon_sloy.svg";
import classes from "../Todo.module.scss";
import { TaskInput } from "./TaskInput";
import { TaskState } from "../../../store/TaskState/TaskState";

interface IconProps {
  task: TaskState;
  force: () => void;
}

export const Icon = observer(({ task, force }: IconProps) => {
  return (
    <div className={classes.leftSide}>
      <img
        src={icon}
        onClick={() => {
          task.openChilds();
          force();
        }}
        className={task.isChildsOpened ? undefined : classes.icon_active}
      />
      <TaskInput task={task} />
    </div>
  );
});
