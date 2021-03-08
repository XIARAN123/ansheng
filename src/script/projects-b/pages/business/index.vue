<template>
  <div class="page">
    <div class="child-banner">
      <x-header :banner="banner" :index="3">
        <template slot="banner">
          <div class="banner-middle-text">集团业务</div>
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
import xHeader from '@script/projects-b/components/header.vue'
import xFooter from '@script/projects-b/components/footer.vue'
import cardItem from '@script/projects-b/components/cardItem.vue'
import banner from '@assets/images/31.png'
import anyw1 from '@assets/images/anyw1.png'
import anyw9 from '@assets/images/anyw9.png'
import anyw2 from '@assets/images/anyw2.png'
import anyw3 from '@assets/images/anyw3.png'
import anyw4 from '@assets/images/anyw4.png'
import anyw5 from '@assets/images/anyw5.png'
import anyw6 from '@assets/images/anyw6.png'
import anyw7 from '@assets/images/anyw7.png'
import anyw8 from '@assets/images/anyw8.png'
import img47 from '@assets/images/47.png'
import img46 from '@assets/images/46.png'
import img44 from '@assets/images/44.png'
import img42 from '@assets/images/42.png'
import img45 from '@assets/images/45.png'
import img49 from '@assets/images/49.png'
import img39 from '@assets/images/39.png'
import img38 from '@assets/images/38.png'
import img43 from '@assets/images/43.png'
import img58 from '@assets/images/58.png'
import img57 from '@assets/images/57.png'
export default {
  data() {
    return {
      banner,
      part: [
        {
          title: '中国托马斯学校',
          content:
            '托马斯实验学校是安生教育集团引进美国STEM课程与实验体系，打造的国际化（K12）品牌学校。学校既致力于学生科学精神的培养，又注重艺术人文情怀的塑造，为学生进一步升学做好知识准备，为学生将来成为STEM领域的创新型领军人才打好学术基础。',
          image: anyw1,
          link: 'http://www.thomasschools.com',
          tab: [
            {
              name: '上海托马斯',
              content: '',
              row: 1,
              link: 'http://sh.thomasschools.com',
              image: img47,
            },
            {
              name: '南京托马斯',
              content: '',
              row: 1,
              link: 'http://nj.thomasschools.com',
              image: img46,
            },
            {
              name: '济南托马斯',
              content: '',
              row: 1,
              link: 'http://jn.thomasschools.com',
              image: img44,
            },
            {
              name: '合肥托马斯',
              content: '',
              row: 1,
              link: 'http://hf.thomasschools.com',
              image: img42,
            },
          ],
        },
        {
          title: '艾思特（AST）考试局',
          content:
            '中国首个国际标准化大学入学考试艾思特（AST），是由剑桥大学资深测试专家与安生国际教育科学研究院的中国知名高考专家联合命题，为以剑桥大学为首的一批世界一流大学遴选招收中国学生的国际性学能学业水平考试。',
          image: anyw2,
          link: 'http://cn.astexam.org',
        },
        {
          title: '储英工程',
          content:
            '储英工程，是在世界面对百年未有之大变局，应对人才需求和培养的紧迫感、危机感背景下，由安生教育集团在海内外一流教育教学资源的支持、配合和参与下创设的，与国家“强基计划”相呼应的为国家培养未来急需的高端人才的工程。对象是优秀的高中学生，培养模式采用遴选、国内集中培养、再遴选至海外著名大学深造，安生教育集团将为优秀学子提供巨额奖学金，支持他们在国内外学习期间出色地完成学业，并鼓励他们学成后回国服务。',
          image: anyw3,
          link: 'http://p.ceischina.com',
        },
        {
          title: '安生国际课程中心',
          content:
            '安生国际课程管理中心总部设在文教重镇——南京。中心依托安生教育集团强大的资源优势为遍布各地的分校提供专家团队的咨询与决策、师资招聘调度培训管理、校长培训与行政、教务与考务管理、课程资源、教研成果分享、运营及活动经费、公关活动及危机处理等全方位支持。作为最早（2008年）将美国的AP课程体系引进中国大陆地区的教育机构，安生国际课程管理中心积累了大批优秀教师和丰富的办学经验。目前已经与华东地区核心城市的知名高中联合举办了十几所精品美国高中部，现有中外教师600多人，在校生达2000多人，大多数毕业生被美国50强名校录取。这样的办学规模、教育质量和广泛的社会影响使安生国际课程管理中心成为中国国际教育领域的航母。未来，还会有更多的优秀学子借助这个平台实现自己的留学梦和绚丽人生。',
          image: anyw9,
          link: 'http://ahsp.ambrightgroup.com',
          tab: [
            {
              name: '美国方向：美国高中课程(+AP)项目',
              content:
                '安生教育集团是最早将美国大学预修 AP 课程（Advanced Placement）引进中国的教育机构之一。自2008年创办以来，国内合作学校10多所，中外教师团队600多人，现有在校学生超过2000人。已有10000 多名安生学子被世界各地的名校录取，包括剑桥大学、牛津大学、哈佛大学、耶鲁大学、芝加哥大学、宾夕法尼亚大学、杜克大学、约翰霍普金斯大学等。',
              link: '',
              image: img45,
            },
            {
              name: '英国方向：“未来基石”课程(+A-Level)项目',
              content:
                '“未来基石”国际课程项目是由剑桥大学中国遴选中心和安生教育集团融合英国剑桥大学国际考评部（Cambridge Assessment International Education）的IGCSE/A-level课程和中国核心文化课程，叠加剑桥大学教育资源参与的PBL项目及思维技能（Thinking Skill)培养，联合推出的基于培养国家急需的高端国际化人才的课程体系。其目的是通过3年的“未来基石”课程教学，培养一批能够进入以剑桥大学为首的世界著名大学的优秀学生，从而为未来培养通晓国际规则、具有国际视野、能面对国际竞争与挑战、积极参与国际合作、充满中华民族文化自信的世界公民打下坚实基础。',
              link: '',
              image: img49,
            },
          ],
        },
        {
          title: '升学中心',
          content:
            '升学中心（学生生涯规划指导中心）成立于2009年，主要负责安生教育集团旗下四所托马斯实验学校和国际课程项目重点高中国际班的各项升学工作。迄今已发展为50多人的团队，聚集了一批具有十多年海外升学经验的资深专家。团队成员大多拥有海外名校学历与海外工作背景，更有一支来自北美顶尖名校的外籍升学督导团队，为中心开展高端国际化升学指导与生涯规划提供有力的支持。',
          image: anyw4,
          link: '',
        },
        {
          title: '中国高瞻学前教育',
          content:
            '高瞻课程由美国心理学专家韦卡特（Wei Kart. D. P）等人1962年创立，其核心是倡导幼儿主体性教育与全面发展理论。在高瞻（High Scope）教育研究基金会推动下，经过近60年的实践与研究，形成了一整套完善的课程体系、教育模式、评估体系、教师培训等管理模式。研究成果被联合国教科文组织、联合国儿童基金会以及各国政府广泛应用，是全球现代幼儿教育的主流教育体系之一。',
          image: anyw5,
          link: 'http://highscope.org.cn',
          tab: [
            {
              name: '中国高瞻学前教育科学研究院',
              content:
                '2013年，安生教育集团作为美国高瞻教育基金会的战略合作伙伴，成功引进“高瞻学前教育课程体系”，开展以课程建设、儿童评估体系、教学评估体系建设为主要内容的研究，同时开展以教师培训、课程实施、评估体系本土化为主要内容的实践。',
              row: 5,
              link: '',
              image: img39,
            },
            {
              name: '爱可萌儿童之家',
              content:
                '爱可萌儿童之家是安生教育集团旗下专业的0-3岁婴儿学步日托&早教品牌，开设专门为0-3岁婴幼儿提供全日制托班服务的学校，提供先进的美国高瞻婴儿学步儿课程，培养“主动”探究世界的孩童。',
              row: 3,
              link: '',
              image: img38,
            },
            {
              name: '慧思顿（高瞻）幼儿园',
              content:
                '慧思顿（高瞻）幼儿园是安生教育集团融合美国高瞻学前教育体系打造的国际化幼儿园，采用美国高瞻学前儿童课程为基础课程，以幼儿的主动性学习，即幼儿的兴趣和选择为本。截至2020年底，全国已有近50所幼儿园引入高瞻课程，慧思顿（高瞻）幼儿园已在上海、济南、南京等城市落户。',
              row: 4,
              link: '',
              image: img43,
            },
          ],
        },
        {
          title: '外国语专修学校',
          content:
            '上海华仕进修学校和南京安生外国语专修学校是由安生教育集团主办，具备国家外专局颁发的有聘请外国专家资质和教育部门颁发的办学许可证的两家综合性教育机构。',
          image: anyw6,
          tab: [
            {
              name: '上海华仕进修学校',
              content: '',
              link: '',
              image: img58,
            },
            {
              name: '南京安生外国语专修学校',
              content: '',
              link: '',
              image: img57,
            },
          ],
        },
        {
          title: '美丞留学咨询服务',
          content:
            '美丞留学是一家经国家教育部、公安部和国家工商总局批准成立，从事留学咨询服务的专业机构。自2006年成立以来，美丞留学一直秉承着“成君之美 鼎力相丞”的宗旨，已成功帮助数千名学生实现海外升学之梦，桃李遍布美国、英国、加拿大、欧洲各地。',
          image: anyw7,
          link: 'http://amedu.cn',
        },
        {
          title: '驿渡融媒体',
          content:
            '专注于高端国际教育的驿渡融媒体，零时差、零距离链接您的未来。<br>驿渡与全球千余所知名院校、企业、使领馆等机构组织合作，以直播和线上视频等在线内容连接海内外优质教育资源，并提供海外教育、学习、生活和工作息息相关的服务与产品，打破学生用户资讯获取的信息不对称，提供最权威、最精准的海内外院校资讯，学科前沿动态、实现信息分享，以帮助学生获得真实、透明、可靠的生涯规划指导，及全方位的专业服务。',
          image: anyw8,
          link: 'http://www.eduugo.com',
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

  mounted() {
    // let value = this.getQueryVariable('k')
    // console.log(value)
    // if (value) {
    //   document.getElementById('card' + value).scrollIntoView()
    // }
  },

  methods: {
    // getQueryVariable(variable) {
    //   var query = window.location.search.substring(1)
    //   var vars = query.split('&')
    //   for (var i = 0; i < vars.length; i++) {
    //     var pair = vars[i].split('=')
    //     if (pair[0] == variable) {
    //       return pair[1]
    //     }
    //   }
    //   return false
    // },
  },
}
</script>
