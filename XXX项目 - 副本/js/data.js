const tabList = [
  { id: 111, title: "首页", href: "#", active: true },
  {
    id: 112,
    title: "宠物大全",
    href: "https://www.chongso.com/chongwudaquan/",
    active: false,
    hasChild: true,
    pets: [
      { name: "猫咪", href: "#" },
      { name: "狗狗", href: "#" },
      { name: "小宠", href: "#" },
      { name: "水族", href: "#" },
      { name: "爬宠", href: "#" },
    ],
  },
  {
    id: 113,
    title: "宠物视频",
    href: "https://www.chongso.com/shipin/",
    active: false,
    hasChild: false,
  },
  {
    id: 114,
    title: "宠物趣事",
    href: "https://www.chongso.com/funny/",
    active: false,
    hasChild: true,
    pets: [
      { name: "宠物搞笑视频", href: "#" },
      { name: "宠物可爱视频", href: "#" },
      { name: "宠物温馨视频", href: "#" },
      { name: "宠物训练视频", href: "#" },
      { name: "宠物打斗视频", href: "#" },
      { name: "宠物表演视频", href: "#" },
      { name: "宠物生活视频", href: "#" },
      { name: "宠物科普视频", href: "#" },
      { name: "我的小宠", href: "#" },
    ],
  },
  {
    id: 115,
    title: "宠物医疗",
    href: "https://www.chongso.com/hosptial/",
    active: false,
    hasChild: true,
    pets: [
      { name: "疾病大全", href: "#" },
      { name: "专家医生", href: "#" },
      { name: "宠物问答", href: "#" },
      { name: "寻医找药", href: "#" },
      { name: "宠物医院", href: "#" },
      { name: "疾病知识", href: "#" },
      { name: "健康科普", href: "#" },
      { name: "专家访谈", href: "#" },
    ],
  },
  {
    id: 116,
    title: "宠物问答",
    href: "https://www.chongso.com/wenda/",
    active: false,
    hasChild: false,
  },
];

const descTabs = [
  {
    id: 12345,
    totalTitle: "咨讯",
    href: "https://www.chongso.com/zixun/",
    imageSrc: "https://js.chongso.com/pc/images/i_ui5.png",
    lists: [
      {
        totalTitle: "新闻",
        href: "https://www.chongso.com/zixun/all/news",
      },
      {
        totalTitle: "展会",
        href: "https://www.chongso.com/zixun/all/zhanhui",
      },
      {
        totalTitle: "政策",
        href: "https://www.chongso.com/zixun/all/policy/",
      },
      {
        totalTitle: "行业",
        href: "https://www.chongso.com/zixun/all/dynamic/",
      },
      {
        totalTitle: "故事",
        href: "https://www.chongso.com/zixun/all/story",
      },
      {
        totalTitle: "趣闻",
        href: "https://www.chongso.com/zixun/all/fun/",
      },
    ],
  },

  {
    id: 12346,
    totalTitle: "百科",
    href: "https://www.chongso.com/baike/",
    imageSrc: "https://js.chongso.com/pc/images/i_ui3.png",
    lists: [
      {
        totalTitle: "疾病",
        href: "https://www.chongso.com/baike/all/disease/",
      },
      {
        totalTitle: "选购",
        href: "https://www.chongso.com/baike/all/xuangou/",
      },
      {
        totalTitle: "孕事",
        href: "https://www.chongso.com/baike/all/yunshi/",
      },
      {
        totalTitle: "供求",
        href: "https://www.chongso.com/baike/all/message/",
      },
      {
        totalTitle: "交配",
        href: "https://www.chongso.com/baike/all/breed/",
      },
      {
        totalTitle: "习性",
        href: "https://www.chongso.com/baike/all/petlife/",
      },
    ],
  },

  {
    id: 12347,
    totalTitle: "日常",
    href: "https://www.chongso.com/daily/",
    imageSrc: "https://js.chongso.com/pc/images/i_ui1.png",
    lists: [
      {
        totalTitle: "美容",
        href: "https://www.chongso.com/daily/all/cosmetology/",
      },
      {
        totalTitle: "驯养",
        href: "https://www.chongso.com/daily/all/domestication/",
      },
      {
        totalTitle: "用品",
        href: "https://www.chongso.com/daily/all/appliance/",
      },
      {
        totalTitle: "饮食",
        href: "https://www.chongso.com/daily/all/diet/",
      },
      {
        totalTitle: "清洁",
        href: "https://www.chongso.com/daily/all/clean/",
      },
      {
        totalTitle: "驱虫",
        href: "https://www.chongso.com/daily/all/quchong/",
      },
    ],
  },

  {
    id: 12348,
    totalTitle: "问答",
    href: "https://www.chongso.com/wenda/",
    imageSrc: "https://js.chongso.com/pc/images/wenda.png",
    lists: [
      {
        totalTitle: "狗狗",
        href: "https://www.chongso.com/wenda/dog/",
      },
      {
        totalTitle: "猫咪",
        href: "https://www.chongso.com/wenda/cat/",
      },
      {
        totalTitle: "小宠",
        href: "https://www.chongso.com/wenda/xiaochong/",
      },
      {
        totalTitle: "水族",
        href: "https://www.chongso.com/wenda/shuizu/",
      },
      {
        totalTitle: "爬宠",
        href: "https://www.chongso.com/wenda/pachong/",
      },
      {
        totalTitle: "鸟类",
        href: "https://www.chongso.com/wenda/bird/",
      },
    ],
  },

  {
    id: 12349,
    totalTitle: "活动",
    href: "https://www.chongso.com/activity/",
    imageSrc: "https://js.chongso.com/pc/images/i_ui2.png",
    lists: [
      {
        totalTitle: "宠物评比",
        href: "https://www.chongso.com/activity/all/compare/",
      },
      {
        totalTitle: "年度盛典",
        href: "https://www.chongso.com/activity/all/grand/",
      },
      {
        totalTitle: "最美宠物",
        href: "https://www.chongso.com/activity/all/beautiful/",
      },
      {
        totalTitle: "人气宠物",
        href: "https://www.chongso.com/activity/all/popularity/",
      },
    ],
  },
];

