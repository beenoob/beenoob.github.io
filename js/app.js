// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ],
       productlists: [
           {
               id: '1',
               title: '蓝光水岸公园',
               img:'image/f1.jpg',
               description: '蓝光集团公园系高端改善住宅代表作，三号线沿线龙洲湾商圈花溪半岛宜居生态居住区；项目位于龙洲湾板块，占地79亩，五大公园环抱，位于花溪河畔，建筑面积约28万方，项目沿花溪河蜿蜒而生，享有丰富的自然景观资源，呈半岛状屹立在五大公园旁（巴文化公园、大山村公园、高尔夫体育公园、滨河公园、规划公园），享受公园生活带来的宁静和温馨。'
           },
           {
               id: '2',
               title: '十八个集团军铁血源流',
               img:'image/f2.jpg',
               description: '2013年1月15日，中央电视台新闻频道在一则报道中，首次使用了39集团军番号。当晚，后续消息发布：“我军陆军集团军番号今起解密。”这些番号起用于国共内战后期。到1949年10月1日新中国成立时，解放军已出现61个步兵军的番号。建国以来历次精简整编，到2003年，我军集团军的数量保留为18个。这18支部队善于打恶仗、硬仗、险仗，也经历了数不清的胜仗，造就了无数耀眼的将星和英雄，他们都是人民解放军的王牌军。'
           },
           {
               id: '3',
               img:'image/f3.jpg',
               title: '中国议会政党制之死',
               description: '宋教仁的民主宪政的试验，即便从1911年10月10日武昌起义开始算，到宋教仁被刺，也不到一年半时间。所以，他的生命和他的试验，都像是天上的流星，光芒耀眼而时间短暂。他是一位孤独的先驱者。但是，他的生命和他的试验仍有巨大的意义：没有先驱者，就永远不会有后来者。'
           },
		   {
               id: '4',
               img:'image/f4.jpg',
               title: '铁幕拉开 多疑讳医 领袖之死 苏共交班',
               description: '就个人而言，斯大林是个悲剧性人物，到晚年则成了孤家寡人。斯大林是其笔名（确切说是笔姓），意为“钢铁”，斯大林确实像钢铁一样，既有坚强的意志，又冷冰冰的缺少温情'
           },
		   {
               id: '5',
               img:'image/f5.jpg',
               title: '因奢靡而衰败的王朝',
               description: '奢靡亡国，这是一个在先帝遗训、名臣奏议、儒者教化中被谆谆善诱、苦口婆心讲了几千年的大道理，前车之鉴历历在目，惨痛的案例加厚着史书，背上骂名的帝王将相也扩充着阵容，但道德感召显然难以遏制权贵们的欲望，中国历史总也走不出一治一乱的怪圈。在花样翻新、光怪陆离的浮华背后，更值得警惕的是这一切的源头——不受制约的权力'
           },
		   {
               id: '6',
               img:'image/f6.jpg',
               title: '反贪污 反浪费 反官僚主义 六十年前的“三反”运动',
               description: '最近的一些官方说法，让人很有熟悉感，像“反对形式主义、官僚主义、享乐主义和奢靡之风”、打“苍蝇”和打“老虎”、“照镜子、正衣冠、洗洗澡、治治病”，包括开展为期一年的群众路线教育实践活动，都极易让人联想到上世纪50年代初的“三反”运动。这种时候，回顾一下“三反”运动的历史经验，似乎变得也有必要了。共高层的多次讲话，吹响了反腐的集结号，似乎是想把反腐作为突破口，来提高政府的公信力和民意认同。“八项规定”、“六项禁令”出台后，表面上遏制不少公款消费，有些高档酒店生意一落千丈。媒体爆料，官员奢侈消费常搞得像“地下活动”，除到一些隐秘会所消费外，有遮挡或拆卸车牌的，有将一张发票分开数张的，有用矿泉水或二锅头瓶装茅台酒的。明目张胆的大吃大喝少了，暗渡陈仓的地下腐败多了起来。'
           },
		   {
               id: '7',
               img:'image/f7.jpg',
               title: '修宪幕后 日本“冷兵器时代”困局',
               description: '1945年，占领日本的盟军对原日军的各种军事装备进行了颇为彻底的销毁，整个日本成功地回到了冷兵器时代。在驻日盟军总司令麦克阿瑟主导下，重新制定的《日本国宪法》让这个二战策源地放弃了发动战争的权利。'
           },
		   {
               id: '8',
               img:'image/f1.jpg',
               title: '京剧在政治夹缝中突围',
               description: '在政治的夹缝中，京剧的突围之路在哪里？人们为此争吵、斗争、拨款、试错、反复。回首往昔，答案或许就在一路走过的脚印里。'
           },
		   {
               id: '9',
               img:'image/f1.jpg',
               title: ' 朝鲜半岛停战日 1953年的中国与世界',
               description: '1953年7月26日，历时两年之久的朝鲜停战谈判完全达成协议。27日，中方代表团首席代表和“联合国军”方面谈判代表团首席代表在板门店正式签署停战协定。中国以牺牲18万人、花费62亿元直接战费为代价，打出了一个世界强国地位，但也延缓了统一台湾的进程。战争让朝鲜半岛分裂成定局，却让日本因祸得福，在战争期间利用生产军需品大发其财，迅速恢复了在二战中崩溃了的经济，成为世界经济强国。战争使苏联得以坐大，以输入武器的微小成本使得中美长期对抗。另一方面，美国的国防军费开支在战后增加三倍，西方阵营也开始团结对抗苏联，在遏制苏联的同时，美国加紧了围堵中国的策略。朝鲜战争无论从范围、兵力，时间上而言，都是一场局部和有限战争，虽已过去60年，世界格局依然受其影响，并仍将延续。'
           },
		   {
               id: '10',
               img:'image/f1.jpg',
               title: '正在消失的老广州',
               description: '一个民族要想登上伟大的神坛，必须学会尊重历史。历史在哪里？历史其实无处不在。在你我生活的城市里，每一幢由逝去时代留下的老建筑都是一页触手可及的活的史书，接通历史与现在。'
           },
		   {
               id: '11',
               img:'image/f1.jpg',
               title: ' 精忠岳飞：一个悲剧的诞生',
               description: '“莫须有”悲剧如何诞生？千古之下，人们在嗟叹之余，发现诸如干涉立储、犯上抗命、反对议和、坐拥重兵这些理由似乎没有一条能单独证明“岳飞必须死”这一结论。在冤案存在多处疑点、历史细节已经不可能还原的情况下，多重因素的合力作用成了人们能够接受的唯一解释。然而，中国历史上军事强人和皇权之间的张力拉扯已久，双方经常闹得你死我活，像郭子仪这样立下“再造唐室”之功却善终的例子少之又少，再加上赵宋王朝对武将一以贯之的猜忌防范，岳飞的悲剧偶然中孕育着必然，并且还将在此后的帝制时代多次上演⋯⋯'
           },
		   {
               id: '12',
               img:'image/f1.jpg',
               title: '“严打”三十年 乱世？用重典？',
               description: '“王者之政莫急于盗贼”，自古以来，每遇“乱世”，多有“重典”相随，以达到“以刑去刑，以杀止杀”的目的。上世纪80年代以来，在砸烂公检法的“十年动乱”烂摊子上实行的改革开放将中国人导入了新的精神风暴中。强奸、流氓、抢劫、盗窃等民愤极大的恶性犯罪激增，威胁着政府的民意基础。在中央的指挥下，所有的司法资源被集中起来，公检法联合行动，用一记暴风骤雨式的连环拳将犯罪的火苗打成灰烬。“严打”自此蔚然成型，成为中国的长期刑事政策，三十年来每当犯罪再起，必有“严打”行动灭火。但是“重典”之下，“严打”的宏大叙事到底为正义与公平留下了多少遗产与遗憾，需要我们扪心自问。'
           },
		   {
               id: '13',
               img:'image/f1.jpg',
               title: '从江湖到庙堂 盅惑当权者的“大师”',
               description: '当王林大师的江湖骗术被揭穿后，“大师”这个久违了的名词，再次热起来。大师们的把戏其实很简单，他们先把魔术用谎言包装成令人称奇的法术，取得几位官员、商人、戏子们追捧，再用名人的力量搭建起一个沟通各色人等的场域。'
           },
		   {
               id: '14',
               img:'image/f1.jpg',
               title: '我们的户口与命运',
               description: '从1950年代起，中国建立起计划经济体制。以统购统销政策为起点，从经济上把农民固定在农村。之后，又辅助以严格的户籍管理，在制度上限制人口自由流动。从此，中国逐步形成了城乡二元社会。'
           },
       ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});
var catalogView = app.views.create('#view-catalog', {
  url: '/catalog/'
});

var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});
var listView = app.views.create('#view-lists', {
  url: '/lists/'
});
// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});
function get_json() {
    Framework7.request.get('http://127.0.0.1/ajax', function (data) {
        console.log(data);
        return data;
    });
}

