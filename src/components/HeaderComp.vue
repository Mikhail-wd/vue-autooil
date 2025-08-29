<template>
    <div
        class="z-12 w-screen opacity-90 fixed justify-between bg-black flex lg:w-7/9 lg:left-1/9 flex-nowrap flex-row h-[80px] items-center justify-between lg:gap-x-[30px] px-[15px]">
        <p class="lg:text-[1.8rem] text-[4rem] text-red-800 font-bold item-center">AutoOil</p>

        <ul v-if="!burgerState" class="text-white flex flex-nowrap flex-row items-center text-[1.1rem] gap-x-[15px]">
            <li class="hover:scale-[1.1] hover:cursor-pointer hover:text-red-500">О нас</li>
            <li class="hover:scale-[1.1] hover:cursor-pointer hover:text-red-500">Услуги</li>
            <li class="hover:scale-[1.1] hover:cursor-pointer hover:text-red-500">Запись</li>
            <li class="hover:scale-[1.1] hover:cursor-pointer hover:text-red-500">Отзывы</li>
            <li class="hover:scale-[1.1] hover:cursor-pointer hover:text-red-500 hover:bb-solid-[1px]">Контакты</li>
        </ul>
        <div v-else @click="burgerDropDown()" class="flex flex-col gap-y-[6px] hover:scale-[1.1] hover:cursor-pointer">
            <div class="w-[50px] h-[4px] bg-white"></div>
            <div class="w-[50px] h-[4px] bg-white"></div>
            <div class="w-[50px] h-[4px] bg-white"></div>
        </div>
        <div class="flex gap-x-[20px] flex-row flex-nowrap items-center text-red-800 text-[1.8rem]">
            <ul class="flex flex-col flex-nowrap text-[1.3rem] font-bold text-end">
                <li>г.Лесоярск, Ленина 12</li>
                <li>+7(000) 882-38-29</li>
            </ul>
            <img v-if="!burgerState" src="../assets/vk.svg" alt="vk">
        </div>
    </div>
    <Transition name="fade">
        <div v-if="burgerDropdown" class="z-12 overflow-hidden fixed top-[80px] w-1/1 opacity-70 bg-black">
            <ul class="pb-[20px] text-white flex flex-wrap flex-row items-center text-[1.2rem] gap-y-[15px]">
                <li class="w-1/1 text-center hover:scale-[1.1] hover:cursor-pointer hover:text-red-500">О нас</li>
                <li class="w-1/1 text-center hover:scale-[1.1] hover:cursor-pointer hover:text-red-500">Услуги</li>
                <li class="w-1/1 text-center hover:scale-[1.1] hover:cursor-pointer hover:text-red-500">Запись</li>
                <li class="w-1/1 text-center hover:scale-[1.1] hover:cursor-pointer hover:text-red-500">Отзывы</li>
                <li
                    class="w-1/1 text-center hover:scale-[1.1] hover:cursor-pointer hover:text-red-500 hover:bb-solid-[1px]">
                    Контакты
                </li>
            </ul>
        </div>
    </Transition>
</template>

<script lang="ts" setup>
import windowSize from "../support/windowWidthCheck.ts"
import { onUnmounted, onMounted, ref, watch, Transition } from 'vue';

const checkWindowSize = windowSize
const burgerState = ref(false)
const burgerDropdown = ref(false)

function burgerDropDown() {
    burgerDropdown.value = !burgerDropdown.value
}

onMounted(() => {
    windowSize.value = window.innerWidth
    window.addEventListener("resize", () => windowSize.value = window.innerWidth)
})
onUnmounted(() => {
    window.removeEventListener("resize", () => { })
})

watch(windowSize, () => {
    if (checkWindowSize.value <= 650) {
        burgerState.value = true
        console.log("Mobile")
    } else {
        burgerDropdown.value = false
        burgerState.value = false
    }
})

</script>

<style lang="css" scoped>
.header {
    display: flex;
    flex-direction: column;
}

.fade-enter-active {
    animation: dropdown 0.3s;
}

.fade-leave-active {
    animation: dropdown 0.3s reverse;
}

@keyframes dropdown {
    0% {
        opacity: 0;
        margin-top: -100px;
    }

    100% {
        opacity: 0.7;
    }
}
</style>