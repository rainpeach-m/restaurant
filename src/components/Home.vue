<template>
  <div class="home">
    <div class="overlay">
      <!-- 修改为饭店名称在上半部分 -->
      <h1 class="title">
        <span class="chinese-brush">饭店名</span>
        <div class="subtitle">传承经典 · 品味匠心</div>
      </h1>
      
      <!-- 修改为浏览菜单按钮在下半部分 -->
      <button class="browse-btn" @click="goToMenu">
        <span class="btn-text">品鉴菜单</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToMenu() {
      this.$router.push('/menu')
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  background: #000;
  border: none;
  overflow: hidden;
}

.home {
  height: 100vh;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('/images/home.webp') center/contain;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
}

/* overlay 中的内容 */
.overlay {
  position: relative;
  height: 100%;
  width: 100%;
  text-align: center;
  padding-top: 6rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 饭店名称部分 */
.title {
  color: #fff;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.chinese-brush {
  font-family: 'Zhi Mang Xing', cursive;
  font-weight: 700;
  font-size: 7rem;
  letter-spacing: 0.5rem;
  display: block;
  animation: fadeInUp 1s ease;
}

.subtitle {
  font-family: 'Noto Serif SC', serif;
  font-size: 2rem;
  margin-top: 1.3rem;
  color: #ffd700;
  opacity: 0.9;
}

/* 中式按钮样式 */
.browse-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  position: relative;
  display: inline-block;
  margin-top: 6rem;          /* 将按钮推到底部 */
  margin-bottom: 8rem;       /* 控制离底部距离，可调节按钮向上移动 */
}

.btn-text {
  display: block;
  font-family: 'Noto Serif SC', serif;
  font-size: 1.8rem;
  color: #ffd700;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  position: relative;
}

/* 使用 ::before 和 ::after 模拟下划线从中间向两侧展开 */
.btn-text::before,
.btn-text::after {
  content: '';
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 0;
  background: #ffd700;
  transition: width 0.3s ease;
}

.btn-text::before {
  left: 50%;
  transform: translateX(-100%);
}

.btn-text::after {
  right: 50%;
  transform: translateX(100%);
}



.browse-btn:hover .btn-text {
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
}

.browse-btn:hover .btn-text::before,
.browse-btn:hover .btn-text::after {
  width: 50%;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
