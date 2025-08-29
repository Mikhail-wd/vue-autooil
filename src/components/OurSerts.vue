<template>
    <div class="w-10/10 overflow-hidden py-[50px] flex flex-col items-center gap-[30px] bg-red-600 text-white">
        <div class="lg:w-7/10 text-center wrap-pretty">
            <p class="lg:text-[2.2rem] text-[3.2rem] font-bold">Сертификаты</p>
            <p class="my-[12px] lg:text-[1.8] text-[2.2rem] px-[12px]">Наш автосервис является партнером известных
                производителей автотоваров. Это помогает вам экономить на
                расходных материалах!</p>
        </div>
        <div class="lg:w-7/10 w-10/10 px-[12px] flex flex-row gap-[30px] flex-wrap items-center justify-between my-[30px]">
            <div :key=elem.name v-for="elem in sertsArry" class="lg:w-4/10">
                <ZoomImg :src="elem.img" showZoomBtns="true" zoomType="move"/>
                <p class="mt-[10px] lg:text-[1.8] text-[2.2rem] font-bold">{{ elem.name }}</p>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ZoomImg } from "vue3-zoomer"

const sertsArry = [
    { name: "CASTROL", img: "../src/assets/zic.jpg" },
    { name: "IDEMITSU", img: "../src/assets/zic.jpg" },
    { name: "MILES", img: "../src/assets/zic.jpg" },
    { name: "MOBIL", img: "../src/assets/zic.jpg" },
    { name: "SHELL", img: "../src/assets/zic.jpg" },
    { name: "ZIC", img: "../src/assets/zic.jpg" }
]

</script>

<style scoped></style>