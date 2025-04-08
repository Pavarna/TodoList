import { defineStore } from "pinia";
import { ref } from "vue";

interface Task {
  id: number;
  text: string;
  priority: string;
  completed: boolean;
}

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: ref<Task[]>([]),
  }),
  getters: {
    highPriorityTasks: (state) =>
      state.tasks.filter((task) => task.priority === "high"),
    mediumPriorityTasks: (state) =>
      state.tasks.filter((task) => task.priority === "medium"),
    lowPriorityTasks: (state) =>
      state.tasks.filter((task) => task.priority === "low"),
  },
  actions: {
    addTask(task: Task) {
      this.tasks.push(task);
    },
    deleteTask(id: number) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    updateTask(updatedTask: Task) {
      const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) this.tasks[index] = updatedTask;
    },
  },
});
