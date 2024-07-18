<script setup>

defineProps({
    title:{
        type: String,
        required: true,
    },
});
 


</script>

<template>
    <h2 class='font-dmSerif text-5xl tracking-tighter' >
        {{ title }}
    </h2>

</template>