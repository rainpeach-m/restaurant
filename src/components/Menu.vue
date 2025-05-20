<template>
  <div class="menu-page">
    <div class="overlay">
      <h1 class="title">菜单分类</h1>
      <div class="category-grid">
        <div
          v-for="category in categories"
          :key="category.name"
          class="category-card"
          @click="goToCategory(category.route)"
        >
          <span>{{ category.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      categories: [
        { name: '热菜', route: 'big' },
        { name: '凉菜', route: 'cold' },
        { name: '小炒', route: 'fire' },
        { name: '主食', route: 'main_food' },
        { name: '小吃', route: 'snack' }
      ]
    }
  },
  methods: {
    goToCategory(routeName) {
      this.$router.push(`/menu/${routeName}`)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@500;700&display=swap');

.menu-page {
  height: 100vh;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('/images/home.webp') center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  text-align: center;
  color: white;
  margin-top: -100px;
}

.title {
  font-family: 'Noto Serif SC', serif;
  font-size: 4rem;
  color: #ffd700;
  margin-bottom: 3rem;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.category-card {
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid #ffd700;
  padding: 2rem;
  border-radius: 1rem;
  font-size: 1.8rem;
  font-family: 'Noto Serif SC', serif;
  color: #ffd700;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
  background-color: rgba(255, 215, 0, 0.2);
}
</style>
