<template>
  <ul class="navs">
    <li class="home">
      <RouterLink to="/">首页</RouterLink>
    </li>
    <li v-for="(list,index) in list" :key="list.id"><a href="#">{{list.name}}</a>
      <div class="layer">
        <ul>
          <li v-for="(pic,index) in list.children" :key="pic.id">
            <a href="#">
              <img :src="pic.picture" alt="">
              <p>{{pic.name}}</p>
            </a>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: 'AppHeaderNav',
  setup(){
    const store = useStore()
    const list = computed(() => {
        return store.state.category.list
    })
    return{
      list
    }
  }
}
</script>

<style scoped lang="less">
.navs {
  width: 820px;
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  position: relative;

  >li {
    margin-right: 40px;
    width: 38px;
    text-align: center;

    >a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }

    &:hover {
      >a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
      >.layer {
        height: 132px;
        opacity: 1;
      }
    }
  }
}
.layer {
  z-index: 100;
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all .2s .1s;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;
    li {
      width: 110px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      p {
        padding-top: 10px;
      }
      &:hover {
        p {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>
