<template>
  <div id="app-root">
    <BotanicHeader @open-modal="handleOpenModal" />
    <HeroSection @open-modal="handleOpenModal" />

    <!-- Здесь будешь добавлять свои будущие компоненты -->
    <!-- <AboutSection /> -->
    <!-- <ServicesSection /> -->
    <!-- <GallerySection /> -->
    <!-- <TeamSection /> -->
    <!-- <ContactSection /> -->

    <!-- Модалка (заглушка, потом заменишь на нормальную) -->
    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="modal-content">
        <h2>Форма записи</h2>
        <p>Здесь будет форма записи</p>
        <button @click="showModal = false" class="modal-close-btn">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BotanicHeader from './components/BotanicHeader.vue'
import HeroSection from './components/HeroSection.vue'

const showModal = ref(false)

function handleOpenModal() {
  showModal.value = true
}
</script>

<style scoped>
#app-root {
  min-height: 100vh;
  background: #000;
}

/* Временная модалка */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.modal-content {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 3rem;
  color: #fff;
  text-align: center;
}

.modal-content h2 {
  margin-bottom: 1rem;
}

.modal-close-btn {
  margin-top: 1.5rem;
  padding: 0.7rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  color: #fff;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;
}

.modal-close-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
