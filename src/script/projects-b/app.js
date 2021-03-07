
import Vue from 'vue';
import FastClick from 'fastclick'
import { instance } from '@script/common/fetch'
Vue.prototype.$fetch = instance
require('@script/common/rem.js')
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}
// import _ from 'lodash'
// import VConsole from 'vconsole'
// import { isLocalhost } from '@script/common/utils';

require('@assets/sass/reset.scss')
require('@assets/sass/flex.scss')
require('@assets/sass/common.scss')
// if (isLocalhost) {
//     var vConsole = new VConsole();
// }

export default Vue
