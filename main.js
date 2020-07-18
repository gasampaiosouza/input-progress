Vue.component('progress-bar', {
  props: {},
  template: `
    <div class="progress">
      <div class="progress-bar-incomplete"></div>
      <div class="progress-bar-complete"></div>
    </div>
  `,
});

const app = new Vue({
  el: '#app',
  data: {
    message: '',
  },
});
