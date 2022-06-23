<template>
  <div class="h-14 w-full" style="background-color: #0f1f39">
    <div class="flex justify-between items-center px-6">
      <div class="h-12 py-2">
        <router-link :to="{name:'home'}">
          <img src="https://www.unibague.edu.co/images/2022/Unibague-4.0.png" alt="Logo unibagué">
        </router-link>
      </div>
      <div class="h-14 flex items-center text-white">
        <router-link :to="{name:'home'}" class="mx-4">Inicio</router-link>
        <router-link :to="{name:'home'}" class="mx-4">Soporte</router-link>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Menu"
}
</script>
