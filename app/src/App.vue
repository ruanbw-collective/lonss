<template>
  <transition name="slide-fade" mode="out-in">
    <router-view>
      <template #default="{ Component }">
        <Component :is="Component"/>
      </template>
    </router-view>
  </transition>
</template>
