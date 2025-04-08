<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useTaskStore } from "../store/index";

const taskStore = useTaskStore();
onMounted(() => {
  console.log("Component Mounted! Fetching tasks...");
});

watch(
  () => taskStore.tasks,
  (newTasks) => {
    console.log("Tasks updated!", newTasks);
  }
);
</script>
