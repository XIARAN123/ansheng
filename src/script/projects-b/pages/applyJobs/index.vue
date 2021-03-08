<template>
  <div class="page">
    <div class="child-banner">
      <x-header :banner="banner" :index="7">
        <template slot="banner">
          <div class="banner-middle-text">联系我们</div>
        </template>
      </x-header>
    </div>
    <div class="child-content aj">
      <div class="bread">
        <span @click="goBack"> < 返回上级</span>
      </div>
      <div class="job-item">
        <p class="j-site">{{ info.region }}</p>
        <div class="j-main">
          <div class="j-left">
            <span class="j-name elis">{{ info.title }}</span>
          </div>
        </div>
      </div>

      <div class="job-detail" v-show="detail == 1" v-html="info.content"></div>
      <div class="submit" v-show="detail == 1" @click="apply">立即申请</div>
      <div v-show="detail == 0">
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
              <input type="text" v-model="form.mobile" />
            </div>
          </li>
          <li class="form-item">
            <div class="label">邮箱<span class="must"></span></div>
            <div class="input">
              <input type="text" v-model="form.email" />
            </div>
          </li>
          <li class="form-item">
            <div class="label">生日<span class="must"></span></div>
            <div class="input">
              <input type="text" v-model="form.birthday" />
            </div>
          </li>
          <li class="form-item">
            <div class="label">简历<span class="must"></span></div>
            <div class="input">
              <uploader
                :options="options"
                :file-status-text="statusText"
                class="uploader-example"
                ref="uploader"
                @file-success="fileSuccess"
                style="width: 100%"
              >
                <uploader-unsupport></uploader-unsupport>
                <uploader-drop>
                  <uploader-btn :single="true">
                    <div class="upload-wrap">
                      <img :src="uploadIcon" alt="" />
                      <div>点击上传</div>
                      <div>
                        (<span>仅支持</span>PDF、Word；<span>2MB</span>以内)
                      </div>
                    </div>
                  </uploader-btn>
                </uploader-drop>
                <uploader-list></uploader-list>
              </uploader>
            </div>
          </li>
        </ul>
        <div class="submit" @click="submit">提交</div>
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
import banner from '@assets/images/31.png'
import uploadIcon from '@assets/images/37.png'
import Vue from 'vue'
import uploader from 'vue-simple-uploader'
Vue.use(uploader)
export default {
  data() {
    return {
      banner,
      uploadIcon,
      detail: 1,
      info: {
        content: '',
      },
      form: {
        job_id: '',
        name: '',
        mobile: '',
        email: '',
        birthday: '',
        attr: '',
      },
      recording: {},
      options: {
        // https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js
        target: API_BASE_URL + '/upload/file',
        testChunks: false, //不校验
        chunkSize: '10240000',
        simultaneousUploads: 1,
        singleFile: true,
      },
      statusText: {
        success: '上传成功',
        error: '上传失败',
        uploading: '上传中',
        paused: '暂停中',
        waiting: '等待中',
      },
    }
  },
  components: {
    xHeader,
    xFooter,
  },
  created() {
    let detail = this.getQueryVariable('detail')
    console.log(detail)
    if (detail) {
      this.detail = detail
    }
    this.form.job_id = this.getQueryVariable('id')
  },

  mounted() {
    this.getData()
  },

  methods: {
    apply() {
      document.querySelector('.aj').scrollIntoView()
      this.detail = 0
    },
    async getData() {
      let { data } = await this.$fetch({
        url: `/job/detail?id=${this.getQueryVariable('id')}`,
        method: 'GET',
      })
      console.log(data)
      this.info = data
    },
    async submit() {
      let data = await this.$fetch({
        url: `/resume`,
        method: 'POST',
        data: this.form,
      })
      if (data.status) {
        this.$Message.success('提交成功')
      } else {
        this.$Message.warning(data.msg)
      }
    },
    goBack() {
      window.history.go(-1)
    },
    //上传成功的事件
    fileSuccess(rootFile, file, message, chunk) {
      let data = JSON.parse(message)
      // console.log(data)
      if (data.status) {
        this.form.attr = data.data.file_url
      } else {
        this.$Message.warning(data.msg)
        const uploaderInstance = this.$refs.uploader.uploader
        uploaderInstance.cancel()
      }
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
