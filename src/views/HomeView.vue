<template>
  <MainLayout>
    <div class="container mx-auto px-6 sm:px-10 lg:px-44 my-5">
      <div class="h-full">
        <h1 class="text-3xl mb-10">
          Servicios para tu cuenta Unibagué
        </h1>

        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-4">


          <router-link
              class="h-60 text-white p-8 flex flex-col justify-center items-center rounded-2xl shadow-xl cursor-pointer"
              style="background-color: #0f1f39"
              v-for="item in items" :key="item.title"
              :to="item.to">
            <h2 class="font-semibold text-xl mb-4">
              {{ item.title }}
            </h2>
            <i :class="item.icon+' fa-4x'"></i>
          </router-link>

        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
// @ is an alias to /src

import MainLayout from "@/layouts/MainLayout";

export default {
  name: 'HomeView',
  components: {
    MainLayout,
  },
  data() {
    return {
      items: [
        {
          title: 'Cambio de contraseña',
          icon: 'fa-solid fa-arrows-rotate',
          to: {name: 'changePasswordView'}
        },
        {
          title: 'Recuperar contraseña',
          icon: 'fa-solid fa-unlock',
          to: {name: 'recoverPassword'}
        },
        {
          title: 'Olvidé mi usuario',
          icon: 'fa-solid fa-user-xmark',
          to: {name: 'rememberEmailView'}
        },

        {
          title: 'Cambiar correo alterno',
          icon: 'fa-solid fa-envelope',
          to: {name: 'changeAlternateEmailView'}
        },
        {
          title: 'Perdí acceso a mi correo alterno',
          icon: 'fa-solid fa-circle-exclamation',
          to: {name: 'home'}
        },
      ]
    }
  }
}
</script>
