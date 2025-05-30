const base = import.meta.env.BASE_URL;

export default [
  { name: '烤冷面', description: '铁板嗞响 蛋酱交响', price: 12, image: `${base}images/snack/BBQ_cold_noodles.webp` }, 
  { name: '东坡肉', description: '琥珀酒香 酥方脂凝', price: 18, image: `${base}images/snack/east_sidehill_pork.webp` },
  { name: '桥头排骨', description: '桥头秘方 骨酥蒜浪', price: 19, image: `${base}images/snack/bridge_head_rib.webp` }, 
  { name: '长沙臭豆腐', description: '黑色经典 蒜辣灌汤', price: 9, image: `${base}images/snack/changsha_smelly_tofu.webp` },
  { name: '烤鸡腿', description: '焦糖脆皮 肉汁暗涌', price: 9, image: `${base}images/snack/chicken_leg.webp` },
  { name: '炸茄盒', description: '茄肉爆浆 黄金脆衣', price: 15, image: `${base}images/snack/eggplant_box.webp` },
  { name: '麦肯套餐', description: '拳打K记 脚踢麦麦', price: 22, image: `${base}images/snack/fried_chicken_suit.webp` },
  { name: '炸平菇', description: '酥如薄纸 椒盐撒欢', price: 16,  image: `${base}images/snack/fried_flat_mushroom.webp` },
  { name: '港式烧腊', description: '明炉脆皮 蜜汁透光', price: 19, image: `${base}images/snack/HongKong_charsiu.webp` },
  { name: '红烧狮子头', description: '七瘦三肥 掌中颤肉', price: 8, image: `${base}images/snack/lion_head.webp` },
  { name: '小酥肉', description: '椒麻酥衣 肉汁暗涌', price: 12, image: `${base}images/snack/little_su_meat.webp` },
  { name: '章鱼小丸子', description: '日式街风 木鱼花舞', price: 15, image: `${base}images/snack/octopus_ball.webp` },
  { name: '香酥凤尾虾', description: '凤尾金翎 虾肉弹月', price: 20, image: `${base}images/snack/phoenix_tail_shrimp.webp` },
  { name: '鸡蛋羹', description: '镜面滑嫩 瑶柱点睛', price: 8, image: `${base}images/snack/steamed_egg.webp` },
  { name: '烤茄子', description: '蒜油汪洋 茄肉化泥', price: 15, image: `${base}images/snack/BBQ_eggplant.webp` },
  { name: '蟹黄包', description: '吸管先品 金汤爆涌', price: 18, image: `${base}images/snack/crab_yellow_bag.webp` },
  { name: '油炸鳕鱼排', description: '雪白鱼浪 黄金脆甲', price: 8, image: `${base}images/snack/fried_codfish.webp` },
  { name: '黄金炸猪排', description: '日式厚切 肉汁暗潮', price: 18, image: `${base}images/snack/golden_pork.webp` },
  { name: '手抓饼', description: '千层金丝 掌心余温', price: 8, image: `${base}images/snack/hand_grab_pancake.webp` },
  { name: '热狗', description: '爆汁肉肠 蜂蜜芥末', price: 8, image: `${base}images/snack/hot_dog.webp` },
  { name: '鲜肉锅贴', description: '冰花脆底 肉馅喷香', price: 8, image: `${base}images/snack/pot_paste.webp` },
  { name: '三文鱼寿司', description: '挪威橙霞 山葵轻吻', price: 28, image: `${base}images/snack/salmon_sushi.webp` },
  { name: '锡纸娃娃菜', description: '蒜蓉金汤 鲜甜本味', price: 12, image: `${base}images/snack/tin_foil_cabbage.webp` },

  // 甜品
  { name: '黄桃罐头', description: '童年琥珀 果肉颤甜', price: 8, image: `${base}images/snack/canned_yellow_peach.webp` },
  { name: '油炸冰淇淋', description: '冰火奇袭 黄金脆甲', price: 3, image: `${base}images/snack/fried_icecream.webp` },
  { name: '葡式蛋挞', description: '焦糖斑纹 葡式酥皮', price: 9, image: `${base}images/snack/egg_tart.webp` },
  { name: '香芋地瓜丸', description: '双色太极 流心烫舌', price: 18, image: `${base}images/snack/taro_ball.webp` },


  // 喝的
  { name: '冰可乐', description: '气泡炸喉 透心冰爽', price: 5, image: `${base}images/snack/z_cola.webp` },
  { name: '冰镇葡萄汁', description: '冰晶沁爽 葡萄冷萃', price: 5, image: `${base}images/snack/z_grape_juice.webp` },
  { name: '青梅绿茶', description: '梅酸解腻 茶香回甘', price: 5, image: `${base}images/snack/z_green_plum.webp` }, 
  { name: '冰红茶', description: '琥珀透光 冰舌生津', price: 5, image: `${base}images/snack/z_ice_red_tea.webp` },
  { name: '冰镇阿萨姆', description: '冰晶沁爽 茶香丝滑', price: 5, image: `${base}images/snack/z_milk_tea.webp` },
  { name: '纯牛奶', description: '黄金奶源 零添加醇', price: 3, image: `${base}images/snack/z_milk.webp` },
  { name: '冰镇橙汁', description: '冰晶沁爽 果粒爆汁', price: 5, image: `${base}images/snack/z_orange_juice.webp` },
  { name: '金桔柠檬', description: '现捣果粒 酸爽醒神', price: 5, image: `${base}images/snack/z_orange_lemon.webp` },
  { name: '冰镇桃汁', description: '冰晶沁爽 蜜桃甜吻', price: 5, image: `${base}images/snack/z_peach_juice.webp` },
  { name: '酸梅汤', description: '古法熬制 乌梅烟熏', price: 5, image: `${base}images/snack/z_sour_plum.webp` }, 
  { name: '冰雪碧', description: '冰雾缭绕 气泡冲锋', price: 5, image: `${base}images/snack/z_sprite.webp` },
];
