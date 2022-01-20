const counter = {
  data() {
    return {
      counter: 1,
      title: "Счетчик",
    }
  }
}

Vue.createApp(counter).mount('#app');