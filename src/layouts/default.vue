<template>
  <div>
    <h1>
      <nuxt-link to="/">
        <img class="logo" src="~/assets/img/TitleLogo.png" />
      </nuxt-link>
    </h1>
    <nuxt />
  </div>
</template>

<style>
html {
  box-sizing: border-box;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.logo {
  width: auto;
  height: 60px;
}
</style>