const cardList = [
  { totalTitle: "热宠导航" },
  {
    totalTitle: "狗狗",
    goodsList: [
      {
        image:
          "https://img.chongso.com/20220519/af1029f245ce3c10e53e8fd79bf39bd9.jpg",
        name: "贵宾犬",
      },
      {
        image:
          "https://img.chongso.com/20220624/ee417f2a5abaf83da117812e4597a5d0.jpg",
        name: "比熊",
      },
      {
        image:
          "https://img.chongso.com/20230829/6cb13a18838eb57e18e811e2fb8f0102.png",
        name: "博美",
      },
      {
        image:
          "https://img.chongso.com/20220519/3fb503a70b0898f44a23f1807c660b74.jpg",
        name: "雪纳瑞",
      },
      {
        image:
          "https://img.chongso.com/20220625/edaeef90cf819ad9f28517e11c68bd94.jpg",
        name: "约克夏梗",
      },
      {
        image:
          "https://img.chongso.com/20220624/d3f45baac0ad98b07f8b843fd2ba97d2.jpg",
        name: "马尔济斯犬",
      },

      {
        image:
          "https://img.chongso.com/20220624/dcbb354d5af0e2c54831951b3d11de15.jpg",
        name: "威尔士柯基犬",
      },
      {
        image:
          "https://img.chongso.com/20220623/74fd403aba4f43624d7b42fa9627f6bc.jpg",
        name: "柴犬",
      },

      {
        image:
          "https://img.chongso.com/20220624/c4795d97622cb6599a642a0205b8fe7b.jpg",
        name: "边牧",
      },
      {
        image:
          "https://img.chongso.com/20220623/72ba2f6e24d502b79a307cac014ec270.jpg",
        name: "德国牧羊犬",
      },
      {
        image:
          "https://img.chongso.com/20220624/0c5cd26e60e90b8febe07db8242310d0.jpg",
        name: "金毛",
      },
      {
        image:
          "https://img.chongso.com/20220519/ccef6460541572279ceece2b5c6df753.jpg",
        name: "松狮犬",
      },
      {
        image:
          "https://img.chongso.com/20220623/f698e46f36e0d8cb2914f380c3aea5d7.jpg",
        name: "法国斗牛犬",
      },
      {
        image:
          "https://img.chongso.com/20220519/8c9af3a41b20aef3a84a64cf87b9e77c.jpg",
        name: "萨摩耶犬",
      },
      {
        image:
          "https://img.chongso.com/20220519/55bfc1d8ac6e9ef5dcd49e09400b538d.jpg",
        name: "拉布拉多犬",
      },
      {
        image:
          "https://img.chongso.com/20220624/3921cfd10af470cca497b276bda94aa4.jpg",
        name: "哈士奇",
      },
      {
        image:
          "https://img.chongso.com/20220624/3a3e5ba1a8f5cfed211eb7936a0c16a1.jpg",
        name: "罗威纳犬",
      },
      {
        name: "更多狗狗",
      },
    ],
  },

  {
    totalTitle: "猫咪",
    goodsList: [
      {
        image:
          "https://img.chongso.com/20230601/3e00c66099263a019bb86828f62b9c82.jpg",
        name: "金渐层",
      },
      {
        image:
          "https://img.chongso.com/20230601/0eb35aab72808a3341d77bf529bff335.jpg",
        name: "银渐层",
      },
      {
        image:
          "https://img.chongso.com/20230629/b3fbec36c2b634e474c550a7872fc20d.jpg",
        name: "橘猫",
      },
      {
        image:
          "https://img.chongso.com/20220519/db123778097d13d4e3a5923790d8179b.jpg",
        name: "英短",
      },
      {
        image:
          "https://img.chongso.com/20220519/59b677ee957fc7121a1c0f2d7a6b00e2.jpg",
        name: "美短",
      },
      {
        image:
          "https://img.chongso.com/20220624/d5b45f9ad1ba75129fc5376c9cad09c3.png",
        name: "阿比西亚猫",
      },
      {
        image:
          "https://img.chongso.com/20220624/0ffb4f06c55ec8f71a1ca7eb001da9ab.jpg",
        name: "孟加拉豹猫",
      },

      {
        image:
          "https://img.chongso.com/20220519/9249952259eedee6251666fb68da43ff.jpg",
        name: "暹罗猫",
      },
      {
        image:
          "https://img.chongso.com/20220519/075193db50d339cac862f0f47e7fbb8e.jpg",
        name: "异国短毛猫",
      },

      {
        image:
          "https://img.chongso.com/20220624/f5e0bda6b04162209ef9f35201c5f994.jpg",
        name: "德文卷毛猫",
      },
      {
        image:
          "https://img.chongso.com/20220519/0bff88b6d36f7445d4f6485468dcb810.jpg",
        name: "缅因猫",
      },
      {
        image:
          "https://img.chongso.com/20220519/16a267be4d1a85237b7f8147515b1890.jpg",
        name: "布偶猫",
      },
      {
        image:
          "https://img.chongso.com/20220624/6fe1868eb133587bd2c7be4783b58186.png",
        name: "挪威森林猫",
      },
      {
        image:
          "https://img.chongso.com/20220624/46898b016f94958ad5067d10d763ca24.png",
        name: "曼基康猫",
      },
      {
        image:
          "https://img.chongso.com/20220519/df96651f46bb98ded2c4a086f11df454.jpg",
        name: "波斯猫",
      },
      {
        image:
          "https://img.chongso.com/20220519/e51827f5900b18ca6be27b92314d42c2.jpg",
        name: "苏格兰折耳猫",
      },
      {
        image:
          "https://img.chongso.com/20220519/93a2abc451e709aed86f7567bd36287d.jpg",
        name: "土耳其安哥拉猫",
      },
      {
        name: "更多猫咪",
      },
    ],
  },
];

const hotList = [
  {
    totalTitle: "热门动态",
    lists: [
      { id: 991, title: "为什么兔子不能洗澡 兔子不能洗澡的原因" },
      { id: 992, title: "猫踩奶是认主人了吗 猫踩奶是在认主人" },
      { id: 993, title: "养金毛的五大优点 关于养金毛的好处" },
      { id: 994, title: "怀孕的狗狗吃什么有营养 适合怀孕狗狗的食物" },
      { id: 995, title: "狗偷吃巧克力怎么办 狗吃了巧克力怎么解决" },
    ],
  },
];

const hotList1 = [
  {
    totalTitle: "网友热搜",
    lists: [
      { id: 991, title: "家里猫毛太多  我应该处理" },
      { id: 992, title: "猫咪晚上跑酷  我该怎么办" },
      { id: 993, title: "关于缅因猫的全色系 哪个色系最好看" },
      { id: 994, title: "猫咪有时候乱拉怎么处理 什么原因引起的" },
      { id: 995, title: "邻居家的猫 经常跑我家里来欺负我家猫" },
    ],
  },
];

