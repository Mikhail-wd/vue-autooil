<template>
    <div class="footer-info w-10/10 bg-black flex flex-col lg:flex-row lg:flex-nowrap">
        <div class=" lg:w-5/10 p-none overflow-hidden">
            <iframe
                src="https://yandex.com/map-widget/v1/?feedback=object%2Fedit&feedback-context=map.context&ll=113.522959%2C52.044455&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DIgoN3wvjQhWTLVBC&z=18.35"
                width="100%" height="445" frameborder="1" allowfullscreen="true">
            </iframe>
        </div>
        <div class=" lg:p-[60px] p-[20px] lg:w-5/10 flex flex-col gap-[22px] lg:justify-between items-start">
            <p class="text-red-800 font-bold lg:text-[1.8rem] text-[3.2rem]">AutoOil</p>
            <p class="text-white lg:text-[1.8rem] text-[2.2rem] h-5/10">
                Режим работы: ПН-ПТ 9:00 - 19:00 <br>
                СБ 9:00 - 18:00 ВС 10:00 - 17:00
            </p>
            <img src="../assets/vk.svg" alt="vk">
            <p class="text-white lg:text-[1.8rem] text-[2.2rem]">
                г.Лесоярск, Ленина 12 <br>
                +7(000) 882-38-29
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.footer-info {
    box-sizing: border-box;
    height: 445px;
}
</style>