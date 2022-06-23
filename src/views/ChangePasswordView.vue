<template>
  <MainLayout>
    <div class="h-full w-full flex flex-col items-center justify-center">
      <div class="mb-10">
        <h1 class="text-3xl">
          Cambio de contraseña
        </h1>
        <p class="text-lg">
          Si deseas cambiar tu contraseña, por favor diligencia los campos solicitados.
        </p>
      </div>
      <div class="p-5 border shadow rounded-lg bg-gray-100  md:w-1/2 lg:w-1/4">
        <div class="text-left my-4">
          <label for="user" class="font-semibold block my-2">Usuario Unibagué</label>
          <input type="text" id="user" name="user" placeholder="juan.ospina" class="rounded border px-3 py-1 w-full">
        </div>

        <div class="text-left mt-4">
          <label for="password" class="font-semibold block my-2">Contraseña actual</label>
          <input type="password" id="password" name="password"
                 class="rounded border px-3 py-1 w-full">
        </div>

        <div class="text-left mt-4">
          <label for="newPassword" class="font-semibold block my-2">Nueva contraseña</label>

          <input type="password" id="newPassword" name="newPassword"
                 class="rounded border px-3 py-1 w-full">
          <p class="mt-3">
            Debe contener letras mayúsculas y minúsculas
          </p>
          <p>
            Debe contener al menos un número
          </p>
        </div>

        <div class="text-left mt-4">
          <label for="confirmNewPassword" class="font-semibold block my-2">Confirma tu nueva contraseña</label>
          <input type="password" id="confirmNewPassword" name="confirmNewPassword"
                 class="rounded border px-3 py-1 w-full">
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 justify-between w-full mt-4 ">

          <div class="">

            <router-link class="rounded py-2 text-center w-full bg-gray-200 block"
            :to="{name:'home'}">
              Ir atrás
            </router-link>
          </div>

          <div class="">
            <button class=" rounded py-2 text-center w-full text-white" style="background-color: #0f1f39">
              Cambiar
            </button>
          </div>
        </div>

      </div>
    </div>

  </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";


export default {
  name: "ChangePasswordView",
  components: {
    MainLayout
  }
}
</script>
