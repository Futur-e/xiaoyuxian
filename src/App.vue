
<template>
  <AppTopnav></AppTopnav>
  <AppHeader></AppHeader>
  <router-view></router-view>
  <appFooter></appFooter>
</template>

<script>
import AppTopnav from "@/components/app-topnav";
import AppHeader from "@/components/app-header";
import appFooter from "@/components/app-footer";
export default {
  name:'APP',
  components:{AppTopnav,AppHeader,appFooter},
}
</script>

<style scoped>

</style>
