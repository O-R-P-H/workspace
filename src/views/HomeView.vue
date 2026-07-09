<template>
  <div class="botanic-scope-wrapper">

    <!-- ==================== HEADER ==================== -->
    <header class="botanic-header" :class="{ 'sticky': isSticky }">
      <div class="botanic-logo-group">
        <router-link to="/" class="botanic-logo-link">
          <img src="https://static.tildacdn.ink/tild3634-3765-4962-b736-613966666539/Group_121.png" alt="Botanic Salon" class="botanic-logo-img">
        </router-link>
      </div>

      <ul class="botanic-nav-list">
        <li><a href="#home" class="botanic-nav-link">Главная</a></li>
        <li><a href="#about" class="botanic-nav-link">О нас</a></li>
        <li><a href="#services" class="botanic-nav-link">Услуги и цены</a></li>
        <li><a href="#team" class="botanic-nav-link">Команда</a></li>
        <li><a href="#contact" class="botanic-nav-link">Контакты</a></li>
      </ul>

      <button
          class="botanic-burger-btn"
          :class="{ 'active': isMenuOpen }"
          @click="toggleMenu"
          aria-label="Меню"
          type="button"
      >
        <span></span><span></span><span></span>
      </button>
    </header>

    <div class="botanic-menu-overlay" :class="{ 'active': isMenuOpen }" @click="closeMenu"></div>
    <nav class="botanic-mobile-menu" :class="{ 'active': isMenuOpen }">
      <ul class="botanic-mobile-nav-list">
        <li><a href="#home" class="botanic-mobile-nav-link" @click="closeMenu">Главная</a></li>
        <li><a href="#about" class="botanic-mobile-nav-link" @click="closeMenu">О нас</a></li>
        <li><a href="#services" class="botanic-mobile-nav-link" @click="closeMenu">Услуги и цены</a></li>
        <li><a href="#team" class="botanic-mobile-nav-link" @click="closeMenu">Команда</a></li>
        <li><a href="#contact" class="botanic-mobile-nav-link" @click="closeMenu">Контакты</a></li>
      </ul>
    </nav>

    <!-- ==================== HERO SECTION ==================== -->
    <div class="botanic-hero-section" id="home">
      <div class="botanic-bg-carousel">
        <div class="botanic-bg-slide"></div>
        <div class="botanic-bg-slide"></div>
      </div>

      <div class="botanic-glass-panel">
        <div class="botanic-hero-aurora-glow"></div>
        <span class="botanic-tagline">Premium Hair Care</span>
        <h1>Органическое<br><strong>окрашивание</strong></h1>
        <p>Organic colour systems, независимый бренд из Великобритании, первые в мире разработали формулы для максимально безопасного окрашивания волос и для сохранения здоровья мастерам и клиентам.</p>
      </div>

      <div class="botanic-info-wrapper">
        <div class="botanic-info-card">
          <div class="botanic-hero-aurora-glow"></div>
          <h4>с 1990</h4>
          <p>опыт разработки натуральной косметики для волос и витаминных комплексов для приёма внутрь</p>
        </div>
        <div class="botanic-info-card">
          <div class="botanic-hero-aurora-glow"></div>
          <h4>95%</h4>
          <p>натуральных органических компонентов в составе</p>
        </div>
        <div class="botanic-info-card">
          <div class="botanic-hero-aurora-glow"></div>
          <h4>100%</h4>
          <p>закрашивание седины без аммиака и резорцинола</p>
        </div>
      </div>

      <!-- Mobile Hero -->
      <div class="hero-mobile">
        <div class="hero-mobile-top">
          <h1 class="hero-mobile-title">Органическое<br><strong>окрашивание</strong></h1>
          <p class="hero-mobile-text">Organic colour systems, независимый бренд из Великобритании, первые в мире разработали формулы для максимально безопасного окрашивания волос и для сохранения здоровья мастерам и клиентам.</p>
        </div>

        <div class="hero-mobile-cards">
          <div class="hero-mobile-card">
            <div class="hero-mobile-card-digit">с 1990</div>
            <div class="hero-mobile-card-text">опыт разработки натуральной косметики для волос и витаминных комплексов для приёма внутрь</div>
          </div>
          <div class="hero-mobile-card">
            <div class="hero-mobile-card-digit">95%</div>
            <div class="hero-mobile-card-text">натуральных органических компонентов в составе</div>
          </div>
          <div class="hero-mobile-card">
            <div class="hero-mobile-card-digit">100%</div>
            <div class="hero-mobile-card-text">закрашивание седины без аммиака и резорцинола</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ==================== 1. ABOUT SECTION ==================== -->
    <div class="botanic-about-section" id="about">
      <div class="botanic-about-glass">
        <div class="about-inner-redesigned">
          <div class="about-text-col">
            <span class="about-label-new about-animate-new">О салоне</span>
            <h2 class="about-title-new about-animate-new">Первый в России салон<br><strong>органического&nbsp;окрашивания</strong></h2>
            <p class="about-text-new about-animate-new">
              Мы, Ботаник салон, с 2010 специализируемся на сертифицированной британской системе окрашивания волос Organic Colour Systems. А так же являемся классическим парикмахерским салоном с индивидуальным подходом к каждому клиенту.
            </p>
            <ul class="about-features-new about-animate-new">
              <li><strong>ЛУЧШИЕ БРЕНДЫ</strong> профессиональной косметики для работы.</li>
              <li><strong>ПРОФЕССИОНАЛЬНАЯ КОМАНДА</strong> мастеров с многолетним опытом работы и классическим парикмахерским образованием.</li>
              <li><strong>В ЦЕНТРЕ МОСКВЫ</strong> шаговая доступность от метро.</li>
            </ul>
          </div>

          <!-- Колонки галереи О салоне (Добавлены события клика для Lightbox) -->
          <div class="about-gallery-col">
            <div class="gallery-item about-animate-new" style="background-image: url('https://www.botanic-salon.ru/wp-content/uploads/2019/02/salon5.jpg');" @click="openLightbox('https://www.botanic-salon.ru/wp-content/uploads/2019/02/salon5.jpg')"></div>
            <div class="gallery-item about-animate-new" style="background-image: url('https://www.botanic-salon.ru/wp-content/uploads/2019/02/salon8.jpg');" @click="openLightbox('https://www.botanic-salon.ru/wp-content/uploads/2019/02/salon8.jpg')"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- ==================== 2. SERVICES SECTION ==================== -->
    <div class="botanic-services-section" id="services">
      <div class="botanic-services-aurora">
        <div class="botanic-services-aurora-extra"></div>
      </div>

      <div class="botanic-services-glass">
        <div class="services-header about-animate-new">
          <span class="about-label-new">Услуги и цены</span>
          <h2 class="services-title">Прайс-<strong>лист</strong></h2>
        </div>

        <div class="services-grid">
          <!-- 1. Парикмахерские услуги -->
          <div class="service-card about-animate-new">
            <div class="service-card-inner">
              <h3>Парикмахерские услуги</h3>
              <ul class="service-list">
                <li>
                  <span class="service-name">Окрашивание Organic Color Systems</span>
                  <span class="service-price">от 8 000 руб.</span>
                </li>
                <li>
                  <span class="service-name">Стрижка</span>
                  <span class="service-price">от 3 700 руб.</span>
                </li>
                <li>
                  <span class="service-name">Укладка</span>
                  <span class="service-price">от 2 000 руб.</span>
                </li>
                <li>
                  <span class="service-name">Уход</span>
                  <span class="service-price">от 2 000 руб.</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- 2. Маникюр и педикюр -->
          <div class="service-card about-animate-new" style="transition-delay: 0.15s;">
            <div class="service-card-inner">
              <h3>Маникюр и педикюр</h3>
              <ul class="service-list">
                <li>
                  <span class="service-name">Маникюр</span>
                  <span class="service-price">от 1 950 руб.</span>
                </li>
                <li>
                  <span class="service-name">Мужской маникюр</span>
                  <span class="service-price">от 2 500 руб.</span>
                </li>
                <li>
                  <span class="service-name">Педикюр</span>
                  <span class="service-price">от 3 800 руб.</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- 3. Дополнительно -->
          <div class="service-card about-animate-new" style="transition-delay: 0.3s;">
            <div class="service-card-inner">
              <h3>Дополнительно</h3>
              <ul class="service-list">
                <li>
                  <span class="service-name">Окрашивание и коррекция бровей</span>
                  <span class="service-price">от 1 650 руб.</span>
                </li>
                <li>
                  <span class="service-name">Макияж</span>
                  <span class="service-price">от 5 000 руб.</span>
                </li>
                <li>
                  <span class="service-name">Причёска и макияж</span>
                  <span class="service-price">от 12 000 руб.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ==================== 3. TEAM SECTION ==================== -->
    <div class="botanic-team-section" id="team">
      <div class="botanic-team-glass">
        <div class="services-header about-animate-new">
          <span class="about-label-new">Команда профессионалов</span>
          <h2 class="services-title">Наши <strong>специалисты</strong></h2>
        </div>

        <div class="team-grid">
          <!-- 1. Антон Прокофьев -->
          <div class="team-card about-animate-new">
            <div class="team-img-wrapper">
              <img src="https://www.botanic-salon.ru/wp-content/uploads/2018/11/MG_9654-270x270.jpg" alt="Антон Прокофьев" loading="lazy">
            </div>
            <h3>Антон Прокофьев</h3>
            <div class="team-role">Парикмахер, колорист, технолог, основатель Ботаник</div>
            <p class="team-desc" style="color: #18A61F; font-weight: 600 !important; margin-bottom: 8px;">Специалист по здоровью волос</p>
            <p class="team-desc">Опыт с 1999 года. Мастер точных геометрических стрижек, сложных укладок и глубокого восстановления поврежденной структуры волос.</p>
          </div>

          <!-- 2. Ольга Хорунжая -->
          <div class="team-card about-animate-new" style="transition-delay: 0.15s;">
            <div class="team-img-wrapper">
              <img src="https://www.botanic-salon.ru/wp-content/uploads/2018/11/MG_9272-270x270.jpg" alt="Ольга Хорунжая" loading="lazy">
            </div>
            <h3>Ольга Хорунжая</h3>
            <div class="team-role">Парикмахер-стилист, художник-модельер</div>
            <p class="team-desc" style="color: #18A61F; font-weight: 600 !important; margin-bottom: 8px;">Специалист по уходу за волосами</p>
            <p class="team-desc">Более 20 лет опыта работы. Творческий подход и фантазийность в создании образов делает её клиентов счастливыми и по-настоящему неповторимыми.</p>
          </div>

          <!-- 3. Елена Дуброва -->
          <div class="team-card about-animate-new" style="transition-delay: 0.3s;">
            <div class="team-img-wrapper">
              <img src="https://www.botanic-salon.ru/wp-content/uploads/2018/11/MG_9548-270x270.jpg" alt="Елена Дуброва" loading="lazy">
            </div>
            <h3>Елена Дуброва</h3>
            <div class="team-role">Парикмахер-стилист, художник-модельер</div>
            <p class="team-desc" style="color: #18A61F; font-weight: 600 !important; margin-bottom: 8px;">Специалист по уходу за волосами</p>
            <p class="team-desc">Более 20 лет опыта работы. Индивидуальный подход и максимальная практичность в работе сохраняет преданность клиентов к мастеру на долгие годы.</p>
          </div>

          <!-- 4. Антон Потапов -->
          <div class="team-card about-animate-new">
            <div class="team-img-wrapper">
              <img src="https://www.botanic-salon.ru/wp-content/uploads/2018/11/MG_9436-270x270.jpg" alt="Антон Потапов" loading="lazy">
            </div>
            <h3>Антон Потапов</h3>
            <div class="team-role">Парикмахер-стилист</div>
            <p class="team-desc" style="color: #18A61F; font-weight: 600 !important; margin-bottom: 8px;">Специалист по уходу за волосами</p>
            <p class="team-desc">Мастер из Санкт-Петербурга с более 20 летним опытом работы. Спокойствие и доверие к нему, как к мастеру, сразу располагает клиентов на открытый диалог.</p>
          </div>

          <!-- 5. Ксения Грекова -->
          <div class="team-card about-animate-new" style="transition-delay: 0.15s;">
            <div class="team-img-wrapper">
              <img src="https://www.botanic-salon.ru/wp-content/uploads/2018/11/MG_9377-270x270.jpg" alt="Ксения Грекова" loading="lazy">
            </div>
            <h3>Ксения Грекова</h3>
            <div class="team-role">Парикмахер-стилист, художник-модельер</div>
            <p class="team-desc" style="color: #18A61F; font-weight: 600 !important; margin-bottom: 8px;">Специалист по уходу за волосами</p>
            <p class="team-desc">Более 20 лет опыта работы. Классические техники и технологии, уверенность и расположение к себе, позволяют клиентам добиваться качественных результатов.</p>
          </div>

          <!-- 6. Лидия Глейзер (Овсянникова) -->
          <div class="team-card about-animate-new" style="transition-delay: 0.3s;">
            <div class="team-img-wrapper">
              <img src="https://www.botanic-salon.ru/wp-content/uploads/2018/11/MG_9106-270x270.jpg" alt="Лидия Глейзер (Овсянникова)" loading="lazy">
            </div>
            <h3>Лидия Глейзер</h3>
            <div class="team-role">Мастер ногтевого сервиса</div>
            <p class="team-desc" style="color: #18A61F; font-weight: 600 !important; margin-bottom: 8px;">Специалист по уходу за волосами</p>
            <p class="team-desc">Мастер с более 20 летним опытом работы. Исключительная лёгкость рук и ауры располагает клиентов к максимальному отдыху и комфорту.</p>
          </div>

          <!-- 7. Марина Яремчук -->
          <div class="team-card about-animate-new" style="transition-delay: 0.45s;">
            <div class="team-img-wrapper">
              <img src="https://www.botanic-salon.ru/wp-content/uploads/2018/11/MG_9205-270x270.jpg" alt="Марина Яремчук" loading="lazy">
            </div>
            <h3>Marina Yaremchuk</h3>
            <div class="team-role">Мастер ногтевого сервиса</div>
            <p class="team-desc" style="color: #18A61F; font-weight: 600 !important; margin-bottom: 8px;">Специалист по уходу за волосами</p>
            <p class="team-desc">Более 20 лет опыта работы. Чёткость и чистота работы, фантазийность и творческий подход, делает из процедур ухода настоящее искусство.</p>
          </div>

          <!-- 8. Ольга Винник -->
          <div class="team-card about-animate-new">
            <div class="team-img-wrapper">
              <img src="https://www.botanic-salon.ru/wp-content/uploads/2018/11/MG_9147-270x270.jpg" alt="Ольга Винник" loading="lazy">
            </div>
            <h3>Ольга Винник</h3>
            <div class="team-role">Старший администратор</div>
            <p class="team-desc">Координирует работу салона, заботится о комфорте каждого гостя и помогает подобрать удобное время для визита.</p>
          </div>

          <!-- 9. Светлана Уткина -->
          <div class="team-card about-animate-new" style="transition-delay: 0.15s;">
            <div class="team-img-wrapper" style="display: flex; align-items: center; justify-content: center; background: rgba(10, 20, 12, 0.05);">
              <!-- Заглушка SVG вместо отсутствующего фото -->
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="opacity: 0.3;">
                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#050806"/>
              </svg>
            </div>
            <h3>Светлана Уткина</h3>
            <div class="team-role">Администратор</div>
            <p class="team-desc">Координирует работу салона, заботится о комфорте каждого гостя и помогает подобрать удобное время для визита.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ==================== 4. CONTACTS SECTION ==================== -->
    <div class="botanic-contacts-section" id="contact">
      <div class="botanic-contacts-aurora">
        <div class="botanic-contacts-aurora-extra"></div>
      </div>

      <div class="botanic-contacts-glass">
        <div class="contacts-container">

          <div class="contacts-info-side">
            <div class="contacts-header about-animate-new">
              <span class="about-label-new">Контакты</span>
              <h2 class="contacts-title">Ждем вас в <strong>салоне</strong></h2>
            </div>

            <div class="contacts-grid about-animate-new">
              <div class="contact-item-box">
                <h4>Адрес</h4>
                <p>Москва, Пушкарёв переулок, дом 8<br>м. Трубная / м. Цветной бульвар / м. Сухаревская</p>
              </div>
              <div class="contact-item-box">
                <h4>Режим работы</h4>
                <p>Ежедневно с 10:00 до 22:00<br>Без выходных</p>
              </div>
              <div class="contact-item-box">
                <h4>Телефоны</h4>
                <a href="tel:+79672301233" style="display: block; margin-bottom: 5px;">+7 (967) 230-12-33</a>
                <a href="tel:+79672320303" style="display: block;">+7 (967) 232-03-03</a>
              </div>
              <div class="contact-item-box">
                <h4>Электронная почта</h4>
                <a href="mailto:botanic-salon2016@mail.ru">botanic-salon2016@mail.ru</a>
              </div>
            </div>
          </div>

          <!-- Yandex Map Frame -->
          <div class="contacts-map-side about-animate-new">
            <iframe
                src="https://yandex.ru/map-widget/v1/?text=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D0%9F%D1%83%D1%88%D0%BA%D0%B0%D1%80%D1%91%D0%B2%20%D0%BF%D0%B5%D1%80%D0%B5%D1%83%D0%BB%D0%BE%D0%BA%2C%20%D0%B4%D0%BE%D0%BC%208&ll=37.629399%2C55.767220&z=16"
                width="100%"
                height="100%"
                frameborder="0"
                style="border:0; filter: invert(0%) grayscale(0%);"
                allowfullscreen="true">
            </iframe>
          </div>

        </div>

        <!-- FOOTER -->
        <footer class="botanic-footer">
          <div class="botanic-footer-copy">
            &copy; 2026 Botanic Salon. Все права защищены. Первый салон органического окрашивания в России.
          </div>
          <router-link to="/privacy-policy" class="botanic-footer-link">Политика конфиденциальности</router-link>
        </footer>

      </div>
    </div>

    <!-- ==================== LIGHTBOX MODAL (Полноэкранный слайдер) ==================== -->
    <div class="botanic-lightbox-overlay" v-if="isLightboxOpen" @click="closeLightbox">
      <div class="botanic-lightbox-content" @click.stop>
        <button class="botanic-lightbox-close" @click="closeLightbox" aria-label="Закрыть модальное окно">&times;</button>
        <img :src="activeImageUrl" class="botanic-lightbox-img" alt="Фотография салона крупным планом">
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isSticky = ref(false)
const isMenuOpen = ref(false)

