<template>
  <div class="main-container">
    <h1 class="title">What do you want to do ?</h1>
    <div class="input-wrapper">
      <input type="text" class="input-task" placeholder="Type a task" v-model="taskName" />
      <button class="btn-save" v-on:click="showTime" :disabled="taskName === ''">Next</button>
    </div>
    <TimePicker pickTime="saveTask" />
    <div class="list-task">
      <ul>
        <li v-for="item in listTask" :key="item.clock">
          <span class="delete-task" v-on:click="deleteTask(item.clock)">&times;</span>
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TimePicker from "./TimePicker";

export default {
  name: "Main",
  components: {
    TimePicker
  },
  data: function() {
    return {
      listTask: [],
      taskName: ""
    };
  },
  methods: {
    showTime: function() {
      const timePickerModal = document.getElementById("timepicker");
      timePickerModal.style.display = "block";
    },
    saveTask: function(time) {
      this.listTask.push({ name: this.taskName, clock: time });
      this.taskName = "";
      const timePickerModal = document.getElementById("timepicker");
      timePickerModal.style.display = "none";
    },
    deleteTask: function(time) {
      let newListTask = this.listTask.filter(task => {
        if (task.clock !== time) {
          return task;
        }
      });
      this.listTask = newListTask;
    }
  }
};
</script>

<style scoped>
.title {
  color: #fff;
  margin-bottom: 60px;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-wrapper {
  position: relative;
  width: 450px;
}

.input-task {
  width: 438px;
  height: 40px;
  padding: 5px;
  font-size: 25px;
}

.btn-save {
  position: absolute;
  width: 80px;
  box-sizing: border-box;
  top: 5px;
  right: 5px;
  height: 45px;
  font-size: 25px;
  background: #343a40;
  border-color: #343a40;
  color: #fff;
}

.list-task {
  width: 450px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-top: 60px;
}

li {
  height: 40px;
  line-height: 40px;
  font-size: 25px;
  /* color: #fff; */
  text-align: left;
  padding: 4px;
  background: #fff;
  border: 1px solid #d2d6d6;
  margin-top: 5px;
}

.delete-task {
  display: none;
  width: 40px;
  height: 40px;
  background: red;
  padding: 0 5px;
  color: #fff;
  cursor: pointer;
}

li:hover {
  width: 480px;
  font-style: italic;
  font-weight: bold;
}

li:hover > .delete-task {
  display: inline;
}
</style>