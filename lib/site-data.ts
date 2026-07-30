export const shop = {
  name: '四川料理 萬福', nameKana: 'マンフク', nameEn: 'MAN FUKU', tel: '0586-51-1111', telHref: 'tel:0586511111',
  address: '愛知県一宮市奥町字田畑26-1', access: '名鉄尾西線「開明駅」より徒歩約7分／西尾張中央道沿い', parking: '専用駐車場 22台完備',
  seats: '総席数 90席（お座敷・個室・テーブル席）', lunch: '11:00〜14:30', dinner: '17:00〜24:00', holiday: '年中無休', lineUrl: '#line',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=愛知県一宮市奥町字田畑26-1+四川料理+萬福',
  mapEmbed: 'https://maps.google.com/maps?q=%E6%84%9B%E7%9F%A5%E7%9C%8C%E4%B8%80%E5%AE%AE%E5%B8%82%E5%A5%A5%E7%94%BA%E5%AD%97%E7%94%B0%E7%95%9F26-1+%E5%9B%9B%E5%B7%9D%E6%96%99%E7%90%86+%E8%90%AC%E7%A6%8F&t=&z=16&ie=UTF8&iwloc=&output=embed',
}

export const img = {
  storefront:'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gRsUAqh0BSVGXpF1byixuJAPuNLLxZ.png', mapo:'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qGenENt8t3kvQo5ye3BBeXSIFKxYxW.png', shuizhu:'/images/shuizhu-beef.png',
  maodu:'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3615JSLrg5XtyDexQ9nWRfL4ZvSaGh.png', guobaorou:'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Gfm6LnH5IbTQ3JANkWzHA47x06YKUc.png', chahan:'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xNJIstXx8Kn8qWVSdJHR1Z5lhZFtc4.png',
  yuxiang:'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Q6MmKJemL4QZm7e0I2dSXMLUYwO8VL.png', gyoza:'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OYzC1fRtYhINyrYv15FKl5CRkySdC5.png', shoronpo:'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Wy81dM8g6fWsvDYTHTxgQtxDm7Vx7z.png',
  sunagimo:'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aOFE1LbliW5jvxRp610POSPmMHhqAv.png', teishoku1:'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6JmgkNAcHzFIMgNhWxjkPofft2m6FN.png', teishoku2:'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9ga5bki560y7S3QqcOngYS11GPQVb2.png', lunchBanner:'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KLIftXMudCMNl3T7RvkE1Z7d1sQRCK.png',
  menuFamily:'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vOrlZSOfNY2N0anMk4WkweMsOxNSjc.png', menuNoodle:'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yiNW6gvcwx8kNUPLAuQilkF6704rru.png', menuAppetizer:'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Orr8l0Hiz7WgFp55rC52wQVz8i8coE.png', menuSeafood:'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uW7d9KGw4LM5uQ2BibvAQxpC0cGMaf.png', menuDrinks:'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jYdARJC63lSx2pjmep44xk9Dm4aVf4.png',
  interiorEntry:'/images/interior-entry.png', interiorCounter:'/images/interior-counter.png', interiorTables:'/images/interior-tables.png', interiorZashiki:'/images/interior-zashiki.png', interiorCollage:'/images/interior-collage.png',
}

export const signatureDishes = [
  {name:'水煮牛肉',sub:'牛肉の四川風激辛煮込み',desc:'真っ赤な辣油に沈む、とろける牛肉。四川料理の魂ともいえる一皿。',spice:3,tag:'激辛・名物',image:img.shuizhu},
  {name:'麻辣毛肚',sub:'牛ハチノスの四川風麻辣あえ',desc:'花椒と唐辛子が香る、鮮烈な痺れとコリコリの食感。',spice:2,tag:'シビカラ本格派',image:img.maodu},
  {name:'四川麻婆豆腐',sub:'四川マーボー豆腐',desc:'花椒の痺れ、唐辛子の辛さ、豆板醤の深いコク。',spice:2,tag:'看板料理',image:img.mapo},
  {name:'鍋包肉',sub:'豚肉の甘酢唐揚げ',desc:'酸甘く軽やかな衣。辛さを控えたい方やお子様にも。',spice:0,tag:'辛さゼロ',image:img.guobaorou},
]
export const gridDishes = [
  {name:'魚香肉絲',sub:'豚肉細切りの魚香炒め',desc:'甘・酸・辛が重なる四川の家常菜。',spice:1,image:img.yuxiang}, {name:'四川炒飯',sub:'特製ピリ辛チャーハン',desc:'香ばしく、ほどよく旨辛に。',spice:1,image:img.chahan},
  {name:'砂肝炒め',sub:'砂肝の香味炒め',desc:'香味野菜と砂肝の快い歯ざわり。',spice:1,image:img.sunagimo}, {name:'焼き餃子',sub:'手作り焼き餃子',desc:'皮は香ばしく、中はジューシー。',spice:0,image:img.gyoza}, {name:'小籠包',sub:'スープ入り蒸し小籠包',desc:'蒸したての皮から熱々の肉汁。',spice:0,image:img.shoronpo},
]
export const menuBooks = [
  {label:'前菜',image:img.menuAppetizer,alt:'前菜メニュー'}, {label:'麺類・冷麺',image:img.menuNoodle,alt:'麺類メニュー'}, {label:'海鮮・そば',image:img.menuSeafood,alt:'海鮮メニュー'}, {label:'コース料理',image:img.menuFamily,alt:'コースメニュー'}, {label:'お飲み物',image:img.menuDrinks,alt:'ドリンクメニュー'},
]
export const interiorPhotos = [
  {src:img.interiorEntry,title:'暖簾の奥に広がる店内',caption:'木の温もりを感じる、落ち着いた空間。'}, {src:img.interiorTables,title:'ゆったりとしたテーブル席',caption:'ご家族から仕事仲間とのお食事まで。'}, {src:img.interiorZashiki,title:'寛ぎのお座敷',caption:'小さなお子様連れにも人気のお席です。'}, {src:img.interiorCollage,title:'宴会にも対応',caption:'長テーブルの設営にも柔軟に対応します。'}, {src:img.interiorCounter,title:'気軽なカウンター席',caption:'お一人でのランチや晩酌にも。'},
]
export const news = [{date:'2026.07.24',text:'萬福の公式ウェブサイトをリニューアルしました。'}, {date:'毎日開催',text:'ランチ 11:00〜14:30／ディナー 17:00〜24:00'}, {date:'ご予約受付中',text:'2時間 食べ飲み放題 4,000円。各種ご宴会に。'}]
