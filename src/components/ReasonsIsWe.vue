<template>
    <div class="flex flex-col justify-start items-center lg:gap-[40px] image-bg py-[40px]">
        <div class="rounded-2xl bg-black/40 backdrop-blur-[3px] shadow-gray-400 lg:h-fit lg:w-fit mt-[-10px] p-[30px]">
            <div class="lg:text-[2rem] text-[3rem] text-white text-center">
                <p class="lg:mt-[10px] font-bold">Почему мы?</p>
                <p class="lg:text-[1.2rem] lg:pt-[5px] text-[2.2rem]">Чем наш сервис <br> выгодно отличается от
                    остальных?</p>
            </div>
        </div>
        <ul class="mt-[40px] w-7/10 flex flex-wrap justify-center lg:gap-[50px] gap-[20px]">
            <li
                class="font-bold flex flex-row flex-nowrap gap-x-[10px] items-center bg-white/90 p-[15px] p-r-[40px] rounded-2xl border-black lg:text-[1.2rem] text-[2rem] lg:w-4/10 w-10/10 outline-2 shadow-black-60 outline-offset-1 outline-black-800">
                <img src="../assets/check.svg" alt="check" class="w-[30px]" /> <span class="text-pretty">Дорожим доверием своих
                    клиентов</span>
            </li>
            <li
                class="font-bold flex flex-row flex-nowrap gap-x-[10px] items-center bg-white/90 p-[15px]  p-r-[40px] rounded-2xl border-black lg:text-[1.2rem] text-[2rem] lg:w-4/10 w-10/10 outline-2 shadow-black-60 outline-offset-1 outline-black-800">
                <img src="../assets/check.svg" alt="check" class="w-[30px]" /> <span class="text-pretty">Не ремонтируем то что не требует
                    ремонта</span>
            </li>
            <li
                class="font-bold flex flex-row flex-nowrap gap-x-[10px] items-center bg-white/90 p-[15px] p-r-[40px] rounded-2xl border-black lg:text-[1.2rem] text-[2rem] lg:w-4/10 w-10/10 outline-2 shadow-black-60 outline-offset-1 outline-black-800">
                <img src="../assets/check.svg" alt="check" class="w-[30px]" /> <span class="text-pretty">Запчачти безупречного
                    качества</span>
            </li>
            <li
                class="font-bold flex flex-row flex-nowrap gap-x-[10px] items-center bg-white/90 p-[15px] p-r-[40px] rounded-2xl border-black lg:text-[1.2rem] text-[2rem] lg:w-4/10 w-10/10 outline-2 shadow-black-60 outline-offset-1 outline-black-800">
                <img src="../assets/check.svg" alt="check" class="w-[30px]" /> <span class="text-pretty">Гарантия на все 12 меяцев или 10
                    000 км</span>
            </li>
            <li
                class="font-bold flex flex-row flex-nowrap gap-x-[10px] items-center bg-white/90 p-[15px] p-r-[40px] rounded-2xl border-black lg:text-[1.2rem] text-[2rem] lg:w-4/10 w-10/10 outline-2 shadow-black-60 outline-offset-1 outline-black-800">
                <img src="../assets/check.svg" alt="check" class="w-[30px]" /> <span class="text-pretty">Работаем без выходных</span>
            </li>
            <li
                class="font-bold flex flex-row flex-nowrap gap-x-[10px] items-center bg-white/90 p-[15px] p-r-[40px] rounded-2xl border-black lg:text-[1.2rem] text-[2rem] lg:w-4/10 w-10/10 outline-2 shadow-black-60 outline-offset-1 outline-black-800">
                <img src="../assets/check.svg" alt="check" class="w-[30px]" /> <span class="text-pretty">Работаем в сфере автосервиса более
                    5 лет</span>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>

</script>
<style scoped>
.image-bg {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/engine2.png");
    background-position: center center;
}
</style>