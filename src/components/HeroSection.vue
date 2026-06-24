<template>
  <div class="botanic-hero-wrapper">
    <div class="botanic-hero-section">
      <!-- Фоновая карусель -->
      <div class="botanic-bg-carousel">
        <div class="botanic-bg-slide"></div>
        <div class="botanic-bg-slide"></div>
      </div>

      <!-- Левая главная панель -->
      <div class="botanic-glass-panel">
        <div class="botanic-aurora-glow"></div>
        <span class="botanic-tagline">Premium Hair Care</span>
        <h1>Органическое<br><strong>окрашивание</strong></h1>
        <p>Концептуальный уход и формулы Organic Colour Systems из Великобритании для абсолютной безопасности вашего здоровья и безупречной эстетики волос.</p>
        <a
            href="#zapis"
            class="botanic-hero-btn"
            @click.prevent="$emit('open-modal')"
        >
          Заказать звонок
        </a>
      </div>

      <!-- Правая часть: Горизонтальный ряд карточек -->
      <div class="botanic-info-wrapper">
        <div class="botanic-info-card">
          <div class="botanic-aurora-glow"></div>
          <h4>30 лет</h4>
          <p>опыта разработки натуральных средств Herb UK Ltd</p>
        </div>
        <div class="botanic-info-card">
          <div class="botanic-aurora-glow"></div>
          <h4>95%</h4>
          <p>чистых природных компонентов в составе</p>
        </div>
        <div class="botanic-info-card">
          <div class="botanic-aurora-glow"></div>
          <h4>100%</h4>
          <p>закрашивание седины без вреда для волос</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['open-modal'])
</script>

<style scoped>
.botanic-hero-wrapper {
  overflow: hidden;
  width: 100%;
  position: relative;
}

/* Основная секция */
.botanic-hero-section {
  position: relative;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: clamp(2rem, 5vw, 4rem);
  font-family: 'Inter', sans-serif;
  padding: clamp(6rem, 12vh, 8rem) 5% clamp(3rem, 8vh, 5rem) 5%;
  box-sizing: border-box;
  background: transparent;
}

/* ЧИСТАЯ CSS-КАРУСЕЛЬ ДЛЯ ФОНА */
.botanic-bg-carousel {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.botanic-bg-slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  animation: botanicFadeCarousel 16s infinite ease-in-out;
}

.botanic-bg-slide:nth-child(1) {
  background-image: url('https://www.botanic-salon.ru/wp-content/uploads/2019/02/salon5.jpg');
}

.botanic-bg-slide:nth-child(2) {
  background-image: url('https://www.botanic-salon.ru/wp-content/uploads/2019/02/salon8.jpg');
  animation-delay: -8s;
}

@keyframes botanicFadeCarousel {
  0%, 45% { opacity: 1; }
  50%, 95% { opacity: 0; }
  100% { opacity: 1; }
}

/* Затемнение фона для читаемости */
.botanic-hero-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.5) 100%);
  z-index: 1;
  pointer-events: none;
}

/* ОБЩИЕ СТИЛИ ДЛЯ ВСЕХ КАРТОЧЕК */
.botanic-glass-panel,
.botanic-info-card {
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-left: 2px solid #18A61F;
  border-radius: 0 16px 16px 0;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  color: #ffffff;
  z-index: 2;
}

/* Выводим контент поверх сияния */
.botanic-glass-panel :deep(h1),
.botanic-glass-panel :deep(p),
.botanic-glass-panel :deep(span),
.botanic-hero-btn,
.botanic-info-card :deep(h4),
.botanic-info-card :deep(p) {
  position: relative;
  z-index: 2;
}

/* ДЕКОРАТИВНОЕ ВНУТРЕННЕЕ СВЕЧЕНИЕ AURORA */
.botanic-aurora-glow {
  position: absolute;
  top: -20%;
  left: -20%;
  width: 140%;
  height: 140%;
  background:
      radial-gradient(circle at 20% 30%, rgba(24, 166, 31, 0.2) 0%, transparent 55%),
      radial-gradient(circle at 75% 65%, rgba(24, 166, 31, 0.15) 0%, transparent 60%),
      radial-gradient(circle at 50% 80%, rgba(24, 166, 31, 0.1) 0%, transparent 50%);
  filter: blur(45px);
  border-radius: 43% 57% 38% 62% / 51% 45% 55% 49%;
  z-index: 0;
  pointer-events: none;
  animation: botanicAuroraDrift 20s infinite alternate ease-in-out;
}

.botanic-info-card .botanic-aurora-glow {
  filter: blur(25px);
  animation-delay: -5s;
  animation-duration: 17s;
}

@keyframes botanicAuroraDrift {
  0% {
    transform: rotate(0deg) scale(1) translate(0px, 0px);
    border-radius: 43% 57% 38% 62% / 51% 45% 55% 49%;
  }
  50% {
    transform: rotate(4deg) scale(1.08) translate(5px, -10px);
    border-radius: 55% 45% 60% 40% / 40% 58% 42% 60%;
  }
  100% {
    transform: rotate(-3deg) scale(0.95) translate(-5px, 5px);
    border-radius: 40% 60% 45% 55% / 53% 41% 59% 47%;
  }
}

/* Левая главная панель */
.botanic-glass-panel {
  flex: 0 1 480px;
  width: 100%;
  padding: clamp(2.5rem, 5vh, 4rem) clamp(2rem, 3vw, 3rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.botanic-tagline {
  font-size: clamp(0.7rem, 1vw, 0.8rem);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #ffffff;
  margin-bottom: 1rem;
  display: block;
  position: relative;
  z-index: 2;
}

.botanic-glass-panel h1 {
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  line-height: 1.15;
  font-weight: 300;
  margin: 0 0 1.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.botanic-glass-panel h1 strong {
  font-weight: 500;
}

.botanic-glass-panel p {
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  font-weight: 300;
  line-height: 1.6;
  margin: 0 0 2.5rem 0;
  color: rgba(255, 255, 255, 0.85);
}

/* Кнопка */
.botanic-hero-btn {
  align-self: flex-start;
  padding: 1rem 3rem;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #ffffff;
  text-decoration: none;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  transition: all 0.4s ease;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  z-index: 2;
}

.botanic-hero-btn:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: #ffffff;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.1);
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
}

/* Правая часть: Горизонтальный ряд карточек */
.botanic-info-wrapper {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1.5rem;
  flex: 1 1 auto;
  max-width: 800px;
  flex-wrap: wrap;
}

.botanic-info-card {
  padding: 1.5rem;
  flex: 1;
  min-width: 160px;
}

.botanic-info-card h4 {
  font-size: 1.8rem;
  font-weight: 400;
  color: #ffffff;
  margin: 0 0 0.4rem 0;
  line-height: 1;
}

.botanic-info-card p {
  font-size: 0.8rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.4;
}

/* Адаптив для планшетов и мобильных устройств */
@media screen and (max-width: 1024px) {
  .botanic-hero-section {
    flex-direction: column;
    align-items: stretch;
    padding: 6rem 5% 3rem 5%;
    gap: 3rem;
  }

  .botanic-glass-panel {
    max-width: 100%;
  }

  .botanic-info-wrapper {
    max-width: 100%;
    justify-content: flex-start;
  }

  .botanic-aurora-glow {
    transform: none !important;
    animation: none !important;
  }
}

@media screen and (max-width: 640px) {
  .botanic-info-wrapper {
    flex-direction: column;
  }
}
</style>
