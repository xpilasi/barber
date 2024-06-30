
    <script setup>
    import {ref,onMounted} from 'vue';

    const map = ref(null);

    onMounted(()=>{
        
        new window.google.maps.Map(map.value,{
            center: {lat:41.40703 ,lng:2.16395},
            zoom: 10,
        });
        
    });

    </script>
    <template>
        <section  ref="map" style="height: 500;width: 500;" >hola
            <!-- <h2 class='p-7 my-10 text-white font-hilborn tracking-widest text-3xl'>Ubicación</h2> -->
        </section>
        
        
    </template>