// Реактивные переменные для Lightbox
const isLightboxOpen = ref(false)
const activeImageUrl = ref('')

function openLightbox(url) {
  activeImageUrl.value = url
  isLightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  isLightboxOpen.value = false
  if (!isMenuOpen.value) {
    document.body.style.overflow = ''
  }
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  if (!isLightboxOpen.value) {
    document.body.style.overflow = ''
  }
}

const handleScroll = () => {
  isSticky.value = window.scrollY > 50
}

let observer = null

const handleKeyDown = (e) => {
  if (e.key === 'Escape') {
    if (isLightboxOpen.value) {
      closeLightbox()
    } else if (isMenuOpen.value) {
      closeMenu()
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('keydown', handleKeyDown)

  const animElements = document.querySelectorAll('.botanic-scope-wrapper .about-animate-new')
  if (animElements.length) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -20px 0px'
    })

    animElements.forEach((el) => observer.observe(el))
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('keydown', handleKeyDown)
  if (observer) observer.disconnect()
  document.body.style.overflow = ''
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&display=swap');

/* ==================== GLOBAL ANIMATIONS ==================== */
@keyframes panelReveal {
  from { opacity: 0; transform: translateX(-30px); border-left-color: transparent; }
  to { opacity: 1; transform: translateX(0); border-left-color: #18A61F; }
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes cardReveal {
  from { opacity: 0; transform: translateX(30px); border-left-color: transparent; }
  to { opacity: 1; transform: translateX(0); border-left-color: #18A61F; }
}
@keyframes auroraDrift {
  0% { transform: rotate(0deg) scale(1) translate(0,0); }
  50% { transform: rotate(4deg) scale(1.08) translate(5px,-10px); }
  100% { transform: rotate(-3deg) scale(0.95) translate(-5px,5px); }
}
@keyframes auroraFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes fadeBg {
  0%, 45% { opacity: 1; }
  50%, 95% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes auroraServices1 {
  0% { transform: translate(0, 0) scale(1) rotate(0deg); }
  50% { transform: translate(15vw, 10vh) scale(1.2) rotate(45deg); }
  100% { transform: translate(5vw, 20vh) scale(0.9) rotate(90deg); }
}
@keyframes auroraServices2 {
  0% { transform: translate(0, 0) scale(1) rotate(0deg); }
  50% { transform: translate(-15vw, -15vh) scale(1.3) rotate(-45deg); }
  100% { transform: translate(-25vw, -5vh) scale(0.8) rotate(-90deg); }
}
@keyframes auroraServices3 {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-20vw, 15vh) scale(1.4); }
  100% { transform: translate(10vw, -10vh) scale(1.1); }
}
@keyframes auroraServices4 {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(25vw, -20vh) scale(1.2); }
  100% { transform: translate(-10vw, -15vh) scale(0.9); }
}

/* Изолированная область стилей Botanic Salon */
.botanic-scope-wrapper {
  position: relative;
  width: 100% !important;
  max-width: 100% !important;
  overflow-x: hidden !important;
  font-family: 'Manrope', sans-serif !important;
  background-color: #050806 !important;
}

.botanic-scope-wrapper * {
  box-sizing: border-box !important;
  font-family: 'Manrope', sans-serif !important;
}

/* Управление весами шрифтов */
.botanic-scope-wrapper h1,
.botanic-scope-wrapper h2,
.botanic-scope-wrapper h3,
.botanic-scope-wrapper .services-title,
.botanic-scope-wrapper .about-title-new,
.botanic-scope-wrapper .contacts-title {
  font-weight: 300 !important;
}
.botanic-scope-wrapper h1 strong,
.botanic-scope-wrapper h2 strong,
.botanic-scope-wrapper h3 strong,
.botanic-scope-wrapper .services-title strong,
.botanic-scope-wrapper .about-title-new strong,
.botanic-scope-wrapper .contacts-title strong {
  font-weight: 600 !important;
}
.botanic-scope-wrapper p,
.botanic-scope-wrapper .about-text-new,
.botanic-scope-wrapper .team-desc,
.botanic-scope-wrapper .service-name,
.botanic-scope-wrapper .contact-item-box p {
  font-weight: 400 !important;
}
.botanic-scope-wrapper .team-card h3 {
  font-weight: 600 !important;
}

/* ==================== STICKY HEADER STYLES ==================== */
.botanic-scope-wrapper .botanic-header {
  background-color: transparent !important;
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: calc(32 / 1440 * 100vw) calc(72 / 1440 * 100vw);
  z-index: 99999 !important;
  flex-wrap: nowrap;
  transition: padding 0.4s ease, background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease !important;
  border-bottom: 1px solid transparent;
}

.botanic-scope-wrapper .botanic-header.sticky {
  padding: calc(16 / 1440 * 100vw) calc(72 / 1440 * 100vw) !important;
  background: rgba(5, 8, 6, 0.85) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  border-bottom: 1px solid rgba(24, 166, 31, 0.25) !important;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important;
}

.botanic-scope-wrapper .botanic-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 180% !important;
  background: linear-gradient(180deg, rgba(0,0,0,0.75) 0%, transparent 100%) !important;
  z-index: -1;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.botanic-scope-wrapper .botanic-header.sticky::before {
  opacity: 0 !important;
}

.botanic-scope-wrapper .botanic-header > * {
  position: relative;
  z-index: 2;
}

.botanic-scope-wrapper .botanic-logo-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  z-index: 2;
}

.botanic-scope-wrapper .botanic-logo-link {
  display: block;
  transition: opacity 0.3s ease;
}
.botanic-scope-wrapper .botanic-logo-link:hover { opacity: 0.8; }

.botanic-scope-wrapper .botanic-logo-img {
  margin-top: -10px;
  height: calc(40 / 1440 * 100vw) !important;
  width: auto !important;
  display: block !important;
}

.botanic-scope-wrapper .botanic-nav-list {
  display: flex;
  gap: calc(40 / 1440 * 100vw);
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: nowrap;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.botanic-scope-wrapper .botanic-nav-link {
  font-size: calc(12 / 1440 * 100vw) !important;
  font-weight: 500 !important;
  text-transform: uppercase !important;
  letter-spacing: calc(2 / 1440 * 100vw) !important;
  color: rgba(255,255,255,0.85) !important;
  text-decoration: none !important;
  transition: all 0.3s ease !important;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5) !important;
  white-space: nowrap;
  outline: none !important;
  background: none !important;
}
.botanic-scope-wrapper .botanic-nav-link:hover {
  color: #18A61F !important;
  text-shadow: 0 0 10px rgba(24,166,31,0.4) !important;
}

.botanic-scope-wrapper .botanic-burger-btn {
  display: none !important;
  background: none !important;
  border: none !important;
  width: 44px !important;
  height: 44px !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 5px !important;
  cursor: pointer !important;
  padding: 0 !important;
  -webkit-appearance: none !important;
  outline: none !important;
  z-index: 999999 !important;
}
.botanic-scope-wrapper .botanic-burger-btn span {
  display: block;
  width: 26px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: all 0.3s;
  box-shadow: 0 0 6px rgba(0,0,0,0.3);
}
.botanic-scope-wrapper .botanic-burger-btn.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
  box-shadow: 0 0 10px rgba(24,166,31,0.8);
}
.botanic-scope-wrapper .botanic-burger-btn.active span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.botanic-scope-wrapper .botanic-burger-btn.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
  box-shadow: 0 0 10px rgba(24,166,31,0.8);
}

