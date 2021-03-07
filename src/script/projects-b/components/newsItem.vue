<template>
  <div class="news-item">
    <div class="guang"></div>
    <div class="news-img" @click.stop="to" :class="{ active: !simple }">
      <span class="news-type" v-show="!simple">{{ value.category_text }}</span>
      <div
        :style="{
          background: `url(${value.image}) center center/cover no-repeat`,
        }"
      ></div>
    </div>
    <div class="news-content" @click.stop="to">
      <div class="news-date">
        <span>{{ value.created_at.substr(-2) }}</span>
        {{ value.created_at.substring(0, 7) }}
      </div>
      <div class="sub-content">
        <a class="sub-title">{{ value.title }}</a>
        <span class="more">查看详情></span>
      </div>
    </div>
  </div>
</template>

<script>
require('./newsItem.scss')
export default {
  data() {
    return {}
  },
  props: {
    value: Object,
    simple: Boolean,
  },
  methods: {
    to() {
      window.location.href = './newsDetail.html?id=' + this.value.news_id
    },
  },
}
</script>

<style>
</style>