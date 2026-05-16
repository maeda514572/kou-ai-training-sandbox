export function listTasks(tasks, query = "") {
  if (!Array.isArray(tasks)) {
    throw new TypeError("tasks must be an array");
  }

  const normalizedQuery = query.trim().toLowerCase();
  const filtered = normalizedQuery
    ? tasks.filter((task) => task.title.toLowerCase().includes(normalizedQuery))
    : tasks;

  return [...filtered].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function formatTaskStatus(task) {
  if (task.done) {
    return "完了";
  }

  return "未完了";
}

export const sampleTasks = [
  {
    id: "task-1",
    title: "Issueを読む",
    done: true,
    createdAt: "2026-05-14"
  },
  {
    id: "task-2",
    title: "PRを作る",
    done: false,
    createdAt: "2026-05-15"
  },
  {
    id: "task-3",
    title: "レビューに返信する",
    done: false,
    createdAt: "2026-05-16"
  }
];