.botanic-scope-wrapper .botanic-menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 99998;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s, visibility 0.5s;
  pointer-events: none;
}
.botanic-scope-wrapper .botanic-menu-overlay.active {
  opacity: 1 !important;
  visibility: visible !important;
  pointer-events: auto !important;
}

.botanic-scope-wrapper .botanic-mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 0;
  overflow: hidden;
  background: rgba(10,20,12,0.95);
  backdrop-filter: blur(40px) saturate(180%);
  -webkit-backdrop-filter: blur(40px) saturate(180%);
  border-bottom: 1px solid rgba(24, 166, 31, 0.25);
  box-shadow: 0 4px 30px rgba(0,0,0,0.4), inset 0 -80px 120px rgba(24, 166, 31, 0.06);
  z-index: 99999;
  transition: max-height 0.6s, padding 0.6s;
  padding: 0 5%;
  box-sizing: border-box;
}
.botanic-scope-wrapper .botanic-mobile-menu.active {
  max-height: 100vh !important;
  padding: 90px 5% 40px !important;
}

.botanic-scope-wrapper .botanic-mobile-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.botanic-scope-wrapper .botanic-mobile-nav-link {
  font-size: 16px !important;
  font-weight: 400 !important;
  text-transform: uppercase !important;
  letter-spacing: 4px !important;
  color: rgba(255,255,255,0.85) !important;
  text-decoration: none !important;
  display: block !important;
  padding: 18px 0 !important;
  border-bottom: 1px solid rgba(255,255,255,0.04) !important;
  transition: all 0.4s !important;
  -webkit-tap-highlight-color: transparent !important;
  outline: none !important;
  background: none !important;
}

