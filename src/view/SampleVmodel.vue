<template>

  <h2>Hello {{ name }}</h2>

  <p>Name: {{ name }}</p>
  <input v-model="name">

  <p>Age: {{ age }}</p>
  <input type="number" v-model="age">

  <p>Course: {{ course }}</p>
  <input v-model="course">

</template>

 

<script>

export default {

  data() {

    return {

      name: "",
      age: "",
      course:"",

    }

  }

}

</script>