<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <HomeBanner/>
        <HomeNew/>
        <home-hot/>
        <home-brand/>
        <HomeProduct/>
        <HomeSpecial/>
      </div>
    </div>
  </div>
</template>
<script>
import HomeCategory from './components/home-category'
import HomeBanner from "@/components/home/home-banner";
import HomeNew from "@/components/home/home-new";
import HomeHot from "@/components/home/home-hot";
import HomeBrand from "@/components/home/home-brand";
import HomeProduct from "@/views/home/components/home-product";
import HomeSpecial from "@/components/home/home-special";
export default {
  name: 'PageHome',
  components: {HomeBanner, HomeCategory,HomeNew ,HomeHot,HomeBrand,HomeProduct,HomeSpecial}
}
</script>
<style scoped lang="less"></style>
