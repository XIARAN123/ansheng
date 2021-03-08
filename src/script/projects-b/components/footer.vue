<template>
  <footer class="footer-wrap">
    <div class="foot-logo foot-con">
      <img :src="logo" alt="" />
    </div>
    <ul class="link-wrap foot-con" style="height: 45%">
      <li style="flex: 3">
        <div class="link-title">集团网群</div>
        <div class="link-main" style="text-align: left">
          <a :href="item.link" v-for="(item, index) in wangqun" :key="index">{{
            item.name
          }}</a>
        </div>
      </li>
      <li style="flex: 1">
        <div class="link-title">关注我们</div>
        <div class="link-main">
          <img :src="QRcode" alt="" />
        </div>
      </li>
      <li style="flex: 1">
        <div class="link-title">关于我们</div>
        <div class="link-main">
          <a :href="item.link" v-for="(item, index) in about" :key="index">{{
            item.name
          }}</a>
        </div>
      </li>
      <li style="flex: 1">
        <div class="link-title">集团业务</div>
        <div class="link-main">
          <a :href="item.link" v-for="(item, index) in yewu" :key="index">{{
            item.name
          }}</a>
        </div>
      </li>
      <li style="flex: 1">
        <div class="link-title">社会责任</div>
        <div class="link-main">
          <a :href="item.link" v-for="(item, index) in zeren" :key="index">{{
            item.name
          }}</a>
        </div>
      </li>
    </ul>
    <ul class="link-wrap foot-con" style="height: 35%">
      <li style="flex: 1">
        <div class="link-title">学术资源</div>
        <div class="link-main">
          <a :href="item.link" v-for="(item, index) in ziyuan" :key="index">{{
            item.name
          }}</a>
        </div>
      </li>
      <li style="flex: 1">
        <div class="link-title">新闻中心</div>
        <div class="link-main">
          <a :href="item.link" v-for="(item, index) in xinwen" :key="index">{{
            item.name
          }}</a>
        </div>
      </li>
      <li style="flex: 1">
        <div class="link-title">联系我们</div>
        <div class="link-main">
          <a :href="item.link" v-for="(item, index) in lianxi" :key="index">{{
            item.name
          }}</a>
        </div>
      </li>
      <li style="flex: 1"></li>
      <li style="flex: 1"></li>
      <li style="flex: 1"></li>
    </ul>

    <div class="m-part">
      <div class="m-part-title">关注我们</div>
      <img class="m-qr-code" :src="QRcode" alt="" />
    </div>
    <div class="copyright">
      <div>
        Copyright @ 2020 AmbrightGroup Inc. All Rights Reserved
        <a href="">法律声明</a>
        <a href="">隐私政策</a>
      </div>
    </div>
  </footer>
</template>

<script>
require('./footer.scss')
import logo from '@assets/images/20.png'
import QRcode from '@assets/images/14.png'
export default {
  data() {
    return {
      logo,
      QRcode,
      wangqun: [
        {
          name: '中国托马斯',
          link: 'http://thomasschools.com',
        },
        {
          name: '驿渡融媒体',
          link: 'http://www.eduugo.com',
        },
        {
          name: '剑桥大学中国遴选中心',
          link: 'http://www.aceis-china.com',
        },
        {
          name: '上海托马斯',
          link: 'http://sh.thomasschools.com',
        },
        {
          name: '安生国际课程中心',
          link: 'http://ahsp.ambrightgroup.com',
        },
        {
          name: '全国青少年模拟政协活动',
          link: 'http://mcppcc.eduugo.com',
        },
        {
          name: '南京托马斯',
          link: 'http://nj.thomasschools.com',
        },
        {
          name: '剑桥储英工程',
          link: 'http://p.ceischina.com',
        },
        {
          name: '安生美国青年教学使者（AYC）',
          link: 'http://goayc.org',
        },
        {
          name: '济南托马斯',
          link: 'http://jn.thomasschools.com',
        },
        {
          name: '中国高瞻学前教育',
          link: 'http://highscope.org.cn',
        },
        {
          name: '慧思顿高瞻幼儿园',
          link: 'http://www.witstown.org.cn',
        },
        {
          name: '合肥托马斯',
          link: 'http://hf.thomasschools.com',
        },

        {
          name: '中美青年大使（SAYA）',
          link: 'http://saya.ambrightgroup.com',
        },
        {
          name: '艾思特（AST）考试局',
          link: 'http://cn.astexam.org',
        },
        {
          name: '美丞留学咨询服务',
          link: 'http://amedu.cn',
        },
      ],
      about: [
        {
          name: '集团简介',
          link: './about.html#card0',
        },
        {
          name: '创始人简介',
          link: './about.html#card1',
        },
        {
          name: '集团大事计',
          link: './about.html#card2',
        },
      ],
      yewu: [
        {
          name: '中国托马斯学校',
          link: './business.html#card0',
        },
        {
          name: '艾思特（AST）考试局',
          link: './business.html#card1',
        },
        {
          name: '储英工程',
          link: './business.html#card2',
        },
        {
          name: '安生国际课程中心',
          link: './business.html#card3',
        },
        {
          name: '升学中心',
          link: './business.html#card4',
        },
        {
          name: '中国高瞻学前教育',
          link: './business.html#card5',
        },
        {
          name: '外国语专修学校',
          link: './business.html#card6',
        },
        {
          name: '美丞留学咨询服务',
          link: './business.html#card7',
        },
        {
          name: '驿渡融媒体',
          link: './business.html#card8',
        },
      ],
      zeren: [
        {
          name: '剑桥大学中国遴选中心',
          link: './responsibility.html#card0',
        },
        {
          name: '全国青少年模拟政协活动',
          link: './responsibility.html#card1',
        },
        {
          name: '安生美国青年教学使者（AYC）',
          link: './responsibility.html#card2',
        },
        {
          name: '中美青年大使（SAYA）',
          link: './responsibility.html#card3',
        },
        {
          name: '留学生海外安全教育',
          link: './responsibility.html#card4',
        },
        {
          name: '海外人才引进',
          link: './responsibility.html#card5',
        },
      ],
      ziyuan: [
        {
          name: '顾问及学术团队',
          link: './resource.html#card0',
        },
        {
          name: '安生国际教育科学研究院',
          link: './resource.html#card1',
        },
      ],
      xinwen: [
        {
          name: '集团动态',
          link: './news.html?tab=dynamic',
        },
        {
          name: '重点活动',
          link: './news.html?tab=activity',
        },
      ],
      lianxi: [
        {
          name: '公司动态',
          link: './connect.html?tab=0',
        },
        {
          name: '人才发展',
          link: './connect.html?tab=1',
        },
      ],
    }
  },
}
</script>

<style>
</style>