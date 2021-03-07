<template>
  <div class="header-wrap">
    <div
      class="banner"
      :class="{ active: active }"
      :style="{ backgroundImage: `url(${banner})` }"
    ></div>
    <header class="nav">
      <img class="logo" :src="logo" alt="" />
      <nav class="nav-list">
        <ul>
          <li
            :class="{ active: index == i + 1 }"
            v-for="(item, i) in menu"
            :key="i"
          >
            <span @click="goTo(item.url)">{{ item.name }}</span>
            <ul class="second-nav" v-if="item.children">
              <li
                v-for="(item2, i2) in item.children"
                :key="i2"
                @click.stop="goTo(item2.url)"
              >
                {{ item2.name }}
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="lang-tab">
        <span @click="langChange('zh-CN')" :class="{ active: lang === 'zh-CN' }"
          >中文</span
        >
        |
        <span @click="langChange('en-US')" :class="{ active: lang === 'en-US' }"
          >EN</span
        >
        <img class="menu-icon" @click="navShow = true" :src="menuIcon" alt="" />
      </div>
    </header>

    <slot name="banner"></slot>
    <div class="fixed-nav" v-if="navShow">
      <div class="mask" @click="navShow = false"></div>
      <ul class="main">
        <li :class="{ active: index == i }" v-for="(item, i) in menu" :key="i">
          <div v-if="item.children" @click.stop="setShow(i)">
            {{ item.name }}
          </div>
          <div v-else @click.stop="goTo(item.url)">{{ item.name }}</div>
          <ul
            class="second-nav"
            :class="{ active: item['show'] }"
            v-if="item.children"
          >
            <li
              v-for="(item2, i2) in item.children"
              :key="i2"
              @click.stop="goTo(item2.url)"
            >
              {{ item2.name }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
require('./header.scss')
import logo from '@assets/images/20.png'
import menuIcon from '@assets/images/21.png'
import cfg from '@script/config/index'
export default {
  name: 'index',
  props: ['active', 'index', 'banner'],

  data() {
    return {
      logo,
      menuIcon,
      menu: JSON.parse(JSON.stringify(cfg.menu)),
      navShow: false,
      lang: localStorage.getItem('languageSet') || 'zh-CN',
    }
  },
  created() {},
  mounted() {},

  methods: {
    langChange(lang) {
      this.$i18n.locale = lang
      localStorage.setItem('languageSet', lang)
      this.lang = lang
    },
    setShow(i) {
      this.$set(this.menu[i], 'show', !this.menu[i]['show'])
    },
    goTo(path) {
      this.navShow = false
      window.location.href = path
    },
    //禁止页面滑动
    stop() {
      var mo = function (e) {
        passive: false
      }
      document.body.style.overflow = 'hidden'
      document.addEventListener('touchmove', mo, false) //禁止页面滑动
    },
    //取消滚动限制
    move() {
      var mo = function (e) {
        passive: false
      }
      document.body.style.overflow = '' //出现滚动条
      document.removeEventListener('touchmove', mo, false)
    },
  },
  watch: {
    navShow(val) {
      if (val) {
        document.body.style.overflow = 'hidden'
        document.body.style.position = 'fixed'
      } else {
        document.body.style.overflow = 'auto'
        document.body.style.position = 'static'
      }
    },
  },
}
</script>
