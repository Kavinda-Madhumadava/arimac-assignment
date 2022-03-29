<template>
  <div class=" home row m-2" >
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <User v-for="user in users" :user="user"/>

  </div>
</template>

<script setup>
import {defineProps, onBeforeUnmount, onMounted, ref} from 'vue'
import UserService from '@/service/UserService.js'
import {useLoading} from 'vue-loading-overlay'

const $loading = useLoading()
const userService = new UserService()

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import User from '@/components/User.vue'

const users = ref([])

const getAllUsers = () => {
  const loader = $loading.show();
  userService.getUsers().then(function (response) {
    console.log("response",response)
    users.value = response
    loader.hide()
  })
}

onMounted(() => {
  getAllUsers()
})


</script>
