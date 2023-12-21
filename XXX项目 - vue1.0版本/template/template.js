const HeaderTemplate = `<header class="header container">
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
</header>`;

const FooterTemplate = `<footer class="footer">
      <div class='footer_co'>
        <a  href="#"><img :src="footerData.logoSrc" alt=""></a>
        <p>{{footerData.descrption}} {{footerData.descrption0}}{{footerData.origin}}</p>
        <p>{{footerData.descrption1}} {{footerData.descrption2}} </p>
        <p>{{footerData.descrption3}}</p>
        <p>{{footerData.descrption4}}</p>
      </div>
    </footer>
  </script>`;

const NotFoundTemplate = `<div class="not_found">
        <div class="not_found_detail">
          <img
            src="https://pets.byspotify.com/static/c3ef06a5ec0c7524927831dfa6e92c57/c0bbd/neutral.png"
            alt=""
            loading="lazy"
            draggable="false"
            class="not_found_detail_greenImg"
          />
          <img
            src="https://pets.byspotify.com/static/cf1ed05c58e103f260dd0ef91561399e/78d2a/error.png"
            alt=""
            loading="lazy"
            draggable="false"
            class="not_found_detail_dogImg"
          />
          <img
            class="not_found_detail_backImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDEyIiBoZWlnaHQ9IjU0MyIgdmlld0JveD0iMCAwIDIwMTIgNTQzIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMTllNjhjOwogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHBhdGggaWQ9Ikdyb3VuZCIgY2xhc3M9ImNscy0xIiBkPSJNMzQsMTFTMjMwLjA3My00NC4yNTUsNzI4LDkzYzAsMCwxNzUuMSw1Ni40NDgsNTc3LTI5LDAsMCw0NDIuMjctMTAxLjgsNjk0LDQ3bDEzLDQyMkwwLDU0M1oiLz4KPC9zdmc+Cg=="
          />
          <div class="not_found_detail_box">
            <div class="not_found_detail_box_text">
              对不起,请你选择宠物再进入详情页
            </div>
            <div @click="backHome" class="not_found_detail_box_button">
              回到首页
            </div>
          </div>
        </div>
      </div>`;

const DescTabsTemplate = `<section class="descTabs">
        <dl
          class="descTabs_contentBox"
          v-for="descItems of descTabs"
          :key="descItems.id"
        >
          <a
            class="descTabs_contentBox_a"
            :href="descItems.href"
            target="_blank"
          >
            <dd class="descTabs_contentBox_a_dd">
              <span class="descTabs_contentBox_a_dt_span">
                <img
                  class="descTabs_contentBox_a_dt_image"
                  :src="descItems.imageSrc"
                  alt=""
                />
              </span>
              <p>{{descItems.totalTitle}}</p>
            </dd>
          </a>
          <dd class="descTabs_contentBox_dd">
            <a :href="items.href" v-for="items of descItems.lists"
              >{{items.totalTitle}}</a
            >
          </dd>
        </dl>
      </section>`;

const TabBoxTemplate = `<section class="tabBox">
        <div v-for="list of tabList" class="tabBox_list">
          <a class="tabBox_list_a" :href="list.href">{{list.title}}</a>
          <i v-if="list.hasChild" class="tabBox_list_i"></i>
          <div class="tabBox_list_ul" v-if="list.hasChild">
            <template v-for="pets of list.pets">
              <a :href="pets.href">{{pets.name}}</a>
            </template>
          </div>
        </div>
      </section>`;

const HotListTemplate = `<div class="hot_section" v-for="hots of hotList">
        <header class="hot_section_title">
         <p class="hot_section_title_p">{{hots.totalTitle}}</p>
         <span class="hot_section_title_p_span">更多
          <img class="hot_section_title_p_img" src="https://js.chongso.com/pc/images/more.png" alt="">
         </span>
        </header>
        <main class="hot_section_main">
          <p v-for='items of hots.lists'>
            {{ items.title }}
          </p>
        </main>
    </div>`;

