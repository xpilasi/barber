<script setup>
import {ref,onMounted} from 'vue';
import Title from './Titles/Title.vue';
import BookingButton from './BookingButton.vue';






</script>
<template>
    <section id="precios" class=" bg-barber-prices min-h-screen h-full bg-cover text-white pt-20">
       
        
            
            
                <Title title="Precios" class='flex justify-center  mx-20  '/>
                <article class='grid lg:grid-cols-2 md:grid-cols-2 lg:gap-20 py-10  md:gap-20 font-futuraLight tracking-wider mx-20 lg:mx-60 lg:text-lg  '>
                    
                <div class=" border-b-2  border-neutral-600 pb-2 mr-1 md:pt-0 lg:pt-0 sm:pt-5 pt-5 ">
                    <div class="grid grid-cols-2 pb-0">
                        <p class="text-start">Corte Chico</p>
                        <p class=" text-end  ">EUR 12.80</p>
                    </div>
                </div>
                <div class=" border-b-2 border-neutral-600 pb-2 mr-1  md:pt-0 lg:pt-0 sm:pt-5 pt-5  " >
                    <div class="grid grid-cols-2 pb-0">
                        <p class="text-start">Barba</p>
                        <p class="text-end  ">EUR 12.80</p>
                    </div>
                </div>
                <div class=" border-b-2 border-neutral-600 pb-2 mr-1 sm:pt-5 md:pt-0 lg:pt-0 pt-5  ">
                    <div class="grid grid-cols-2 pb-0">
                        <p class="text-start">Corte Chico</p>
                        <p class="text-end  ">EUR 12.80</p> 
                    </div>
                </div>
                <div class=" border-b-2 border-neutral-600 pb-2 mr-1 sm:pt-5 md:pt-0 lg:pt-0 pt-5 ">
                    <div class="grid grid-cols-2 pb-0">
                        <p class="text-start">Corte Chico</p>
                        <p class="text-end  ">EUR 12.80</p>
                    </div>
                </div>
                <div class=" border-b-2 border-neutral-600 pb-2 mr-1 sm:pt-5 md:pt-0 lg:pt-0 pt-5 ">
                    <div class="grid grid-cols-2 pb-0">
                        <p class="text-start">Corte Chico</p>
                        <p class="text-end  ">EUR 12.80</p>
                    </div>
                </div>
                <div class=" border-b-2 border-neutral-600 pb-2 mr-1 sm:pt-5 md:pt-0 lg:pt-0 pt-5 ">
                    <div class="grid grid-cols-2 pb-0">
                        <p class="text-start">Corte Chico</p>
                        <p class="text-end  ">EUR 12.80</p>
                    </div>
                </div>
            
            </article>
            <article class='flex justify-center pt-20  '>
                <BookingButton class="mb-10"/>
            </article>
            


            
                
                
            
            
            
            
        
        
        
        
    </section>
    
    
</template>