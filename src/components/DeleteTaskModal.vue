<template>
  <div id="delete-modal" class="modal-container">
    <div class="modal-content">
      Are you sure want to delete this ?
      <div class="button-wrapper">
        <button class="btn btn-cancel" v-on:click="cancelDelete">Cancel</button>
        <button class="btn btn-delete" v-on:click="deleteTask">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteTaskModal",
  props: {
    time: String
  },
  methods: {
    deleteTask: function() {
      this.$parent.deleteTask(this.time);
    },
    cancelDelete: function() {
      const deleteModal = document.getElementById("delete-modal");
      deleteModal.style.display = "none";
    }
  },
  mounted: function() {
    const modal = document.getElementById("delete-modal");
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
};
</script>

<style scoped>
.modal-container {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 300px;
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
}

.button-wrapper {
  margin-top: 60px;
}

.btn {
  height: 40px;
  width: 100px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
}

.btn-cancel {
  margin-right: 15px;
  background: grey;
  border: 1px solid grey;
}

.btn-delete {
  background: red;
  border: 1px solid red;
}
</style>