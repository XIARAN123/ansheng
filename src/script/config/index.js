
import page20 from '@assets/images/10.png'
import page21 from '@assets/images/11.png'
import page22 from '@assets/images/12.png'
import page23 from '@assets/images/13.png'
import page20m from '@assets/images/22.png'
import page21m from '@assets/images/23.png'
import page22m from '@assets/images/24.png'
import page23m from '@assets/images/25.png'
export default {
  menu: [
    {
      name: '首页',
      url: './index.html'
    }, {
      name: '关于我们',
      url: './about.html',
      bk: page20,
      bkm: page20m,
      children: [
        {
          name: '集团简介',
          url: './about.html#card0'
        },
        {
          name: '创始人简介',
          url: './about.html#card1'
        },
        {
          name: '集团大事件',
          url: './about.html#card2'
        }
      ]
    }, {
      name: '集团业务',
      url: './business.html',
      bk: page21,
      bkm: page21m,
      children: [
        {
          name: '中国托马斯学校',
          url: './business.html#card0'
        },
        {
          name: '艾思特（AST）考试局',
          url: './business.html#card1'
        },
        {
          name: '储英工程',
          url: './business.html#card2'
        },
        {
          name: '安生国际课程中心',
          url: './business.html#card3'
        },
        {
          name: '升学中心',
          url: './business.html#card4'
        },
        {
          name: '中国高瞻学前教育',
          url: './business.html#card5'
        },
        {
          name: '外国语专修学校',
          url: './business.html#card6'
        },
        {
          name: '美丞留学咨询服务',
          url: './business.html#card7'
        },
        {
          name: '驿渡融媒体',
          url: './business.html#card8'
        }
      ]
    }, {
      name: '社会责任',
      url: './responsibility.html',
      bk: page22,
      bkm: page22m,
      children: [
        {
          name: '剑桥大学中国遴选中心',
          url: './responsibility.html#card0'
        },
        {
          name: '全国青少年模拟政协活动',
          url: './responsibility.html#card1'
        },
        {
          name: '安生美国青年教学使者(AYC)',
          url: './responsibility.html#card2'
        },
        {
          name: '中美青年大使(SAYA)',
          url: './responsibility.html#card3'
        },
        {
          name: '留学生海外安全教育项目',
          url: './responsibility.html#card4'
        },
        {
          name: '海外人才引进项目',
          url: './responsibility.html#card5'
        }
      ]
    }, {
      name: '学术资源',
      url: './resource.html',
      bk: page23,
      bkm: page23m,
      children: [
        {
          name: '顾问及学术团队',
          url: './resource.html#card0'
        },
        {
          name: '安生国际教育科学研究院',
          url: './resource.html#card1'
        }
      ]
    }, {
      name: '新闻中心',
      url: './news.html'
    }, {
      name: '联系我们',
      url: './connect.html'
    }
  ]
}