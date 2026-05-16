import test from "node:test";
import assert from "node:assert/strict";
import { listTasks } from "../src/tasks.js";
import { renderTaskList } from "../src/render.js";

const tasks = [
  {
    id: "1",
    title: "古いタスク",
    done: false,
    createdAt: "2026-05-14"
  },
  {
    id: "2",
    title: "新しいタスク",
    done: true,
    createdAt: "2026-05-16"
  }
];

test("listTasks sorts tasks by createdAt descending", () => {
  assert.deepEqual(
    listTasks(tasks).map((task) => task.id),
    ["2", "1"]
  );
});

test("listTasks returns all tasks when query is empty", () => {
  assert.equal(listTasks(tasks, "").length, 2);
});

test("listTasks filters by title", () => {
  assert.deepEqual(
    listTasks(tasks, "古い").map((task) => task.id),
    ["1"]
  );
});

test("renderTaskList returns empty state", () => {
  assert.equal(renderTaskList([], ""), "タスクがありません");
});

