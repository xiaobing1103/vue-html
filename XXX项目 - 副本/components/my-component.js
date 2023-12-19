const MyComponent = {
  template: `<header class="header container">
        <div class="row">
          <div class="header-leftBox col">
            <img src="https://js.chongso.com/pc/images/logo.png" alt="宠搜网" />
          </div>
          <div class="header-rightBox col">
            <div class="rounded-pill round">
              <input placeholder="请筛选宠物" v-model="searchText" class="serch_input" type="text" />
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
    </footer>`,
  props: ["footerData"],
};

const TabBoxTemplate = {
  template: `<section class="tabBox">
        <div v-for="list of tabList" class="tabBox_list">
          <a class="tabBox_list_a" :href="list.href">{{list.title}}</a>
          <i v-if="list.hasChild" class="tabBox_list_i"></i>
          <div class="tabBox_list_ul" v-if="list.hasChild">
            <template v-for="pets of list.pets">
              <a :href="pets.href">{{pets.name}}</a>
            </template>
          </div>
        </div>
      </section>`,
  props: ["tabList"],
};

const DescTabsTemplate = {
  template: `<section class="descTabs">
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
      </section>`,
  props: ["descTabs"],
};

const TabClassTempalte = {
  template: `<section class="tabClass">
            <div class="tabClass_top">
              <p
                class="tabClass_top_p"
                v-for="(items,index) of cardList"
                :key="index"
              >
                <span
                  class="tabClass_top_p_span"
                  @click="changeSelected(index)"
                  :class="{ 'active': selectCard === index &&  selectCard !== 0 }"
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
          </section>`,
  props: [
    "cardList",
    "todetailPage",
    "selectCard",
    "emitEvent",
    "petDetailBottom",
    "petDetailTop",
  ],
  setup(props) {
    const changeSelected = (index) => {
      props.emitEvent(index);
    };

    return {
      changeSelected,
    };
  },
};

const HotListTemplate = {
  template: `<div class="hot_section" v-for="hots of hotList">
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
    </div>`,
  props: ["hotList"],
};

const TabThinkTemplate = {
  template: `<div class="tab_thinkBox">
      <header class="tab_thinkBox_title">
        也许你想了解
      </header>
      <main class="tab_thinkBox_main">
        <div class="tab_thinkBox_main_items" v-for="items of tabThink">
            <img :src="items.imageSrc" alt="">
            <span>{{items.title}}</span>
        </div>
      </main>
     <footer class="tab_thinkBox_footer">
      <img src="https://js.chongso.com/pc/images/adv01.jpg" alt="">
     </footer>
    </div>`,
  props: ["tabThink"],
};

const PetsHealthyTemplate = {
  template: ` <div class="pets_healthyBox">
      <header class="pets_healthyBox_header">
        <img src="https://js.chongso.com/pc/images/adv_02.jpg" alt="关爱宠物的健康生活">
      </header>
      <main class="pets_healthyBox_main">
        <div class="pets_healthyBox_main_box" v-for="items of petHealthy">
          <article :title="items.title">{{items.title}}</article>
          <p :title="items.des">{{items.des}}</p>
        </div>
      </main>
    </div>`,
  props: ["petHealthy"],
};
const NewsTabTemplate = {
  template: `<div class="tab_thinkBox" v-for="news of newsList">
      <header class="tab_thinkBox_header">
          {{news.totalTitle}}
      </header>
      <main class="tab_thinkBoxr_main" v-for="items of news.news">
       <div class="tab_thinkBoxr_main_box">
        <article class="tab_thinkBoxr_main_box_article">
          [{{items.type}}]
        </article>
        <span class="tab_thinkBoxr_main_box_span">{{ items.title}}</span></div>
      </main>
    </div>`,
  props: ["newsList"],
};

const TabpictureTemplate = {
  template: `<div class="tabPicture">
      <section class="tabPicture_box" v-for="items of petKnowledge" 
      :style="{ background: 'url(' + items.imageSrc +') no-repeat', backgroundSize: 'cover' }">
         <article>
          {{items.title}}
         </article>
         <div class="tabPicture_box_bottom_box">
         <div class="tabPicture_box_bottom">
          <a v-for="knowledges of items.knowledgeList" :href="knowledges.href">{{knowledges.content }}</a></div></div>
      </section>
    </div>`,
  props: ["petKnowledge"],
};

const TabrightNewsTemplate = {
  template: `<div class="right_newsBox" >
      <header class="right_newsBox_header">
          <div class="right_newsBox_header_content"> 宠物咨讯</div>
      </header>
      <main class="right_newsBox_main" v-for="items of rightNews">
        <a class="right_newsBox_main_a" :href="items.href">{{items.title}}</a>
      </main>
    </div>`,
  props: ["rightNews"],
};

const NotFoundTemplate = {
  template: `<div class="not_found">
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
              对不起,该宠物暂时没有数据，请你选择宠物再进入详情页！
            </div>
            <div @click="backHome" class="not_found_detail_box_button">
              回到首页
            </div>
          </div>
        </div>
      </div>`,
  props: ["backHome"],
};
