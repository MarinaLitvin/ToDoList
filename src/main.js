import { refs } from "./js/refs";
import { addTask, deleteTask  } from "./js/tasks";
import { initialTask } from "./js/tasks";
import { switchTheme } from "./js/theme-switcher";
import { initialTheme } from "./js/theme-switcher";

initialTask();
initialTheme();

refs.form.addEventListener("submit", addTask);

refs.taskList.addEventListener("click", deleteTask);

refs.themeToggle.addEventListener("click", switchTheme)