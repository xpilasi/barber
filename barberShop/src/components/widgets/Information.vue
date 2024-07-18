 <script setup>

import locationIcon from '../../assets/img/icons/location.svg';
import calendarIcon from '../../assets/img/icons/calendar.svg';
import phoneIcon from '../../assets/img/icons/phone.svg';
import locationIconWhite from '../../assets/img/icons/location_white.svg';
import calendarIconWhite from '../../assets/img/icons/calendarWhite.svg';
import phoneIconWhite from '../../assets/img/icons/phoneWhite.svg';



defineProps({
    whiteIcon:{
        type: Boolean,
        required: true,
    },
});



</script>

<template>

    <article class='font-futuraLight tracking-widest pt-10 '>

        <div class="md:grid md:grid-cols-3 flex-col">
            
            <div class=' flex md:text-sm  items-center  justify-center lg:justify-end text-center   py-10 md:py-2 md:justify-end  md:pr-5 '>
                
                <img :src= ' whiteIcon ? locationIconWhite : locationIcon' alt="" width='50'>
                <div class="flex-col">
                    <p>Romans 1,</p>
                    <p>08025 Barcelona</p>
                </div>
                

            </div>
            <div class=" flex md:text-sm justify-center items-center text-center py-10 md:text-center md:py-2   ">
                
                <img :src= ' whiteIcon ? calendarIconWhite : calendarIcon' alt="" width='50'>
                <div class="flex-col">
                    <p>LUN-VIER 10.00 - 20.00</p>
                    <p>SÁBADO 10.00 - 18.00</p>
                    
                </div>
                

            </div>
            <div class=" flex justify-center  md:text-sm items-center py-10 md:justify-start md:py-2 md:pl-5 ">
                
                <img :src= ' whiteIcon ? phoneIconWhite : phoneIcon 'alt="" width='50'>
                <div class="flex-col ">
                    <p>+34 632610976</p>
                    
                </div>
                

            </div>
            

        </div>

    </article>

</template>