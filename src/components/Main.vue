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
          <span class="delete-task" v-on:click="openDeleteModal(item.clock)">&times;</span>
          <span class="complete" v-on:click="completeTask(item.clock)">&#x2714;</span>
          <span v-bind:class="{ task_completed: item.status === 'completed' }">{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <DeleteTaskModal :time="timeSelected" />
  </div>
</template>

<script>
import TimePicker from "./TimePicker";
import DeleteTaskModal from "./DeleteTaskModal";

export default {
  name: "Main",
  components: {
    TimePicker,
    DeleteTaskModal
  },
  data: function() {
    return {
      listTask: [],
      taskName: "",
      timeSelected: ""
    };
  },
  methods: {
    showTime: function() {
      const timePickerModal = document.getElementById("timepicker");
      timePickerModal.style.display = "block";
    },
    saveTask: function(time) {
      this.listTask.push({
        name: this.taskName,
        clock: time,
        status: "not completed"
      });
      this.taskName = "";
      const timePickerModal = document.getElementById("timepicker");
      timePickerModal.style.display = "none";
    },
    openDeleteModal: function(time) {
      this.timeSelected = time;
      const deleteModal = document.getElementById("delete-modal");
      deleteModal.style.display = "block";
    },
    deleteTask: function(time) {
      let newListTask = this.listTask.filter(task => {
        if (task.clock !== time) {
          return task;
        }
      });
      this.listTask = newListTask;
      const deleteModal = document.getElementById("delete-modal");
      deleteModal.style.display = "none";
    },
    completeTask: function(time) {
      let newListTask = this.listTask.map(task => {
        if (task.clock === time) {
          return {
            ...task,
            status: "completed"
          };
        }
        return task;
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
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 25px;
  text-align: left;
  padding: 4px;
  background: #fff;
  border: 1px solid #d2d6d6;
  margin-top: 5px;
}

.delete-task,
.complete {
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  padding: 0 5px;
  margin-right: 5px;
  color: #fff;
  cursor: pointer;
  text-align: center;
}

.delete-task {
  display: none;
  background: red;
}

.complete {
  display: none;
  background: #02ca5d;
}

.task_completed {
  text-decoration: line-through;
}

li:hover {
  width: 480px;
  font-weight: bold;
}

li:hover > .delete-task {
  display: inline;
}

li:hover > .complete {
  display: inline;
}
</style>