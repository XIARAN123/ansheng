<template>
  <div class="page">
    <div class="child-banner">
      <x-header :banner="banner" :index="2">
        <template slot="banner">
          <div class="banner-middle-text">关于我们</div>
        </template>
      </x-header>
    </div>
    <div class="child-content">
      <div
        class="card-item"
        :id="'card' + index"
        v-for="(item, index) in part"
        :key="index"
      >
        <div class="card-left">
          <div class="card-title">{{ item.title }}</div>
          <div class="card-content" v-html="item.content"></div>
        </div>
        <div class="card-right">
          <img :src="item.image" alt="" />
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
import xHeader from '@script/projects-b/components/header.vue'
import xFooter from '@script/projects-b/components/footer.vue'
import banner from '@assets/images/1.png'
import cardImage1 from '@assets/images/19.png'
export default {
  data() {
    return {
      banner,
      part: [
        {
          title: '集团简介',
          content:
            '中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校',
          image: cardImage1,
        },
        {
          title: '创始人简介',
          content:
            '张梧华，安生教育集团董事长，安生教育科学研究院院长，剑桥大学中国遴选中心主任，中国托马斯学校理事会理事长。毕业于合肥工业大学，比利时鲁塞尔自由大学，美国哥伦比亚大学。<br>张梧华先生是国际知名的比较教育专家，长期致力于推动中外文化和教育交流，为引进国外优质教育资源，推动中国教育的改革与发展进行深入研究和不懈实践。<br>目前，张梧华先生担任江苏省政协港澳台侨（外事）委员会副主任，致公党中央教育委员会副主任，中国致公党江苏省委常委，江苏省海外联谊会副会长，江苏省欧美同学会常委理事、中华职教社常务理事等职务。',
          image: cardImage1,
        },
        {
          title: '集团大事记',
          content:
            '中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校中国托马斯学校',
          image: cardImage1,
        },
      ],
    }
  },
  components: {
    xHeader,
    xFooter,
  },
  created() {},

  mounted() {},

  methods: {},
}
</script>
