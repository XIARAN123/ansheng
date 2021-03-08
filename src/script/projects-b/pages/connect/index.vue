<template>
  <div class="page">
    <div class="child-banner">
      <x-header :banner="banner" :index="7">
        <template slot="banner">
          <div class="banner-middle-text">联系我们</div>
        </template>
      </x-header>
    </div>
    <div class="child-content">
      <ul class="tabs">
        <li
          id="card0"
          :class="{ active: tabsIndex == 0 }"
          @click="tabsChange(0)"
        >
          公司信息
        </li>
        <li
          id="card1"
          :class="{ active: tabsIndex == 1 }"
          @click="tabsChange(1)"
        >
          人才发展
        </li>
      </ul>
      <div v-show="tabsIndex == 0">
        <div class="c-wrap">
          <div class="connect-item" v-for="(item, index) in list" :key="index">
            <div class="c-title">{{ item.title }}</div>
            <div class="c-type-item" v-if="item.site">
              <img :src="site" alt="" />
              <span>{{ item.site }}</span>
            </div>
            <div class="c-type-item">
              <img :src="phone" alt="" />
              <span>{{item.phone}}</span>
            </div>
            <!-- <div class="c-type-item">
              <img :src="phone" alt="" />
              <span>+86 21-62898123</span>
            </div> -->
           
            <div class="c-type-item">
              <img :src="email" alt="" />
              <span>{{item.email}}</span>
            </div> 
          </div>
        </div>
        <div class="c-window">
          <div class="left">
            <p>如您需要我们的帮助，请留言给我们!</p>
            <img :src="connect" alt="" />
          </div>
          <div class="right">
            <ul class="form">
              <li class="form-item">
                <div class="label">姓名<span class="must"></span></div>
                <div class="input">
                  <input type="text" v-model="form.name" />
                </div>
              </li>
              <li class="form-item">
                <div class="label">电话<span class="must"></span></div>
                <div class="input">
                  <input type="text" v-model="form.phone" />
                </div>
              </li>
              <li class="form-item">
                <div class="label">邮箱<span class="must"></span></div>
                <div class="input">
                  <input type="text" v-model="form.email" />
                </div>
              </li>
              <li class="form-item">
                <div class="label">请您在此留言，我们会尽快给你回复！</div>
                <div class="input">
                  <textarea v-model="form.message"></textarea>
                </div>
              </li>
              <li class="form-item">
                <div class="submit-btn">提交</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div style="padding: 20px 0 40px" v-show="tabsIndex == 1">
        <div class="job-item" v-for="(item, index) in jobList" :key="index">
          <p class="j-site">{{ item.region }}</p>
          <div class="j-main">
            <div class="j-left">
              <a
                class="j-name elis"
                :href="`./applyJobs.html?detail=1&id=${item.id}`"
                >{{ item.title }}</a
              >
              <div class="j-intro elis">
                {{
                  item.content
                    .replace(/<\/?.+?>/g, '')
                    .replace(/nbsp;/g, '')
                    .replace(/&/g, '')
                }}
              </div>
            </div>
            <a
              class="apply-btn j-right"
              :href="`./applyJobs.html?detail=0&id=${item.id}`"
              >立即申请</a
            >
          </div>
        </div>
        <div class="xinaotu" v-for="(item, index) in xinao" :key="index">
          <img :src="item.img" alt="" />
          <div
            class="right"
            :style="{
              background: `url('${item.bk}') top left/100% 100% no-repeat`,
            }"
          >
            <div :style="{ color: item.color }" class="con">
              {{ item.content }}
            </div>
            <div>{{ item.jobname }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="child-footer">
      <x-footer></x-footer>
    </div>
  </div>
</template>

<script>
require('./scss/index.scss')
import { formateObjToParamStr } from '@script/common/utils'
import xHeader from '@script/projects-b/components/header.vue'
import xFooter from '@script/projects-b/components/footer.vue'
import banner from '@assets/images/30.png'
import site from '@assets/images/36.png'
import phone from '@assets/images/17.png'
import email from '@assets/images/16.png'
import connect from '@assets/images/19.png'

import img1 from '@assets/images/27.png'
import bk1 from '@assets/images/51.png'
import bk2 from '@assets/images/52.jpg'
export default {
  data() {
    return {
      banner,
      site,
      phone,
      email,
      connect,
      tabsIndex: 0,
      params: {
        page: 1,
        pageSize: 9999,
      },
      xinao: [
        {
          img: img1,
          content: ' 青年时种下什么,老年时就收获什么。',
          jobname: '研发工程师',
          bk: bk1,
          color: '#02478D',
        },
        {
          img: img1,
          content: ' 青年时种下什么,老年时就收获什么。',
          jobname: '售前工程师',
          bk: bk2,
          color: '#BF324D',
        },
      ],
      list: [
        {
          title: '上海总部',
          site: '上海市黄浦区西藏中路336号华旭国际大厦15楼',
          phone:'+86 21-62898123',
          email:'news@ambrightgroup.com',
        },
        {
          title: '南京',
          site: '南京市江北新区浦珠中路300号B2楼',
          phone:'+86 25- 83755169',
          email:'news@ambrightgroup.com',
        },
        {
          title: '纽约',
          site: '美国纽约市里约公园第62大道87- 30- 12E 11374',
          phone:'1- 617- 8957512',
          email:'news@ambrightgroup.com',
        },
        {
          title: '商务合作',
          phone:'+86 21-62898123',
          email:'news@ambrightgroup.com',
          
        },
        {
          title: '媒体联络',
          phone:'+86 21-62898123',
          email:'news@ambrightgroup.com',
        },
        {
          title: '人才招聘',
          phone:'+86 21-62898123',
          email:'news@ambrightgroup.com',
        },
      ],
      form: {
        name: '',
        phone: '',
        email: '',
        message: '',
      },
      jobList: [],
    }
  },
  components: {
    xHeader,
    xFooter,
  },
  created() {
    let index = this.getQueryVariable('tab') || sessionStorage.getItem('ctab')
    if (index) this.tabsIndex = index
    this.getData()
  },

  mounted() {},

  methods: {
    tabsChange(index) {
      this.tabsIndex = index
      sessionStorage.setItem('ctab', index)
    },
    async getData() {
      let { data } = await this.$fetch({
        url: `/job/list?${formateObjToParamStr(this.params)}`,
        method: 'GET',
      })
      this.jobList = data.list
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
