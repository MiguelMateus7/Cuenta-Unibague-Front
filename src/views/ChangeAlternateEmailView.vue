<template>
  <MainLayout>
    <div class="h-full w-full flex flex-col items-center justify-center">
      <div class="mb-10">
        <h1 class="text-3xl p-1">
          Cambiar correo alterno
        </h1>
        <p class="text-lg p-1">
          Si deseas cambiar tu correo alterno ingresa el siguiente formulario
        </p>
      </div>


      <div v-if="showForm"
           class="p-5 border shadow rounded-lg bg-gray-100  md:w-1/2 lg:w-1/4">
        <div class="text-left my-4">
          <label for="email" class="font-semibold block my-2">Correo Unibagué</label>
          <input type="text" id="email" v-model="email.value" placeholder="Miguel.Mateus"
                 class="rounded border px-3 py-1 w-full">
        </div>

        <div class="text-left mt-4">
          <label for="password" class="font-semibold block my-2">Contraseña actual</label>
          <input type="password" id="password" v-model="password.value"
                 class="rounded border px-3 py-1 w-full">
        </div>

        <div class="text-left mt-4">
          <label for="alternateEmail" class="font-semibold block my-2">Nuevo correo alterno</label>
          <input type="text" id="alternateEmail" v-model="alternateEmail.value"
                 class="rounded border px-3 py-1 w-full">

          <p class="mt-3">
            <span v-html="getIcon('NOT_VALID_EMAIL')"></span>
            Debe ingresar un correo válido
          </p>

        </div>

        <div class="text-left mt-4">
          <label for="confirmAlternateEmail" class="font-semibold block my-2">Confirmacion correo alterno</label>
          <input type="text" id="confirmAlternateEmail" v-model="confirmAlternateEmail.value"
                 class="rounded border px-3 py-1 w-full">
          <p class="mt-3" v-if="(confirmAlternateEmail.value !== '' && confirmAlternateEmail.errors.length > 0)">
            Debe coincidir con el valor ingresado anteriormente
          </p>
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
  name: "ChangeAlternateEmailView",
  components: {
    MainLayout
  },
  data() {
    return {
      showForm: true,
      message: 'Ha ocurrido un error. Por favor vuelve a intentarlo',
      email: {
        value: ''
      },
      password: {
        value: ''
      },
      alternateEmail: {
        value: '',
        errors: []
      },
      confirmAlternateEmail: {
        value: '',
        errors: []
      }
    }
  },
  methods: {
    submitForm() {
      //Validar que el formulario esté bien

      //Recibir la respuesta


      //cambiar el mensaje y mostrarlo
      this.message = 'Tu correo alterno ha sido cambiado exitosamente';
      this.showForm = false;
    },
    getIcon(errorName) {
      if (this.alternateEmail.value.length === 0) {
        return '';
      }
      if (this.alternateEmail.errors.includes(errorName)) {
        return '<i class="fa-solid fa-circle-xmark" style="color:red"></i>';
      } else {
        return '<i class="fa-solid fa-circle-check" style="color:green"></i>';
      }
    }
  },
  watch: {
    'alternateEmail.value'(newValue, oldValue) {
      if (valid(newValue)) {
        this.alternateEmail.errors = [];
      } else {
        if (!this.alternateEmail.errors.includes('NOT_VALID_EMAIL')) {
          this.alternateEmail.errors.push('NOT_VALID_EMAIL');
        }
      }
    },
    'confirmAlternateEmail.value'(newValue, oldValue) {
      if (newValue === this.alternateEmail.value) {
        this.confirmAlternateEmail.errors = [];
      } else {
        if (!this.confirmAlternateEmail.errors.includes('NOT_EQUAL_EMAIL')) {
          this.confirmAlternateEmail.errors.push('NOT_EQUAL_EMAIL');
        }
      }
    }
  }
}
</script>
