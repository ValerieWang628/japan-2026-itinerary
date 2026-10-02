export type Status = "confirmed" | "must" | "recommended" | "none" | "required" | "strongly" | "walkin" | "noreservation";
export type Item = { title:string; detail:string; status?:Status; link?:string; linkLabel?:string; chips?:string[]; bookingLink?:string; note?:boolean };
export type Day = { date:string; weekday:string; city:string; title:string; summary:string; hotel:string; itinerary:Item[]; transport:Item[]; luggage:Item[]; food:Item[]; hotels:Item[]; bookings:Item[] };
const i=(title:string,detail:string,status?:Status,link?:string,linkLabel="打开官网"):Item=>({title,detail,status,link,linkLabel});
const f=(title:string,detail:string,status:Status,chips:string[],link:string,bookingLink?:string,linkLabel="官方 / 最新资料"):Item=>({title,detail,status,chips,link,bookingLink,linkLabel});
const foodNote=(title:string,detail:string):Item=>({title,detail,note:true});

const tokyoPrinceFood:Item[] = [
 foodNote("东京当地味怎么找","江户前寿司、天妇罗、鳗鱼、荞麦与关东煮。周日老铺常提早收店，先确认最后点单时间。"),
 f("Le Pain Quotidien 芝公园店","庭园内的面包、蛋料理与咖啡；落地翌日不用绕路，很适合作为轻早餐。","walkin",["酒店庭园内","早餐 / 轻食","每日约 07:30–21:00"],"https://www.lepainquotidien.com/jp/ja/stores/Shibakoen"),
 f("和食 清水","会席、寿司和天妇罗都在酒店内完成；第一晚想稳稳吃一顿最省体力。","strongly",["酒店内","午餐 / 晚餐","约 11:30–15:00、17:00–21:30"],"https://www.princehotels.co.jp/tokyo/restaurant/shimizu/","https://www.tablecheck.com/ja/princehotels-tokyo-shimizu"),
 f("芝大门 更科布屋","1791 年创店的江户荞麦老铺；适合点冷荞麦配天妇罗，感受芝大门的旧东京味。","walkin",["步行约 10–12 分钟","午餐 / 早晚餐","周三休；周日约 19:00 收店"],"https://sarashina-nunoya.com/"),
 f("天ぷら 天芝","邻近 Prince Park Tower 的现场天妇罗；比跨城找名店更适合旅程第一晚。","strongly",["步行约 5–7 分钟","午餐 / 晚餐","晚餐约 17:00–22:00"],"https://www.princehotels.co.jp/parktower/restaurant/tenshiba/","https://www.tablecheck.com/en/princehotels-parktower-tenshiba")
];

const matsumotoHotelFood:Item[] = [
 foodNote("松本当地味怎么找","信州荞麦、山贼烧、马刺、野泽菜、山葵与长野地酒。10/13 早上 08:00 接团，早餐务必留出回酒店时间。"),
 f("SEIRYU 酒店早餐","信州食材、乡土小菜与热食自助；早团出发前最稳，但必须事先加订早餐。","required",["酒店内","早餐","06:30–10:00；09:30 最后入场"],"https://matsumoto.tabino-hotel.jp/en/restaurant/"),
 f("珈琲美学 アベ","1957 年老喫茶的摩卡奶油与吐司；07:00 开门，适合 10/13 出发前快速吃。","walkin",["步行约 3–5 分钟","早餐 / 咖啡","周二休；本次周二早晨不可去"],"https://www.abecoffee1957.com/our-story"),
 f("そばきり みよ田 松本店","投汁荞麦、马刺与山贼烧一次覆盖信州代表味；周一抵达当晚可用。","strongly",["步行约 8–10 分钟","午餐 / 晚餐","周四休；周日晚只做午市"],"https://www.ohtaki-gp.jp/brand/brand14/"),
 f("馬肉料理 新三よし","松本老字号马肉专门店，从刺身到锅物选择完整；想认真吃马肉就订这里。","strongly",["步行约 8 分钟","午餐 / 晚餐","约 11:30–14:00、17:00–22:00"],"https://page.line.me/822vehda","https://www.tablecheck.com/en/sinmiyoshi/reserve"),
 f("郷土居酒屋 一歩","山贼烧、马刺和地方酒都齐；离车站稍远，但比站前连锁更有松本味。","strongly",["步行约 18–20 分钟 / 短程出租车","晚餐","周日休；周一可去"],"https://www.matsumoto-ippo.com/")
];

const takayamaHotelFood:Item[] = [
 foodNote("高山当地味怎么找","飞驒牛、朴叶味噌、高山拉面、咸口酱油御手洗团子、赤かぶ渍与地酒。Yutoria 软开业期不供餐，先在车站 / 古街吃完再回酒店。"),
 f("居酒屋 まるいち","A5 飞驒牛朴叶味噌牛排与高山地酒；就在车站旁，最适合 10/13 傍晚巴士抵达后。","strongly",["酒店约 8 分钟出租车；高山站东口 1 分钟","晚餐","约 17:00–22:00"],"https://izakayamaruiti.owst.jp/","https://www.hotpepper.jp/strJ004509279/yoyaku/hpds/?ROUTE_KBN=20"),
 f("すし兆","小型柜台寿司，能把飞驒牛握寿司与当地鱼鲜一起吃；席位少且不定休。","required",["酒店约 7–10 分钟出租车","午餐 / 晚餐","约 11:30–14:00、17:00–22:00"],"https://tabelog.com/gifu/A2104/A210401/21000895/"),
 f("こって牛","竹炭盐仙贝上的飞驒牛握寿司，是古街边走边吃的代表小点。","noreservation",["步行约 20–25 分钟 / 出租车约 5–7 分钟","上午 / 午后小吃","约 09:00–17:00；可能排队"],"https://www.hidagyu-gifu.com/hidagyu/eatinfo.php?id=00305"),
 f("二四三屋 鍛冶橋店","高山式咸口酱油御手洗团子，适合宫川朝市与古街途中随手吃。","walkin",["步行约 18–20 分钟","早餐后 / 小吃","10 月约 06:00–21:00；不定休"],"https://www.hanaougi.co.jp/tourism_lunch/")
];

