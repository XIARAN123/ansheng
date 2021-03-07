import Index from '@script/projects-b/pages/about/index.vue'
import Vue from '@script/projects-b/app'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: localStorage.getItem('languageSet') || 'zh', // 语言标识
  messages: {
    zh: require('@script/common/zh'),
    en: require('@script/common/en')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Index/>',
  components: { Index },
  i18n
})