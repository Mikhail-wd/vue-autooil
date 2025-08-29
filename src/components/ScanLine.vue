<script lang="ts" setup>
</script>

<template>
    <div class="w-10/10 py-[15px] bg-red-800 text-white overflow-hidden flex flex-row justify-around">
        <div
            class="running-line w-[100dvw - 3rem] text-bold lg:text-[3rem] text-[2.5rem] flex flex-row flex-nowrap justify-between">
            <p class="w-fit text-nowrap mr-[3rem]"><strong> ✓ </strong>Экспрес-замена масла</p>
            <p class="w-fit text-nowrap mr-[3rem]"><strong> ✓ </strong>Быстрая диагностика</p>
            <p class="w-fit text-nowrap mr-[3rem]"><strong> ✓ </strong>Технический осмотр</p>
        </div>
        <div
            class="running-line-second w-[100dvw - 3rem] text-bold lg:text-[3rem] text-[2.5rem] flex flex-row flex-nowrap justify-between">
            <p class="w-fit text-nowrap mr-[3rem]"><strong> ✓ </strong>Экспрес-замена масла</p>
            <p class="w-fit text-nowrap mr-[3rem]"><strong> ✓ </strong>Быстрая диагностика</p>
            <p class="w-fit text-nowrap mr-[3rem]"><strong> ✓ </strong>Технический осмотр</p>
        </div>
    </div>
</template>

<style scoped>
.running-line {
    animation: scroll 20s linear infinite forwards;
}

.running-line-second {
    transform: translateX(100%);
    animation: scroll 20s linear infinite forwards;
}

@keyframes scroll {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-100%);
    }

}
</style>