const kanazawaHotelFood:Item[] = [
 foodNote("金泽当地味怎么找","喉黑鱼、甘虾、香箱蟹（10 月通常尚未开季）、バイ貝、金泽关东煮、治部煮与加贺蔬菜。站内店满座时也可转近江町市场。"),
 f("FIVE – Grill & Lounge","Hyatt 馆内用北陆海鲜、能登肉与加贺蔬菜做现代料理；抵达晚或不想再走最方便。","strongly",["酒店内","早餐 / 晚餐","早餐约 06:30–10:30；晚餐约 17:30–21:30"],"https://www.hyatt.com/hyatt-centric/en-US/kmqct-hyatt-centric-kanazawa/dining/five-grill-lounge","https://www.tablecheck.com/shops/five-hyatt-centric-kanazawa/reserve"),
 f("黒百合","1953 年创店的金泽关东煮老店；车麩、梅貝和大根最能吃出地方风味。","strongly",["步行约 5–7 分钟；金泽百番街 あんと","午餐 / 晚餐","约 11:00–21:30；售完可早收"],"https://www.oden-kuroyuri.com/"),
 f("もりもり寿し 金沢駅前店","适合一次点喉黑鱼、甘虾和北陆白身鱼；不能订位，先取号再逛 FORUS。","noreservation",["步行约 8–10 分钟；FORUS 6F","午餐 / 晚餐","约 11:00–22:00"],"https://www.forus.co.jp/kanazawa/shop/1220"),
 f("鮨 歴々 百番街店","站内柜台寿司，适合转场前认真吃北陆旬鱼；现行店铺页标示不接受预约。","noreservation",["步行约 5–7 分钟；金泽站内","午餐 / 晚餐","约 11:00–22:00；最晚点餐约 20:30"],"https://www.100bangai.co.jp/shop/detail.php?id=302")
];

const kyotoHotelFood:Item[] = [
 foodNote("京都当地味怎么找","おばんざい、汤豆腐、湯葉、京野菜、鳗鱼杂炊、季节怀石与和菓子。正式割烹多为同时开席，迟到风险高。"),
 f("cafe 33","馆内完整早餐使用京都与近郊食材；东山早出日最省时间。","walkin",["酒店内","早餐","每日约 06:30–10:30；是否含早看预订"],"https://www.hyatt.com/hyatt-regency/en-US/kyoto-hyatt-regency-kyoto/dining"),
 f("七條甘春堂 本店","三十三间堂旁的京菓子老铺；季节上生菓子配抹茶，适合下午休息与伴手礼。","walkin",["步行约 2–4 分钟","下午茶 / 小吃","约 09:00–17:30；元旦休"],"https://7jyo-kansyundo.co.jp/pages/stores"),
 f("市川屋珈琲","老町家里的季节水果三明治与手冲咖啡；不是京料理，却很有京都日常感。","walkin",["步行约 10–12 分钟","早餐 / 咖啡","约 08:00–17:00；早上也可能排队"],"https://ichikawaya.thebase.in/about"),
 f("わらじや","400 年级别老铺的鳗鱼锅与うぞふすい；离酒店近，最适合安排成一顿京都老味。","required",["步行约 6–8 分钟","午餐 / 晚餐","周二休；约 11:30–15:00、17:00–20:00"],"https://uzofusui-warajiya.kyoto/","https://www.tablecheck.com/ja/shops/warajiya/reserve"),
 f("東山 吉寿","14 席割烹，午晚餐同时开席；以季节食材和现代诠释见长，适合旅程中的正式一餐。","required",["步行约 12–15 分钟 / 短程出租车","午餐 12:00 / 晚餐 18:30","周三及不定休"],"https://www.higashiyama-yosihisa.com/","https://www.higashiyama-yosihisa.com/")
];

const hakoneHotelFood:Item[] = [
 foodNote("箱根当地味怎么找","箱根关东煮、小田原鱼糕与地鱼、足柄牛、湯葉 / 豆腐和温泉甜点。Suisen 不供晚餐，10/18 周日应在进山前吃好或订宫之下餐厅。"),
 f("Suisen 现烤面包与咖啡","酒店早晨提供简洁面包和饮品，不是完整日式早餐；适合泡汤后的轻早餐。","walkin",["酒店内","早餐","数量与供应方式入住时确认"],"https://www.suisen-hakone.com/news/382/"),
 f("Suisen 共享厨房 + 小田原采购","最保险的晚餐方案：进山前买便当、熟食或食材，再使用酒店共享厨房。","required",["酒店内；食物在小田原 / 箱根汤本先买","晚餐","厨房约 15:00–23:00；需向酒店预约"],"https://www.suisen-hakone.com/facilities/"),
 f("森メシ","箱根关东煮、地鱼、蔬菜和豆腐料理；宫之下站前，吃完坐一站登山电车回大平台。","strongly",["登山电车 1 站；宫之下站前","午餐 / 晚餐","约 11:30–15:00、17:00–21:30"],"https://miyanoshita.morimeshi.jp/","https://miyanoshita.morimeshi.jp/"),
 f("いろり家","小店的足柄牛排丼与鲍鱼丼很有记忆点；座位有限且午市可能售完。","strongly",["登山电车 1 站至宫之下后步行","午餐 / 晚餐","周四休；午市售完即止"],"https://iroriya.shopinfo.jp/"),
 f("808 Monsmare","箱根汤本站前的窑烤披萨与本地食材；不接受预约，适合进山前先吃完晚餐。","noreservation",["箱根汤本站步行约 1 分钟","午餐 / 早晚餐","周三及第 3 个周二休；周日营业"],"https://808monsmare.com/")
];

const ginzaHotelFood:Item[] = [
 foodNote("银座 / 新桥当地味怎么找","江户前寿司、天妇罗、洋食、老喫茶甜点、荞麦 / 乌冬与新桥海鲜居酒屋。10/19 是周一，注意许多甜点店周一休。"),
 f("カフェーパウリスタ","1911 年创店的银座老喫茶；森のコーヒー与吐司最适合出发日前的轻早餐。","walkin",["步行约 2–3 分钟","早餐 / 咖啡","周一约 09:00–20:00；周日较晚开"],"https://www.paulista.co.jp/user_data/shop"),
 f("魚金 総本店","新桥代表性的海鲜居酒屋，刺身拼盘和烧鱼份量实在；最后一晚轻松热闹。","strongly",["步行约 7–8 分钟","晚餐","热门时段常满"],"https://uokingroup.jp/pages/brands","https://booking.ebica.jp/webrsv/search/e014122101/29525?isfixshop=true"),
 f("銀座 木屋 本店","银座八丁目老牌乌冬，工作日晚营业到深夜；购物或寿司后想补一碗最方便。","walkin",["步行约 2–3 分钟","晚餐 / 宵夜","周一至周五约 17:00–翌 03:00；周末节假日休"],"https://ginza-kiya.com/0929/"),
 f("鮨 ほづみ","只有 7 个柜台席的江户前寿司；离酒店很近，适合作为最后一晚正式餐。","required",["步行约 3–5 分钟","晚餐","周一营业；周日 / 节假日休"],"https://www.sushihozumi.com/information/","https://www.sushihozumi.com/information/"),
 f("資生堂パーラー サロン・ド・カフェ","经典季节芭菲与银座甜点；10/19 周一休，只能考虑 10/20 周二 11:00 开门后。","noreservation",["步行约 3 分钟","甜点 / 早午餐后","周一休；不接受预约"],"https://parlour.shiseido.co.jp/shoplist/salondecafeginza/")
];

