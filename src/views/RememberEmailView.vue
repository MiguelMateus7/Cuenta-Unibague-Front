<template>
  <MainLayout>
    <div class="h-full w-full flex flex-col items-center justify-center">
      <div class="mb-10">
        <h1 class="text-3xl p-1">
          Recuerda tu correo Unibague
        </h1>
        <p class="text-lg p-1">
          Si deseas recordar tu correo ingresa tu numero de documento (Sin puntos o comas)
        </p>
      </div>


      <div v-if="showForm"
           class="p-5 border shadow rounded-lg bg-gray-100  md:w-1/2 lg:w-1/4">
        <div class="text-left my-4">
          <label for="Ndocument" class="font-semibold block my-2">Numero de documento</label>
          <input type="text" id="Ndocument" v-model="documentNumber.value" placeholder=""
                 class="rounded border px-3 py-1 w-full">
        </div>

        <div class="text-left my-4">
          <label for="birthday" class="font-semibold block my-2">Fecha de nacimiento</label>
          <input class="rounded border px-3 py-1 w-full" type="date" v-model:="birthday.value" id="birthday"/>
        </div>


        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 justify-between w-full mt-4 ">

          <div class="">

            <router-link class="rounded py-2 text-center w-full bg-gray-200 block"
                         :to="{name:'home'}">
              Ir atrás
            </router-link>
          </div>

          <div class="">
            <button
                @click="submitForm"
                class=" rounded py-2 text-center w-full text-white" style="background-color: #0f1f39">
              Cambiar
            </button>
          </div>
        </div>

      </div>

      <div v-else
           class="p-5 border shadow rounded-lg bg-gray-100  md:w-1/2 lg:w-1/4">
        <p>
          {{ message }}
        </p>
      </div>

    </div>


  </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import valid from "@/helpers/valid_email";

export default {
  name: "RememberEmailView",
  components: {
    MainLayout
  },
  data() {
    return {
      showForm: true,
      message: 'Numero de documento no encontrado',
      documentNumber: {
        value: ''
      },
      birthday: {
        value: ''
      }
    }
  },
  methods: {
    submitForm() {
      //Validar que el numero de documento esté bien

      //Recibir la respuesta


      //cambiar el mensaje y mostrarlo
      this.message = 'Hemos encontrado satisfactoriamente tu correo';
      this.showForm = false;
    },
  },
  watch: {}
}
</script>