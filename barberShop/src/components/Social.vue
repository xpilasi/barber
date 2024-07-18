<script setup>
import {ref,onMounted} from 'vue';
import Title from  './Titles/Title.vue';
import Galeria from './widgets/Gallery.vue';
import GaleriaGrid from './widgets/GalleryGrid.vue';




</script>
<template>
    <section id="galeria" class=" bg-barber-gallery min-h-screen bg-cover text-barber-bg flex items-center ">
      <!-- <div class="justify-center flex">
                <Title title="Instagram"/>
        </div>  -->
        <!-- <div class="flex justify-center  py-10">
            <Galeria/>
        </div> -->
        <div class="">
            <GaleriaGrid/>
        </div>
        
    </section>
        
       
  

    
    
    
</template>
