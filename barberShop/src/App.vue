<script setup>

import MenuTop from './components/MenuTop.vue';
import Booking from './components/Booking.vue';
import Footer from './components/Footer.vue';
import Social from './components/Social.vue';
import Location from './components/Location.vue';
import Prices from './components/Prices.vue';
import { Transition } from '@vue/runtime-dom';


</script>

<template >
  <div class =  ' bg-barber-bg'>
    <MenuTop/>
    
      <Booking/>
    
      <Location/>
    
    
    
    
    <Prices/>
    <Social/>
    <Footer/>

  </div>
  
 
</template>

