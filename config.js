const clear = [
  /\(看小说.*\)|16977小游戏每天更新好玩的小游戏，等你来发现！/g,
  /([(（[]).*([a-zA-Z]+|网址).*([)）\]])|为了方便您阅读，请记住“网”网址:\/|\$|www.*com|\(~~~.*~~~\)/g,
  /~+|电.*?脑.*?手.*?打|(全文}字|本书整.*理).*?o~o|电脑.*?n.et/g,
  /手打更新！/g,
  /\(药神手打想念你曾经\)/g,
  /{红花手打组奉献}/g,
  /囦/g,
  /手机阅读请访问wap,手机小说更新最快/g,
  "请记住【笔趣阁 m.biqugeso.com】，第一时间更新，无弹窗，免费读！",
  /百度搜索“biquge.jp”/g,
  /={cid:"",aid:"1o36"};/g
];

const replace = {
  "1ang": "浪",
  "1uan": "乱",
  "bō": "波",
  "bī": "",
  "cháo": "潮",
  "chou": "抽",
  "chūn": "春",
  "chun": "春",
  "cāo": "操",
  "dàng": "荡",
  "dòng": "洞",
  "hún": "魂",
  "huò": "惑",
  "huā": "花",
  "jī": "激",
  "jiao": "交",
  "jiāo": "交",
  "jīng": "精",
  "jing": "精",
  "jǐng": "警",
  "lù": "露",
  "luo": "裸",
  "mí": "迷",
  "mén": "门",
  "nv": "女",
  "qing": "情",
  "rén": "人",
  "rì": "日",
  "rǔ": "乳",
  "sè": "色",
  "she": "射",
  "shè": "射",
  "sāo": "搔",
  "tǐng": "挺",
  "xiao": "小",
  "xìng": "性",
  "xizàng": "西藏",
  "xiong": "胸",
  "yao": "药",
  "yào": "药",
  "yin": "淫",
  "yù": "运",
  "yīn": "阴",
  "yín": "淫",
  "zhōngyāng": "中央",
  "se": "色",
  "nv": "女"
};

module.exports = { clear, replace };
