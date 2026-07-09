<template>
  <div class="botanic-privacy-wrapper">
    <div class="botanic-privacy-container">
      <h1>Политика <strong>конфиденциальности</strong></h1>
      <p>Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности) действует в отношении всей информации, которую Botanic Salon (далее — Администрация), расположенный на доменном имени botanic-salon.ru (и его субдоменах), может получить о Пользователе во время использования сайта.</p>

      <h2>1. Определение терминов</h2>
      <p>В настоящей Политике конфиденциальности используются следующие термины:</p>
      <ul>
        <li><strong>«Персональные данные»</strong> — любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).</li>
        <li><strong>«Обработка персональных данных»</strong> — любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными.</li>
        <li><strong>«Конфиденциальность персональных данных»</strong> — обязательное для соблюдения Оператором или иным получившим доступ к персональным данным лицом требование не допускать их распространения без согласия субъекта персональных данных или наличия иного законного основания.</li>
      </ul>

      <h2>2. Предмет политики конфиденциальности</h2>
      <p>Настоящая Политика конфиденциальности устанавливает обязательства Администрации сайта по неразглашению и обеспечению режима защиты конфиденциальности персональных данных, которые Пользователь предоставляет по запросу Администрации сайта при регистрации, оформлении записи или подписке на информационные материалы.</p>
      <p>Персональные данные, разрешённые к обработке в рамках настоящей Политики конфиденциальности, предоставляются Пользователем путём заполнения регистрационных форм на Сайте и включают в себя следующую информацию:</p>
      <ul>
        <li>Имя Пользователя;</li>
        <li>Контактный телефон Пользователя;</li>
        <li>Адрес электронной почты (e-mail).</li>
      </ul>

      <h2>3. Цели сбора персональной информации пользователя</h2>
      <p>Персональные данные Пользователя Администрация сайта может использовать в целях:</p>
      <ul>
        <li>Идентификации Пользователя для оформления онлайн-записи на услуги салона;</li>
        <li>Предоставления Пользователю доступа к персонализированным ресурсам Сайта;</li>
        <li>Установления с Пользователем обратной связи, включая направление уведомлений, запросов, касающихся использования Сайта, оказания услуг, обработку запросов и заявок от Пользователя.</li>
      </ul>

      <h2>4. Способы и сроки обработки персональной информации</h2>
      <p>Обработка персональных данных Пользователя осуществляется без ограничения срока, любым законным способом, в том числе в информационных системах персональных данных с использованием средств автоматизации или без использования таких средств. Персональные данные Пользователя могут быть переданы уполномоченным органам государственной власти Российской Федерации только по основаниям и в порядке, установленным законодательством Российской Федерации.</p>

      <h2>5. Обязательства сторон</h2>
      <p><strong>Пользователь обязан:</strong></p>
      <ul>
        <li>Предоставить актуальную информацию о персональных данных, необходимую для пользования Сайтом;</li>
        <li>Обновить или дополнить предоставленную информацию в случае ее изменения.</li>
      </ul>
      <p><strong>Администрация сайта обязана:</strong></p>
      <ul>
        <li>Использовать полученную информацию исключительно для целей, указанных в п. 3 настоящей Политики конфиденциальности;</li>
        <li>Обеспечить хранение конфиденциальной информации в тайне, не разглашать без предварительного письменного разрешения Пользователя.</li>
      </ul>

      <router-link to="/" class="botanic-privacy-back-btn">← Назад на сайт</router-link>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&display=swap');

.botanic-privacy-wrapper {
  background-color: #F8FAF8 !important;
  color: #0a110c !important;
  font-family: 'Manrope', sans-serif !important;
  padding: 140px 5% 100px !important;
  min-height: 100vh !important;
  display: flex !important;
  justify-content: center !important;
  align-items: flex-start !important;
}

.botanic-privacy-container {
  max-width: 860px !important;
  width: 100% !important;
  background: rgba(255, 255, 255, 0.65) !important;
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(20px) !important;
  border: 1px solid rgba(24, 166, 31, 0.15) !important;
  border-top: 2px solid #18A61F !important;
  border-radius: 0 0 16px 16px !important;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.04) !important;
  padding: 50px !important;
}

.botanic-privacy-container h1 {
  font-size: 32px !important;
  font-weight: 300 !important;
  color: #0a110c !important;
  margin-bottom: 15px !important;
  letter-spacing: -0.5px !important;
}

.botanic-privacy-container h1 strong {
  font-weight: 600 !important;
  color: #18A61F !important;
}

.botanic-privacy-container h2 {
  font-size: 20px !important;
  font-weight: 500 !important;
  color: #0a110c !important;
  margin-top: 35px !important;
  margin-bottom: 12px !important;
  padding-bottom: 8px !important;
  border-bottom: 1px dashed rgba(24, 166, 31, 0.2) !important;
}

.botanic-privacy-container p,
.botanic-privacy-container li {
  font-size: 15px !important;
  line-height: 1.8 !important;
  color: #333 !important;
}

.botanic-privacy-container ul {
  padding-left: 24px !important;
  margin-bottom: 20px !important;
}

.botanic-privacy-container li {
  margin-bottom: 10px !important;
  position: relative !important;
}

.botanic-privacy-container li::marker {
  color: #18A61F !important;
}

.botanic-privacy-back-btn {
  display: inline-block !important;
  margin-top: 45px !important;
  padding: 14px 32px !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 1.5px !important;
  color: #0a110c !important;
  text-decoration: none !important;
  background: transparent !important;
  border: 1px solid rgba(24, 166, 31, 0.3) !important;
  border-radius: 4px !important;
  transition: all 0.4s ease !important;
  cursor: pointer !important;
}

.botanic-privacy-back-btn:hover {
  border-color: #18A61F !important;
  background: rgba(24, 166, 31, 0.05) !important;
  color: #18A61F !important;
  box-shadow: 0 0 15px rgba(24, 166, 31, 0.15) !important;
}

@media screen and (max-width: 768px) {
  .botanic-privacy-wrapper {
    padding: 100px 5% 60px !important;
  }
  .botanic-privacy-container {
    padding: 30px 24px !important;
  }
  .botanic-privacy-container h1 {
    font-size: 26px !important;
  }
  .botanic-privacy-container h2 {
    font-size: 18px !important;
  }
}
</style>
