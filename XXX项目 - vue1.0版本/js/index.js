const root = new Vue({
  el: "#app",
  data: {
    tabList: tabList,
    descTabs: descTabs,
    cardList: cardList,
    hotList: hotList,
    hotList1: hotList1,
    petHealthy: petHealthy,
    petKnowledge: petKnowledge,
    tabThink: tabThink,
    newsList: newsList,
    newsList1: newsList1,
    newsList2: newsList2,
    rightNews: rightNews,
    footerData: footerData,
    selectCard: 1,
    showPetList: false,
    message: "Hello Vue.js!",
  },
  created: function () {
    console.log(this.message);
  },
  computed: {
    petDetailTop: function () {
      return cardList[this.selectCard].goodsList.slice(0, 9);
    },
    petDetailBottom: function () {
      return cardList[this.selectCard].goodsList.slice(9, 18);
    },
  },
  methods: {
    search: function (searchText) {
      window.location.href = `https://www.baidu.com/s?wd=site:chongso.com%20${searchText}`;
    },
    todetailPage: function (name) {
      if (name.includes("更多")) return;
      window.location.href = `./second.html?name=${name}`;
    },
    handleChildEvent: function (searchText) {
      this.search(searchText);
    },
  },
});