export const days:Day[] = [
{date:"10.10",weekday:"周六",city:"东京",title:"抵达东京 · 轻轻落地",summary:"15:00 抵达 NRT。今晚不给时差添任务，只安排一段城市散步和一顿舒服的第一餐。",hotel:"东京王子大饭店 · 第 1 晚",itinerary:[i("15:00｜抵达成田机场","入境、取行李、ATM / Welcome Suica 预留约 90–120 分钟。"),i("18:00｜入住与散步","入住东京王子大饭店；有精神就沿芝公园、增上寺与东京塔周边短走，不再跨城赶景点。")],transport:[i("N’EX 成田特快","直达东京、涩谷、新宿；航班延误时改下一班更灵活。普通指定席通常提前 1 个月开售。","recommended","https://www.jreast.co.jp/en/multi/nex/tickets/","JR 东日本"),i("备选：Skyliner","若住上野 / 浅草更顺路，京成 Skyliner 到日暮里、上野。","recommended","https://www.keisei.co.jp/keisei/tetudou/skyliner/us/","京成电铁")],luggage:[i("全部随身进城","今晚把大箱与 2 晚小包分开；小包准备松本、上高地、高山所需。","none")],food:[i("Tokyo comfort-food night","烧鸟、刺身、关东煮或拉面；不把高价 omakase 放在长途飞行后的第一晚。")],hotels:[i("东京王子大饭店｜BOOKED / CONFIRMED","Tokyo Prince Hotel，3-3-1 Shibakoen, Minato City, Tokyo；连续入住 10/10 与 10/11 两晚。御成门站 A1 约 1 分钟，大门站 A6 约 7 分钟，JR 滨松町站约 10 分钟步行。","confirmed","https://www.princehotels.com/tokyo/location/","酒店官方交通页")],bookings:[i("机场进城车票","建议订；如果担心入境耗时，可到站购买。","recommended")]},
{date:"10.11",weekday:"周日",city:"东京",title:"江户东京 · 从市场吃到老街",summary:"把东京的旧时气息串成一条线：筑地 / 丰洲的鱼鲜、清澄白河咖啡、浅草与合羽桥。",hotel:"东京王子大饭店 · 第 2 晚",itinerary:[i("08:00｜筑地场外","玉子烧、海鲜小碗与现烤物，避开单店长队，少量多吃。"),i("10:30｜清澄庭园与清澄白河","庭园慢走，再选一家烘焙咖啡馆。"),i("14:00｜浅草寺 → 合羽桥","雷门、仲见世后逛厨具街；傍晚从隅田川侧看东京晴空塔。")],transport:[i("地铁一日移动","IC 卡按次乘坐即可；不必为短途买通票。","none")],luggage:[i("今晚交运大箱","请东京王子大饭店前台用宅急便寄往 10/14 金泽酒店，指定 10/14 到达；在运单写英文姓名、入住日、预订号。至少留 2 天缓冲。","must","https://faq-en.kuronekoyamato.co.jp/app/answers/detail/a_id/6074/","Yamato 酒店互寄说明")],food:[i("午餐：江户前寿司 / 天妇罗","把一顿认真午餐放在今天；热门小店建议预约。","recommended"),i("晚餐：鳗鱼或寿喜烧","浅草老铺很多；若选名店，提前通过官网或酒店礼宾订。","recommended")],hotels:[i("东京王子大饭店｜BOOKED / CONFIRMED","同一酒店连住第二晚；今晚完成退房前整理，并把 Azusa QR voucher 截图离线保存。","confirmed","https://www.princehotels.com/tokyo/location/","酒店官方交通页")],bookings:[i("东京餐厅","高端寿司、天妇罗或寿喜烧建议提前 4–8 周。","recommended")]},
{date:"10.12",weekday:"周一",city:"东京 → 松本",title:"已订 Azusa · 黑城与信州味",summary:"08:00 从东京王子大饭店出发，留足新宿站内寻路时间；10:00 乘已确认的 Azusa，12:37 抵达松本。",hotel:"松本 · 1 晚",itinerary:[i("07:45｜退房完成","早餐、退房与洗手间都在此时前完成；只带 2 晚小旅行包，把 QR voucher、证件与充电宝放在随手可取处。"),i("08:00｜离开东京王子大饭店","低压力主路线：步行约 10 分钟到 JR 滨松町站，从北口进站。搭山手线外回（品川・涩谷方向）直达新宿，车上约 25 分钟，不换车。"),i("08:45–09:00｜抵达新宿 JR 区域","下车后不出 JR 闸机，跟随 Chūō Line / Limited Express 指示与当天电子屏找 Azusa；为站内步行、确认站台、买水和从容上车预留约 60 分钟。"),i("10:00–12:37｜Limited Express Azusa","BOOKED / CONFIRMED：新宿 10:00 → 松本 12:37；2 位成人，Green Reserved，总价 ¥27,560，QR voucher。","confirmed","https://www.jreast.co.jp/en/multi/traininformation/azusa_kaiji/index.html","JR 东日本 Azusa"),i("14:00｜松本城","抵达后先寄存小包并午餐；天守内部楼梯陡，把 60–90 分钟留给城内与护城河。","recommended","https://www.matsumoto-castle.jp/lang/","松本城官网")],transport:[i("推荐｜JR 滨松町 → 新宿","门到 JR 候车区域约 45–60 分钟：酒店→滨松町步行约 10 分钟；山手线外回直达约 25 分钟；新宿站内再留 10–15 分钟。列车换乘 0 次，街面步行约 10 分钟，站内步行中等；全程留在 JR 系统，最少迷路。","none","https://timetables.jreast.co.jp/en/timetable/list1248.html","JR 滨松町官方时刻 / 方向"),i("少走路备选｜大门 → 新宿","酒店步行约 7 分钟到大门站 A6，搭都营大江户线直达新宿，车上约 16 分钟、0 次换车；但大江户线站台较深，抵达后需从都营区域走到 JR Limited Express 区域。","none","https://www.kotsu.metro.tokyo.jp/eng/document/main_route_map_eng.pdf","都营地铁官方线路图"),i("Taxi backup｜直达 JR 新宿站","遇大雨、地铁异常或不想站内转行时，请前台叫车并指定 JR Shinjuku Station South Exit。建议最晚 08:15–08:20 离店；平日早高峰按约 25–40 分钟、¥4,000–¥6,000 预留，堵车时可能更久。目标仍是 09:00 前到 JR 区域。","recommended","https://www.google.com/maps/dir/?api=1&origin=Tokyo+Prince+Hotel&destination=JR+Shinjuku+Station+South+Exit&travelmode=driving","打开地图"),i("同日 fallback｜仅在已订列车不可用时","截图列出的备选：09:00 新宿→11:39 松本；11:00→13:35；12:00→14:35。当前 10:00→12:37 已确认，不需要主动改车。","none")],luggage:[i("只带 2 晚小包","大箱已由东京王子大饭店前台寄往金泽。薄羽绒 / 抓绒、雨衣、两套换洗和充电器不要漏。","none")],food:[i("信州荞麦","先尝冷荞麦，感受本地香气；可搭山葵、野菜天妇罗。"),i("山贼烧与当地清酒","蒜香酱油腌鸡大块炸制，是松本很有代表性的下酒菜。")],hotels:[i("松本站步行圈酒店","优先：靠车站、可寄存行李、早晨易等 10/13 私人团接送。"),i("美之原温泉（备选）","更有旅馆气氛，但次日 08:00 TABINO HOTEL Lit MATSUMOTO 接送安排不适用。")],bookings:[i("Azusa 10:00 新宿 → 12:37 松本｜BOOKED / CONFIRMED","2 位成人；Green Reserved；总价 ¥27,560；QR voucher。出发前确认二维码能离线打开，并以当天站内电子屏为准找站台。","confirmed","https://www.jreast.co.jp/en/multi/traininformation/azusa_kaiji/index.html","JR 东日本 Azusa"),i("新宿站缓冲","08:00 离店，目标 09:00 前进入 JR 区域，为 10:00 发车留约 60 分钟。","none","https://www.jreast.co.jp/en/e/stations/e866.html","JR 新宿站地图")]},
{date:"10.13",weekday:"周二",city:"上高地 → 高山",title:"私人上高地导览 · 穿越至高山",summary:"08:00 从松本酒店出发，参加已确认的私人上高地一日游；按与 vendor 确认的定制安排在上高地巴士总站结束，再自行经平汤前往高山。",hotel:"高山 · 1 晚",itinerary:[i("08:00｜松本酒店接送","TABINO HOTEL Lit MATSUMOTO，1 Chome-4-5 Fukashi, Matsumoto, Nagano。请提前在大堂等候；2 位成人。","confirmed"),i("08:00–约 16:00｜上高地私人导览","GetYourGuide：Kamikochi Private car tour Pickup from Nagano/Matsumoto。约 8 小时，英语；私人车辆与英语司机已包含，实际景点与步行节奏由当天 guide 安排。","confirmed","https://www.getyourguide.com/nagano-l5079/from-nagano-kamikochi-private-day-trip-with-pickup-t1411016/","查看 GetYourGuide 行程"),i("行程结束｜上高地巴士总站","CUSTOM DROP-OFF CONFIRMED WITH VENDOR：不按 voucher 的标准安排返回松本；vendor 已确认可在 Kamikochi Bus Terminal 结束 / 下车。","confirmed"),i("傍晚｜上高地 → 平汤 → 高山","tour 结束后自行购买公交票并换乘；当晚继续入住原定高山酒店。")],transport:[i("上高地 → 平汤温泉｜无需预约","2026 官方时刻：每 30 分钟一班，15:30→15:55、16:00→16:25、16:30→16:55、17:00→17:25、17:30→17:55；从上高地巴士总站 5 号站台出发。建议按 tour 实际结束时间选车。","none","https://www.alpico.co.jp/traffic/local/kamikochi/hirayu/","ALPICO 2026 官方时刻"),i("平汤温泉 → 高山｜无需预约","2026 傍晚班次：16:30→17:31、17:30→18:31。稳妥衔接：16:00 上高地→16:25 平汤，留足换乘缓冲后乘 17:30→18:31 高山；若 15:30 前结束，也可 15:30→15:55 后接 16:30→17:31。","none","https://www.nouhibus.co.jp/route_bus/kamikochi-line-en/","浓飞巴士 2026 官方时刻"),i("后续车票不包含在 tour 内","上高地→平汤与平汤→高山两段均需自行购票；两段官方均标注无需预约。到站后确认售票方式、站台与当天运行状态。","none","https://www.nouhibus.co.jp/route_bus/kamikochi-line-en/","浓飞巴士官方")],luggage:[i("小包随身","大箱已寄往金泽。把护照、药物、贵重品、充电宝与保暖防雨层随身带；无需拖箱进入上高地。","none")],food:[i("午餐自理","午餐与个人消费不含在 tour 价格内；可按 guide 安排在上高地用简餐。"),i("高山夜：飞驒牛","预计最晚 18:31 左右抵达高山；晚餐不要订得过早。","recommended")],hotels:[i("高山酒店｜保留原预订","本日不返回松本；经平汤抵达高山后入住原定酒店。","confirmed")],bookings:[i("上高地私人团｜已预订 / 已确认","Confirmed order；2 位成人；英语；总价 US$373.26。包含私人 tour vehicle + English-speaking driver；不包含午餐、个人消费及上高地→平汤→高山公交票。","confirmed","https://www.getyourguide.com/nagano-l5079/from-nagano-kamikochi-private-day-trip-with-pickup-t1411016/","GetYourGuide"),i("装备与取消政策","穿舒适步行鞋与衣物，并带适合当天山地天气的保暖 / 防雨层。若需取消，须在 10/12 08:00 前操作方可全额退款。"),i("定制下车安排","CUSTOM DROP-OFF CONFIRMED WITH VENDOR：以 vendor 单独确认的上高地巴士总站结束方案为准；voucher 所列返回松本是标准流程，不是当前计划。","confirmed"),i("飞驒牛晚餐","热门烧肉店建议提前 2–4 周；按 18:31 左右抵达高山留缓冲。","recommended")]},
{date:"10.14",weekday:"周三",city:"白川乡 → 金泽",title:"合掌村与北陆第一餐",summary:"早晨高山古街，随后坐预约巴士到白川乡；寄存小包游村，再继续去金泽与大箱会合。",hotel:"金泽 · 1 晚",itinerary:[i("07:30｜宫川朝市与古街","早晨人少，尝飞驒牛握寿司、味噌烤物。"),i("10:00 前后｜高山 → 白川乡","以实际 2026 秋季时刻为准，至少提前 20 分钟到站。"),i("12:00｜白川乡","巴士站寄存行李；先去展望台，再走和田家周边与水渠小路。","recommended","https://shirakawa-go.gr.jp/en/","白川乡观光协会"),i("16:00 前后｜白川乡 → 金泽","预约巴士继续北上；入住后取回大箱。")],transport:[i("高山 → 白川乡 → 金泽","部分班次为预约制且很快售罄；建议把两段一次订好，通常提前 1 个月开放。","must","https://www.nouhibus.co.jp/highwaybus/toyama_en/","浓飞巴士官方")],luggage:[i("白川乡寄存小包","站旁储物柜 / 行李房可能满，抵达后先处理。"),i("金泽酒店领取大箱","前台报姓名与入住信息；若未到，立刻用运单号追踪。")],food:[i("白川乡：朴叶味噌","味噌在朴叶上烤，适合配米饭；也可选飞驒牛可乐饼。"),i("金泽：香箱蟹季前的海鲜","10 月重点吃甘虾、喉黑鱼、加能屋蔬菜和本地寿司。","recommended")],hotels:[i("Hyatt Centric Kanazawa","金泽站西口，餐饮完整。","recommended","https://www.hyatt.com/hyatt-centric/en-US/kmqct-hyatt-centric-kanazawa"),i("Hyatt House Kanazawa","同样贴近车站，空间与洗衣对长途旅行友好。","recommended","https://www.hyatt.com/hyatt-house/en-US/kmqxk-hyatt-house-kanazawa")],bookings:[i("两段高速巴士","9/14 起通常可订；务必核对两段日期与人数。","must"),i("金泽寿司晚餐","热门柜台建议 4–8 周。","recommended")]},
{date:"10.15",weekday:"周四",city:"金泽 → 京都",title:"兼六园清晨 · 穿越北陆",summary:"上午看金泽最精华的庭园和市场，午后经敦贺换乘去京都。",hotel:"京都 · 第 1 晚",itinerary:[i("07:30｜兼六园与金泽城","清晨光线和人流最好；从霞之池走到金泽城石川门。","none","https://www.pref.ishikawa.jp/siro-niwa/kenrokuen/e/","兼六园官网"),i("10:30｜近江町市场","海鲜丼不必只追网红店，也可拆成烤物、寿司与水果。"),i("13:30｜金泽 → 敦贺 → 京都","北陆新干线到敦贺，同站换 Thunderbird；预留换乘余量。"),i("17:30｜鸭川 / 先斗町","入住后散步，正式京都晚餐。")],transport:[i("北陆新干线 + Thunderbird","金泽至京都需在敦贺换乘；两段建议一起订指定席。JR-WEST 通常提前 1 个月开放。","must","https://www.westjr.co.jp/global/en/howto/train-reservation/condition/","JR-WEST 预约"),i("HOKURIKU One-way Ticket","访日游客可比较官方单程优惠票，适用条件与取票规则需在购买页确认。","recommended","https://www.westjr.co.jp/travel-information/en/tickets-passes/oneway/hokuriku/","JR-WEST 优惠票")],luggage:[i("大箱随人去京都","两段列车不适用东海道新干线 >160 cm 强制预约规则，但换乘时仍应轻装、看好行李。")],food:[i("近江町：海鲜早餐 / 午餐","甘虾、喉黑鱼与本地贝类优先。"),i("京都：割烹或蔬菜料理","第一晚适合一顿预约制京都料理。","recommended")],hotels:[i("Hyatt Regency Kyoto","东山七条，靠近三十三间堂与清水寺南侧。","recommended","https://www.hyatt.com/hyatt-regency/en-US/kyoto-hyatt-regency-kyoto"),i("Park Hyatt Kyoto","二年坂位置无可替代，适合把酒店本身当体验。","recommended","https://www.hyatt.com/park-hyatt/en-US/itmph-park-hyatt-kyoto"),i("Hyatt Place Kyoto","地铁丸太町旁，实用且交通便利。","recommended","https://www.hyatt.com/hyatt-place/en-US/itmzk-hyatt-place-kyoto")],bookings:[i("金泽→京都列车","9/15 起通常可购。","must"),i("京都料理","高端割烹 / 怀石建议 1–2 个月。","recommended")]},
{date:"10.16",weekday:"周五",city:"京都",title:"东山 · 寺院与小巷的清晨",summary:"用早起换来安静的清水寺，沿保存最好的东山街巷一路走到祇园。",hotel:"京都 · 第 2 晚",itinerary:[i("07:00｜清水寺","早到避开旅行团；舞台、地主神社周边与音羽瀑布。","none","https://www.kiyomizudera.or.jp/en/","清水寺官网"),i("09:00｜三年坂 → 二年坂","店铺开门前更适合看街景，之后转高台寺。"),i("13:30｜建仁寺 / 祇园","留出一段无目标漫步，白川南通傍晚最美。"),i("18:00｜预约晚餐","把最期待的一顿京都料理放今晚。")],transport:[i("公交 + 步行","清早可出租车到清水寺；白天东山路堵，步行更可靠。","none")],luggage:[i("酒店内不移动","把下一次宅配运单所需的东京酒店地址准备好。","none")],food:[i("早餐：汤豆腐 / 日式早餐","东山的好早餐选择不多，热门店建议预约。","recommended"),i("晚餐：怀石 / 割烹","尊重到店时间与取消政策；如有过敏务必提前告知。","must")],hotels:[i("续住京都酒店","三晚不换房。")],bookings:[i("京都高端晚餐","建议现在就订；许多店通过酒店礼宾或 TableCheck。","must","https://www.tablecheck.com/en/japan","TableCheck") ]},
{date:"10.17",weekday:"周六",city:"奈良",title:"奈良日归 · 古寺与柿叶寿司",summary:"早去奈良公园，从春日大社、若草山脚到东大寺；傍晚回京都。",hotel:"京都 · 第 3 晚",itinerary:[i("08:00｜京都 → 奈良","JR 或近铁都可；酒店位置决定哪条更顺。"),i("09:00｜春日大社","从石灯笼参道慢慢进入森林。","none","https://www.kasugataisha.or.jp/en/about_en/","春日大社"),i("11:30｜奈良町午餐","柿叶寿司、葛料理或茶粥。"),i("14:00｜东大寺","大佛殿与南大门；周六人多，午后稍缓。","none","https://www.todaiji.or.jp/en/","东大寺"),i("17:00｜返回京都","最后一晚整理行李。")],transport:[i("京都 ↔ 奈良","普通列车班次多，不需预约；ICOCA / Suica 可用。","none")],luggage:[i("今晚打包","大箱明早从京都寄往 10/19 东京酒店；箱根仅带一晚包。")],food:[i("奈良：柿叶寿司、葛、茶粥","柿叶寿司很适合做轻午餐；志津香釜饭常排长队，不要让排队绑架行程。"),i("京都最后一晚：居酒屋","把正式怀石留给前一晚，今晚吃季节小菜与清酒。","recommended")],hotels:[i("续住京都酒店","今晚确认前台明早宅配截单时间。")],bookings:[i("奈良主要寺社","通常现场购票即可。","none")]},
{date:"10.18",weekday:"周日",city:"京都 → 箱根",title:"向东而行 · 温泉之夜",summary:"早上把大箱送走，乘新干线到小田原，进入箱根完成半程环线，晚上泡温泉吃会席。",hotel:"箱根 · 1 晚",itinerary:[i("08:00｜京都站出发","Hikari 直达小田原最省转车；若班次不合适，在名古屋换乘。"),i("11:00｜小田原 → 箱根","购买 / 启用箱根周游券，按天气决定先走大涌谷还是芦之湖。"),i("13:00｜强罗 / 大涌谷","缆车会因风或火山气体停运，现场查运行状态。"),i("17:00｜温泉旅馆","不要晚于晚餐规定时间抵达；会席通常 18:00 前后开始。")],transport:[i("京都 → 小田原 新干线","SmartEX 最早可提前 1 年受理；实际列车座位通常按规则开放。选 Hikari 并核对是否直达小田原。","must","https://global.jr-central.co.jp/en/onlinebooking/contents/shinkansen/","SmartEX 官方"),i("箱根周游券（小田原出发）","覆盖登山电车、缆车、空中缆车、海盗船与指定巴士；线上 / 现场可购，提前 1 个月。","recommended","https://www.hakonenavi.jp/international/en/discount_passes/free_pass","箱根官方")],luggage:[i("京都 → 东京宅急便","早上交酒店前台，指定 10/19 到达东京酒店。先确认两家酒店都可收发；保留运单。官方建议至少提前 2 天寄往住宿设施，跨区或天气可能需 3 天，因此更稳妥是 10/17 晚交件。","must","https://faq-en.kuronekoyamato.co.jp/app/answers/detail/a_id/6692/","Yamato 官方"),i("箱根只带一晚包","温泉用品通常酒店提供；带明日衣物、药物与贵重物品。")],food:[i("车站便当","京都站选一份季节便当，上车后吃。"),i("旅馆会席","确认晚餐开始时间、过敏与生食偏好；属于住宿的一部分。","must")],hotels:[i("Hyatt Regency Hakone Resort & Spa","强罗的大房间与温泉体验，适合用积分。","recommended","https://www.hyatt.com/en-US/hotel/japan/hyatt-regency-hakone-resort-and-spa/hakhr"),i("日式温泉旅馆（待定）","若更重视怀石与私人风吕，选箱根汤本 / 强罗 / 芦之湖一带。","recommended")],bookings:[i("京都→小田原","热门时段尽早锁定；>160 cm 行李需订带超大行李空间座位，但本日大箱已宅配。","must"),i("温泉酒店 + 晚餐","周日也建议尽早订并确认最晚入住时间。","must")]},
{date:"10.19",weekday:"周一",city:"箱根 → 东京",title:"芦之湖晨雾 · 回到东京",summary:"补完箱根环线后回东京，取回大箱；最后一晚把购物和告别餐安排在同一区域。",hotel:"东京 · 最后 1 晚",itinerary:[i("08:30｜箱根晨间","天气好走芦之湖 / 箱根神社；天气差去 POLA 美术馆或雕刻之森。"),i("12:00｜小田原 → 东京","东海道新干线约半小时；也可小田急回新宿。"),i("15:00｜入住与购物","银座、新宿或涩谷，按最后酒店就近安排。"),i("19:00｜告别晚餐","寿司、烧肉或你们旅途中最想再吃一次的料理。")],transport:[i("箱根 → 东京","若箱根周游券为小田原出发，则另买小田原→东京；新干线无需很早预订。","recommended","https://global.jr-central.co.jp/en/onlinebooking/","JR Central")],luggage:[i("东京酒店取回大箱","出发前 48–72 小时让京都前台确认预计到达日；贵重品、药物永远随身。")],food:[i("小田原：鱼板 / 海鲜","若时间合适，在小田原吃午餐再进东京。"),i("东京告别餐","热门寿司或烧肉务必提前；预留购物打包时间。","must")],hotels:[i("东京站 / 银座","次日乘 N’EX 去成田最直接。Hyatt Centric Ginza 或 Caption by Hyatt Kabutocho 可比较。","recommended","https://www.hyatt.com/en-US/destinations/tokyo")],bookings:[i("告别晚餐","建议 4–8 周预订。","must")]},
{date:"10.20",weekday:"周二",city:"东京 → 成田",title:"最后一碗面 · 回家",summary:"17:05 从 NRT 起飞。上午只做轻量购物和午餐，最晚约 13:00–13:30 从市区出发。",hotel:"返程日",itinerary:[i("08:30｜早餐与最后采购","东京站 / 银座范围内活动，不跨城。"),i("11:30｜早午餐","荞麦、鳗鱼饭或寿司，避开需要久候的店。"),i("13:00｜前往成田","国际航班建议至少提前 3 小时到机场，并给列车异常留缓冲。"),i("17:05｜NRT 起飞","在安检前完成退税品与托运行李整理。")],transport:[i("N’EX / Skyliner","根据最终酒店选路线；N’EX 往返票若满足 14 天有效期可比较。","recommended","https://www.jreast.co.jp/en/multi/nex/tickets/","N’EX 官方")],luggage:[i("全部随身去机场","检查宅配运单、护照、免税品封袋与充电宝位置。","none")],food:[i("机场前的最后一餐","留在市区吃，不把期待放在机场餐饮。")],hotels:[i("无住宿","")],bookings:[i("机场列车","建议前一天或更早锁定合适班次。","recommended")]}
];

