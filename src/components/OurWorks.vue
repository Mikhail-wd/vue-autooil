<template>
    <div class="bg-image w-10/10 flex flex-col items-center justify-center py-[30px] overflow-hidden">
        <div class="rounded-2xl bg-black/40  backdrop-blur-[3px] shadow-gray-400 lg:h-fit lg:w-fit  p-[20px]">
            <div class="lg:text-[2rem] text-[3rem] text-white text-center">
                <p class="font-bold">Наши работы</p>
            </div>
        </div>
        <div class="w-7/10 flex lg:flex-row lg:flex-nowrap items-center justify-center mt-[30px] flex-col gap-x-[15px] gap-y-[25px]">
            <div class="slider-wrapper outline-2 overflow-hidden outline-red-500 rounded-lg ">
                <div class="keen-slider" ref="container">
                    <div class="keen-slider__slide slide_window  bg-red-100">
                        <img class=""
                            src="../assets/autoservice/automotive-service-advisor.png.webp" alt="alt">
                    </div>
                    <div class="keen-slider__slide slide_window bg-blue-100">
                        <img class="" src="../assets/autoservice/Automotive_Testing.jpg"
                            alt="alt">
                    </div>
                    <div class="keen-slider__slide slide_window bg-green-100">
                        <img class="" src="../assets/autoservice/original_6.avif" alt="alt">
                    </div>
                    <div class="keen-slider__slide slide_window bg-olive-100">
                        <img class="" src="../assets/autoservice/original_656.avif" alt="alt">
                    </div>
                    <div class="keen-slider__slide slide_window bg-orange-100">
                        <img class="" src="../assets/autoservice/Diagnostics-Car-Service.jpg" alt="alt">
                    </div>
                </div>
            </div>
            <ul class="lg:w-5/10 flex gap-[15px] lg:flex-row flex-wrap sm:w-10/10">
                <li
                    class="flex flex-row flex-nowrap gap-[10px] items-center w-10/10 lg:text-[0.8rem] sm:text-[2rem] shadow-black/30 lg:w-5/11 bg-white/80 rounded-sm p-[10px] outline-2 outline-offset-1">
                    <img src="../assets/gear.svg" alt="gear" class="h-[20px] w-[20px] block"><span
                        class="lg:text-[0.8rem] text-[2.2rem]">Заменя ДВС</span>
                </li>
                <li
                    class="flex flex-row flex-nowrap gap-[10px] items-center w-10/10 lg:text-[0.8rem] sm:text-[2rem] shadow-black/30 lg:w-5/11 bg-white/80 rounded-sm p-[10px] outline-2 outline-offset-1">
                    <img src="../assets/gear.svg" alt="gear" class="h-[20px] w-[20px] block"><span
                        class="lg:text-[0.8rem] text-[2.2rem]">Оригинальные масла</span>
                </li>
                <li
                    class="flex flex-row flex-nowrap gap-[10px] items-center w-10/10 lg:text-[0.8rem] sm:text-[2rem] shadow-black/30 lg:w-5/11 bg-white/80 rounded-sm p-[10px] outline-2 outline-offset-1">
                    <img src="../assets/gear.svg" alt="gear" class="h-[20px] w-[20px] block"><span
                        class="lg:text-[0.8rem] text-[2.2rem]">Контрактные запчасти</span>
                </li>
                <li
                    class="flex flex-row flex-nowrap gap-[10px] items-center w-10/10 lg:text-[0.8rem] sm:text-[2rem] shadow-black/30 lg:w-5/11 bg-white/80 rounded-sm p-[10px] outline-2 outline-offset-1">
                    <img src="../assets/gear.svg" alt="gear" class="h-[20px] w-[20px] block"><span
                        class="lg:text-[0.8rem] text-[2.2rem]">Развал-схождение</span>
                </li>
                <li
                    class="flex flex-row flex-nowrap gap-[10px] items-center w-10/10 lg:text-[0.8rem] sm:text-[2rem] shadow-black/30 lg:w-5/11 bg-white/80 rounded-sm p-[10px] outline-2 outline-offset-1">
                    <img src="../assets/gear.svg" alt="gear" class="h-[20px] w-[20px] block"><span
                        class="lg:text-[0.8rem] text-[2.2rem]">Техобслуживание авто</span>
                </li>
                <li
                    class="flex flex-row flex-nowrap gap-[10px] items-center w-10/10 lg:text-[0.8rem] sm:text-[2rem] shadow-black/30 lg:w-5/11 bg-white/80 rounded-sm p-[10px] outline-2 outline-offset-1">
                    <img src="../assets/gear.svg" alt="gear" class="h-[20px] w-[20px] block"><span
                        class="lg:text-[0.8rem] text-[2.2rem]">Ремонт подвески</span>
                </li>
                <li
                    class="flex flex-row flex-nowrap gap-[10px] items-center w-10/10 lg:text-[0.8rem] sm:text-[2rem] shadow-black/30 lg:w-5/11 bg-white/80 rounded-sm p-[8px] outline-2 outline-offset-1">
                    <img src="../assets/gear.svg" alt="gear" class="h-[20px] w-[20px] block"><span
                        class="lg:text-[0.8rem] text-[2.2rem]">Проточка тормозных дисков</span>
                </li>
                <li
                    class="flex flex-row flex-nowrap gap-[10px] items-center w-10/10 lg:text-[0.8rem] sm:text-[2rem] shadow-black/30 lg:w-5/11 bg-white/80 rounded-sm p-[8px] outline-2 outline-offset-1">
                    <img src="../assets/gear.svg" alt="gear" class="h-[20px] w-[20px] block"><span
                        class="lg:text-[0.8rem] text-[2.2rem]">Заправка кондиционеров</span>
                </li>
                <li
                    class="flex flex-row flex-nowrap gap-[10px] items-center w-10/10 lg:text-[0.8rem] sm:text-[2rem] shadow-black/30 lg:w-5/11 bg-white/80 rounded-sm p-[8px] outline-2 outline-offset-1">
                    <img src="../assets/gear.svg" alt="gear" class="h-[20px] w-[20px] block"><span
                        class="lg:text-[0.8rem] text-[2.2rem]">Автоэлектрика</span>
                </li>
                <li
                    class="flex flex-row flex-nowrap gap-[10px] items-center w-10/10 lg:text-[0.8rem] sm:text-[2rem] shadow-black/30 lg:w-5/11 bg-white/80 rounded-sm p-[8px] outline-2 outline-offset-1">
                    <img src="../assets/gear.svg" alt="gear" class="h-[20px] w-[20px] block"><span
                        class="lg:text-[0.8rem] text-[2.2rem]">Топливные системы</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/vue.es"

const [container] = useKeenSlider(
    {
        loop: true,
    },
    [
        (slider) => {
            let timeout: number
            let mouseOver = false
            function clearNextTimeout() {
                clearTimeout(timeout)
            }
            function nextTimeout() {
                clearTimeout(timeout)
                if (mouseOver) return
                timeout = setTimeout(() => {
                    slider.next()
                }, 1500)
            }
            slider.on("created", () => {
                slider.container.addEventListener("mouseover", () => {
                    mouseOver = true
                    clearNextTimeout()
                })
                slider.container.addEventListener("mouseout", () => {
                    mouseOver = false
                    nextTimeout()
                })
                nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
        },
    ]
)

</script>

<style scoped>
.slider-wrapper{
    width: 600px;
    height: 330px;
}
.slide_window{
    display: flex;
    justify-content: center;
    align-items: center;
}
.slide_window>img{
    top:-20%;
    left:-20%;
    position: relative;
    max-width: 150%;
}
.bg-image {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/PitStop.png");
    background-position: center center;
}
</style>