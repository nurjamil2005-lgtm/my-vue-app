<script>

export default {

  data() {

    return {

      name: "Juan",

      age: 20,

      studentID: "12-1234-12",

      course: "BSIT",

      yearLevel: 3,


    }

  }

}

</script>

 

<template>

  <p>Name: {{ name }}</p>

  <p>Age: {{ age }}</p>

  <p>studentID: {{ studentID }}</p>

  <p>Course: {{ course }}</p>

  <p>yearLevel: {{ yearLevel }}</p>

</template>