const bookedStayByDate:Record<string,{label:string; stay:Item; food:Item[]}> = {
 "10.10":{label:"Tokyo Prince Hotel · BOOKED · 第 1 晚",stay:i("BOOKED｜Tokyo Prince Hotel (Trip.com)","东京｜10/10–10/12，连续 2 晚。Google Sheet 已选 #3；表内金额 CNY 2,553 / 夜。御成门站 A1 约 1 分钟，大门站 A6 约 7 分钟，JR 滨松町站约 10 分钟步行。","confirmed","https://www.princehotels.com/tokyo/location/","酒店官方"),food:tokyoPrinceFood},
 "10.11":{label:"Tokyo Prince Hotel · BOOKED · 第 2 晚",stay:i("BOOKED｜Tokyo Prince Hotel (Trip.com)","东京｜10/10–10/12，连续 2 晚。Google Sheet 已选 #3；表内金额 CNY 2,553 / 夜。今晚整理松本小包，并把 Azusa QR voucher 离线保存。","confirmed","https://www.princehotels.com/tokyo/location/","酒店官方"),food:tokyoPrinceFood},
 "10.12":{label:"TABINO HOTEL Lit MATSUMOTO · BOOKED",stay:i("BOOKED｜TABINO HOTEL Lit MATSUMOTO","松本｜10/12–10/13，1 晚。Google Sheet 已选 #2；表内金额 CNY 1,417。10/13 私人团已确认 08:00 从这家酒店大堂接送。","confirmed","https://matsumoto.tabino-hotel.jp/en/","酒店官方"),food:matsumotoHotelFood},
 "10.13":{label:"Yutoria Resort Hida Takayama · BOOKED",stay:i("BOOKED｜Yutoria Resort Hida Takayama","高山｜10/13–10/14，1 晚。Google Sheet 已选 #1；表内金额 CNY 710。酒店约距高山站 8 分钟出租车；2026 软开业期间为纯住宿，餐厅与大浴场预计 2027 春季后才开放。","confirmed","https://yutoria.watgroup.co.jp/","酒店官方"),food:takayamaHotelFood},
 "10.14":{label:"Hyatt Centric Kanazawa · BOOKED",stay:i("BOOKED｜Hyatt Centric Kanazawa","金泽｜10/14–10/15，1 晚。Google Sheet 已选 #1，并在酒店名称中注明 Hyatt points；金额栏显示 CNY 0，仅按表格记录展示，不解读为免费房价。酒店从金泽站港口口步行约 2 分钟。","confirmed","https://www.hyatt.com/hyatt-centric/en-US/kmqct-hyatt-centric-kanazawa","Hyatt 官方"),food:kanazawaHotelFood},
 "10.15":{label:"Hyatt Regency Kyoto · BOOKED · 第 1 晚",stay:i("BOOKED｜Hyatt Regency Kyoto","京都｜10/15–10/18，连续 3 晚、合并在同一笔预订中。Google Sheet 已选 #1；单日金额栏显示 CNY 0，表示房费未按每天拆分，并不代表免费。网站已将表中的拼写 Rengency 规范为官方名称 Regency。","confirmed","https://www.hyatt.com/hyatt-regency/en-US/kyoto-hyatt-regency-kyoto","Hyatt 官方"),food:kyotoHotelFood},
 "10.16":{label:"Hyatt Regency Kyoto · BOOKED · 第 2 晚",stay:i("BOOKED｜Hyatt Regency Kyoto","京都｜10/15–10/18，连续 3 晚、合并预订中的第 2 晚。单日金额栏为 CNY 0，因为住宿费未逐晚拆分；三晚不换房。","confirmed","https://www.hyatt.com/hyatt-regency/en-US/kyoto-hyatt-regency-kyoto","Hyatt 官方"),food:kyotoHotelFood},
 "10.17":{label:"Hyatt Regency Kyoto · BOOKED · 第 3 晚",stay:i("BOOKED｜Hyatt Regency Kyoto","京都｜10/15–10/18，连续 3 晚、合并预订中的第 3 晚。单日金额栏为 CNY 0，因为住宿费未逐晚拆分；大箱应在今天交运往东京。","confirmed","https://www.hyatt.com/hyatt-regency/en-US/kyoto-hyatt-regency-kyoto","Hyatt 官方"),food:kyotoHotelFood},
 "10.18":{label:"Hot Spring Inn Hakone Suisen · BOOKED",stay:i("BOOKED｜Hot Spring Inn Hakone Suisen","箱根｜10/18–10/19，1 晚。Google Sheet 已选 #2；表内金额 CNY 1,785。大平台站步行约 3 分钟；酒店没有晚餐，只有早晨面包饮品及可预约的共享厨房。","confirmed","https://www.suisen-hakone.com/","酒店官方"),food:hakoneHotelFood},
 "10.19":{label:"Ginza International Hotel · BOOKED",stay:i("BOOKED｜Ginza International Hotel","东京｜10/19–10/20，1 晚。Google Sheet 已选 #1；表内金额 CNY 1,422。地址在银座八丁目，JR / 地铁新桥站约 3 分钟步行。","confirmed","https://www.ginkoku.co.jp/","酒店官方"),food:ginzaHotelFood},
 "10.20":{label:"Ginza International Hotel · BOOKED · 退房日",stay:i("BOOKED｜Ginza International Hotel｜今日退房","昨晚 10/19–10/20 的已订住宿；退房后从银座 / 新桥附近完成早餐与最后采购，再前往成田。","confirmed","https://www.ginkoku.co.jp/","酒店官方"),food:ginzaHotelFood}
};

