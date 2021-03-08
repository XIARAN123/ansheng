<template>
  <div class="card-item">
    <div class="card-left">
      <div class="card-title" @click="goTo(value.link)">
        {{ value.title }}
      </div>
      <div class="card-content" v-html="value.content"></div>
    </div>
    <div class="card-right" @mouseleave="active = null">
      <img
        v-if="value.tab && value.tab[active] && value.tab[active].image"
        :src="value.tab[active].image"
        alt=""
      />
      <img v-else :src="value.image" alt="" />
      <div v-if="value.tab" class="card-tabs">
        <div
          class="flex-center"
          :class="{ active: active == index }"
          @mouseenter="active = index"
          :style="{ flex: item.row || 1 }"
          v-for="(item, index) in value.tab"
          :key="index"
          @click="goTo(item.link, index)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="hover-mask" v-if="active !== null">
        <div class="title">{{ value.tab[active].name }}</div>
        <div class="content">{{ value.tab[active].content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: null,
    }
  },
  props: ['value'],
  methods: {
    goTo(url, index) {
      this.active = index
      if (url) {
        window.open(url)
      }
    },
  },
}
</script>
