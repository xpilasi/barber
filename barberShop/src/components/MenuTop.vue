
<script setup>
import {ref,onMounted} from 'vue';
import barbershopSvgLogo from '../assets/img/icons/barber_shop.svg';
import moustacheSvgLogo from '../assets/img/icons/moustacheSvg.svg';

const menuClasses = ref('p-10 text-sm ');

//menu scrolling down
const handleScroll = ()=>{
    if (window.scrollY > 0) {
        menuClasses.value = 'p-2 text-sm  transition-all duration-300';
    }else{
        menuClasses.value = 'p-10 text-sm transition-all duration-300';
    }
}


onMounted(()=>{
    window.addEventListener('scroll',handleScroll);
    const isFullScreen = window.innerWidth <= 768;
    if (isFullScreen) { // 768px es el punto de corte para dispositivos md
        menuClasses.value = 'md:h-screen';
}
});



// Lógica para detectar el tamaño de la pantalla y activar el modo pantalla completa en dispositivos md y más pequeños

    
</script>
<template>
   <div :class="{ 'md:h-screen': isFullScreen }">
    <div class=' bg-barber-bg fixed top-0 w-full z-10 '>
    <div class="lg:hidden flex justify-end mt-5">
      <button @click="toggleMenu" class="text-white focus:outline-none mr-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
    <div class='  flex justify-center  '>
        <ul class='lg:flex  mx-20 text-white font-hilborn tracking-wider justify-center items-center'>
            <!-- <li class='sm:hidden md:hidden lg:visible '><img :src=moustacheSvgLogo alt="" width="60"></li> -->
            <li :class=menuClasses><a href=# :class=hoverMenu>PRECIOS</a></li>
            <li :class=menuClasses><a href=# :class=hoverMenu>AGENDAR</a></li>
            <li :class=menuClasses><a href=# :class=hoverMenu>UBICACIÓN</a></li>
            <li :class=menuClasses><a href=# :class=hoverMenu>CLIENTES</a></li>
            <!-- <li class='sm:hidden md:hidden'><img :src=moustacheSvgLogo alt="" width="60"></li> -->
      
        </ul>
    </div>
   </div>

    

    

</div>

</template>

