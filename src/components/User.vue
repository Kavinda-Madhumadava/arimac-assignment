<template>
  <div class="col-md mb-2">
    <div class="card" style="width: 18rem;">
      <img class="card-img-top"  :src="url" style="width: 100px; margin: auto; display: block" alt="">
      <div class="card-body">
<!--        <font-awesome-icon :icon="['fab', 'twitter']" class="icon alt"/>-->
        <h5 class="card-title" >{{ user.name }}</h5>
        <p class="card-text" style="text-align: left"><fa class="mr-2" icon="envelope" />{{ user.email }}</p>
        <p class="card-text" style="text-align: left"><fa class="mr-2" icon="phone" />{{ user.phone }}</p>
        <p class="card-text" style="text-align: left"><fa class="mr-2" icon="globe" />{{ user.website }}</p>

        <div class="row">
          <a href="#" class=" btn col-4 p-1"><fa style="color: red"   icon="heart"  /></a>
          <a href="#" class=" btn  col-4 p-1"><fa  icon="edit" /></a>
          <a href="#" class=" btn col-4 p-1"><fa  style="color: black" icon="trash" /></a>
        </div>

      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "User",
  props: {
    user: Object
  },
  data() {
    return {
      url: `https://avatars.dicebear.com/v2/avataaars/${this.user.username}.svg?options[mood][]=happy`
    }
  }
}
</script>

<style scoped>

</style>