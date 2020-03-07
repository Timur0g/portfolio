new Vue({
    el: '#app',
    data() {
      return {
        arr: []
      };
    },
    mounted() {
      axios
        .get('https://restcountries.eu/rest/v2/all')
        .then((res => {
            for(let i = 0; i < res.data.length; i++) {
                this.arr.push(res.data[i]);
            }
        }));
    },
  });

  