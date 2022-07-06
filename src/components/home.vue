<template>
  <div class="border">
    <div class="form-check">
      <input
        v-model="status1"
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <BIconPlusSquare class="color-white" />
    </div>

    <div class="form-check">
      <input
        v-model="status2"
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckChecked"
        checked
      />
      <div class="color-white">
        <BIconPersonCircle />
      </div>
    </div>

    <div class="form-check">
      <input
        v-model="status3"
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckChecked"
        checked
      />
      <BIconDiagram3 class="color-white" />
    </div>
  </div>

  <div class="color-white background-gray" v-if="status1">
    <div class="hover-effect">
      <BIconPlusSquare class="color-green inline" />
      <p class="inline ml-2">bounding box</p>
      <input class="inline width-20" type="number" />
    </div>
    <div class="hover-effect">
      <BIconPlusSquare class="color-yellow inline" />
      <p class="inline ml-2">bounding box</p>
      <input class="inline width-20" type="number" />
    </div>
  </div>

  <div class="color-white background-gray" v-if="status2">
    <div class="hover-effect">
      <BIconPersonCircle class="color-orange inline" />
      <p class="inline ml-2">avatar</p>
      <input class="inline width-20" type="number" />
    </div>
  </div>

  <div class="color-white background-gray" v-if="status3">
    <div class="hover-effect">
      <BIconDiagram3 class="color-yellow inline" />
      <p class="inline ml-2">box_corners</p>
      <input class="inline width-20" type="number" />
    </div>
    <div class="hover-effect">
      <BIconDiagram3 class="color-dark-green inline" />
      <p class="inline ml-2">box_corners</p>
      <input class="inline width-20" type="number" />
    </div>
    <div class="hover-effect">
      <BIconDiagram3 class="color-purple inline" />
      <p class="inline ml-2">box_corners</p>
      <input class="inline width-20" type="number" />
    </div>

  </div>
</template>

<script>
export default {
  name: "homeComponent",
  data() {
    return {
      status1: false,
      status2: false,
      status3: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.form-check {
  padding: 10px 30px;
  margin: auto;
  display: inline-block;
}
.border {
  border: 1px solid gray;
  border-radius: 5px;
}
.color-white {
  color: white;
}
.color-purple {
  color: purple;
}
.color-yellow {
  color: yellow;
}
.color-dark-green {
  color: #004f11;
}
.color-orange {
  color: orange;
}
.color-green {
  color: green;
}
.inline {
  display: inline-block;
}

.width-20 {
  width: 50px;
}
.ml-2 {
  margin: 18px;
}

input[type="number"] {
  background: transparent;
  border: 1px solid gray;
  border-radius: 5px;
}

.background-gray {
  background-color: #272727;
}
.hover-effect:hover{
  background-color:#333333;
}
</style>
