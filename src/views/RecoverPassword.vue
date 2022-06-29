<template>
  <MainLayout>
    <div class="h-full w-full flex flex-col items-center justify-center">
      <div class="mb-10">
        <h1 class="text-3xl p-1">
          Recuperar contraseña
        </h1>
      </div>

      <div v-if="showForm"
           class="p-5 border shadow rounded-lg bg-gray-100 md:w-1/2 lg:w-1/3">
        <div class="text-left my-4">
          <label for="email" class="font-semibold block my-2">Correo Unibagué</label>
          <input type="email" id="email" v-model="email.value" placeholder="Julio.Buitrago"
                 class="rounded border px-3 py-1 w-full">

          <p class="mt-3">
            <span v-html="getIcon('NOT_VALID_EMAIL')"></span>
            Debe ingresar un correo válido
          </p>

        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 justify-between w-full mt-4 ">

          <div class="">

            <router-link class="rounded py-2 text-center w-full bg-gray-200 block mt-2"
                         :to="{name:'home'}">
              Ir atrás
            </router-link>
          </div>

          <div class="">
            <button
                :disabled="!isFormValid"
                :class="{'cursor-not-allowed':!isFormValid}"
                @click="submitForm"
                class="rounded py-2 text-center w-full text-white mt-2" style="background-color: #0f1f39">
              Recuperar
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
  name: "RecoverPassword",
  components: {
    MainLayout
  },
  data() {
    return {
      showForm: true,
      message: 'Ha ocurrido un error. Por favor vuelve a intentarlo',
      email: {
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
      this.message = 'Hemos enviado a ju*****@gmail.com la información de tu cuenta unibagué.';
      this.showForm = false;
    },
    getIcon(errorName) {
      if (this.email.value.length === 0) {
        return '';
      }
      if (this.email.errors.includes(errorName)) {
        return '<i class="fa-solid fa-circle-xmark" style="color:red"></i>';
      } else {
        return '<i class="fa-solid fa-circle-check" style="color:green"></i>';
      }
    }
  },
  watch: {
    'email.value'(newValue) {
      if (valid(newValue)) {
        this.email.errors = [];
      } else {
        if (!this.email.errors.includes('NOT_VALID_EMAIL')) {
          this.email.errors.push('NOT_VALID_EMAIL');
        }
      }
    },
  },
  computed: {
    isFormValid() {
      return (this.email.value.length > 0 && !this.email.errors.includes('NOT_VALID_EMAIL'));
    }
  }
}
</script>
