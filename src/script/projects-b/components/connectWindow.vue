<template>
  <div class="connect-window animate__animated animate__flipInX">
    <div class="close" @click="close">
      <img :src="closeIcon" alt="" />
    </div>
    <div class="win-left">
      <img class="logo" :src="logo" alt="" />
      <div class="row-line"></div>
      <div class="color-blue">
        非常感谢您的留言，您也可以通过以下方式找到我们。
      </div>
      <div class="connect-type">
        <div v-for="(item, index) in types" :key="index">
          <div class="type-name">
            <img :src="item.icon" alt="" />
            {{ item.name }}
          </div>
          <span>{{ item.value }}</span>
        </div>
      </div>
    </div>
    <div class="win-right">
      <div class="color-blue">如您需要我们的帮助，请留言给我们：</div>
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
          <div class="label">请您在此留言，我们会尽快给你回复！</div>
          <div class="input">
            <textarea v-model="form.remark"></textarea>
          </div>
        </li>
        <li class="form-item">
          <div class="submit-btn" @click="submit">提交</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
require('./connectWindow.scss')
import logo from '@assets/images/20.png'
import mobile from '@assets/images/16.png'
import email from '@assets/images/17.png'
import closeIcon from '@assets/images/18.png'

export default {
  data() {
    return {
      logo,
      closeIcon,
      types: [
        {
          name: '联系电话',
          icon: mobile,
          value: '+86 21-62898123',
        },
        {
          name: '商务合作',
          icon: email,
          value: 'news@ambrightgroup.com',
        },
        {
          name: '媒体联络',
          icon: email,
          value: 'news@ambrightgroup.com',
        },
      ],
      form: {
        name: '',
        mobile: '',
        email: '',
        remark: '',
        refer: 'index', // 来源 （写死）首页：index 联系我们：contact-us
      },
    }
  },
  methods: {
    async submit() {
      let data = await this.$fetch({
        url: `/form`,
        method: 'POST',
        data: this.form,
      })
      console.log(data)

      if (data.status) {
        this.$Message.success('提交成功')
        this.$emit('close')
      } else {
        this.$Message.warning(data.msg)
      }
      console.log(data)
    },
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style>
</style>