.botanic-scope-wrapper .botanic-mobile-nav-link:hover {
  color: #ffffff !important;
  padding-left: 12px !important;
  text-shadow: 0 0 20px rgba(24,166,31,0.6) !important;
}

@media screen and (max-width: 1024px) {
  .botanic-scope-wrapper .botanic-header {
    padding: 24px 5% !important;
    background-color: transparent !important;
  }
  .botanic-scope-wrapper .botanic-header.sticky {
    padding: 14px 5% !important;
    background: rgba(5, 8, 6, 0.85) !important;
    backdrop-filter: blur(12px) !important;
    -webkit-backdrop-filter: blur(12px) !important;
  }
  .botanic-scope-wrapper .botanic-nav-list { display: none !important; }
  .botanic-scope-wrapper .botanic-burger-btn { display: flex !important; }
  .botanic-scope-wrapper .botanic-logo-img { height: 36px !important; }
}

/* ==================== HERO STYLES ==================== */
.botanic-scope-wrapper .botanic-hero-section {
  position: relative;
  width: 100%;
  min-height: calc(100vh + calc(130 / 1440 * 100vw));
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: calc(40 / 1440 * 100vw);
  padding: calc(120 / 1440 * 100vw) calc(72 / 1440 * 100vw) calc(160 / 1440 * 100vw);
  box-sizing: border-box;
  overflow: hidden;
}

.botanic-scope-wrapper .botanic-bg-carousel {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.botanic-scope-wrapper .botanic-bg-slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  animation: fadeBg 16s infinite ease-in-out;
}

.botanic-scope-wrapper .botanic-bg-slide:nth-child(1) { background-image: url('https://www.botanic-salon.ru/wp-content/uploads/2019/02/salon5.jpg'); }
.botanic-scope-wrapper .botanic-bg-slide:nth-child(2) { background-image: url('https://www.botanic-salon.ru/wp-content/uploads/2019/02/salon8.jpg'); animation-delay: -8s; }