const petHealthy = [
  {
    title: "狗伤人事件倍受社会关注 主人需要规范养狗",
    des: "崇州市小区恶犬撕咬事件引起了广泛的社会关注和思考。确保人与宠物犬的和谐相处，需要采取一系列措施来加强管理和监管，保障公众的安全。",
  },
  {
    title: "金丝猴因游客投喂而死?园方回应：该事件确实发生过",
    des: "近期，在陕西西安的秦岭四宝科学公园内，一只年仅4岁的金丝猴“圆点”因游客的不当投喂行为而死亡。据悉，该事件确实发生过，且由于游客数量较多以及不当投喂现象严重，导致金丝猴受到严重影响。",
  },
];

const petKnowledge = [
  {
    title: "汪星人头条",
    imageSrc: "https://js.chongso.com/pc/images/tiao_2.jpg",
    knowledgeList: [
      {
        content: "训练哈士奇的小妙招 怎么训练哈士奇",
        href: "https://www.chongso.com/k/mrwzkdkcd/",
      },
      {
        content: "泰迪为什么这么色，泰迪色的原因",
        href: "https://www.chongso.com/k/mrwzkdkfk/",
      },
      {
        content: "母狗几个月来月经",
        href: "https://www.chongso.com/k/mrwzkdkhc/",
      },
      {
        content: "狗有牙结石还很臭怎么办 狗牙结石处理方法",
        href: "https://www.chongso.com/k/mrwzkdkhb/",
      },
      {
        content: "狗一岁相当于人多少岁 狗狗和人类年龄换算",
        href: "https://www.chongso.com/k/mrwzkdkxg/",
      },
    ],
  },
  {
    title: "喵星人头条",
    imageSrc: "https://js.chongso.com/pc/images/tiao_1.jpg",
    knowledgeList: [
      {
        content: "猫吃生肉需要注意什么",
        href: "https://www.chongso.com/k/mrwzkdkck/",
      },
      {
        content: "猫耳朵瘙痒是什么原因 猫耳瘙痒的原因",
        href: "https://www.chongso.com/k/mrwzkdkkh/",
      },
      {
        content: "暹罗猫为什么会变色 暹罗猫变色的原因",
        href: "https://www.chongso.com/k/mrwzkdkxk/",
      },
      {
        content: "猫咪吃蛋黄有什么好处",
        href: "https://www.chongso.com/k/mrwzkdkxc/",
      },
      {
        content: "美短太淘气怎么训练",
        href: "https://www.chongso.com/k/mrwzkdkcg/",
      },
    ],
  },
];

const tabThink = [
  {
    imageSrc: "https://js.chongso.com/pc/images/dh_pet7.png",
    title: "宠物健康",
  },
  {
    imageSrc: "https://js.chongso.com/pc/images/dh_pet3.png",
    title: "宠物相亲",
  },
  {
    imageSrc: "https://js.chongso.com/pc/images/dh_pet4.png",
    title: "宠物训练",
  },
  {
    imageSrc: "https://js.chongso.com/pc/images/dh_pet2.png",
    title: "宠物喂养",
  },
  {
    imageSrc: "https://js.chongso.com/pc/images/dh_pet6.png",
    title: "宠物用品",
  },
  {
    imageSrc: "https://js.chongso.com/pc/images/dh_pet1.png",
    title: "二手市场",
  },
  {
    imageSrc: "https://js.chongso.com/pc/images/dh_pet5.png",
    title: "护理/洗剪",
  },
  {
    imageSrc: "https://js.chongso.com/pc/images/dh_pet8.png",
    title: "领养/寄养",
  },
];

const newsList = [
  {
    totalTitle: "信元发育宝猫粮被指含有毒物质，宠物主发起投诉",
    news: [
      { title: "随着宠物类APP的兴起，其功能要包括哪些", type: "宠物新闻" },
      { title: "儿童被宠物狗吓哭后遭家长摔死，狗主人回应", type: "宠物新闻" },
      { title: "宠物墓地价格逐年上升，消费者该如何选择？", type: "宠物新闻" },
      { title: "消费者对居住环境重视，宠物阳台逐渐流行", type: "宠物新闻" },
    ],
  },
];

const newsList1 = [
  {
    totalTitle: "主人被隔离 宠物何去何从 深圳建立首个宠物方舱",
    news: [
      {
        title: "留下和爱宠之间的回忆 宠物摄影成养宠人士的新消费",
        type: "宠物新闻",
      },
      {
        title: "专业的宠物医疗、宠物疾病检测需求上升 宠物行业崛",
        type: "宠物新闻",
      },
      {
        title: "宠物医疗市场乱象 乱收费、高药价、医生从业门槛低",
        type: "宠物新闻",
      },
      { title: "宠物市场多样化发展 年轻人更加偏爱冷门宠物", type: "宠物新闻" },
    ],
  },
];

const newsList2 = [
  {
    totalTitle: "鱼缸里为什么要种水草 鱼缸水草的作用",
    news: [
      { title: "猫为什么会发出呼噜呼噜声 猫打呼的原因", type: "生活习性" },
      { title: "猫为什么要绝育 猫绝育的原因", type: "宠物孕事" },
      { title: "狗狗怀孕了能打胎吗 狗可不可以打胎", type: "宠物孕事" },
      { title: "怎么教八哥说话最快 教八哥学说话的方法", type: "生活习性" },
    ],
  },
];

const rightNews = [
  { title: "狗对主人低吼该不该打", href: "#" },
  { title: "苏格兰牧羊犬和边牧的区别", href: "#" },
  { title: "苏格兰牧羊犬和边牧的区别", href: "#" },
  { title: "乌龟白天进食还是晚上进食", href: "#" },
  { title: "乌龟晒背必须离开水吗", href: "#" },
  { title: "乌龟出眠后几天可以喂", href: "#" },
  { title: "乌龟冬眠到几月份开始吃东西", href: "#" },
  { title: "为什么狗狗进屋后先看左边,再看右边", href: "#" },
  { title: "为什么狗狗来到新家不吃东西", href: "#" },
  { title: "鱼缸水太肥了如何解决", href: "#" },
  { title: "阻止母猫挪窝会伤害小猫吗", href: "#" },
  { title: "长腿与短腿泰迪哪个贵", href: "#" },
  { title: "长毛蓝猫和短毛蓝猫哪个贵", href: "#" },
  { title: "金鱼三天喂一次能行吗", href: "#" },
  { title: "布偶猫剃毛后毛会黑吗", href: "#" },
  { title: "蓝猫贵还是蓝白猫贵", href: "#" },
  { title: "布偶猫为什么不能剪毛", href: "#" },
  { title: "缅因猫多大认主人", href: "#" },
];

