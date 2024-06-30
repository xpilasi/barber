
<script setup>
import {ref,onMounted} from 'vue';
import barbershopSvgLogo from '../assets/img/icons/barber_shop.svg';
import moustacheSvgLogo from '../assets/img/icons/moustacheSvg.svg';
import barberLogo from '../assets/img/logos/barberLogo.svg'
import instaLogo from '../assets/img/social/instagram.svg'
import whatsappLogo from '../assets/img/social/Whatsapp.svg'

const menuClasses = ref('px-5 text-sm');
const navClassDesk = ref(' py-5 flex fixed w-full justify-center sm:pr-10 sm:pl-5 md:pr-5 md:pl-5 lg:pr-20  lg:pl-20 items-center ');
const menuLogo = 'flex left-10';

const scrollPosition = ref(null);
const mobile = ref(true);
const mobileNav = ref(null);
const showMenuIcon =ref(true);
const windowWidth = ref(null);



const toggleMenu = ()=> {
  mobileNav.value = !mobileNav.value;
  showMenuIcon.value = !showMenuIcon.value;
  
};

const checkScreen = ()=>{
  windowWidth.value = window.innerWidth;
  
  if(windowWidth.value < 768){
    mobile.value = true; 

  }else{
    mobileNav.value = false;
    mobile.value = false;
    showMenuIcon.value = true;
  
  }

}

//menu scrolling down
const handleScroll = ()=>{
    if (window.scrollY > 0) {
        menuClasses.value = 'pl-5 text-sm  transition-all duration-300';
        navClassDesk.value = ' py-5 flex fixed w-full justify-center sm:pr-10 sm:pl-5 md:pr-5 md:pl-5 lg:pr-20  lg:pl-20 items-center bg-black bg-opacity-50'

    }else{
        menuClasses.value = 'pl-10 text-sm transition-all duration-300';
        navClassDesk.value = ' py-5 flex fixed w-full justify-center sm:pr-10 sm:pl-5 md:pr-5 md:pl-5 lg:pr-20  lg:pl-20 items-center '
    };
  }
onMounted(()=>{
    
    window.addEventListener('scroll',handleScroll);
    window.addEventListener('resize',checkScreen);
    checkScreen();
    
});

 
</script>
<template>

 <!-- Nav no Mobile -->
 <nav v-show= !mobile :class=navClassDesk>
        
        
        <ul  class='flex text-white font-futuraLight tracking-widest '>
            
            <li :class=menuClasses><a href=# >RESERVA</a></li>
            <li :class=menuClasses><a href=# >UBICACION</a></li>
            <li :class=menuClasses><a href=# >PRECIOS</a></li>
            <li :class=menuClasses><a href=# >GALERIA</a></li>
            <li :class=menuClasses><a href=# >CONTACTO</a></li>
            
            
        </ul>
</nav>
        
      <!-- Nav mobile closed-->

      <nav class='flex fixed w-full left-0 right-0 bg-barber-bg justify-between'>
        <div class='flex justify-end w-full'>
          <!-- Burger logo -->
          <button @click=toggleMenu v-show=showMenuIcon class="md:hidden pl-3  text-red-300 focus:outline-none h-20 w-20 justify-center items-center">

              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
              </svg>
              
          </button>
        </div>
      </nav>  

      <!-- Nav mobile opened-->

      <nav v-show= mobileNav class='  lg:hidden right-0 left-0 flex fixed flex-col bg-barber-bg h-screen w-screen text-3xl  text-white font-hilborn tracking-wider items-center'>
        <ul>
            <li class='pb-20'>  
              <!-- close logo -->           
              <button @click=toggleMenu v-show= mobileNav class="md:hidden  flex absolute right-4  text-white focus:outline-none h-20 w-20 justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6L18 18M18 6L6 18" />
                </svg>
              </button>
            </li>
            <li class='flex  justify-center  pb-5'><img  :src=barberLogo alt="" width='150'></li>
            <li class='py-8 text-center'><a href=# >PRECIOS</a></li>
            <li class='py-8 text-center'><a href=# >AGENDAR</a></li>
            <li class='py-8 text-center'><a href=# >UBICACIÓN</a></li>
            <li class='py-8 text-center'><a href=# >CLIENTES</a></li>
            <li class='flex  justify-center   pt-10'><img :src=instaLogo alt="" width='50'></li>
            
        </ul>
        <p class="bg-black"></p>
      </nav>

 
     
</template>