.botanic-scope-wrapper .botanic-hero-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%);
  z-index: 1;
  pointer-events: none;
}

.botanic-scope-wrapper .botanic-glass-panel {
  position: relative;
  z-index: 2;
  overflow: hidden;
  background: rgba(255,255,255,0.03);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.08);
  border-left: 2px solid #18A61F;
  border-radius: 0 16px 16px 0;
  box-shadow: 0 30px 60px rgba(0,0,0,0.3);
  color: #fff;
  width: calc(480 / 1440 * 100vw);
  flex-shrink: 0;
  padding: calc(50 / 1440 * 100vw) calc(40 / 1440 * 100vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  animation: panelReveal 1s 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) both;
}

.botanic-scope-wrapper .botanic-hero-aurora-glow {
  position: absolute;
  top: -20%;
  left: -20%;
  width: 140%;
  height: 140%;
  background:
      radial-gradient(circle at 20% 30%, rgba(24,166,31,0.2) 0%, transparent 55%),
      radial-gradient(circle at 75% 65%, rgba(24,166,31,0.15) 0%, transparent 60%),
      radial-gradient(circle at 50% 80%, rgba(24,166,31,0.1) 0%, transparent 50%);
  filter: blur(45px);
  border-radius: 43% 57% 38% 62% / 51% 45% 55% 49%;
  z-index: 0;
  pointer-events: none;
  animation: auroraDrift 20s infinite alternate ease-in-out, auroraFadeIn 1.5s 0.5s ease-out both;
}

.botanic-scope-wrapper .botanic-tagline {
  font-size: calc(12 / 1440 * 100vw) !important;
  text-transform: uppercase !important;
  letter-spacing: 3px !important;
  color: #fff !important;
  margin-bottom: calc(15 / 1440 * 100vw) !important;
  display: block !important;
  animation: fadeUp 0.6s 0.7s ease-out both;
}

.botanic-scope-wrapper .botanic-glass-panel h1 {
  font-size: calc(48 / 1440 * 100vw) !important;
  line-height: 1.1 !important;
  margin: 0 0 calc(20 / 1440 * 100vw) 0 !important;
  text-transform: uppercase !important;
  animation: fadeUp 0.6s 0.9s ease-out both;
}

.botanic-scope-wrapper .botanic-glass-panel h1 strong {
  color: #fff !important;
  text-shadow: 0 0 30px rgba(24,166,31,0.5) !important;
}

.botanic-scope-wrapper .botanic-glass-panel p {
  font-size: calc(15 / 1440 * 100vw) !important;
  line-height: 1.6 !important;
  margin: 0 0 calc(35 / 1440 * 100vw) 0 !important;
  color: rgba(255,255,255,0.85) !important;
  animation: fadeUp 0.6s 1.1s ease-out both;
}

.botanic-scope-wrapper .botanic-info-wrapper {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: calc(20 / 1440 * 100vw);
  flex: 1 1 auto;
}

.botanic-scope-wrapper .botanic-info-card {
  position: relative;
  overflow: hidden;
  background: rgba(255,255,255,0.03);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.08);
  border-left: 2px solid #18A61F;
  border-radius: 0 16px 16px 0;
  box-shadow: 0 30px 60px rgba(0,0,0,0.3);
  color: #fff;
  z-index: 2;
  width: calc(240 / 1440 * 100vw);
  flex-shrink: 0;
  padding: calc(25 / 1440 * 100vw);
  box-sizing: border-box;
  animation: cardReveal 0.6s ease-out both;
}

.botanic-scope-wrapper .botanic-info-card:nth-child(1) { animation-delay: 0.5s; }
.botanic-scope-wrapper .botanic-info-card:nth-child(2) { animation-delay: 0.7s; }
.botanic-scope-wrapper .botanic-info-card:nth-child(3) { animation-delay: 0.9s; }

.botanic-scope-wrapper .botanic-info-card h4 {
  font-size: calc(28 / 1440 * 100vw) !important;
  color: #fff !important;
  margin: 0 0 calc(6 / 1440 * 100vw) 0 !important;
  line-height: 1 !important;
  text-shadow: 0 0 20px rgba(24,166,31,0.3);
}

.botanic-scope-wrapper .botanic-info-card p {
  font-size: calc(12 / 1440 * 100vw) !important;
  color: rgba(255,255,255,0.8) !important;
  margin: 0 !important;
  line-height: 1.4 !important;
}

/* ==================== 1. ABOUT SECTION ==================== */
.botanic-scope-wrapper .botanic-about-section {
  position: relative;
  z-index: 10;
  margin-top: calc(-50 / 1440 * 100vw);
  width: 100%;
  background-color: #F8FAF8 !important;
  border-radius: calc(40 / 1440 * 100vw) calc(40 / 1440 * 100vw) 0 0;
  box-shadow: 0 -15px 30px rgba(0, 0, 0, 0.04) !important;
}

.botanic-scope-wrapper .botanic-about-glass {
  position: relative;
  z-index: 2;
  width: 100%;
  background: rgba(255, 255, 255, 0.4) !important;
  backdrop-filter: blur(30px) !important;
  -webkit-backdrop-filter: blur(30px) !important;
  border-top: 1px solid rgba(255, 255, 255, 0.7) !important;
  border-radius: calc(40 / 1440 * 100vw) calc(40 / 1440 * 100vw) 0 0;
  padding: calc(120 / 1440 * 100vw) 5% calc(160 / 1440 * 100vw);
  box-sizing: border-box;
}

.botanic-scope-wrapper .about-inner-redesigned {
  max-width: calc(1300 / 1440 * 100vw);
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: calc(72 / 1440 * 100vw);
}

.botanic-scope-wrapper .about-text-col {
  flex: 1.1;
  display: flex;
  flex-direction: column;
  gap: calc(28 / 1440 * 100vw);
}

/* Сетка галереи 1:1 на десктопе с вытянутыми горизонтальными пропорциями 2-х фотографий */
.botanic-scope-wrapper .about-gallery-col {
  flex: 0.9;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: calc(260 / 1440 * 100vw); /* Идеальное горизонтальное соотношение */
  gap: calc(20 / 1440 * 100vw);
}

.botanic-scope-wrapper .about-label-new {
  display: inline-flex;
  align-items: center;
  gap: calc(12 / 1440 * 100vw);
  font-size: calc(14 / 1440 * 100vw) !important;
  color: #18A61F !important;
}
.botanic-scope-wrapper .about-label-new::before {
  content: '';
  width: calc(40 / 1440 * 100vw);
  height: 2px;
  background: #18A61F;
}

.botanic-scope-wrapper .about-title-new {
  font-size: calc(44 / 1440 * 100vw) !important;
  line-height: 1.2 !important;
  color: #111 !important;
  margin: 0 !important;
  letter-spacing: -0.5px !important;
}
.botanic-scope-wrapper .about-title-new strong {
  color: #18A61F !important;
}

.botanic-scope-wrapper .about-text-new {
  font-size: calc(17 / 1440 * 100vw) !important;
  line-height: 1.7 !important;
  color: #333 !important;
  margin: 0 !important;
}

