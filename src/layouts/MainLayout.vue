<template>
  <div class="flex flex-col items-center justify-between h-screen">
    <Menu></Menu>
    <!--CONTENIDO-->
    <slot></slot>
    <Footer></Footer>
  </div>

</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

export default {
  name: 'MainLayout',
  components: {
    Footer,
    Menu
  },

}
</script>
