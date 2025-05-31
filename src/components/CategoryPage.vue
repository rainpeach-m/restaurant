<template>
  <div class="category-page">
    <div class="overlay">
      <!-- 顶部操作栏：返回 + 搜索框 -->
      <div class="top-bar">
        <!-- 返回按钮 -->
        <div class="back-button" @click="$router.push('/menu')" title="返回菜单">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span class="label">返回</span>
        </div>

        <!-- 搜索框 -->
        <div class="search-container">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            v-model="searchText"
            type="text"
            placeholder="搜索菜品..."
            class="search-input"
          />
        </div>
      </div>

      <h2 class="title">{{ categoryTitle }}</h2>

      <div class="dish-grid">
        <div class="dish-card" v-for="dish in filteredDishes" :key="dish.name">
          <img :src="dish.image" :alt="dish.name" class="dish-image" />
          <div class="dish-info">
            <h3 class="dish-name">{{ dish.name }}</h3>
            <p class="dish-description">{{ dish.description }}</p>
            <span class="dish-price">￥{{ dish.price }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const type = ref(route.params.type);
const dishes = ref([]);
const categoryTitle = ref('');
const searchText = ref('');

// 中文标题映射
const titleMap = {
  big: '热菜',
  cold: '凉菜',
  fire: '小炒',
  main_food: '主食',
  snack: '小吃'
};

// 加载对应种类数据
const loadDishes = async () => {
  try {
    const data = await import(`../data/${type.value}.js`);
    dishes.value = data.default;
    categoryTitle.value = titleMap[type.value] || '菜品分类';
  } catch (err) {
    console.error('未找到该分类数据：', err);
    dishes.value = [];
    categoryTitle.value = '菜品分类';
  }
};

// 过滤后的菜品列表
const filteredDishes = computed(() =>
  dishes.value.filter(dish =>
    dish.name.includes(searchText.value)
  )
);

// 初始加载 + 路由变化监听
onMounted(loadDishes);
watch(() => route.params.type, (newType) => {
  type.value = newType;
  loadDishes();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@500;700&display=swap');

.category-page {
  min-height: 100vh;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/images/home.webp') center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 4rem 2rem;
  color: #fff;
  font-family: 'Noto Serif SC', serif;
}

.overlay {
  width: 100%;
  max-width: 1200px;
}

/* 顶部操作栏 */
.top-bar {
  position: relative;
  display: flex;
  justify-content: center; /* 使搜索框居中 */
  align-items: center;
  margin-bottom: 1.5rem;
  min-height: 40px;
}

.back-button {
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffd700;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s ease;
  width: fit-content;
}

.back-button:hover {
  color: #ffea00;
}

.back-button .icon {
  width: 24px;
  height: 24px;
}

.back-button .label {
  font-weight: bold;
}

/* 搜索区域 */
.search-container {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  padding: 0.5rem 1rem;
  color: #fff;
  width: 300px;
}

.search-icon {
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
  stroke: #ccc;
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 1rem;
}

.search-input::placeholder {
  color: #ccc;
}

/* 标题 */
.title {
  font-size: 2.8rem;
  color: #ffd700;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: 0.2rem;
}

/* 菜品列表 */
.dish-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.dish-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
  transition: transform 0.3s ease;
}

.dish-card:hover {
  transform: scale(1.02);
}

.dish-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem 1rem 0 0;
}

.dish-info {
  padding: 1rem;
}

.dish-name {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #ffd700;
}

.dish-description {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #ddd;
}

.dish-price {
  font-size: 1.1rem;
  color: #fff;
  font-weight: bold;
}
</style>
