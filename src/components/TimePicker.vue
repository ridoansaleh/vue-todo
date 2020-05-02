<template>
  <div id="timepicker" class="timepicker-container">
    <div class="modal-content">
      <div class="clock" v-if="isHourActive">
        <div class="dot-center"></div>
        <div class="time-box time-1" v-on:click="changeHour('01')">1</div>
        <div class="time-box time-2" v-on:click="changeHour('02')">2</div>
        <div class="time-box time-3" v-on:click="changeHour('03')">3</div>
        <div class="time-box time-4" v-on:click="changeHour('04')">4</div>
        <div class="time-box time-5" v-on:click="changeHour('05')">5</div>
        <div class="time-box time-6" v-on:click="changeHour('06')">6</div>
        <div class="time-box time-7" v-on:click="changeHour('07')">7</div>
        <div class="time-box time-8" v-on:click="changeHour('08')">8</div>
        <div class="time-box time-9" v-on:click="changeHour('09')">9</div>
        <div class="time-box time-10" v-on:click="changeHour('10')">10</div>
        <div class="time-box time-11" v-on:click="changeHour('11')">11</div>
        <div class="time-box time-12" v-on:click="changeHour('12')">12</div>
      </div>
      <div class="clock" v-else>
        <div class="dot-center"></div>
        <div class="time-box time-1" v-on:click="changeMinute('05')">05</div>
        <div class="time-box time-2" v-on:click="changeMinute('10')">10</div>
        <div class="time-box time-3" v-on:click="changeMinute('15')">15</div>
        <div class="time-box time-4" v-on:click="changeMinute('20')">20</div>
        <div class="time-box time-5" v-on:click="changeMinute('25')">25</div>
        <div class="time-box time-6" v-on:click="changeMinute('30')">30</div>
        <div class="time-box time-7" v-on:click="changeMinute('35')">35</div>
        <div class="time-box time-8" v-on:click="changeMinute('40')">40</div>
        <div class="time-box time-9" v-on:click="changeMinute('45')">45</div>
        <div class="time-box time-10" v-on:click="changeMinute('50')">50</div>
        <div class="time-box time-11" v-on:click="changeMinute('55')">55</div>
        <div class="time-box time-12" v-on:click="changeMinute('00')">00</div>
      </div>
      <div class="time-selected">
        {{ hour }} : {{ minute }}
        <select v-model="timeGroup">
          <option :selected="true">AM</option>
          <option>PM</option>
        </select>
      </div>
      <button
        type="button"
        class="btn-ok"
        v-on:click="saveTask"
        :disabled="hour === '00' && minute === '00'"
      >Save Task</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimePicker",
  data: function() {
    return {
      hour: "00",
      minute: "00",
      isHourActive: true,
      timeGroup: "AM"
    };
  },
  methods: {
    changeHour: function(val) {
      this.hour = val;
      this.isHourActive = false;
    },
    changeMinute: function(val) {
      this.minute = val;
      this.isHourActive = true;
    },
    saveTask: function() {
      this.isHourActive = true;
      let time = this.hour + ":" + this.minute + " " + this.timeGroup;
      this.$parent.saveTask(time);
    }
  },
  mounted: function() {
    const modal = document.getElementById("timepicker");
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
};
</script>

<style scoped>
.timepicker-container {
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
  width: 400px;
  height: 400px;
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
}

.clock {
  position: relative;
  width: 300px;
  height: 300px;
  margin: auto;
  border-radius: 50%;
  background: #c6c0be;
}

.dot-center {
  position: absolute;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: black;
  top: 147px;
  left: 140px;
}

.time-box {
  position: absolute;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  line-height: 30px;
  font-size: 24px;
  cursor: pointer;
}

.time-box:hover {
  background: #9ad1d3;
  padding: 2px;
}

.time-1 {
  left: 195px;
  top: 30px;
}

.time-2 {
  left: 235px;
  top: 80px;
}

.time-3 {
  left: 260px;
  top: 140px;
}

.time-4 {
  left: 240px;
  top: 195px;
}

.time-5 {
  left: 195px;
  top: 240px;
}

.time-6 {
  left: 135px;
  top: 260px;
}

.time-7 {
  left: 80px;
  top: 240px;
}

.time-8 {
  left: 35px;
  top: 195px;
}

.time-9 {
  left: 9px;
  top: 142px;
}

.time-10 {
  left: 30px;
  top: 80px;
}

.time-11 {
  left: 75px;
  top: 30px;
}

.time-12 {
  left: 135px;
  top: 10px;
}

.time-selected {
  margin-top: 20px;
}

.btn-ok {
  height: 40px;
  width: 120px;
  margin-top: 20px;
}
</style>