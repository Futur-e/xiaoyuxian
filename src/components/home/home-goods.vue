<template>
  <div class="goods-item" >
    <RouterLink to="/" class="image" >
      <img :src="list.picture" alt="" />
    </RouterLink>
    <p class="name ellipsis-2">{{list.desc}}</p>
    <p class="desc">{{list.name}}</p>
    <p class="price">&yen;{{list.price}}</p>
    <div class="extra">
      <RouterLink to="/">
        <span>找相似</span>
        <span>发现现多宝贝 &gt;</span>
      </RouterLink>
    </div>
  </div>
</template>

<script>


export default {
  name: 'HomeGoods',
 props: {
     list: {
         type: Object,
             default: () => {}
       }
   }
}
</script>

<style scoped lang='less'>
.goods-item {
  width: 240px;
  height: 300px;
  border: 1px solid rebeccapurple;
  padding: 10px 30px;
  position: relative;
  overflow: hidden;
  //border: 1px solid transparent;
  transition: all .5s;
  .image {
    display: block;
    width: 160px;
    height: 160px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    margin-top: 6px;
    font-size: 16px;
    &.name {
      height: 44px;
    }
    &.desc {
      color: #666;
      height: 22px;
    }
    &.price {
      margin-top: 20px;
      font-size: 20px;
      color: @priceColor;
    }
  }
  .extra {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 86px;
    width: 100%;
    background: @xtxColor;
    text-align: center;
    transform: translate3d(0,100%,0);
    transition: all .5s;
    span {
      display: block;
      color: #fff;
      width: 120px;
      margin: 0 auto;
      line-height: 30px;
      &:first-child {
        font-size: 18px;
        border-bottom:1px solid #fff;
        line-height: 40px;
        margin-top: 5px;
      }
    }
  }
  &:hover {
    border-color: @xtxColor;
    .extra {
      transform: none;
    }
  }
}
</style>
