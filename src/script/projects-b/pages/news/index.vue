<template>
  <div class="page">
    <div class="child-banner">
      <x-header :banner="banner" :index="6">
        <template slot="banner">
          <div class="banner-middle-text">新闻中心</div>
        </template>
      </x-header>
    </div>
    <div class="child-content child-content2" style="padding-bottom: 2.85rem">
      <ul class="tabs">
        <li
          id="card0"
          :class="{ active: params.category == 'dynamic' }"
          @click="tabsChange('dynamic')"
        >
          集团动态
        </li>
        <li
          id="card1"
          :class="{ active: params.category == 'activity' }"
          @click="tabsChange('activity')"
        >
          重点活动
        </li>
      </ul>
      <div class="news-box">
        <div
          class="news-item-wrap"
          v-for="item in newsList"
          :key="item.news_id"
        >
          <news-item :value="item" :simple="true"></news-item>
        </div>
      </div>
      <v-page
        :total="params.total"
        :size="params.pageSize"
        :page="params.page"
        @change="pageChange"
      ></v-page>
    </div>
    <div class="child-footer">
      <x-footer></x-footer>
    </div>
  </div>
</template>

<script>
import { formateObjToParamStr } from '@script/common/utils'
require('./scss/index.scss')
import xHeader from '@script/projects-b/components/header.vue'
import xFooter from '@script/projects-b/components/footer.vue'
import newsItem from '@script/projects-b/components/newsItem.vue'
import vPage from '@script/projects-b/components/vPage.vue'
import banner from '@assets/images/4.png'
export default {
  data() {
    return {
      banner,
      params: {
        page: 1,
        pageSize: 10,
        total: 0,
        category: 'dynamic',
      },
      newsList: [],
    }
  },
  components: {
    xHeader,
    xFooter,
    newsItem,
    vPage,
  },
  created() {
    let index = this.getQueryVariable('tab') || sessionStorage.getItem('ntab')
    if (index) this.params.category = index
  },

  mounted() {},

  methods: {
    pageChange(val) {
      console.log(val)
      this.params.page = val
      this.getData()
    },
    tabsChange(index) {
      if (this.params.category == index) return
      this.params.category = index
      sessionStorage.setItem('ntab', index)
      this.getData()
    },
    async getData() {
      let { data, status } = await this.$fetch({
        url: `/news/list?${formateObjToParamStr(this.params)}`,
        method: 'GET',
      })
      this.params.total = Number(data.pagination.total)
      // console.log(data.list)
      this.newsList = data.list

      // this.newsList = JSON.parse(JSON.stringify(data.list))
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
  },
}
</script>
