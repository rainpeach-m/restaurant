<template>
  <div class="dish-page">
    <div class="dish-card">
      <img :src="dish.image" :alt="dish.name" class="dish-image" />
      <div class="dish-info">
        <h1 class="dish-name">{{ dish.name }}</h1>
        <p class="dish-desc">{{ dish.description }}</p>
        <p class="dish-price">¥ {{ dish.price.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dish',
  props: {
    dish: {
      type: Object,
      required: true,
      default: () => ({
        image: '/images/dish.jpg',
        name: '宫保鸡丁',
        description: '经典川菜，酸甜微辣，香嫩入味，佐以花生增添口感。',
        price: 28.0
      })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@500&display=swap');

.dish-page {
  background-color: #121212;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.dish-card {
  background-color: #1e1e1e;
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
  max-width: 600px;
  width: 100%;
  color: #fff;
  text-align: center;
}

.dish-image {
  width: 100%;
  border-radius: 1rem;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(255, 215, 0, 0.2);
  margin-bottom: 1.5rem;
}

.dish-name {
  font-family: 'Noto Serif SC', serif;
  font-size: 2.4rem;
  margin-bottom: 1rem;
  color: #ffd700;
}

.dish-desc {
  font-family: 'Noto Serif SC', serif;
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 1.5rem;
}

.dish-price {
  font-family: 'Noto Serif SC', serif;
  font-size: 1.8rem;
  color: #ffcc00;
  font-weight: bold;
}
</style>
