const MyComponent = {
  template: `<header class="header container">
        <div class="row">
          <div class="header-leftBox col">
            <img src="https://js.chongso.com/pc/images/logo.png" alt="宠搜网" />
          </div>
          <div class="header-rightBox col">
            <div class="rounded-pill round">
              <input v-model="searchText" class="serch_input" type="text" />
            <button @click="notifyParent" class="searchButton">搜索</button>
        </div>
        </div>
    </div>
</header>`,
  props: ["search"],
  setup(props) {
    const searchText = ref("");
    const notifyParent = () => {
      props.search(searchText.value);
    };
    return { searchText, notifyParent };
  },
};

const FooterTemplate = {
  template: `<footer class="footer">
      <div class='footer_co'>
        <a  href="#"><img :src="footerData.logoSrc" alt=""></a>
        <p>{{footerData.descrption}} {{footerData.descrption0}}{{footerData.origin}}</p>
        <p>{{footerData.descrption1}} {{footerData.descrption2}} </p>
        <p>{{footerData.descrption3}}</p>
        <p>{{footerData.descrption4}}</p>
      </div>
    </footer>
  </script>`,
  props: ["search"],
  setup(props) {
    const searchText = ref("");
    const notifyParent = () => {
      props.search(searchText.value);
    };
    return { searchText, notifyParent };
  },
};
