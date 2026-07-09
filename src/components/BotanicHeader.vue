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
    <a href="#zapis" data-toggle="modal" data-target="#zapis" class="botanic-header-btn" @click.prevent="$emit('cta')">Записаться</a>
  </header>
</template>

<script setup>
defineEmits(['cta'])
</script>

<style scoped>
/*
  Стили работают через глобальный CSS в App.vue.
  Здесь scoped пустой — можешь добавлять специфичные для хедера стили.
*/
</style>
