const root = new Vue({
  el: "#app",
  data: {
    tabList: tabList,
    descTabs: descTabs,
    footerData: footerData,
    detailData: detailData,
    name: "",
    selectCard: 1,
    showPetList: false,
  },
  created: function () {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    this.name = name;
  },
  methods: {
    search: function (searchText) {
      window.location.href = `https://www.baidu.com/s?wd=site:chongso.com%20${searchText}`;
    },
    handleChildEvent: function (searchText) {
      this.search(searchText);
    },
    backHome: function () {
      window.location.href = "./index.html";
    },
  },
  computed: {
    filterDetailData: function () {
      return this.detailData.find((item) => this.name == item.name);
    },
  },
});
