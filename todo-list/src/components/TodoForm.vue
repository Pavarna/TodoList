<template>
  <div>
    <input v-model="taskText" placeholder="Enter task" />
    <select v-model="taskPriority">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
    <button @click="addTask">Add Task</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTaskStore } from "../store/index";

const taskStore = useTaskStore();

const taskText = ref("");
const taskPriority = ref<"low" | "medium" | "high">("medium");

const addTask = () => {
  if (taskText.value.trim()) {
    taskStore.addTask({
      id: Date.now(),
      text: taskText.value,
      priority: taskPriority.value,
      completed: false,
    });
    taskText.value = "";
  }
};
</script>
