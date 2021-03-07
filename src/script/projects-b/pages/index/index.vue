<template>
  <div id="wrap" :style="{ height: screenHeight + 'px' }">
    <!-- <div v-if="!working && curIndex == maxPage" class="prev-icon" @click="prev">
      <img class="totop" :src="down" alt="" />
    </div> -->
    <ul class="nav-dot m-hide">
      <li
        v-for="item in maxPage"
        :key="item"
        :class="{ active: item === curIndex }"
        @click="toPage(item)"
      ></li>
    </ul>
    <img
      class="connect-icon"
      @click="connectWindow = true"
      :src="connectUsIcon"
      alt=""
    />
    <connect-window
      v-if="connectWindow"
      @close="connectWindow = false"
    ></connect-window>

    <div v-if="!working && curIndex == 1" class="next-icon" @click="next">
      <img class="todown" :src="down" alt="" />
    </div>
    <div id="main" :style="{ top: nowTop + 'px' }">
      <div class="page page1">
        <x-header
          :index="1"
          :active="curIndex == 1 && !banScroll"
          :banner="banner"
        >
          <template slot="banner">
            <div
              class="banner-text animate__animated animate__delay-0.5s animate__duration-1s"
              :class="{ animate__fadeInUp: 1 === curIndex }"
            >
              国际教育领域<span>领航者</span>
            </div>
          </template>
        </x-header>
      </div>
      <div class="page m-part m-yewu">
        <div
          class="m-yewu-item"
          v-for="(item, index) in yewuList"
          :key="index"
          :style="{ background: `url(${item.bkm}) top left/cover no-repeat` }"
        >
          {{ item.title }}
        </div>
      </div>
      <div class="page page2" v-if="firstDone">
        <div
          class="page2-item"
          :class="{ active: yewuListActive == index }"
          :style="{ background: `url(${bk}) top left/cover no-repeat` }"
          v-for="(item, index) in yewuList"
          :key="index"
          @mouseenter="yewuListActive = index"
        >
          <div class="bk" :style="{ backgroundImage: `url(${item.bk})` }"></div>
          <div class="page2-title">{{ item.name }}</div>
          <div class="row-line"></div>
          <div
            class="page2-list"
            v-for="(child, cindex) in item.children"
            :key="cindex"
            @click="goTo(child.url)"
          >
            {{ child.name }}
          </div>
        </div>
      </div>
      <div class="page page3" v-if="firstDone">
        <p class="m-part m-part-title">新闻中心</p>
        <p class="news-nav">新闻中心</p>
        <div class="dynamic-near">
          <div class="left">
            <div class="first-line">
              <div class="date-box">
                <div class="date-day flex-center">07</div>
                <div>
                  <div class="news-type flex-center">动态</div>
                  <div class="date-month flex-center">2021.01</div>
                </div>
              </div>
              <div class="news-title">
                <div class="flex-center">
                  中国首个国际标准化“高考”艾思特AST火热开考
                </div>
              </div>
            </div>
            <div class="second">
              2020年12月12日、13日，中国首个国际标准化大学入学考试（类同“高考”）艾思特Aptitude
              Scholastic
              Test（简称AST）考试在南京、成都和济南三地同步火热开考。这是继今年8月的考试安排之后，由于考生数量不断攀升、需求不断增加，AST考试委员会特别新增的一次考试。
            </div>
            <a href="" class="more">查看详情></a>
          </div>
          <div class="right">
            <img :src="newsImage" alt="" />
          </div>
        </div>
        <div class="dynamic-list">
          <div class="swiper-container" v-if="loaded" ref="mySwiper">
            <div class="swiper-wrapper">
              <news-item
                v-for="(item, index) in newsList"
                :key="index"
                class="swiper-slide"
                :value="item"
              ></news-item>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </div>
      <div class="page page4" v-if="firstDone">
        <div
          class="map"
          :style="{
            background: `url(${mapImage}) center center/100% 100% no-repeat`,
          }"
        >
          <div class="circle ying" @click="setActiveChildArea(1, 1)">
            <div class="bkcolor"></div>
          </div>
          <div class="circle mei" @click="setActiveChildArea(1, 0)">
            <div class="bkcolor"></div>
          </div>
          <div class="circle zhong" @click="setActiveChildArea(0, 0)">
            <div class="bkcolor"></div>
          </div>
        </div>
        <div class="partner">
          <div class="m-part-title">合作伙伴分布</div>
          <div class="part-title">合作伙伴分布</div>
          <div class="intro">
            关于安生的一些简介简介简介关于安生的一些简介简介简介关于安生的一些简介简介简介关于安生的一些简介
          </div>
          <div class="report">
            <div class="report-item">
              <countTo
                class="report-num"
                ref="numplay1"
                :startVal="0"
                :autoplay="autoplay"
                :endVal="30000"
                :duration="2000"
              ></countTo>
              <b class="report-num">+</b>
              <div class="gray-in">安生学子进入世界名校深造</div>
            </div>
            <div class="report-item">
              <countTo
                class="report-num"
                ref="numplay2"
                :startVal="0"
                :autoplay="autoplay"
                :endVal="200"
                :duration="2000"
              ></countTo>
              <b class="report-num">+</b>
              <div class="gray-in">学术及运营机构分布城市</div>
            </div>
            <div class="report-item">
              <countTo
                class="report-num"
                ref="numplay3"
                :startVal="0"
                :autoplay="autoplay"
                :endVal="10"
                :duration="2000"
              ></countTo>
              <b class="report-num">+</b>
              <div class="gray-in">合作院校覆盖国家及地区</div>
            </div>
          </div>
          <div class="area">
            <div
              class="area-item"
              v-for="(item, index) in partnerArea"
              :key="index"
            >
              <div class="area-name" @click="setActiveChildArea(index, 0)">
                {{ item.name }}
              </div>
              <div class="area-box">
                <div class="child-area">
                  <span
                    @click="setActiveChildArea(index, index2)"
                    :class="{
                      active:
                        activeAreaIndex == index &&
                        activeChildAreaIndex == index2,
                    }"
                    v-for="(child, index2) in item.children"
                    :key="index2"
                  >
                    {{ child.name }}
                  </span>
                </div>
                <div
                  class="schools"
                  :class="{ active: activeAreaIndex === index }"
                >
                  <div
                    v-for="(school, index3) in partnerArea[activeAreaIndex]
                      .children[activeChildAreaIndex].schools"
                    :key="index3"
                  >
                    {{ school.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page page5" v-if="firstDone">
        <x-footer></x-footer>
      </div>
    </div>
  </div>
</template>
<script>
require('./scss/index.scss')
import cfg from '@script/config/index'
import xHeader from '@script/projects-b/components/header.vue'
import xFooter from '@script/projects-b/components/footer.vue'
import connectWindow from '@script/projects-b/components/connectWindow.vue'
import newsItem from '@script/projects-b/components/newsItem.vue'
import countTo from 'vue-count-to'
import banner from '@assets/images/1.png'
import down from '@assets/images/6.png'
import bk from '@assets/images/7.png'
import newsImage from '@assets/images/3.png'
import news1 from '@assets/images/2.png'
import mapImage from '@assets/images/5.png'
import QRcode from '@assets/images/14.png'
import rightIcon from '@assets/images/26.png'
import connectUsIcon from '@assets/images/15.png'
export default {
  name: 'index',

  data() {
    return {
      banner,
      down,
      bk,
      QRcode,
      newsImage,
      mapImage,
      rightIcon,
      connectUsIcon,
      firstDone: false,
      connectWindow: false,
      maxPage: 5, // 一共有多少页
      banScroll: false,
      screenWeight: 0, // 屏幕宽度
      screenHeight: 0, // 屏幕高度
      index: 1, // 用于判断翻页
      curIndex: 1, // 当前页的index
      working: false, // 正在翻屏
      nowTop: 0, // 翻屏后top的位置
      main: Object,
      yewuListActive: 0,
      yewuList: cfg.menu.filter((v) => !!v.children),
      newsList: [
        {
          news_id: 1,
          image: news1,
          created_at: '2021.01.11',
          title: '中国首个国际标准化“高考”艾思特AST火热开考',
          category_text: '活动',
        },
        {
          news_id: 2,
          image: news1,
          created_at: '2021.01.09',
          title: '中国首个国际标准化“高考”艾思特AST火热开考',
          category_text: '活动',
        },
        {
          news_id: 3,
          image: news1,
          created_at: '2021.01.06',
          title: '中国首个国际标准化“高考”艾思特AST火热开考',
          category_text: '动态',
        },
        {
          news_id: 4,
          image: news1,
          created_at: '2021.01.01',
          title: '中国首个国际标准化“高考”艾思特AST火热开考',
          category_text: '活动',
        },
      ],
      partnerArea: [
        {
          name: '中国',
          children: [
            {
              name: '上海',
              schools: [
                {
                  name: '上海托马斯实验学校',
                },
                {
                  name: '美丞留学咨询服务',
                },
                {
                  name: '上海华仕进修学校',
                },
              ],
            },
            {
              name: '南京',
              schools: [
                {
                  name: '南京托马斯实验学校',
                },
                {
                  name: '南京留学咨询服务',
                },
                {
                  name: '南京华仕进修学校',
                },
              ],
            },
            {
              name: '济南',
              schools: [
                {
                  name: '济南托马斯实验学校',
                },
                {
                  name: '济南留学咨询服务',
                },
                {
                  name: '济南华仕进修学校',
                },
              ],
            },
            {
              name: '合肥',
              schools: [
                {
                  name: '合肥托马斯实验学校',
                },
                {
                  name: '合肥留学咨询服务',
                },
                {
                  name: '合肥华仕进修学校',
                },
              ],
            },
          ],
        },
        {
          name: '海外',
          children: [
            {
              name: '美国',
              schools: [
                {
                  name: '美国大学',
                },
              ],
            },
            {
              name: '英国',
              schools: [
                {
                  name: '英国大学',
                },
              ],
            },
          ],
        },
      ],
      activeAreaIndex: 0,
      activeChildAreaIndex: 0,
      swiperOption: {
        freeMode: true,
        slidesPerView: 'auto',
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        loop: false,
        autoplay: {
          delay: 3000000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 显示分页
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true, //允许分页点击跳转
        // },
        slidesPerView: 4,
        speed: 1000, //滑动速度
        // 设置点击箭头
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      loaded: false,
      width: 0,
    }
  },
  components: {
    xHeader,
    countTo,
    xFooter,
    connectWindow,
    newsItem,
  },
  watch: {
    connectWindow(val) {
      console.log(val)
      document.getElementById('wrap').style.overflow =
        this.width < 960 && !val ? 'auto' : 'hidden'
    },
  },
  created() {},
  mounted() {
    let _this = this
    this.screenWeight = document.documentElement.clientWidth
    this.screenHeight = document.documentElement.clientHeight
    this.main = document.getElementById('main')
    this.judgeScroll()

    window.onresize = function () {
      _this.judgeScroll()
    }
    this.firstDone = true
    this.$nextTick(() => {
      new Swiper('.swiper-container', this.swiperOption)
    })
  },
  methods: {
    judgeScroll() {
      var Width =
        window.innerWidth || //浏览器窗口的内部宽度（包括滚动条）
        document.documentElement.clientWidth ||
        document.body.clientWidth
      this.width = Width
      if (Width < 960) {
        this.swiperOption.slidesPerView = 1
      }
      if (Width > 960 && !this.banScroll) {
        this.banScroll = false
        this.setFullScroll()
      }
      if (Width < 960 && this.banScroll) {
        this.banScroll = true
        document.removeEventListener('mousewheel', this.scrollFun, false)
      }
      this.loaded = true
    },
    setFullScroll() {
      if (navigator.userAgent.toLowerCase().indexOf('firefox') != -1) {
        document.addEventListener('DOMMouseScroll', this.scrollFun, false)
      } else if (document.addEventListener) {
        document.addEventListener('mousewheel', this.scrollFun, false)
      } else if (document.attachEvent) {
        document.attachEvent('onmousewheel', this.scrollFun)
      } else {
        document.onmousewheel = this.scrollFun
      }
    },
    goTo(path) {
      window.location.href = path
    },
    navTo(a) {
      this.index = a
      this.toPage(a)
      this.active = a
    },
    scrollFun(event) {
      let delta = event.detail || -event.wheelDelta // 如果当前滚动开始时间和上次滚动结束时间的差值小于1s，则不执行翻页动作，这样做是为了实现类似节流的效果
      if (!this.working) {
        if (
          delta > 0 &&
          parseInt(this.main.offsetTop) >=
            -(this.screenHeight * (this.maxPage - 2))
        ) {
          // 向下滚动
          this.next()
        } else if (delta < 0 && parseInt(this.main.offsetTop) < 0) {
          // 向上滚动
          this.prev()
        } // 本次翻页结束，记录结束时间，用于下次判断
      }
    }, // 翻页
    prev() {
      if (!this.working && this.curIndex > 1) {
        --this.index
        this.toPage(this.index)
      }
    },
    next() {
      if (!this.working && this.curIndex < this.maxPage) {
        ++this.index
        this.toPage(this.index)
      }
    },
    toPage(index) {
      if (index != this.curIndex) {
        this.working = true
        let delta = index - this.curIndex
        this.nowTop = this.nowTop - delta * this.screenHeight
        this.curIndex = index
        this.index = index
        setTimeout(() => {
          this.working = false
        }, 1000)
        setTimeout(() => {
          if (this.curIndex == 4) {
            this.$refs.numplay1.start()
            this.$refs.numplay2.start()
            this.$refs.numplay3.start()
          }
        }, 500)

        console.log(this.curIndex)
      } else {
        this.working = false
      }
    },
    setActiveChildArea(index, index2) {
      this.activeAreaIndex = index
      this.activeChildAreaIndex = index2
      console.log(this.activeAreaIndex)
    },
  },
}
</script>