for (const day of days) {
 const booked = bookedStayByDate[day.date];
 if (!booked) continue;
 day.hotel = booked.label;
 day.hotels = [booked.stay];
 day.food = booked.food;
}

const tokyoShippingDay = days.find(day=>day.date==="10.11");
if (tokyoShippingDay) {
 tokyoShippingDay.luggage = [
  i("已核实可行｜Tokyo Prince → Hyatt Centric Kanazawa","东京王子大饭店官网写明 1F Bell Desk 可办理宅配；金泽 Hyatt 官网也明确可提前收件。建议 10/11 晚交件，指定 10/14 到达。","confirmed","https://www.princehotels.co.jp/tokyo/faq/","东京王子官方 FAQ"),
  i("金泽收件必填信息","运单写与预订一致的英文姓名、入住日 10/14、预订号与酒店电话；Hyatt 要求寄出前联系酒店。不要寄贵重品、冷藏品或超尺寸物品。","must","https://www.hyatt.com/hyatt-centric/en-US/kmqct-hyatt-centric-kanazawa/faqs","Hyatt Centric Kanazawa FAQ")
 ];
}

const kyotoShippingDay = days.find(day=>day.date==="10.17");
if (kyotoShippingDay) {
 kyotoShippingDay.luggage = [
  i("10/17 交件｜Hyatt Regency Kyoto → Ginza International Hotel","银座国际酒店官网确认可在入住前收件；运单写预订姓名与入住日 10/19，必须预付运费，酒店不收货到付款、贵重品。","must","https://www.ginkoku.co.jp/faq/","银座国际酒店官方 FAQ"),
  i("京都出件端｜入住时确认","Hyatt Regency Kyoto 的公开页面没有写明国内宅急便出件细节。10/15 入住时向礼宾确认承运商、10/17 截单时间与预计 10/19 到达；这是目前唯一仍需前台口头确认的一端。","must","https://www.hyatt.com/hyatt-regency/en-US/kyoto-hyatt-regency-kyoto/policies","Hyatt Kyoto 联系方式")
 ];
}

