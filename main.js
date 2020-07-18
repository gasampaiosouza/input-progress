const app = new Vue({
  el: '#app',
  data: {
    message: '',
  },
  watch: {
    message: function (val) {
      const progressBar = this.$refs.progress;

      // change it to change the limit
      const maxValue = 10;

      const valueLength = val.length;
      const currentValue = (valueLength * 100) / maxValue;

      if (currentValue <= 100)
        return (progressBar.style.width = `${currentValue}%`);
    },
  },
});
