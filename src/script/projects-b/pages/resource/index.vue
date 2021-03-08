<template>
  <div class="page">
    <div class="child-banner">
      <x-header :banner="banner" :index="5">
        <template slot="banner">
          <div class="banner-middle-text">学术资源</div>
        </template>
      </x-header>
    </div>
    <div class="child-content">
      <div class="card-item" id="card0">
        <div class="card-left">
          <div class="card-title">顾问及学术团队</div>
          <div class="card-content">
            安生教育集团始终坚持“学者办学、专家治教”的理念和方针，在抓好自身管理队伍、师资队伍、科研队伍建设的同时，十分注重顾问及学术团队建设，聘请了一批国内外知名教育专家组成全球高端智囊团，为安生教育的健康、长远发展提供智力支撑。
          </div>
        </div>
        <div class="card-right">
          <img :src="xszy1" alt="" />
        </div>
      </div>
      <div class="guwen">
        <img :src="person1" alt="" />
        <img :src="person2" alt="" />
        <img :src="person3" alt="" />
      </div>
      <div></div>
      <div class="card-item" id="card1">
        <div class="card-left">
          <div class="card-title">安生国际教育科学研究院</div>
          <div class="card-content">
            安生国际教育科学研究院，是安生教育集团直属的从事国内外教育科学研究及成果转化的机构。在长期的国际文化教育交流中，安生积累了丰富的人才资源，拥有一大批国内外教育领域的知名专家学者。研究院充分发挥这批专家的作用，对中国教育国际化过程中的教材融合，课程设置，教学评价，师资培训等进行研究形成理论，指导学校的国际化办学实践，为集团的教育决策提供咨询服务。
          </div>
        </div>
        <div class="card-right">
          <img :src="xszy2" alt="" />
        </div>
      </div>
      <div class="resp-button">主要职责</div>
      <div class="resp-item" v-for="(item, index) in respList" :key="index">
        {{ item }}
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
import banner from '@assets/images/34.png'
import cardImage1 from '@assets/images/19.png'
import xszy1 from '@assets/images/xszy1.png'
import xszy2 from '@assets/images/xszy2.png'
import cardImage2 from '@assets/images/28.png'
import person1 from '@assets/images/53.png'
import person2 from '@assets/images/54.png'
import person3 from '@assets/images/55.png'
export default {
  data() {
    return {
      banner,
      cardImage1,
      cardImage2,
      person1,
      person2,
      person3,
      xszy1,
      xszy2,
      part: [
        {
          title: '剑桥大学中国遴选中心',
          content:
            '2002年，剑桥大学中国遴选中心正式成立。<br>作为与剑桥大学关联的官方机构，遴选中心长期致力于在世界顶尖大学和优秀学生之间架设一座公益性金桥。',
          image: cardImage2,
        },
        {
          title: '全国青少年模拟政协活动',
          content:
            '成立于2014年的“全国青少年模拟政协活动”是一项在中国致公党中央和各级人民政协、教育行政等相关部门支持下，由安生教育科学研究院发起并主办的公益性全国青少年思政教育创新实践活动。<br> 这项活动以高中生为主体，以“立德树人、砺志笃学、拓展技能、实践创新”为宗旨，培养当代青少年社会责任感、提升实践创新能力、建立制度自信。通过组织青少年参与模拟人民政协的提案形成过程、同时模拟和体验人民政协的组织形式、议事规则，让青少年学生充分了解和体会中国特色的民主协商政治制度，培养学生在关注社会的同时，发现问题、分析问题、解决问题，最终形成答案。',
          image: cardImage1,
        },
        {
          title: '安生美国青年教学使者(AYC)',
          content:
            '安生青年教学使者（Ambassador Year in China，简称AYC）是安生教育集团于2012年在中美两国元首达成共识的背景下发起并成立的非盈利项目。该项目旨在引进一批优秀的海外青年到中国，感悟并体验真实的中国文化和生活，成为“知华青年”；通过他们在中国的切身体会和经历，能够讲好“中国故事”，以促进海外年轻人对中国的了解。',
          image: cardImage1,
        },
        {
          title: '中美青年大使(SAYA)',
          content:
            '中美青年大使项目（Sino-American  Youth  Ambassadors  Program,  简称SAYA）由安生教育科学研究院于2010年发起和组织，中国学生通过和美国学生一起学习和生活的同时，还通过举办“中国周”等丰富多样的活动，向美国学生介绍家乡文化、历史发展，让学生不仅通过实地体验深入融合，更以自己真实的体验讲好“中国故事”。其目的是加强中美两国学生之间的文化和教育交流，促进互相了解，增进友谊。',
          image: cardImage1,
        },
        {
          title: '留学生海外安全教育项目',
          content:
            '随着改革开放的深入、社会进步和生活水平的提高，人们渴望得到优质教育的需求普遍增加，送孩子前往海外升学成为不少家长的选择。但由于对海外当地法律和文化等不够了解而遭致留学生伤害事件时有发生，提高学生的安全意识、法律意识、自我保护意识刻不容缓。<br>中国驻美国大使馆教育处联合安生教育科学研究院，开展留学生海外安全教育项目——“领事保护”，让留学生群体重视海外安全，评估潜在风险，掌握应对方法，做到有备无患，为海外学习生活保驾护航。',
          image: cardImage1,
        },
        {
          title: '海外人才引进项目',
          content:
            '中国驻美国大使馆教育处联合安生教育集团，开展留学生海外安全教育项目——“领事保护”，通过一系列有针对性的视频分析讲解，让留学生群体重视海外安全，评估潜在风险，掌握应对方法，做到有备无患，为海外学习生活保驾护航。',
          image: cardImage1,
        },
      ],
      respList: [
        '开展中外比较教育和教学的研究，中外融合教育的实践和运用，为教育行政部门提供决策咨询。',
        '对民办学校开展国际化教育中的管理体制、课程体系、人才培养模式等方面进行实验性研究。',
        '对国外教育前沿动态与最新成果进行跟踪研究，为中小学教育教学改革、教师发展提供建议与咨询服务。',
        '开展对高瞻及其他学前教育体系的研究，包括教师发展、课程建设、评价体系等，为学前教育课改提供建议和实践素材。',
        '开展旨在提升青少年核心素养和创新能力的综合实践活动研究。',
        '承担地方政府、教育行政部门发布或委托的课题研究和咨询服务。',
        '开展国内外学术研讨、交流与合作。',
        '承担并组织开展集团直属K12学校的教师培养和发展任务。',
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
