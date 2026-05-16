import { formatTaskStatus, listTasks, sampleTasks } from "./tasks.js";

export function renderTaskList(tasks, query = "") {
  const visibleTasks = listTasks(tasks, query);

  if (visibleTasks.length === 0) {
    return "タスクがありません";
  }

  return visibleTasks
    .map((task) => `- ${task.title}: ${formatTaskStatus(task)}`)
    .join("\n");
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(renderTaskList(sampleTasks));
}