.botanic-scope-wrapper .about-features-new {
  list-style: none !important;
  padding: 0 !important;
  margin: calc(10 / 1440 * 100vw) 0 0 0 !important;
  display: flex !important;
  flex-direction: column !important;
  gap: calc(18 / 1440 * 100vw) !important;
}
.botanic-scope-wrapper .about-features-new li {
  font-size: calc(15 / 1440 * 100vw) !important;
  line-height: 1.6 !important;
  color: #444 !important;
  position: relative !important;
  padding-left: calc(32 / 1440 * 100vw) !important;
}
.botanic-scope-wrapper .about-features-new li::before {
  content: '✓' !important;
  position: absolute !important;
  left: 0 !important;
  top: 2px !important;
  color: #18A61F !important;
  font-size: calc(18 / 1440 * 100vw) !important;
}

.botanic-scope-wrapper .gallery-item {
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: calc(16 / 1440 * 100vw);
  border: 1px solid rgba(24, 166, 31, 0.12);
  transition: all 0.3s ease;
  overflow: hidden;
  height: 100%; /* Занимает всю высоту строки грида на десктопе */
  cursor: pointer !important; /* Делаем фотографии кликабельными на десктопе */
}

.botanic-scope-wrapper .gallery-item:hover {
  transform: translateY(calc(-5 / 1440 * 100vw)) !important;
  box-shadow: 0 calc(15 / 1440 * 100vw) calc(30 / 1440 * 100vw) rgba(24, 166, 31, 0.1) !important;
  border-color: #18A61F !important;
}

/* ==================== 2. SERVICES SECTION ==================== */
.botanic-scope-wrapper .botanic-services-section {
  position: relative;
  z-index: 15;
  margin-top: calc(-50 / 1440 * 100vw);
  width: 100%;
  border-radius: calc(40 / 1440 * 100vw) calc(40 / 1440 * 100vw) 0 0;
  overflow: hidden;
  background: #ffffff !important;
  box-shadow: 0 -15px 30px rgba(24, 166, 31, 0.05) !important;
}

.botanic-scope-wrapper .botanic-services-aurora {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  overflow: hidden; z-index: 1; pointer-events: none;
}
.botanic-scope-wrapper .botanic-services-aurora::before,
.botanic-scope-wrapper .botanic-services-aurora::after,
.botanic-scope-wrapper .botanic-services-aurora-extra::before,
.botanic-scope-wrapper .botanic-services-aurora-extra::after {
  content: ''; position: absolute;
  filter: blur(100px); opacity: 0.9;
  background: rgba(24, 166, 31, 0.75);
  border-radius: 50%;
}
.botanic-scope-wrapper .botanic-services-aurora::before {
  top: -10%; left: -10%; width: 55vw; height: 55vw;
  animation: auroraServices1 20s infinite alternate ease-in-out;
}
.botanic-scope-wrapper .botanic-services-aurora::after {
  bottom: -10%; right: -10%; width: 60vw; height: 60vw;
  animation: auroraServices2 25s infinite alternate ease-in-out;
}
.botanic-scope-wrapper .botanic-services-aurora-extra::before {
  top: 20%; right: 10%; width: 45vw; height: 45vw;
  animation: auroraServices3 22s infinite alternate ease-in-out;
}
.botanic-scope-wrapper .botanic-services-aurora-extra::after {
  bottom: 20%; left: 0%; width: 45vw; height: 45vw;
  animation: auroraServices4 28s infinite alternate ease-in-out;
}

.botanic-scope-wrapper .botanic-services-glass {
  position: relative;
  z-index: 2;
  width: 100%;
  background: rgba(255, 255, 255, 0.45) !important;
  backdrop-filter: blur(30px) !important;
  -webkit-backdrop-filter: blur(30px) !important;
  border-top: 1px solid rgba(255, 255, 255, 0.7) !important;
  border-radius: calc(40 / 1440 * 100vw) calc(40 / 1440 * 100vw) 0 0;
  padding: calc(110 / 1440 * 100vw) 5% calc(160 / 1440 * 100vw);
  box-sizing: border-box;
}

.botanic-scope-wrapper .services-header {
  text-align: left;
  margin-bottom: calc(60 / 1440 * 100vw);
}

.botanic-scope-wrapper .services-title {
  font-size: calc(44 / 1440 * 100vw) !important;
  line-height: 1.2 !important;
  color: #0a110c !important;
  margin: 0 !important;
  letter-spacing: -0.5px !important;
}
.botanic-scope-wrapper .services-title strong {
  color: #18A61F !important;
}

.botanic-scope-wrapper .services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(30 / 1440 * 100vw);
  max-width: calc(1300 / 1440 * 100vw);
  margin: 0 auto;
}

.botanic-scope-wrapper .service-card {
  position: relative;
  background: rgba(255, 255, 255, 0.7) !important;
  border: 1px solid rgba(24, 166, 31, 0.15) !important;
  border-top: 2px solid #18A61F !important;
  border-radius: 0 0 calc(16 / 1440 * 100vw) calc(16 / 1440 * 100vw);
  padding: calc(40 / 1440 * 100vw) calc(30 / 1440 * 100vw) !important;
  box-sizing: border-box;
  overflow: hidden;
  backdrop-filter: blur(10px) !important;
  -webkit-backdrop-filter: blur(10px) !important;
}

.botanic-scope-wrapper .service-card h3 {
  font-size: calc(22 / 1440 * 100vw) !important;
  color: #0a110c !important;
  margin: 0 0 calc(20 / 1440 * 100vw) 0 !important;
}

.botanic-scope-wrapper .service-list {
  list-style: none !important;
  padding: 0 !important;
  margin: 0 !important;
  display: flex !important;
  flex-direction: column !important;
  gap: calc(15 / 1440 * 100vw) !important;
}

.botanic-scope-wrapper .service-list li {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  font-size: calc(14 / 1440 * 100vw) !important;
  color: rgba(10, 17, 12, 0.8) !important;
  border-bottom: 1px dashed rgba(24, 166, 31, 0.2) !important;
  padding-bottom: calc(8 / 1440 * 100vw) !important;
  gap: calc(10 / 1440 * 100vw) !important;
}
.botanic-scope-wrapper .service-list li:last-child {
  border-bottom: none !important;
  padding-bottom: 0 !important;
}
.botanic-scope-wrapper .service-price {
  color: #18A61F !important;
  white-space: nowrap !important;
}

/* ==================== 3. TEAM SECTION ==================== */
.botanic-scope-wrapper .botanic-team-section {
  position: relative;
  z-index: 20;
  margin-top: calc(-50 / 1440 * 100vw);
  width: 100%;
  border-radius: calc(40 / 1440 * 100vw) calc(40 / 1440 * 100vw) 0 0;
  overflow: hidden;
  background: #F8FAF8 !important;
  box-shadow: 0 -15px 30px rgba(0, 0, 0, 0.04) !important;
}

.botanic-scope-wrapper .botanic-team-glass {
  position: relative;
  z-index: 2;
  width: 100%;
  background: rgba(255, 255, 255, 0.4) !important;
  backdrop-filter: blur(30px) !important;
  -webkit-backdrop-filter: blur(30px) !important;
  border-top: 1px solid rgba(255, 255, 255, 0.7) !important;
  border-radius: calc(40 / 1440 * 100vw) calc(40 / 1440 * 100vw) 0 0;
  padding: calc(110 / 1440 * 100vw) 5% calc(160 / 1440 * 100vw);
  box-sizing: border-box;
}

.botanic-scope-wrapper .team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: calc(24 / 1440 * 100vw);
  max-width: calc(1300 / 1440 * 100vw);
  margin: 0 auto;
}

