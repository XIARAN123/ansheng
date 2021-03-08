<template>
  <div class="page">
    <div class="child-banner">
      <x-header :banner="banner" :index="4">
        <template slot="banner">
          <div class="banner-middle-text">社会责任</div>
        </template>
      </x-header>
    </div>
    <div class="child-content">
      <card-item
        :id="'card' + index"
        v-for="(item, index) in part"
        :key="index"
        :value="item"
      ></card-item>
    </div>
    <div class="child-footer">
      <x-footer></x-footer>
    </div>
  </div>
</template>

<script>
require('./scss/index.scss')
import cardItem from '@script/projects-b/components/cardItem.vue'
import xHeader from '@script/projects-b/components/header.vue'
import xFooter from '@script/projects-b/components/footer.vue'
import banner from '@assets/images/sszr.png'
import shzr1 from '@assets/images/shzr1.png'
import shzr2 from '@assets/images/shzr2.png'
import shzr4 from '@assets/images/shzr4.png'
import shzr5 from '@assets/images/shzr5.png'
import shzr6 from '@assets/images/shzr6.png'
import cardImage2 from '@assets/images/28.png'
import img48 from '@assets/images/48.png'
import img41 from '@assets/images/41.png'
import img50 from '@assets/images/50.png'
export default {
  data() {
    return {
      banner,
      part: [
        {
          title: '剑桥大学中国遴选中心',
          content:
            '2002年，剑桥大学中国遴选中心正式成立。<br>作为与剑桥大学关联的官方机构，遴选中心长期致力于在世界顶尖大学和优秀学生之间架设一座公益性金桥。',
          image: cardImage2,
          subtitle: '世界名校中国英才遴选工程',
          link: 'http://www.aceis-china.com',
          tab: [
            {
              name: '世界名校中国英才遴选工程',
              content:
                '世界名校中国英才遴选工程（China Excellence Identification Scheme，简称CEIS）是安生教育科学研究院和以英国剑桥大学为首的多所国际顶尖大学的官方合作项目，一个遴选在中国就读国家课程和部分国际课程的优秀高中学生进入世界著名大学接受一流本科教育的非盈利性项目。截至目前，已有近2000名学子成功通过 CEIS 入读世界名校。随着该项目的发展，将有更多全球知名学府加入。',
              link: 'http://www.aceis-china.com',
              image: cardImage2,
            },
          ],
        },
        {
          title: '全国青少年模拟政协活动',
          content:
            '成立于2014年的“全国青少年模拟政协活动”是一项在中国致公党中央和各级人民政协、教育行政等相关部门支持下，由安生教育科学研究院发起并主办的公益性全国青少年思政教育创新实践活动。<br>这项活动以高中生为主体，以“立德树人、砺志笃学、拓展技能、实践创新”为宗旨，培养当代青少年社会责任感、提升实践创新能力、建立制度自信。通过组织青少年参与模拟人民政协的提案形成过程、同时模拟和体验人民政协的组织形式、议事规则，让青少年学生充分了解和体会中国特色的民主协商政治制度，培养学生在关注社会的同时，发现问题、分析问题、解决问题，最终形成答案。',
          image: shzr1,
          link: 'http://mcppcc.eduugo.com',
        },
        {
          title: '安生美国青年教学使者(AYC)',
          content:
            '安生青年教学使者（Ambassador Year in China，简称AYC）是安生教育集团于2012年在中美两国元首达成共识的背景下发起并成立的非盈利项目。该项目旨在引进一批优秀的海外青年到中国，感悟并体验真实的中国文化和生活，成为“知华青年”；通过他们在中国的切身体会和经历，能够讲好“中国故事”，以促进海外年轻人对中国的了解。',
          image: shzr2,
          link: 'http://goayc.org',
        },
        {
          title: '中美青年大使(SAYA)',
          content:
            '中美青年大使项目（Sino-American  Youth  Ambassadors  Program,  简称SAYA）由安生教育科学研究院于2010年发起和组织，中国学生通过和美国学生一起学习和生活的同时，还通过举办“中国周”等丰富多样的活动，向美国学生介绍家乡文化、历史发展，让学生不仅通过实地体验深入融合，更以自己真实的体验讲好“中国故事”。其目的是加强中美两国学生之间的文化和教育交流，促进互相了解，增进友谊。',
          image: shzr4,
          link: 'http://saya.ambrightgroup.com',
        },
        {
          title: '留学生海外安全教育项目',
          content:
            '随着改革开放的深入、社会进步和生活水平的提高，人们渴望得到优质教育的需求普遍增加，送孩子前往海外升学成为不少家长的选择。但由于对海外当地法律和文化等不够了解而遭致留学生伤害事件时有发生，提高学生的安全意识、法律意识、自我保护意识刻不容缓。<br>中国驻美国大使馆教育处联合安生教育科学研究院，开展留学生海外安全教育项目——“领事保护”，让留学生群体重视海外安全，评估潜在风险，掌握应对方法，做到有备无患，为海外学习生活保驾护航。',
          image: shzr5,
        },
        {
          title: '海外人才引进项目',
          content:
            '中国驻美国大使馆教育处联合安生教育集团，开展留学生海外安全教育项目——“领事保护”，通过一系列有针对性的视频分析讲解，让留学生群体重视海外安全，评估潜在风险，掌握应对方法，做到有备无患，为海外学习生活保驾护航。',
          image: shzr6,
          tab: [
            {
              name: '引凤工程',
              content:
                '“引凤工程”由致公党中央和中共江苏省委、省政府支持，致公党江苏省委主办，安生教育集团协办，每年举办一场或多场以海外博士、教授、科学家等高层次人才为对象，赴用人单位开展对接交流的公益活动，目前拓展到浙江、重庆、辽宁等省市。十年来面向欧美等人才密集国家和地区，发布了总计数万条人才需求岗位信息，吸引了30余个国家和地区的数千优秀人才报名，引进了500多位海外高层次人才归国创业。',
              image: img48,
            },
            {
              name: '海归论坛',
              content:
                '“海归论坛”是致公党中央和中共湖南省委、省政府支持，致公党湖南省委主办，安生教育集团协办，每年举办一届，已连续七年举办，为实施国家人才战略建言，为发展湖南经济助力，为海外高层次人才创业及科研成果转化搭建平台。',
              image: img41,
            },
            {
              name: '芝麻桥',
              content:
                '芝麻桥（www.ZhiMaQiao.com)，是国内首家专注于海归求职领域，服务海归求职与留学生回国创业，为地方政府、企事业单位招聘人才牵线搭桥的服务平台。行业顶尖名企、海量高薪职位一手掌握，为高端人才精准引荐服务；应用视频展示简历、视频面试等数字化应用形式，让求职更加高效、便捷。',
              image: img50,
            },
          ],
        },
      ],
    }
  },
  components: {
    xHeader,
    xFooter,
    cardItem,
  },
  created() {},

  mounted() {},

  methods: {},
}
</script>
