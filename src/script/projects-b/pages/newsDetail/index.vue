<template>
  <div class="page">
    <div class="child-banner">
      <x-header :banner="banner" :index="6">
        <template slot="banner">
          <div class="banner-middle-text">新闻中心</div>
        </template>
      </x-header>
    </div>
    <div class="child-content" style="padding-bottom: 2.85rem">
      <div class="bread">
        <span @click="goBack">< 返回上级</span>
      </div>
      <div>
        <p class="news-detail-title">
          {{ info.title }}
        </p>
        <div class="row-line"></div>
        <div class="news-detail-sub">
          <span>时间：{{ info.created_at }}</span>
          <span
            >分类：{{
              info.category === 'dynamic' ? '集团动态' : '重点活动'
            }}</span
          >
        </div>
        <div class="news-detail-main" v-html="info.content"></div>
      </div>
    </div>
    <div class="child-footer">
      <x-footer></x-footer>
    </div>
  </div>
</template>

<script>
require('./scss/index.scss')
import xHeader from '@script/projects-b/components/header.vue'
import xFooter from '@script/projects-b/components/footer.vue'
import newsItem from '@script/projects-b/components/newsItem.vue'
import banner from '@assets/images/4.png'
import news1 from '@assets/images/27.png'
export default {
  data() {
    return {
      banner,
      news1,
      info: {
        title: '',
        content: '',
      },
    }
  },
  components: {
    xHeader,
    xFooter,
    newsItem,
  },
  created() {
    this.getData()
  },

  mounted() {},

  methods: {
    async getData() {
      let { data, status } = await this.$fetch({
        url: `/news/detail?id=${this.getQueryVariable('id')}`,
        method: 'GET',
      })
      console.log(data)
      this.info = data
    },
    getQueryVariable(variable) {
      var query = window.location.search.substring(1)
      var vars = query.split('&')
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=')
        if (pair[0] == variable) {
          return pair[1]
        }
      }
      return false
    },
    goBack() {
      window.history.go(-1)
    },
  },
}
</script>
