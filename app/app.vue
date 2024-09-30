<template>
  <Html>
    <Head> </Head>
    <div  >
      <NuxtPage />
    </div>
  </Html>
</template>


<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
  opacity: 30%;
  filter: blur(0.02rem);
}
</style>