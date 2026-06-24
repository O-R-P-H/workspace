<template>
  <header class="botanic-header">
    <ul class="botanic-nav-list">
      <li><a href="#home" class="botanic-nav-link">Главная</a></li>
      <li><a href="#about" class="botanic-nav-link">О нас</a></li>
      <li><a href="#services" class="botanic-nav-link">Услуги и цены</a></li>
      <li><a href="#works" class="botanic-nav-link">Работы</a></li>
      <li><a href="#team" class="botanic-nav-link">Команда</a></li>
      <li><a href="#contact" class="botanic-nav-link">Контакты</a></li>
    </ul>
    <a
        href="#zapis"
        class="botanic-header-btn"
        @click.prevent="$emit('open-modal')"
    >
      Записаться
    </a>
  </header>
</template>

<script setup>
defineEmits(['open-modal'])
</script>

<style scoped>
/* ВЕРХНЕЕ МЕНЮ (HEADER) */
.botanic-header {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5%;
  box-sizing: border-box;
  z-index: 10;
}

/* Навигационный ряд */
.botanic-nav-list {
  display: flex;
  gap: clamp(1.5rem, 2.5vw, 3rem);
  list-style: none;
  margin: 0;
  padding: 0;
}

.botanic-nav-link {
  font-size: 0.8rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.botanic-nav-link:hover {
  color: #18A61F;
  text-shadow: 0 0 10px rgba(24, 166, 31, 0.4);
}

/* Кнопка в шапке */
.botanic-header-btn {
  padding: 0.7rem 2rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #ffffff;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  transition: all 0.4s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: inline-block;
  cursor: pointer;
}

.botanic-header-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: #ffffff;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.25), inset 0 0 10px rgba(255, 255, 255, 0.1);
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
}

/* Адаптив для мобильных устройств */
@media screen and (max-width: 1024px) {
  .botanic-header {
    padding: 1.5rem 5%;
  }

  .botanic-nav-list {
    display: none;
  }
}
</style>