const takayamaDay = days.find(day=>day.date==="10.13");
if (takayamaDay) {
 takayamaDay.itinerary = takayamaDay.itinerary.map(item=>item.title.startsWith("傍晚｜") ? i("傍晚｜上高地 → 平汤 → 高山酒店","tour 结束后自行购买公交票并换乘；抵达高山站后，建议搭约 8 分钟出租车前往已订 Yutoria Resort Hida Takayama。酒店软开业期间为纯住宿，晚餐需在车站 / 古街一带先解决。") : item);
}

const hakoneDay = days.find(day=>day.date==="10.18");
if (hakoneDay) {
 hakoneDay.summary = "大箱已于 10/17 从京都交运往东京；今天只带一晚包乘新干线到小田原，再进入箱根。今晚入住大平台的 Suisen；酒店不供晚餐，需在小田原 / 箱根汤本先吃或买好带入。";
 hakoneDay.luggage = [
  i("大箱应已在途｜京都 → 东京","不要等到 10/18 早上才寄；为 10/19 入住留足缓冲，应在 10/17 完成交件。保留运单照片和追踪号。","must","https://www.ginkoku.co.jp/faq/","银座国际酒店收件规则"),
  i("箱根只带一晚包","随身带 10/18–19 衣物、药物、证件、充电器与贵重品；大箱直接在东京会合。","none")
 ];
 hakoneDay.itinerary = hakoneDay.itinerary.map(item=>item.title.startsWith("17:00｜") ? i("17:00｜入住 Hot Spring Inn Hakone Suisen","从大平台站步行约 3 分钟。酒店没有晚餐；若未在小田原 / 箱根汤本吃完，请提前买好便当、熟食或食材，并预约共享厨房。","must","https://www.suisen-hakone.com/news/382/","酒店餐饮说明") : item);
 hakoneDay.bookings = hakoneDay.bookings.map(item=>item.title==="温泉酒店 + 晚餐" ? i("箱根晚餐安排","酒店已订，但不含也不提供晚餐；周日山区店铺选择少，优先在小田原 / 箱根汤本提前吃或采购。","must","https://www.suisen-hakone.com/news/382/","酒店说明") : item);
}

