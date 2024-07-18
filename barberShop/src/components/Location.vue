
    <script setup>
    import {ref,onMounted} from 'vue';
    import Title from './Titles/Title.vue';
    import Information from './widgets/Information.vue';

    const title = 'Location';
    

    </script>
    <template>
        
        <section id="ubicacion" class="bg-barber-location min-h-screen h-full w-auto pt-20 bg-cover flex-col  ">
            
                <Title class="flex justify-center" title="Ubicación"/>
               
            
            <div class="w-auto min-h-screen flex flex-col  sm:px-5 md:px-20 lg:px-50  py-10 lg:pb-40 justify-between">
            
            <article>
                <div class="w-full h-80 lg:h-96 "> 
               
               <iframe class=" min-h-full min-w-full"   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.4837735745778!2d2.1613742766064346!3d41.407015994776465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2b8bcef899f%3A0x1b376c99a5478fc1!2sBarberia%20Bigoti!5e0!3m2!1ses!2ses!4v1720383570683!5m2!1ses!2ses"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </article>
            <article class=" ">
                <Information whiteIcon="false"/>
            </article>
            </div>
            
            
        </section>

     
        
        
        
    </template>