.botanic-scope-wrapper .team-card {
  position: relative;
  background: rgba(255, 255, 255, 0.65) !important;
  border: 1px solid rgba(24, 166, 31, 0.1) !important;
  border-radius: calc(16 / 1440 * 100vw);
  padding: calc(16 / 1440 * 100vw) !important;
  box-sizing: border-box;
  text-align: center;
  transition: all 0.4s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.botanic-scope-wrapper .team-card:hover {
  background: rgba(255, 255, 255, 0.95) !important;
  border-color: rgba(24, 166, 31, 0.35) !important;
  transform: translateY(calc(-8 / 1440 * 100vw)) !important;
  box-shadow: 0 calc(20 / 1440 * 100vw) calc(40 / 1440 * 100vw) rgba(24, 166, 31, 0.08) !important;
}

.botanic-scope-wrapper .team-img-wrapper {
  position: relative;
  width: 100%;
  height: calc(260 / 1440 * 100vw);
  border-radius: calc(12 / 1440 * 100vw);
  overflow: hidden;
  margin-bottom: calc(20 / 1440 * 100vw);
  background: rgba(10, 20, 12, 0.05);
}

.botanic-scope-wrapper .team-img-wrapper img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  transition: transform 0.6s ease;
}

.botanic-scope-wrapper .team-card h3 {
  font-size: calc(20 / 1440 * 100vw) !important;
  color: #0a110c !important;
  margin: 0 0 calc(6 / 1440 * 100vw) 0 !important;
}

.botanic-scope-wrapper .team-card .team-role {
  font-size: calc(12 / 1440 * 100vw) !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  color: #18A61F !important;
  margin: 0 0 calc(12 / 1440 * 100vw) 0 !important;
}

.botanic-scope-wrapper .team-card .team-desc {
  font-size: calc(13 / 1440 * 100vw) !important;
  line-height: 1.5 !important;
  color: #555 !important;
  margin: 0 !important;
}

/* ==================== 4. CONTACTS SECTION ==================== */
.botanic-scope-wrapper .botanic-contacts-section {
  position: relative;
  z-index: 25;
  margin-top: calc(-50 / 1440 * 100vw);
  width: 100%;
  border-radius: calc(40 / 1440 * 100vw) calc(40 / 1440 * 100vw) 0 0;
  overflow: hidden;
  background: #ffffff !important;
  color: #0a110c !important;
  box-shadow: 0 -15px 30px rgba(24, 166, 31, 0.05) !important;
}

.botanic-scope-wrapper .botanic-contacts-aurora {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  overflow: hidden; z-index: 1; pointer-events: none;
}
.botanic-scope-wrapper .botanic-contacts-aurora::before,
.botanic-scope-wrapper .botanic-contacts-aurora::after,
.botanic-scope-wrapper .botanic-contacts-aurora-extra::before,
.botanic-scope-wrapper .botanic-contacts-aurora-extra::after {
  content: '' !important; position: absolute !important;
  filter: blur(100px) !important; opacity: 0.9 !important;
  background: rgba(24, 166, 31, 0.75) !important;
  border-radius: 50% !important;
}
.botanic-scope-wrapper .botanic-contacts-aurora::before {
  top: -10% !important; left: -10% !important; width: 55vw !important; height: 55vw !important;
  animation: auroraServices1 20s infinite alternate ease-in-out !important;
}
.botanic-scope-wrapper .botanic-contacts-aurora::after {
  bottom: -10% !important; right: -10% !important; width: 60vw !important; height: 60vw !important;
  animation: auroraServices2 25s infinite alternate ease-in-out !important;
}
.botanic-scope-wrapper .botanic-contacts-aurora-extra::before {
  top: 20% !important; right: 10% !important; width: 45vw !important; height: 45vw !important;
  animation: auroraServices3 22s infinite alternate ease-in-out !important;
}
.botanic-scope-wrapper .botanic-contacts-aurora-extra::after {
  bottom: 20% !important; left: 0% !important; width: 45vw !important; height: 45vw !important;
  animation: auroraServices4 28s infinite alternate ease-in-out !important;
}

.botanic-scope-wrapper .botanic-contacts-glass {
  position: relative;
  z-index: 2;
  width: 100%;
  background: rgba(255, 255, 255, 0.45) !important;
  backdrop-filter: blur(25px) !important;
  -webkit-backdrop-filter: blur(25px) !important;
  border-top: 1px solid rgba(255, 255, 255, 0.7) !important;
  border-radius: calc(40 / 1440 * 100vw) calc(40 / 1440 * 100vw) 0 0;
  padding: calc(110 / 1440 * 100vw) 5% calc(60 / 1440 * 100vw);
  box-sizing: border-box;
}

.botanic-scope-wrapper .contacts-container {
  max-width: calc(1300 / 1440 * 100vw);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: calc(60 / 1440 * 100vw);
  align-items: stretch !important;
}

.botanic-scope-wrapper .contacts-info-side {
  display: flex;
  flex-direction: column;
  gap: calc(40 / 1440 * 100vw);
}

.botanic-scope-wrapper .contacts-title {
  font-size: calc(44 / 1440 * 100vw) !important;
  line-height: 1.2 !important;
  color: #0a110c !important;
  margin: 0;
  letter-spacing: -0.5px;
}

.botanic-scope-wrapper .contacts-title strong {
  color: #18A61F;
  text-shadow: 0 0 30px rgba(24,166,31,0.25);
}

.botanic-scope-wrapper .contacts-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: calc(30 / 1440 * 100vw);
}

.botanic-scope-wrapper .contact-item-box h4 {
  font-size: calc(11 / 1440 * 100vw) !important;
  text-transform: uppercase !important;
  letter-spacing: 2px !important;
  color: rgba(10, 17, 12, 0.5) !important;
  margin: 0 !important;
}

.botanic-scope-wrapper .contact-item-box p,
.botanic-scope-wrapper .contact-item-box a {
  font-size: calc(15 / 1440 * 100vw) !important;
  color: rgba(10, 17, 12, 0.8) !important;
  line-height: 1.5 !important;
  margin: 0 !important;
  text-decoration: none !important;
  transition: color 0.3s;
}

.botanic-scope-wrapper .contact-item-box a:hover {
  color: #18A61F !important;
}

.botanic-scope-wrapper .contacts-map-side {
  width: 100%;
  height: 100% !important;
  min-height: calc(480 / 1440 * 100vw);
  border-radius: calc(16 / 1440 * 100vw);
  overflow: hidden;
  border: 1px solid rgba(24, 166, 31, 0.15) !important;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05) !important;
}

