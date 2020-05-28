import {urlRequest} from "../../request/index.js"
//Page Object
Page({
  data: {
    navList: [
      { 
        id: 1,
        src: "../../icons/index-nav/java.png",
        nav_url: "",
        header: "Java",
        context: "Java是一种广泛使用的计算机编程语言，拥有跨平台、面向对象、泛型编程的特性，广泛应用于企业级Web应用开发和移动应用开发。Spring框架是 Java 平台的一个开源的全栈（Full-stack）应用程序框架和控制反转容器实现，一般被直接称为 Spring。",
      },
      {
        id: 2,
        src: "../../icons/index-nav/html.png",
        nav_url: "",
        header: "HTML",
        context:
          "HTML是一种用于创建网页的标准标记语言。HTML是一种基础技术，常与CSS、JavaScript一起被众多网站用于设计网页、网页应用程序以及移动应用程序的用户界面.",
      },
      {
        id: 3,
        src: "../../icons/index-nav/javascript.png",
        nav_url: "",
        header: "JS",
        context: "JavaScript（通常缩写为JS）是一种高级的、解释型的编程语言。JavaScript是一门基于原型、函数先行的语言，是一门多范式的语言，它支持面向对象编程，命令式编程，以及函数式编程。常用库/框架：React.js, Vue.js, AngularJS, Express.js, Node.js",
      },
      {
        id: 4,
        src: "../../icons/index-nav/interview.png",
        nav_url: "",
        header: "面经",
        context: "网上笔试，自我介绍，基础知识，算法结构，HR面试",
      },
      {
        id: 5,
        src: "../../icons/index-nav/Algorithm.png",
        nav_url: "",
        header: "算法",
        context: "数组、链表、字符串、二叉树和重要算法（如排序算法）的编程面试，考察是否有一个合理的思考路径",
      },
      {
        id: 6,
        src: "../../icons/index-nav/other.png",
        nav_url: "",
        header: "其他",
        context: "薪资结构，职场动向，公司讯息等等",
      },
    ],
    mainPageList: [
      {
        id: 1,
        src:
          "https://cdn.pixabay.com/photo/2020/04/21/02/32/buildings-5070537_1280.jpg",
        nav_url: "",
      },
      {
        id: 2,
        src:
          "https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/computer_programming.jpg?itok=OCZ8-RO-",
        nav_url: "",
      },
      {
        id: 3,
        src: "https://cw1.tw/CW/images/blog/C1493265965926.jpg",
        nav_url: "",
      },
    ],
  },
  //options(Object)
  onLoad: function (options) {},
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {},
  onPageScroll: function () {},
  //item(index,pagePath,text)
  onTabItemTap: function (item) {},
});