const TabClassTempalte = `<section class="tabClass">
            <div class="tabClass_top">
              <p
                class="tabClass_top_p"
                v-for="items of cardList"
                :key="items.totalTitle"
              >
                <span
                  class="tabClass_top_p_span"
                  @click="selectCard = $index == 0 ? 1 : $index"
                  :class="{ 'active': selectCard === $index &&  selectCard !== 0 }"
                  >{{items.totalTitle}}</span
                >
              </p>
            </div>
            <div class="tabClass_bottom">
              <div
                class="tabClass_bottom_card"
                v-for="cards of petDetailTop"
                @click="todetailPage(cards.name)"
              >
                <img :src="cards.image" :alt="cards.name" />
                <span>{{cards.name}}</span>
                <div class="tabClass_bottom_card_desc">
                  <span>问答</span><span>疾病</span><span>百科</span>
                </div>
              </div>
            </div>
            <div class="tabClass_bottom">
              <div
                class="tabClass_bottom_card"
                v-for="cards of petDetailBottom"
                @click="todetailPage(cards.name)"
              >
                <template v-if="cards.image">
                  <img :src="cards.image" :alt="cards.name" />
                </template>
                <template v-if="!cards.image">
                  <span class="tabClass_bottom_card_more">+</span>
                </template>
                <span>{{cards.name}}</span>
                <div class="tabClass_bottom_card_desc">
                  <span>问答</span><span>疾病</span><span>百科</span>
                </div>
              </div>
            </div>
          </section>`;

// const Child = Vue.extend({
//   template: "<div>Child!</div>",
// });
// const Parent = Vue.extend({
//   template: "<div>Parent!<my-child></my-child></div>",
//   components: {
//     "my-child": Child,
//   },
// });

// Vue.component("my-as", {
//   template: "<div>my-as!</div>",
// });
// const Parent2 = Vue.extend({
//   template: "<div>Parent2!<my-component2></my-component2></div>",
//   components: {
//     "my-component2": {
//       template: "<div>A custom component!</div>",
//     },
//   },
// });

const DescTabsComponent = Vue.extend({
  template: DescTabsTemplate,
  props: {
    descTabs: {
      type: Array,
      required: true,
    },
  },
});

const TabBoxComponent = Vue.extend({
  template: TabBoxTemplate,
  props: {
    tabList: {
      type: Array,
      required: true,
    },
  },
});

const TabComponent = Vue.extend({
  template: TabClassTempalte,
  watch: {
    selectCard(newVal, oldVal) {
      this.petDetailTop = cardList[newVal].goodsList.slice(0, 9);
      this.petDetailBottom = cardList[newVal].goodsList.slice(9, 18);
    },
  },
  props: {
    cardList: {
      type: Array,
      required: true,
    },
    selectCard: {
      type: Number,
      required: true,
    },
    petDetailTop: {
      type: Array,
      required: true,
    },
    petDetailBottom: {
      type: Array,
      required: true,
    },
    todetailPage: {
      type: Function,
      required: true,
    },
  },
});

const HeaderComponent = Vue.extend({
  template: HeaderTemplate,
  data: function () {
    return {
      searchText: "",
    };
  },
  props: {
    search: {
      type: Function,
      required: true,
    },
  },
  methods: {
    // 子组件传递事件给父组件
    notifyParent: function () {
      this.$emit("child-event", this.searchText);
    },
  },
});

const TabClassComponent = Vue.extend({
  template: HotListTemplate,
  props: ["hotList"],
});

const PetsHealthy = Vue.extend({
  template: `#pets-healthy`,
  props: ["petHealthy"],
});

const Tabpicture = Vue.extend({
  template: `#tab-picture`,
  props: ["petKnowledge"],
});

const TabThink = Vue.extend({
  template: `#tab-think`,
  props: ["tabThink"],
});

const NewsTab = Vue.extend({
  template: `#news-tab`,
  props: ["newsList"],
});

const TabrightNews = Vue.extend({
  template: `#right-news`,
  props: ["rightNews"],
});

const FooterData = Vue.extend({
  template: FooterTemplate,
  props: ["footerData"],
});
const NotFound = Vue.extend({
  template: NotFoundTemplate,
  props: ["backHome"],
});

Vue.component("desctabs-component", DescTabsComponent);
Vue.component("tabcomponent-component", TabComponent);
Vue.component("tabbox-component", TabBoxComponent);
Vue.component("header-component", HeaderComponent);
Vue.component("footerdata-component", FooterData);
Vue.component("newstab-component", NewsTab);
Vue.component("rightnews-component", TabrightNews);
Vue.component("tabthink-component", TabThink);
Vue.component("tabclass-component", TabClassComponent);
Vue.component("petshealthy-component", PetsHealthy);
Vue.component("tabpicture-component", Tabpicture);
Vue.component("notfound-component", NotFound);
// Vue.component("child", {
//   props: ["msg"],
//   template: "<span>{{ msg }}</span>",
// });
// Vue.component("my-parent", Parent);
// Vue.component("my-parent2", Parent2);
