const categories = [
    {
      id: 'demo',
      name: 'Demo',
      tags: '其他',
      image: require('../assets/icons/iconNA.png'),
      list: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    },
    {
      id: 'bb0',
      name: '圣经 lv0',
      tags: '圣经',
      image: require('../assets/icons/iconN0.png'),
      list: ['新约', '使徒', '先知', '慕道友', '福音', '受洗', '团契', '撒旦', '埃及', '圣灵']
    },
    {
      id: 'music0',
      name: '音乐 lv0',
      tags: '音乐',
      image: require('../assets/icons/iconYP1.png'),
      list: ['青花瓷', '心太软', '十年', '后来', '海阔天空', '红豆', '潇洒走一回', '天天想你', '一无所有', '外婆的澎湖湾']
    },
    {
      id: '80&900',
      name: '80&90 lv0',
      tags: '80&90',
      image: require('../assets/icons/iconSG0.png'),
      list: ['一休', '卖报歌', '哇哈哈', '一分钱', '粉刷匠', '丢手绢', '拔河', '种太阳', '摔炮', '溜溜球']
    },
    {
      id: 'brand0',
      name: '品牌 lv0',
      tags: '品牌',
      image: require('../assets/icons/iconPP0.png'),
      list: ['香奈儿', '方太', '人头马', '长虹', '格力', '蓝月亮', '徐福记', '蒙牛', '大宝', '天猫']
    },
    {
      id: 'chengyu0',
      name: '成语 lv0',
      tags: '其他',
      image: require('../assets/icons/iconYR5.png'),
      list: ['十全十美', '娓娓而谈', '爱国如家', '阿猫阿狗', '百娇千媚', '北斗之尊', '卧薪尝胆', '鞭长不及', '冰冻三尺', '不拔一毛']
    },
    {
      id: 'bb1',
      name: '圣经 lv1',
      tags: '圣经',
      image: require('../assets/icons/iconN1.png'),
      list: ['夏娃', '献祭', '诗篇', '审判', '主日学', '认罪', '天堂', '圣餐', '十诫', '复活节']
    },
    {
      id: 'music1',
      name: '音乐 lv1',
      tags: '音乐',
      image: require('../assets/icons/iconYP2.png'),
      list: ['快乐老家', '男儿当自强', '不了情', '千年等一回', '铁血丹心', '忘情水', '橄榄树 ', '同桌的你', '情人', '天堂']
    },
    {
      id: '80&901',
      name: '80&90 lv1',
      tags: '80&90',
      image: require('../assets/icons/iconSG1.png'),
      list: ['老鹰捉小鸡', '击鼓传花', '打地鼠', '大风车', '猫和老鼠', '亲亲虾条', '小兔子乖乖', '雪绒花', '贪食蛇', '干脆面']
    },
    {
      id: 'brand1',
      name: '品牌 lv1',
      tags: '品牌',
      image: require('../assets/icons/iconPP1.png'),
      list: ['网易', '范思哲', 'Supreme', '雀巢', '美的', '星巴克', '汉堡王', '苏泊尔', '小天鹅', '爱国者']
    },
    {
      id: 'chengyu1',
      name: '成语 lv1',
      tags: '其他',
      image: require('../assets/icons/iconYR1.png'),
      list: ['不惑之年', '舞文弄墨', '博古识今', '必权量力', '叹为观止', '细大不捐', '一挥而就', '天壤之别', '不了了之', '老气横秋']
    },
    {
      id: 'bb2',
      name: '圣经 lv2',
      tags: '圣经',
      image: require('../assets/icons/iconN2.png'),
      list: ['天主教', '决志', '偶像', '大马士革', '箴言', '犹大', '宣教', '亚当', '牧师', '红海']
    },
    {
      id: 'music2',
      name: '音乐 lv2',
      tags: '音乐',
      image: require('../assets/icons/iconYP3.png'),
      list: ['水手', '女人花', '独角戏', '暧昧', '我的中国心', '红日', '屋顶', '花心', '大地', '懂你']
    },
    {
      id: '80&902',
      name: '80&90 lv2',
      tags: '80&90',
      image: require('../assets/icons/iconSG2.png'),
      list: ['知心爱人', '纤夫的爱', '你拍一我拍一', '大富翁', '喔喔奶糖', '浪味仙', '人脸雪糕', '海底两万里', '小小少年', '水管工']
    },
    {
      id: 'brand2',
      name: '品牌 lv2',
      tags: '品牌',
      image: require('../assets/icons/iconPP2.png'),
      list: ['松下', '佐丹奴', '海天', '三鹿', '柯达', '波司登', '匹克', '轩尼诗', '沙宣', '沫沫']
    },
    {
      id: 'chengyu2',
      name: '成语 lv2',
      tags: '其他',
      image: require('../assets/icons/iconYR2.png'),
      list: ['孤陋寡闻', '越俎代庖', '如花似锦', '独辟蹊径', '闻过则喜', '气象万千', '杯弓蛇影', '明日黄花', '见贤思齐', '弹冠相庆']
    },
    {
      id: 'bb3',
      name: '圣经 lv3',
      tags: '圣经',
      image: require('../assets/icons/iconN3.png'),
      list: ['基督弥撒','谢饭', '永生', '主日敬拜' ,'诺亚方舟', '信心', '被拣选', '地狱之火', '方言', '东正教']
    },
    {
      id: 'music3',
      name: '音乐 lv3',
      tags: '音乐',
      image: require('../assets/icons/iconYP4.png'),
      list: ['精忠报国', '凡人歌', '昨日重现', '为爱痴狂', '雨蝶', '故乡的云', '护花使者', '敢问路在何方', '弯弯的月亮', '一生所爱']
    },
    {
      id: '80&903',
      name: '80&90 lv3',
      tags: '80&90',
      image: require('../assets/icons/iconSG3.png'),
      list: ['三个和尚', '坦克大战', '大海啊故乡', '一群小鸭子', '跳舞毯', '东南西北', '大约在冬季', '大大卷', '星球杯', '香水有毒']
    },
    {
      id: 'brand3',
      name: '品牌 lv3',
      tags: '品牌',
      image: require('../assets/icons/iconPP3.png'),
      list: ['得意电器', '路易威登', '保洁', '歌帝梵', '五菱宏光', '恰恰', '鸿星尔克', '达利园', 'SKII', '古驰']
    },
    {
      id: 'chengyu3',
      name: '成语 lv3',
      tags: '其他',
      image: require('../assets/icons/iconYR3.png'),
      list: ['始作俑者', '粉墨登场', '长命富贵', '讳莫如深', '焚膏继晷', '岁月蹉跎', '鬼斧神工', '暮鼓晨钟', '茹毛饮血', '首鼠两端']
    },
    {
      id: 'bb4',
      name: '圣经 lv4',
      tags: '圣经',
      image: require('../assets/icons/iconN4.png'),
      list: ['耶路撒冷', '无神论', '塔納赫', '亚伯拉罕', '三位一体', '路加', '顺服', '圣保禄', '基训河', '约旦']
    },
    {
      id: 'music4',
      name: '音乐 lv4',
      tags: '音乐',
      image: require('../assets/icons/iconYP5.png'),
      list: ['走四方', '爱情鸟', '三月里的小雨', '亚洲雄风', '赤裸裸', '千千厥歌', ' 一千零一夜', '想你的夜', ' 浪人情歌', '伤心太平洋']
    },
    {
      id: '80&904',
      name: '80&90 lv4',
      tags: '80&90',
      image: require('../assets/icons/iconSG4.png'),
      list: ['辣条', '旭日升冰茶', '小糊涂神', '狮子王', '网球王子', '丁丁历险记', '冷雨夜', '文曲星', '鲁冰花', '芭比娃娃']
    },
    {
      id: 'brand4',
      name: '品牌 lv4',
      tags: '品牌',
      image: require('../assets/icons/iconPP4.png'),
      list: ['费列罗', '芝华士', '布加迪', 'OPPO', '乐高', 'TCL', '雅诗兰黛', '吉列', '白猫', '洲际']
    },
    {
      id: 'chengyu4',
      name: '成语 lv4',
      tags: '其他',
      image: require('../assets/icons/iconYR4.png'),
      list: ['时乖运蹇', '临渊羡鱼', '金科玉律', '荒诞不经', '沸反盈天', '耳提面命', '泥沙俱下', '夙兴夜寐', '条分缕析', '宜嗔宜喜']
    },
    {
      id: 'bb5',
      name: '圣经 lv5',
      tags: '圣经',
      image: require('../assets/icons/iconN5.png'),
      list: ['锡安山', '肢体', '圣爱', '退休会', '约柜', '基督徒犯罪', '三自教会', '撒拉', '交鬼与赶鬼', '利未人']
    },
    {
      id: 'music5',
      name: '音乐 lv5',
      tags: '音乐',
      image: require('../assets/icons/iconYP6.png'),
      list: ['恰似你的温柔', '逆战', '真心英雄', '彩虹', '天空', '千纸鹤', ' 夜来香', '刀剑如梦', '你快回来', '饿狼传说']
    },
    {
      id: '80&905',
      name: '80&90 lv5',
      tags: '80&90',
      image: require('../assets/icons/iconSG5.png'),
      list: ['划拳', '风火轮', '青苹果乐园', '冷酷到底', 'Super Star', '咬手鲨鱼', '锅巴', '铠甲勇士', '光能使者', '流星花园']
    },
    {
      id: 'brand5',
      name: '品牌 lv5',
      tags: '品牌',
      image: require('../assets/icons/iconPP5.png'),
      list: ['万豪', '森海塞尔', 'UGG', '明基', '盼盼', '德芙', '万宝龙', '芬迪', '摩托罗拉', 'ThinkPad']
    },
    {
      id: 'bb6',
      name: '圣经 lv6',
      tags: '圣经',
      image: require('../assets/icons/iconN6.png'),
      list: ['所罗门圣殿', '迦南地', '撒莱', '客西马尼园', '伯利恒', '司提反', '提摩太', '参孙', '玛利亚', '扫罗']
    },
    {
      id: 'music6',
      name: '音乐 lv6',
      tags: '音乐',
      image: require('../assets/icons/iconYP7.png'),
      list: ['你好毒', '漫步人生路', '雾里看花', '双截棍', '爱情三十六计', '新鸳鸯蝴蝶梦', '烛光里的妈妈', '梦回唐朝', '虫儿飞', '时光机']
    },
    {
      id: '80&906',
      name: '80&90 lv6',
      tags: '80&90',
      image: require('../assets/icons/iconSG6.png'),
      list: ['上上签', '天空之城', '淘金者', '写情书', '会考', '旺仔大礼包', '三只小熊', '樱木花道', '我的心太乱', '告老师']
    },
    {
      id: 'brand6',
      name: '品牌 lv6',
      tags: '品牌',
      image: require('../assets/icons/iconPP6.png'),
      list: ['Dior', '花花公子', '屈臣氏', '圣罗兰', '吕', '匡威', '凡客诚品', 'OLAY', 'AO史密斯', '技嘉']
    },
    {
      id: 'bb7',
      name: '圣经 lv7',
      tags: '圣经',
      image: require('../assets/icons/iconN7.png'),
      list: ['摩西经', '大卫王子孙', '但以理', '你当刚强壮胆', '以赛亚书', '拉比', '马丁路德', '使徒信经', '施洗约翰', '葛培理']
    },
    {
      id: 'music7',
      name: '音乐 lv7',
      tags: '音乐',
      image: require('../assets/icons/iconYP8.png'),
      list: ['领悟', '忘记你我做不到', '单身情歌', '窗外', '会痛的石头', '爱的主打歌', '雨一直下', '春泥', '烟花易冷', '千年之恋']
    },
    {
      id: '80&907',
      name: '80&90 lv7',
      tags: '80&90',
      image: require('../assets/icons/iconSG7.png'),
      list: ['打小抄', '寒假作业', 'SARS', '月亮街', '梦一场', '鞠萍姐姐', '追星族', '橡皮泥', '珊瑚海', '翻绳']
    },
    {
      id: 'bb8',
      name: '圣经 lv8',
      tags: '圣经',
      image: require('../assets/icons/iconN8.png'),
      list: ['戴德生', '厄瑪奴耳', '五饼二鱼', '马槽', '登山宝训八福', '闪米特人', '骷髅地十字架', '塔纳赫·约伯记', '守安息日', '玛黑珥']
    },
    {
      id: 'music8',
      name: '音乐 lv8',
      tags: '音乐',
      image: require('../assets/icons/iconYP9.png'),
      list: ['我们的爱', '霸王别姬', '背影', '飙高音', '爷爷泡的茶', '成都', '隔壁泰山', '光年之外', '起风了', '绿光']
    },
    {
      id: '80&908',
      name: '80&90 lv8',
      tags: '80&90',
      image: require('../assets/icons/iconSG8.png'),
      list: ['酱芒果', '波力海苔', '星语心愿', '我为歌狂', '韩流', '土行孙', '黄伯', '武士道', '麋夫人', '蹦迪']
    },
    {
      id: 'music9',
      name: '音乐 lv9',
      tags: '音乐',
      image: require('../assets/icons/iconYP10.png'),
      list: ['触电', '沙漠骆驼', '凉凉', '体面', '追光者', '你要的全拿走', '一笑倾城', '夜的第七章', '九张机', '时间煮雨']
    },
    {
      id: 'musicS',
      name: '音乐 lv max',
      tags: '音乐',
      image: require('../assets/icons/iconYP11.png'),
      list: ['大田后生仔', '都选C', '野狼Disco', '芒种', '病变', '下坠Falling', '雨一直下', '极乐净土', '纸短情长', '佛系少女']
    },
    {
      id: 'liuxing0',
      name: '网络用语 lv0',
      tags: '流行',
      image: require('../assets/icons/iconCY0.png'),
      list: ['脑残粉', '搬运工', '猪队友', '小鲜肉', '吴克', '绿茶婊', '暖男', '网红', '小仙女', '宅男']
    },
    {
      id: 'liuxing1',
      name: '网络用语 lv1',
      tags: '流行',
      image: require('../assets/icons/iconCY1.png'),
      list: ['怪蜀黍', '萌新', '脑洞大开', '剁手党', 'C位', '弃坑', '洗白', '查水表', '放卫星', '敲黑板']
    },
    {
      id: 'liuxing2',
      name: '网络用语 lv2',
      tags: '流行',
      image: require('../assets/icons/iconCY2.png'),
      list: ['修仙', '用爱发电', '壮哉', '毁三观', '洛阳铲', '灌水', '空降', '原谅绿', '硬核', '家里有矿']
    },
    {
      id: 'liuxing3',
      name: '网络用语 lv3',
      tags: '流行',
      image: require('../assets/icons/iconCY3.png'),
      list: ['奔三', '杠精', '海景房', '凉凉', '实锤', '德国骨科', '吓尿', 'PTSD', '真香', '扎心了']
    },
    {
      id: 'liuxing4',
      name: '网络用语 lv4',
      tags: '流行',
      image: require('../assets/icons/iconCY4.png'),
      list: ['老司机', '然并卵', '城会玩', '火箭少女', '骚年', '打扰了', '巨硬', '非死不可', 'AcFun', '金三胖']
    },
    {
      id: 'liuxing5',
      name: '网络用语 lv max',
      tags: '流行',
      image: require('../assets/icons/iconCY5.png'),
      list: ['蓝瘦香菇', '我的发', '慌的一批', '边缘试探', 'skr skr', '求生欲', '草根', '狗带', '确认过眼神', '了解一下']
    },
    {
      id: 'liuxing6',
      name: '旅游 lv0',
      tags: '流行',
      image: require('../assets/icons/iconCY6.png'),
      list: ['美国大峡谷', '大堡礁', '马尔代夫', '夏威夷', '洛基山脉', '拉斯维加斯', '泰姬陵', '玛雅古迹', '尼亚加拉瀑布', '威尼斯']
    },
    {
      id: 'liuxing7',
      name: '旅游 lv1',
      tags: '流行',
      image: require('../assets/icons/iconCY7.png'),
      list: ['艾弗尔铁塔', '印加遗址', '佩特拉城', '好望角', '维多利亚瀑布', '吴哥窟', '里约热内卢', '罗马角斗场', '悉尼歌剧院', '金门大桥']
    },
    {
      id: 'liuxing8',
      name: '旅游 lv2',
      tags: '流行',
      image: require('../assets/icons/iconCY8.png'),
      list: ['金庙', '新西兰南岛', '斯里兰卡', '伊瓜苏瀑布 ', '曼谷卧佛寺', '秦兵马俑', '策马特峰', '天使瀑布', '阿布辛贝神庙', '西西里岛']
    },
  ];
  
  
  
  export {
    categories,
  }