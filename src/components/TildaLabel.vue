<template>
  <div class="t-tildalabel" id="tildacopy" data-tilda-sign="26850813#149846753">
    <a href="https://tilda.cc/" class="t-tildalabel__link">
      <div class="t-tildalabel__wrapper">
        <div class="t-tildalabel__txtleft">Made on </div>
        <div class="t-tildalabel__wrapimg">
          <img src="https://static.tildacdn.ink/img/tildacopy.png" class="t-tildalabel__img" fetchpriority="low" alt="">
        </div>
        <div class="t-tildalabel__txtright">Tilda</div>
      </div>
    </a>
  </div>
</template>

<style>
.t-tildalabel {
  display: block !important;
  visibility: visible !important;
  position: relative !important;
  width: 100% !important;
  pointer-events: all !important;
  opacity: 1 !important;
  margin: 0 !important;
  z-index: 1 !important;
  background-color: #000 !important;
  text-align: center !important;
  padding: 0 !important;
}

.t-tildalabel__link {
  text-decoration: none !important;
  color: #777 !important;
  display: inline-block !important;
}

.t-tildalabel__wrapper {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 20px 0 !important;
  font-size: 12px !important;
  font-family: Arial, sans-serif !important;
  color: #777 !important;
  gap: 5px !important;
}

.t-tildalabel__img {
  height: 20px !important;
  width: auto !important;
  display: inline-block !important;
  vertical-align: middle !important;
}

.t-tildalabel__txtleft,
.t-tildalabel__txtright {
  display: inline-block !important;
  vertical-align: middle !important;
}
</style>