const tokyoReturnDay = days.find(day=>day.date==="10.19");
if (tokyoReturnDay) {
 tokyoReturnDay.itinerary = tokyoReturnDay.itinerary.map(item=>item.title==="15:00｜入住与购物" ? i("15:00｜入住银座国际酒店","入住已订 Ginza International Hotel；酒店在银座八丁目、新桥站步行圈，下午购物与晚餐都留在银座 / 新桥最省力。") : item);
}

export const checklist = [
 {when:"已确认",date:"住宿",title:"10 晚酒店｜BOOKED / CONFIRMED",status:"confirmed" as Status,note:"已按 Google Sheet 更新全部已选酒店；表内住宿合计显示 CNY 10,440。连续住宿中单日金额为 0 表示合并预订、房费未逐晚拆分，并不代表免费。箱根 Suisen 不供晚餐，需另行安排。",link:"https://www.suisen-hakone.com/news/382/"},
 {when:"现在",date:"10/10–11",title:"和食 清水｜Tokyo Prince",status:"strongly" as Status,note:"酒店内会席、寿司与天妇罗；第一晚或第二晚想吃得稳妥，建议先订。",link:"https://www.tablecheck.com/ja/princehotels-tokyo-shimizu"},
 {when:"入住前",date:"10/13 早餐",title:"SEIRYU｜TABINO 酒店早餐",status:"required" as Status,note:"10/13 08:00 私人团接送；早餐需提前加订，06:30 开始。",link:"https://matsumoto.tabino-hotel.jp/en/restaurant/"},
 {when:"现在",date:"10/12",title:"馬肉料理 新三よし｜松本",status:"strongly" as Status,note:"信州马肉专门店；周一晚可去，直接订位并避免现场满座。",link:"https://www.tablecheck.com/en/sinmiyoshi/reserve"},
 {when:"现在",date:"10/13",title:"居酒屋 まるいち｜高山",status:"strongly" as Status,note:"按上高地转场实际抵达时间订晚餐；高山站东口 1 分钟。",link:"https://www.hotpepper.jp/strJ004509279/yoyaku/hpds/?ROUTE_KBN=20"},
 {when:"现在",date:"10/13",title:"すし兆｜高山",status:"required" as Status,note:"小型寿司柜台且不定休；若选这里，必须先确认当晚营业和席位。",link:"https://tabelog.com/gifu/A2104/A210401/21000895/"},
 {when:"现在",date:"10/14",title:"FIVE｜Hyatt Centric Kanazawa",status:"strongly" as Status,note:"酒店馆内北陆食材晚餐；抵达较晚时最省力。",link:"https://www.tablecheck.com/shops/five-hyatt-centric-kanazawa/reserve"},
 {when:"现在",date:"10/15–17",title:"わらじや｜京都",status:"required" as Status,note:"鳗鱼锅与うぞふすい老铺；周二休，本行程可安排在京都住店期间。",link:"https://www.tablecheck.com/ja/shops/warajiya/reserve"},
 {when:"现在",date:"10/15–17",title:"東山 吉寿｜京都",status:"required" as Status,note:"午餐 12:00、晚餐 18:30 同时开席；14 席，先订再排当天行程。",link:"https://www.higashiyama-yosihisa.com/"},
 {when:"入住时",date:"10/18",title:"Suisen 共享厨房",status:"required" as Status,note:"酒店不供晚餐；若计划买食材回去做，必须向酒店预约约 15:00–23:00 的共享厨房。",link:"https://www.suisen-hakone.com/facilities/"},
 {when:"现在",date:"10/18",title:"森メシ｜宫之下",status:"strongly" as Status,note:"箱根关东煮、地鱼与豆腐料理；从大平台坐登山电车一站。",link:"https://miyanoshita.morimeshi.jp/"},
 {when:"现在",date:"10/19",title:"魚金 総本店｜新桥",status:"strongly" as Status,note:"热门海鲜居酒屋；最后一晚若想轻松热闹，建议先订。",link:"https://booking.ebica.jp/webrsv/search/e014122101/29525?isfixshop=true"},
 {when:"现在",date:"10/19",title:"鮨 ほづみ｜银座",status:"required" as Status,note:"仅 7 个柜台席；周一营业，若作为告别餐必须提前联系确认。",link:"https://www.sushihozumi.com/information/"},
 {when:"已可规划",date:"10/18",title:"京都 → 小田原 SmartEX",status:"must" as Status,note:"官方支持最早提前 1 年受理；优先直达小田原的 Hikari。",link:"https://global.jr-central.co.jp/en/onlinebooking/contents/shinkansen/"},
 {when:"9/10",date:"10/10",title:"N’EX / Skyliner 进城",status:"recommended" as Status,note:"通常提前 1 个月；若担心航班延误可落地再买。",link:"https://www.jreast.co.jp/en/multi/nex/tickets/"},
 {when:"已预订",date:"10/12",title:"Azusa 新宿 → 松本｜BOOKED / CONFIRMED",status:"confirmed" as Status,note:"10:00 新宿出发，12:37 松本抵达；2 位成人，Green Reserved，总价 ¥27,560，QR voucher。08:00 从东京王子大饭店离店，目标 09:00 前进入新宿 JR 区域。",link:"https://www.jreast.co.jp/en/multi/traininformation/azusa_kaiji/index.html"},
 {when:"已预订",date:"10/13",title:"上高地私人团｜BOOKED / CONFIRMED",status:"confirmed" as Status,note:"08:00 TABINO HOTEL Lit MATSUMOTO 接送；2 位成人，英语，约 8 小时，US$373.26。Custom drop-off confirmed with vendor：在上高地巴士总站结束。后续上高地→平汤→高山公交票不包含在 tour 内，需自行购买。",link:"https://www.getyourguide.com/nagano-l5079/from-nagano-kamikochi-private-day-trip-with-pickup-t1411016/"},
 {when:"9/14",date:"10/14",title:"高山 → 白川乡 → 金泽",status:"must" as Status,note:"两段一起订，避免中间无车可走。",link:"https://www.nouhibus.co.jp/highwaybus/toyama_en/"},
 {when:"9/15",date:"10/15",title:"金泽 → 京都（敦贺换乘）",status:"must" as Status,note:"两段指定席一起购买并留意换乘站台。",link:"https://www.westjr.co.jp/global/en/howto/train-reservation/condition/"},
 {when:"9/18",date:"10/18",title:"箱根周游券",status:"recommended" as Status,note:"从小田原出发的 2 日券；也可当日购买。",link:"https://www.hakonenavi.jp/international/en/discount_passes/free_pass"},
 {when:"已核实",date:"10/11 行李",title:"Tokyo Prince → Hyatt Centric Kanazawa",status:"confirmed" as Status,note:"两端官网均确认可寄 / 收。10/11 晚交给 1F Bell Desk，指定 10/14 到；写姓名、入住日与预订号，并提前通知 Hyatt。",link:"https://www.hyatt.com/hyatt-centric/en-US/kmqct-hyatt-centric-kanazawa/faqs"},
 {when:"10/15 入住时",date:"10/17 行李",title:"Hyatt Regency Kyoto → Ginza International Hotel",status:"must" as Status,note:"东京收件端已确认；京都 Hyatt 公开页面未写出件细节。入住时向礼宾确认，并于 10/17 交件，运费预付。",link:"https://www.ginkoku.co.jp/faq/"}
];
