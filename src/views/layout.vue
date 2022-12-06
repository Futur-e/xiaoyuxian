<template>

  <div class="main">
    <router-view></router-view>
  </div>


</template>

<script>

import {useStore} from "vuex";


export default {
  // eslint-disable-next-line vue/multi-word-component-names
    name:"Layout",
  setup(){
      const store = useStore()
    store.dispatch('category/getList')
    return{

    }
  }

}
</script>

<style scoped>

</style>
