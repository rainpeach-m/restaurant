<template>
  <div class="home">
    <div class="overlay">
      <!-- 修改为饭店名称在上半部分 -->
      <h1 class="title">
        <span class="chinese-brush">御膳坊</span>
        <div class="subtitle">传承经典 · 品味匠心</div>
      </h1>
      
      <!-- 修改为浏览菜单按钮在下半部分 -->
      <button class="browse-btn" @click="goToMenu">
        <span class="btn-text">品鉴菜单</span>
        <div class="underline"></div>
      </button>
    </div>
  </div>
</template>

<style scoped>
/* 引入思源黑体中文书法字体 */
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;700&display=swap');

.home {
  height: 100vh;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('/home.webp') center/cover;
  position: relative;
  display: flex;
  flex-direction: column; /* 让内容上下排列 */
  align-items: center;
  justify-content: space-between; /* 上半部分和下半部分分开 */
  overflow: hidden;
}

/* overlay 中的内容 */
.overlay {
  position: relative;
  width: 100%;
  text-align: center;
  padding: 2rem;
}

/* 饭店名称部分 */
.title {
  color: #fff;
  margin-bottom: 16rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.chinese-brush {
  font-family: 'Zhi Mang Xing', cursive; /* 新书法字体 */
  font-weight: 700;
  font-size: 10rem; /* 调整更大的字体 */
  letter-spacing: 0.5rem;
  display: block;
  animation: fadeInUp 1s ease;
}

.subtitle {
  font-family: 'Noto Serif SC', serif;
  font-size: 3rem;
  margin-top: 1rem;
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
  margin-bottom: 3rem; /* 按钮距离底部留空 */
}

.btn-text {
  display: block;
  font-family: 'Noto Serif SC', serif;
  font-size: 1.8rem;
  color: #ffd700;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
}

.underline {
  height: 2px;
  background: #ffd700;
  width: 0;
  margin: 0 auto;
  transition: width 0.3s ease;
}

.browse-btn:hover .btn-text {
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
}

.browse-btn:hover .underline {
  width: 100%;
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