const footerData = {
  logoSrc: "https://js.chongso.com/pc/images/nlogo.png",
  descrption: "Copyright © 2019-2020 ",
  descrption0: "宠搜网",
  origin: " 版权所有 ",
  descrption1: "关于我们",
  descrption2: "京ICP备2022007530号",
  descrption3: "视频许可证编号：（湘）字第00637号",
  descrption4:
    "违法及侵权请联系：TEL:0731-84117792 E-MAIL:11247931@qq.com 本站由北京市万商天勤律师事务所王兴未律师提供法律服务",
};

const detailData = [
  {
    name: "贵宾犬",
    titleImage:
      "	https://img.chongso.com/20220519/e669e291769303c98ece62521024e4e9.jpg",
    pirce: "800-7000",
    picture1:
      "https://img.chongso.com/20220517/25d61a0214e85a599dc7c4adc5e7493c.jpg",
    picture2:
      "https://img.chongso.com/20220624/6ad0f378e84794318c4ff1629854a29a.jpg",
    picture3:
      "https://img.chongso.com/20220624/889b6dd205de3351cca32a5e57da79ca.jpg",
    newActives: [
      { newsTiele: "泰迪经常挨打会变成什么性格" },
      { newsTiele: "泰迪狗不吃东西是什么原因?" },
      { newsTiele: "泰迪配狗最佳时间" },
      { newsTiele: "泰迪三个月三斤成年基本几斤" },
      { newsTiele: "为什么泰迪狗总是跟着人" },
      { newsTiele: "为什么泰迪狗总是跟着人" },
      { newsTiele: "泰迪长白毛怎么回事" },
      { newsTiele: "灰泰迪毛色变黑的原因" },
      { newsTiele: "泰迪一直舔自己脚是为什么" },
      { newsTiele: "泰迪小体和标体的区别" },
      { newsTiele: "母泰迪做绝育的好处和坏处" },
      { newsTiele: "泰迪狗为什么老是甩头抖毛" },
      { newsTiele: "泰迪几个月换牙" },
      { newsTiele: "泰迪的优缺点有哪些" },
      { newsTiele: "泰迪一个月吃多少狗粮" },
      { newsTiele: "泰迪狗为什么那么粘人" },
      { newsTiele: "泰迪打针后几天能洗澡" },
    ],
    konwledge: {
      name: "贵宾犬",
      nikeName: "泰迪犬",
      tiXing: "小型犬",
      city: "欧洲",
      weight: "4-8公斤",
      height: "22-38厘米",
      life: "12-15年",
      rump: "短尾",
      ear: "短耳",
      eye: "棕色",
      hairColor: "棕色 白色",
      HairLength: "短毛",
      function: "伴侣犬",
    },
    character: {
      introduce:
        "贵宾犬，别名：贵妇犬、卷毛狗，泰迪犬是贵宾犬的 “泰迪装 ”，因为这个狗狗造型受到了许多人的喜爱，成为了一种美容潮流，所以将美容成“泰迪装 ”的贵宾犬称之为“泰迪犬”。它智商很高，在犬里排名第二，寿命一般为10-15年。| 贵宾犬属于非常聪明且喜欢狩猎的犬种，该犬目前非常普遍，很多人都喜欢养它们。该犬才艺很多，行为举止有着高贵的气质。它活泼，性情优良，极易近人，是一种忠实的犬种。| 贵宾犬分为标准型，迷你型，玩具犬三种，外貌区别不大，只是体型的大小不同。",
      history:
        "贵宾犬的产地目前还存在争议，虽然很多人认为贵宾犬原产于法国，并且它一直作为法国的国犬，但德国、前苏联、意大利等国也认为有些品种的贵宾犬产于他们的国家，如白毛品种以法国居多，棕毛品种多产于德国，黑毛品种以前苏联为多，茶褐色品种则以意大利为多。因此有些史学家觉得在贵宾犬的发展历史中，德国、前苏联、法国等这几个国家的推动也必不可少 。但可以确定的是贵宾犬起源于欧洲，擅长水中捕猎而命名，是非常聪明敏捷的一类犬。 | 贵宾犬在路易14～路易16时期的法国宫廷是作为法国皇家女士的特别宠爱的犬种。在17世纪的一些绘画作品中，则有迷你贵宾犬和玩具贵宾犬的身影。在19世纪后期，贵宾被首次引入美国，但当时人们并没有特别关注它们，直到二次大战结束后，才在当地才开始流行起来，一直流行至今。而如今在我们中国，它已形成了庞大的伴侣型宠物品种群。",
      suitable:
        "贵宾犬最适合城市中的家庭，因为贵宾犬的美容需求在城市地区会更加方便，它活泼、友善、对主人忠诚的性格和特点非常适合作为宠物犬来饲养，是现代家庭生活中优秀的伴侣。",
      Common: [
        {
          name: "心脏病",
          desc: "狗心脏病多与肥胖和年老有关。狗患心脏病时，主要表现为疲劳、气短等症状。狗的心脏病很难发现，主人注意到的时候，狗病得很重。",
        },
        {
          name: "传染病",
          desc: "犬瘟热和犬细小是犬常见的恶性传染病，致死率高。没有及时接种疫苗的狗很容易得这两种传染病。一旦他们生病，就会出现精神萎靡、食欲不振、体温升高、呕吐和腹泻等症状。",
        },
        {
          name: "肾病",
          desc: "说到狗狗常见的疾病和症状，不得不提肾病。狗肾病的可怕在于疾病的无意识过程。主人发现后，狗肾细胞的损伤往往超过75%。狗出现问题时，症状通常是血尿、尿色异常、排尿习惯改变等。",
        },
        {
          name: "寄生虫 ",
          desc: "肠虫如蛔虫、钩虫以及心虫是犬体内常见的寄生虫。犬感染胃肠寄生虫时，主要症状为消瘦、精神萎靡、腹泻、虫粪、牙龈粘膜苍白等。心虫是一种寄生在狗心脏的寄生虫，狗感染后会出现生命力差、咳嗽、贫血、哮喘、腹水等症状。",
        },
        {
          name: "犬肺炎",
          desc: "肺炎也是犬的常见病，但犬肺炎是其他疾病的并发症，常发生于上呼吸道系统异常、细菌感染、犬瘟热感染、病毒性感冒、肺功能受损、心丝虫感染的犬。咳嗽、鼻塞、体温升高是犬肺炎的主要症状。",
        },
      ],
    },
    about: [
      { name: "粘人程度", num: 3.5 },
      { name: "喜叫程度", num: 3.5 },
      { name: "掉毛程度", num: 3.5 },
      { name: "体位程度", num: 3.5 },
      { name: "美容程度", num: 3.5 },
      { name: "友善程度", num: 3.5 },
      { name: "面对生人", num: 3.5 },
      { name: "面对动物", num: 3.5 },
      { name: "运动量", num: 3.5 },
      { name: "可训练性", num: 3.5 },
      { name: "口水程度", num: 3.5 },
      { name: "耐寒程度", num: 3.5 },
      { name: "耐热程度", num: 3.5 },
      { name: "城市适应度", num: 3.5 },
      { name: "聪明度", num: 4 },
      { name: "忠诚度", num: 4 },
      { name: "颜值", num: 5 },
      { name: "受欢迎度", num: 5 },
      { name: "知名度", num: 4 },
      { name: "干净程度", num: 4 },
      { name: "价格高低", num: 5 },
      { name: "嗅觉", num: 4 },
      { name: "凶悍", num: 2 },
    ],
    friends: [
      {
        name: "斗牛獒犬",
        imaSrc:
          "https://img.chongso.com/20220614/0bfc2a35e1056a26420bd6d7b71b3e67.jpg",
      },
      {
        name: "斗牛獒犬",
        imaSrc:
          "https://img.chongso.com/20220614/0bfc2a35e1056a26420bd6d7b71b3e67.jpg",
      },
      {
        name: "斗牛獒犬",
        imaSrc:
          "https://img.chongso.com/20220614/0bfc2a35e1056a26420bd6d7b71b3e67.jpg",
      },
      {
        name: "斗牛獒犬",
        imaSrc:
          "https://img.chongso.com/20220614/0bfc2a35e1056a26420bd6d7b71b3e67.jpg",
      },
      {
        name: "斗牛獒犬",
        imaSrc:
          "https://img.chongso.com/20220614/0bfc2a35e1056a26420bd6d7b71b3e67.jpg",
      },
    ],
  },
  {
    name: "比熊",
    titleImage:
      "https://img.chongso.com/20220519/76eb2374e06a18d2e6fa519f55148930.jpg",
    pirce: "1000-3000",
    picture1:
      "https://img.chongso.com/20220624/59d76c211c274cf3dc1967a21c8352c2.jpg",
    picture2:
      "https://img.chongso.com/20220623/95b50bd34a22507c0ff18f550be011eb.jpg",
    picture3:
      "https://img.chongso.com/20220623/e386a5cfb250aca40088365781d5f396.jpg",
    newActives: [
      { newsTiele: "比熊不同阶段标准体重" },
      { newsTiele: "公比熊多大就不闹腾了?" },
      { newsTiele: "比熊犬为什么不建议养" },
      { newsTiele: "比熊多大可以吃干粮了" },
      { newsTiele: "比熊多大算成犬" },
      { newsTiele: "买比熊注意事项" },
      { newsTiele: "比熊可以吃猪肉吗" },
      { newsTiele: "比熊几个月可以出门遛狗" },
      { newsTiele: "比熊耳朵大是不纯么" },
      { newsTiele: "小体和大体比熊的差别" },
      { newsTiele: "比熊每天吃蛋黄好处" },
      { newsTiele: "比熊宝宝几天睁眼" },
      { newsTiele: "比熊配种最佳时间是什么时候" },
      { newsTiele: "比熊一般生几个" },
      { newsTiele: "比熊毛多久修剪一次" },
      { newsTiele: "比熊可以吃西红柿吗" },
      { newsTiele: "小比熊一天吃多少狗粮" },
    ],
    konwledge: {
      name: "贵宾犬",
      nikeName: "泰迪犬",
      tiXing: "小型犬",
      city: "欧洲",
      weight: "4-8公斤",
      height: "22-38厘米",
      life: "12-15年",
      rump: "短尾",
      ear: "短耳",
      eye: "棕色",
      hairColor: "棕色 白色",
      HairLength: "短毛",
      function: "伴侣犬",
    },
    character: {
      introduce:
        "贵宾犬，别名：贵妇犬、卷毛狗，泰迪犬是贵宾犬的 “泰迪装 ”，因为这个狗狗造型受到了许多人的喜爱，成为了一种美容潮流，所以将美容成“泰迪装 ”的贵宾犬称之为“泰迪犬”。它智商很高，在犬里排名第二，寿命一般为10-15年。| 贵宾犬属于非常聪明且喜欢狩猎的犬种，该犬目前非常普遍，很多人都喜欢养它们。该犬才艺很多，行为举止有着高贵的气质。它活泼，性情优良，极易近人，是一种忠实的犬种。| 贵宾犬分为标准型，迷你型，玩具犬三种，外貌区别不大，只是体型的大小不同。",
      history:
        "贵宾犬的产地目前还存在争议，虽然很多人认为贵宾犬原产于法国，并且它一直作为法国的国犬，但德国、前苏联、意大利等国也认为有些品种的贵宾犬产于他们的国家，如白毛品种以法国居多，棕毛品种多产于德国，黑毛品种以前苏联为多，茶褐色品种则以意大利为多。因此有些史学家觉得在贵宾犬的发展历史中，德国、前苏联、法国等这几个国家的推动也必不可少 。但可以确定的是贵宾犬起源于欧洲，擅长水中捕猎而命名，是非常聪明敏捷的一类犬。 | 贵宾犬在路易14～路易16时期的法国宫廷是作为法国皇家女士的特别宠爱的犬种。在17世纪的一些绘画作品中，则有迷你贵宾犬和玩具贵宾犬的身影。在19世纪后期，贵宾被首次引入美国，但当时人们并没有特别关注它们，直到二次大战结束后，才在当地才开始流行起来，一直流行至今。而如今在我们中国，它已形成了庞大的伴侣型宠物品种群。",
      suitable:
        "贵宾犬最适合城市中的家庭，因为贵宾犬的美容需求在城市地区会更加方便，它活泼、友善、对主人忠诚的性格和特点非常适合作为宠物犬来饲养，是现代家庭生活中优秀的伴侣。",
      Common: [
        {
          name: "心脏病",
          desc: "狗心脏病多与肥胖和年老有关。狗患心脏病时，主要表现为疲劳、气短等症状。狗的心脏病很难发现，主人注意到的时候，狗病得很重。",
        },
        {
          name: "传染病",
          desc: "犬瘟热和犬细小是犬常见的恶性传染病，致死率高。没有及时接种疫苗的狗很容易得这两种传染病。一旦他们生病，就会出现精神萎靡、食欲不振、体温升高、呕吐和腹泻等症状。",
        },
        {
          name: "肾病",
          desc: "说到狗狗常见的疾病和症状，不得不提肾病。狗肾病的可怕在于疾病的无意识过程。主人发现后，狗肾细胞的损伤往往超过75%。狗出现问题时，症状通常是血尿、尿色异常、排尿习惯改变等。",
        },
        {
          name: "寄生虫 ",
          desc: "肠虫如蛔虫、钩虫以及心虫是犬体内常见的寄生虫。犬感染胃肠寄生虫时，主要症状为消瘦、精神萎靡、腹泻、虫粪、牙龈粘膜苍白等。心虫是一种寄生在狗心脏的寄生虫，狗感染后会出现生命力差、咳嗽、贫血、哮喘、腹水等症状。",
        },
        {
          name: "犬肺炎",
          desc: "肺炎也是犬的常见病，但犬肺炎是其他疾病的并发症，常发生于上呼吸道系统异常、细菌感染、犬瘟热感染、病毒性感冒、肺功能受损、心丝虫感染的犬。咳嗽、鼻塞、体温升高是犬肺炎的主要症状。",
        },
      ],
    },
    about: [
      { name: "粘人程度", num: 3.5 },
      { name: "喜叫程度", num: 3.5 },
      { name: "掉毛程度", num: 3.5 },
      { name: "体位程度", num: 3.5 },
      { name: "美容程度", num: 3.5 },
      { name: "友善程度", num: 3.5 },
      { name: "面对生人", num: 3.5 },
      { name: "面对动物", num: 3.5 },
      { name: "运动量", num: 3.5 },
      { name: "可训练性", num: 3.5 },
      { name: "口水程度", num: 3.5 },
      { name: "耐寒程度", num: 3.5 },
      { name: "耐热程度", num: 3.5 },
      { name: "城市适应度", num: 3.5 },
      { name: "聪明度", num: 4 },
      { name: "忠诚度", num: 4 },
      { name: "颜值", num: 5 },
      { name: "受欢迎度", num: 5 },
      { name: "知名度", num: 4 },
      { name: "干净程度", num: 4 },
      { name: "价格高低", num: 5 },
      { name: "嗅觉", num: 4 },
      { name: "凶悍", num: 2 },
    ],
    friends: [
      {
        name: "斗牛獒犬",
        imaSrc:
          "https://img.chongso.com/20220614/0bfc2a35e1056a26420bd6d7b71b3e67.jpg",
      },
      {
        name: "斗牛獒犬",
        imaSrc:
          "https://img.chongso.com/20220614/0bfc2a35e1056a26420bd6d7b71b3e67.jpg",
      },
      {
        name: "斗牛獒犬",
        imaSrc:
          "https://img.chongso.com/20220614/0bfc2a35e1056a26420bd6d7b71b3e67.jpg",
      },
      {
        name: "斗牛獒犬",
        imaSrc:
          "https://img.chongso.com/20220614/0bfc2a35e1056a26420bd6d7b71b3e67.jpg",
      },
      {
        name: "斗牛獒犬",
        imaSrc:
          "https://img.chongso.com/20220614/0bfc2a35e1056a26420bd6d7b71b3e67.jpg",
      },
    ],
  },
  {
    name: "博美",
    titleImage:
      "https://img.chongso.com/20220519/15f9e2c2f55d054b39ffe89bbf884a89.jpg",
    pirce: "1000-3000",
    picture1:
      "https://img.chongso.com/20220623/b3bac7934604b957dd7935f957f2e93d.jpg",
    picture2:
      "https://img.chongso.com/20220623/026d7ff7e6b338c8689e537602ac3d84.jpg",
    picture3:
      "https://img.chongso.com/20220623/dc529f57e0ed0b84c2c7d7c01986d67f.jpg",
    newActives: [
      { newsTiele: "博美不喜欢主人的表现是什么" },
      { newsTiele: "博美可以吃哈密瓜吗?" },
      { newsTiele: "博美来月经要几天干净" },
      { newsTiele: "比熊和博美哪个聪明" },
      { newsTiele: "博美几个月可以洗澡" },
      { newsTiele: "博美正常体重多少" },
      { newsTiele: "博美去泪痕什么最管用" },
      { newsTiele: "养博美的十大坏处" },
      { newsTiele: "博美毛发黄是什么原因" },
      { newsTiele: "博美能吃板栗吗" },
      { newsTiele: "博美聪明排第几" },
      { newsTiele: "比熊宝宝几天睁眼" },
      { newsTiele: "博美喜欢被主人抱着吗" },
      { newsTiele: "博美可以喝纯牛奶吗" },
      { newsTiele: "公博美起什么名字好听" },
      { newsTiele: "博美凶吗" },
      { newsTiele: "博美一次能生多少个崽" },
    ],
    konwledge: {
      name: "贵宾犬",
      nikeName: "泰迪犬",
      tiXing: "小型犬",
      city: "欧洲",
      weight: "4-8公斤",
      height: "22-38厘米",
      life: "12-15年",
      rump: "短尾",
      ear: "短耳",
      eye: "棕色",
      hairColor: "棕色 白色",
      HairLength: "短毛",
      function: "伴侣犬",
    },
    character: {
      introduce:
        "贵宾犬，别名：贵妇犬、卷毛狗，泰迪犬是贵宾犬的 “泰迪装 ”，因为这个狗狗造型受到了许多人的喜爱，成为了一种美容潮流，所以将美容成“泰迪装 ”的贵宾犬称之为“泰迪犬”。它智商很高，在犬里排名第二，寿命一般为10-15年。| 贵宾犬属于非常聪明且喜欢狩猎的犬种，该犬目前非常普遍，很多人都喜欢养它们。该犬才艺很多，行为举止有着高贵的气质。它活泼，性情优良，极易近人，是一种忠实的犬种。| 贵宾犬分为标准型，迷你型，玩具犬三种，外貌区别不大，只是体型的大小不同。",
      history:
        "贵宾犬的产地目前还存在争议，虽然很多人认为贵宾犬原产于法国，并且它一直作为法国的国犬，但德国、前苏联、意大利等国也认为有些品种的贵宾犬产于他们的国家，如白毛品种以法国居多，棕毛品种多产于德国，黑毛品种以前苏联为多，茶褐色品种则以意大利为多。因此有些史学家觉得在贵宾犬的发展历史中，德国、前苏联、法国等这几个国家的推动也必不可少 。但可以确定的是贵宾犬起源于欧洲，擅长水中捕猎而命名，是非常聪明敏捷的一类犬。 | 贵宾犬在路易14～路易16时期的法国宫廷是作为法国皇家女士的特别宠爱的犬种。在17世纪的一些绘画作品中，则有迷你贵宾犬和玩具贵宾犬的身影。在19世纪后期，贵宾被首次引入美国，但当时人们并没有特别关注它们，直到二次大战结束后，才在当地才开始流行起来，一直流行至今。而如今在我们中国，它已形成了庞大的伴侣型宠物品种群。",
      suitable:
        "贵宾犬最适合城市中的家庭，因为贵宾犬的美容需求在城市地区会更加方便，它活泼、友善、对主人忠诚的性格和特点非常适合作为宠物犬来饲养，是现代家庭生活中优秀的伴侣。",
      Common: [
        {
          name: "心脏病",
          desc: "狗心脏病多与肥胖和年老有关。狗患心脏病时，主要表现为疲劳、气短等症状。狗的心脏病很难发现，主人注意到的时候，狗病得很重。",
        },
        {
          name: "传染病",
          desc: "犬瘟热和犬细小是犬常见的恶性传染病，致死率高。没有及时接种疫苗的狗很容易得这两种传染病。一旦他们生病，就会出现精神萎靡、食欲不振、体温升高、呕吐和腹泻等症状。",
        },
        {
          name: "肾病",
          desc: "说到狗狗常见的疾病和症状，不得不提肾病。狗肾病的可怕在于疾病的无意识过程。主人发现后，狗肾细胞的损伤往往超过75%。狗出现问题时，症状通常是血尿、尿色异常、排尿习惯改变等。",
        },
        {
          name: "寄生虫 ",
          desc: "肠虫如蛔虫、钩虫以及心虫是犬体内常见的寄生虫。犬感染胃肠寄生虫时，主要症状为消瘦、精神萎靡、腹泻、虫粪、牙龈粘膜苍白等。心虫是一种寄生在狗心脏的寄生虫，狗感染后会出现生命力差、咳嗽、贫血、哮喘、腹水等症状。",
        },
        {
          name: "犬肺炎",
          desc: "肺炎也是犬的常见病，但犬肺炎是其他疾病的并发症，常发生于上呼吸道系统异常、细菌感染、犬瘟热感染、病毒性感冒、肺功能受损、心丝虫感染的犬。咳嗽、鼻塞、体温升高是犬肺炎的主要症状。",
        },
      ],
    },
    about: [
      { name: "粘人程度", num: 3.5 },
      { name: "喜叫程度", num: 3.5 },
      { name: "掉毛程度", num: 3.5 },
      { name: "体位程度", num: 3.5 },
      { name: "美容程度", num: 3.5 },
      { name: "友善程度", num: 3.5 },
      { name: "面对生人", num: 3.5 },
      { name: "面对动物", num: 3.5 },
      { name: "运动量", num: 3.5 },
      { name: "可训练性", num: 3.5 },
      { name: "口水程度", num: 3.5 },
      { name: "耐寒程度", num: 3.5 },
      { name: "耐热程度", num: 3.5 },
      { name: "城市适应度", num: 3.5 },
      { name: "聪明度", num: 4 },
      { name: "忠诚度", num: 4 },
      { name: "颜值", num: 5 },
      { name: "受欢迎度", num: 5 },
      { name: "知名度", num: 4 },
      { name: "干净程度", num: 4 },
      { name: "价格高低", num: 5 },
      { name: "嗅觉", num: 4 },
      { name: "凶悍", num: 2 },
    ],
    friends: [
      {
        name: "斗牛獒犬",
        imaSrc:
          "https://img.chongso.com/20220614/0bfc2a35e1056a26420bd6d7b71b3e67.jpg",
      },
      {
        name: "斗牛獒犬",
        imaSrc:
          "https://img.chongso.com/20220614/0bfc2a35e1056a26420bd6d7b71b3e67.jpg",
      },
      {
        name: "斗牛獒犬",
        imaSrc:
          "https://img.chongso.com/20220614/0bfc2a35e1056a26420bd6d7b71b3e67.jpg",
      },
      {
        name: "斗牛獒犬",
        imaSrc:
          "https://img.chongso.com/20220614/0bfc2a35e1056a26420bd6d7b71b3e67.jpg",
      },
      {
        name: "斗牛獒犬",
        imaSrc:
          "https://img.chongso.com/20220614/0bfc2a35e1056a26420bd6d7b71b3e67.jpg",
      },
    ],
  },
  {
    name: "雪纳瑞",
    titleImage:
      "https://img.chongso.com/20220519/f6b517deba1c39059a206a237dbe5b05.jpg",
    pirce: "1000-3000",
    picture1:
      "https://img.chongso.com/20220517/824a015d6f4ead2185521a8c092530d8.jpg",
    picture2:
      "https://img.chongso.com/20220624/7a623def59ed62f6f4b63070a6efa308.jpg",
    picture3:
      "https://img.chongso.com/20220624/164b03699ff0a266f2cc173da6c7f043.jpg",
    newActives: [
      { newsTiele: "雪纳瑞聪明吗" },
      { newsTiele: "雪纳瑞多大成年?" },
      { newsTiele: "小老头狗是什么品种" },
      { newsTiele: "让雪纳瑞犬抵抗食物过敏的方法" },
      { newsTiele: "雪纳瑞幼犬喂养注意事项" },
      { newsTiele: "雪纳瑞定点大小便训练方法" },
      { newsTiele: "雪纳瑞皮肤病治疗预防方法" },
      { newsTiele: "雪纳瑞肠胃炎的原因症状和治疗预防" },
      { newsTiele: "雪纳瑞耳螨怎么治疗？" },
      { newsTiele: "雪纳瑞弃养率高的原因" },
      { newsTiele: "雪纳瑞几个月长得最快" },
      { newsTiele: "引起雪纳瑞皮肤病的原因" },
      { newsTiele: "治疗雪纳瑞犬的风湿病" },
      { newsTiele: "雪纳瑞怀孕后的注意事项" },
      { newsTiele: "雪纳瑞发烧症状及治疗方法" },
      { newsTiele: "迷你雪纳瑞呕吐的原因和治疗方法" },
      { newsTiele: "雪纳瑞怀孕有什么症状  " },
    ],
    konwledge: {
      name: "贵宾犬",
      nikeName: "泰迪犬",
      tiXing: "小型犬",
      city: "欧洲",
      weight: "4-8公斤",
      height: "22-38厘米",
      life: "12-15年",
      rump: "短尾",
      ear: "短耳",
      eye: "棕色",
      hairColor: "棕色 白色",
      HairLength: "短毛",
      function: "伴侣犬",
    },
    character: {
      introduce:
        "贵宾犬，别名：贵妇犬、卷毛狗，泰迪犬是贵宾犬的 “泰迪装 ”，因为这个狗狗造型受到了许多人的喜爱，成为了一种美容潮流，所以将美容成“泰迪装 ”的贵宾犬称之为“泰迪犬”。它智商很高，在犬里排名第二，寿命一般为10-15年。| 贵宾犬属于非常聪明且喜欢狩猎的犬种，该犬目前非常普遍，很多人都喜欢养它们。该犬才艺很多，行为举止有着高贵的气质。它活泼，性情优良，极易近人，是一种忠实的犬种。| 贵宾犬分为标准型，迷你型，玩具犬三种，外貌区别不大，只是体型的大小不同。",
      history:
        "贵宾犬的产地目前还存在争议，虽然很多人认为贵宾犬原产于法国，并且它一直作为法国的国犬，但德国、前苏联、意大利等国也认为有些品种的贵宾犬产于他们的国家，如白毛品种以法国居多，棕毛品种多产于德国，黑毛品种以前苏联为多，茶褐色品种则以意大利为多。因此有些史学家觉得在贵宾犬的发展历史中，德国、前苏联、法国等这几个国家的推动也必不可少 。但可以确定的是贵宾犬起源于欧洲，擅长水中捕猎而命名，是非常聪明敏捷的一类犬。 | 贵宾犬在路易14～路易16时期的法国宫廷是作为法国皇家女士的特别宠爱的犬种。在17世纪的一些绘画作品中，则有迷你贵宾犬和玩具贵宾犬的身影。在19世纪后期，贵宾被首次引入美国，但当时人们并没有特别关注它们，直到二次大战结束后，才在当地才开始流行起来，一直流行至今。而如今在我们中国，它已形成了庞大的伴侣型宠物品种群。",
      suitable:
        "贵宾犬最适合城市中的家庭，因为贵宾犬的美容需求在城市地区会更加方便，它活泼、友善、对主人忠诚的性格和特点非常适合作为宠物犬来饲养，是现代家庭生活中优秀的伴侣。",
      Common: [
        {
          name: "心脏病",
          desc: "狗心脏病多与肥胖和年老有关。狗患心脏病时，主要表现为疲劳、气短等症状。狗的心脏病很难发现，主人注意到的时候，狗病得很重。",
        },
        {
          name: "传染病",
          desc: "犬瘟热和犬细小是犬常见的恶性传染病，致死率高。没有及时接种疫苗的狗很容易得这两种传染病。一旦他们生病，就会出现精神萎靡、食欲不振、体温升高、呕吐和腹泻等症状。",
        },
        {
          name: "肾病",
          desc: "说到狗狗常见的疾病和症状，不得不提肾病。狗肾病的可怕在于疾病的无意识过程。主人发现后，狗肾细胞的损伤往往超过75%。狗出现问题时，症状通常是血尿、尿色异常、排尿习惯改变等。",
        },
        {
          name: "寄生虫 ",
          desc: "肠虫如蛔虫、钩虫以及心虫是犬体内常见的寄生虫。犬感染胃肠寄生虫时，主要症状为消瘦、精神萎靡、腹泻、虫粪、牙龈粘膜苍白等。心虫是一种寄生在狗心脏的寄生虫，狗感染后会出现生命力差、咳嗽、贫血、哮喘、腹水等症状。",
        },
        {
          name: "犬肺炎",
          desc: "肺炎也是犬的常见病，但犬肺炎是其他疾病的并发症，常发生于上呼吸道系统异常、细菌感染、犬瘟热感染、病毒性感冒、肺功能受损、心丝虫感染的犬。咳嗽、鼻塞、体温升高是犬肺炎的主要症状。",
        },
      ],
    },
    about: [
      { name: "粘人程度", num: 3.5 },
      { name: "喜叫程度", num: 3.5 },
      { name: "掉毛程度", num: 3.5 },
      { name: "体位程度", num: 3.5 },
      { name: "美容程度", num: 3.5 },
      { name: "友善程度", num: 3.5 },
      { name: "面对生人", num: 3.5 },
      { name: "面对动物", num: 3.5 },
      { name: "运动量", num: 3.5 },
      { name: "可训练性", num: 3.5 },
      { name: "口水程度", num: 3.5 },
      { name: "耐寒程度", num: 3.5 },
      { name: "耐热程度", num: 3.5 },
      { name: "城市适应度", num: 3.5 },
      { name: "聪明度", num: 4 },
      { name: "忠诚度", num: 4 },
      { name: "颜值", num: 5 },
      { name: "受欢迎度", num: 5 },
      { name: "知名度", num: 4 },
      { name: "干净程度", num: 4 },
      { name: "价格高低", num: 5 },
      { name: "嗅觉", num: 4 },
      { name: "凶悍", num: 2 },
    ],
    friends: [
      {
        name: "斗牛獒犬",
        imaSrc:
          "https://img.chongso.com/20220614/0bfc2a35e1056a26420bd6d7b71b3e67.jpg",
      },
      {
        name: "斗牛獒犬",
        imaSrc:
          "https://img.chongso.com/20220614/0bfc2a35e1056a26420bd6d7b71b3e67.jpg",
      },
      {
        name: "斗牛獒犬",
        imaSrc:
          "https://img.chongso.com/20220614/0bfc2a35e1056a26420bd6d7b71b3e67.jpg",
      },
      {
        name: "斗牛獒犬",
        imaSrc:
          "https://img.chongso.com/20220614/0bfc2a35e1056a26420bd6d7b71b3e67.jpg",
      },
      {
        name: "斗牛獒犬",
        imaSrc:
          "https://img.chongso.com/20220614/0bfc2a35e1056a26420bd6d7b71b3e67.jpg",
      },
    ],
  },
];
