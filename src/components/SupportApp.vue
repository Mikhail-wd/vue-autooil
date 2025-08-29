<template>
    <div class="w-10/10 flex flex-col items-center gap-[20px] py-[30px] bg-red-800">
        <div class="lg:w-6/10 w-7/10 bg-red-200 gap-[10px] lg:flex-row  flex flex-col"><img src=""
                class="lg:h-[250px] lg:w-[250px] w-10/10 aspect-1/1  bg-image-loayal" alt=""><span
                class="p-[20px] flex flex-col items-center lg:items-start gap-[15px] justify-center">
                <p class="text-[2.2rem] lg:text-[1.4rem]">Для постоянных клиентов</p>
                <p class="text-red-600 text-[1.8rem] lg:text-[1.4rem] font-bold">Накопительная бонусная карта</p>
                <p class="lg:text-[0.8rem] text-[2rem] lg:text-start sm:text-center">Оформите бесплатно нашу накопительную бонусную карту и получайте кэшбэк! Копите и оплачивайте наши
                    услуги и товары бонусами.Для получения карты обратитесь к менеджеру.</p>
            </span></div>
        <div class="lg:w-6/10 w-7/10 bg-red-200 gap-[10px] lg:flex-row flex flex-col"><img src=""
                class="lg:h-[250px] lg:w-[250px] w-10/10 aspect-1/1 bg-image-app" alt=""><span
                class="p-[20px] flex flex-col items-center lg:items-start gap-[15px] justify-center">
                <p class="text-[2.2rem] lg:text-[1.4rem]">Для удобства клиентов</p>
                <p class="text-red-600 text-[1.8rem] lg:text-[1.4rem] font-bold">Приложение "Мой Гараж"</p>
                <p class="lg:text-[0.8rem] text-[2rem] lg:text-start sm:text-center">Электронная сервисная книжка, онлайн запись на СТО, общение с клиентами. Скачать приложение:</p>
                <div class="flex flex-row lg:text-[1.2rem] text-[2rem] text-red-600 flex-nowrap w-3/10 justify-around ">
                    <a href="" class="underline">Android</a><a href="" class="underline">iOS</a>
                </div>
            </span></div>
    </div>

</template>
<script lang="ts" setup>
</script>
<style scoped>
.bg-image-loayal {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/loyalCards.jpg");
    background-position: center center;
}

.bg-image-app {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/appRed.png");
    background-position: center center;
}
</style>