/* Footer styling */
.botanic-scope-wrapper .botanic-footer {
  border-top: 1px solid rgba(10, 17, 12, 0.08) !important;
  margin-top: calc(80 / 1440 * 100vw);
  padding-top: calc(30 / 1440 * 100vw);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.botanic-scope-wrapper .botanic-footer-copy {
  font-size: calc(12 / 1440 * 100vw) !important;
  color: rgba(10, 17, 12, 0.5) !important;
}

.botanic-scope-wrapper .botanic-footer-link {
  font-size: calc(12 / 1440 * 100vw) !important;
  color: rgba(10, 17, 12, 0.5) !important;
  text-decoration: none !important;
  transition: color 0.3s;
}

.botanic-scope-wrapper .botanic-footer-link:hover {
  color: #18A61F !important;
}

/* Animations Classes */
.botanic-scope-wrapper .about-animate-new {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.botanic-scope-wrapper .about-animate-new.visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.botanic-scope-wrapper .about-text-col .about-animate-new:nth-child(1) { transition-delay: 0.1s; }
.botanic-scope-wrapper .about-text-col .about-animate-new:nth-child(2) { transition-delay: 0.2s; }
.botanic-scope-wrapper .about-text-col .about-animate-new:nth-child(3) { transition-delay: 0.3s; }
.botanic-scope-wrapper .about-text-col .about-animate-new:nth-child(4) { transition-delay: 0.4s; }

.botanic-scope-wrapper .about-gallery-col .gallery-item:nth-child(1) { transition-delay: 0.3s; }
.botanic-scope-wrapper .about-gallery-col .gallery-item:nth-child(2) { transition-delay: 0.45s; }

/* ==================== LIGHTBOX MODAL STYLES ==================== */
.botanic-lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(5, 8, 6, 0.95);

  /* Исправленный синтаксис стекла для работы в билде */
  -webkit-backdrop-filter: blur(15px) !important;
  backdrop-filter: blur(15px) !important;
  transform: translateZ(0);
  will-change: backdrop-filter;

  z-index: 1000000 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: fadeInLightbox 0.3s forwards ease-out;
}

.botanic-lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.botanic-lightbox-img {
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid rgba(24, 166, 31, 0.2);
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  transform: scale(0.95);
  animation: scaleUpLightbox 0.3s forwards cubic-bezier(0.16, 1, 0.3, 1);
}

.botanic-lightbox-close {
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: #fff;
  font-size: 36px;
  cursor: pointer;
  transition: color 0.2s;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
}

.botanic-lightbox-close:hover {
  color: #18A61F;
}

@keyframes fadeInLightbox {
  to { opacity: 1; }
}

@keyframes scaleUpLightbox {
  to { transform: scale(1); }
}

/* Mobile Overrides */
@media screen and (max-width: 1024px) {
  .botanic-scope-wrapper .botanic-about-section,
  .botanic-scope-wrapper .botanic-services-section,
  .botanic-scope-wrapper .botanic-team-section,
  .botanic-scope-wrapper .botanic-contacts-section {
    margin-top: -40px !important;
    border-radius: 24px 24px 0 0 !important;
  }

  .botanic-scope-wrapper .botanic-about-glass,
  .botanic-scope-wrapper .botanic-services-glass,
  .botanic-scope-wrapper .botanic-team-glass,
  .botanic-scope-wrapper .botanic-contacts-glass {
    padding: 60px 5% 100px !important;
    border-radius: 24px 24px 0 0 !important;
  }

  .botanic-scope-wrapper .about-inner-redesigned {
    flex-direction: column !important;
    gap: 40px !important;
  }
  .botanic-scope-wrapper .about-label-new { font-size: 12px !important; gap: 8px !important; letter-spacing: 2px !important; }
  .botanic-scope-wrapper .about-label-new::before { width: 30px !important; }

  .botanic-scope-wrapper .about-title-new {
    font-size: 26px !important;
    line-height: 1.3 !important;
  }
  .botanic-scope-wrapper .about-title-new strong {
    white-space: nowrap !important;
    display: inline-block !important;
  }

  .botanic-scope-wrapper .about-text-new {
    font-size: 16px !important;
    line-height: 1.8 !important;
    letter-spacing: 0.1px !important;
    color: #111111 !important;
  }

  .botanic-scope-wrapper .about-features-new {
    gap: 20px !important;
    margin-top: 30px !important;
  }
  .botanic-scope-wrapper .about-features-new li {
    font-size: 15px !important;
    line-height: 1.6 !important;
    padding-left: 28px !important;
    margin-bottom: 0 !important;
    position: relative !important;
    color: #333333 !important;
  }
  .botanic-scope-wrapper .about-features-new li::before {
    font-size: 18px !important;
    left: 0 !important;
    top: 2px !important;
    line-height: 1 !important;
  }

  .botanic-scope-wrapper .about-gallery-col {
    grid-template-columns: 1fr !important;
    grid-template-rows: auto !important;
    width: 100% !important;
  }
  .botanic-scope-wrapper .gallery-item {
    height: 250px !important; /* На мобилке сохранена исходная высота */
  }

  .botanic-scope-wrapper .services-title {
    font-size: 30px !important;
  }
  .botanic-scope-wrapper .services-grid {
    grid-template-columns: 1fr !important;
    gap: 20px !important;
  }
  .botanic-scope-wrapper .service-card {
    border-radius: 16px !important;
    padding: 30px 20px !important;
  }
  .botanic-scope-wrapper .service-card:hover {
    transform: translateY(-5px) !important;
  }
  .botanic-scope-wrapper .service-card h3 {
    font-size: 24px !important;
    margin-bottom: 20px !important;
  }
  .botanic-scope-wrapper .service-list {
    gap: 15px !important;
  }
  .botanic-scope-wrapper .service-list li {
    font-size: 14px !important;
    padding-bottom: 8px !important;
    gap: 10px !important;
  }
  .botanic-scope-wrapper .service-price {
    margin-left: 15px !important;
  }

  .botanic-scope-wrapper .team-grid {
    grid-template-columns: 1fr !important;
    gap: 24px !important;
  }
  .botanic-scope-wrapper .team-card {
    border-radius: 16px !important;
    padding: 20px !important;
  }
  .botanic-scope-wrapper .team-img-wrapper {
    height: 280px !important;
    border-radius: 12px !important;
  }
  .botanic-scope-wrapper .team-card h3 {
    font-size: 22px !important;
  }
  .botanic-scope-wrapper .team-card .team-role {
    font-size: 12px !important;
    margin-bottom: 8px !important;
  }
  .botanic-scope-wrapper .team-card .team-desc {
    font-size: 14px !important;
  }

  .botanic-scope-wrapper .contacts-container {
    grid-template-columns: 1fr !important;
    gap: 40px !important;
  }
  .botanic-scope-wrapper .contacts-title {
    font-size: 30px !important;
  }
  .botanic-scope-wrapper .contacts-grid {
    grid-template-columns: 1fr !important;
    gap: 24px !important;
  }
  .botanic-scope-wrapper .contact-item-box h4 {
    font-size: 10px !important;
  }
  .botanic-scope-wrapper .contact-item-box p,
  .botanic-scope-wrapper .contact-item-box a {
    font-size: 14px !important;
  }
  .botanic-scope-wrapper .contacts-map-side {
    height: 320px !important;
    border-radius: 16px !important;
  }
  .botanic-scope-wrapper .botanic-footer {
    margin-top: 40px !important;
    padding-top: 20px !important;
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
    gap: 16px !important;
  }
  .botanic-scope-wrapper .botanic-footer-copy {
    font-size: 12px !important;
  }
}

@media screen and (max-width: 380px) {
  .botanic-scope-wrapper .botanic-about-glass { padding: 50px 5% 50px !important; }
  .botanic-scope-wrapper .about-title-new { font-size: 22px !important; }
  .botanic-scope-wrapper .botanic-services-glass { padding: 50px 5% 50px !important; }
  .botanic-scope-wrapper .services-title { font-size: 26px !important; }
  .botanic-scope-wrapper .botanic-team-glass { padding: 50px 5% 50px !important; }
  .botanic-scope-wrapper .botanic-contacts-glass { padding: 50px 5% 30px !important; }
  .botanic-scope-wrapper .contacts-title { font-size: 26px !important; }
}
</style>