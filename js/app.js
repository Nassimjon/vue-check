const counter = {
  data() {
    return {
      placeholder: "input the name of note",
      title: "note List",
    }
  }
}

Vue.createApp(counter).mount('#app');