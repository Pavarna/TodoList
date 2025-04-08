<template>
  <li :class="task.priority">
    <span :class="{ completed: task.completed }">{{ task.text }}</span>
    <button @click="toggleComplete">✔️</button>
    <button @click="deleteTask">❌</button>
  </li>
</template>

<script setup lang="ts">
import { defineProps, ref, watch } from "vue";
import { useTaskStore } from "../store/index";

const props = defineProps(["task"]);
const taskStore = useTaskStore();
const localTask = ref({ ...props.task });

watch(
  () => props.task,
  (newVal) => {
    localTask.value = { ...newVal };
  }
);

const toggleComplete = () => {
  localTask.value.completed = !localTask.value.completed;
};

const deleteTask = () => {
  taskStore.deleteTask(props.task.id);
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
.high {
  color: red;
}
.medium {
  color: orange;
}
.low {
  color: green;
}
</style>
