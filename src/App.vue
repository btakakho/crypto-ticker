<template>
  <div id="app">
    <header class="page-header">
      <div class="container">
        <nav class="navigation">
          <a class="navigation__link" href="#" title="">Crypto Ticker App</a>
        </nav>
      </div>
    </header>

    <div class="container">
      <CryptoTicker />
    </div>
  </div>
</template>

<script>
import CryptoTicker from "@/views/CryptoTicker.vue";

export default {
  components: {
    CryptoTicker
  }
};
</script>
<style lang="scss">
html {
  box-sizing: border-box;
  font-size: 62.5%;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

body {
  background: #fff7f7;
  padding: 0;
  margin: 0;
  font-size: 2rem;
}

.page-header {
  background: #151515;
  padding: 0 1rem;
  height: 6rem;
  color: #fff;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.container {
  max-width: 65rem;
  margin: 0 auto;
  width: 100%;
}

.navigation {
  padding: 0 2rem;

  &__link {
    color: #fff;
    text-decoration: none;
  }
}
</style>
