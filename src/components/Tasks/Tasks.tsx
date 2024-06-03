import { ITask } from "@/services/taskService/types"
import { Card } from "./components/Card";

const TaskList = (props: { tasks: ITask[] }) => {
  const { tasks } = props;

  return (
    <div className="flex flex-col text-white gap-2">
      {tasks.map((task, key) => <Card data={task} key={key} />)}
    </div>
  )
}

export { TaskList };