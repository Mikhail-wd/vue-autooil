<template>
    <div class="bg-red-700 w-10/10 flex flex-col text-white justify-center items-center gap-[60px] py-[50px]">
        <p class="uppercase text-center text-[2.2rem] lg:text-[1.1rem] w-7/10 ">Вы еще не были у нас? Давайте
            знакомиться!</p>
        <p class="wrap-pretty text-center w-8/10 lg:w-7/10 text-[3.2rem] lg:text-[2.1rem]">Для новых клиентов бесплатная
            диагностика ходовой части!<br> Оставляйте заявку прямо
            сейчас!
        </p>
        <form class='w-7/10 flex flex-col items-center justify-center gap-[20px] text-[3.2rem] lg:text-[1.7rem]'>
            <template v-if="formState == 0">
                <div class="border-bottom"><input type="text" placeholder="Ваше имя" class=""></div>
                <div class="border-bottom">
                    <input :ref="elem.el" placeholder='Ваш телефон' />
                </div>
                <button @click="(event) => changeState(event, 1)"
                    class="hover:cursor-pointer w-5/10 mt-[35px] lg:w-3/10 uppercase bg-red-800 py-[5px] px-[21px] rounded-lg">Далее</button>
            </template>
            <template v-else-if="formState == 1">
                <div class="border-bottom">
                    <input :ref="elem1.el" placeholder='Введите код из СМС' />
                </div>
                <button @click="(event) => changeState(event, 2)"
                    class="hover:cursor-pointer w-5/10 mt-[35px] lg:w-3/10 uppercase bg-red-800 py-[5px] px-[21px] rounded-lg">Далее</button>
            </template>
            <template v-else-if="formState == 2">
                <span class="loader"></span>
            </template>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useIMask } from 'vue-imask'

const formState = ref(0)
const elem = useIMask({
    mask: "+{7}(000) 000-00-00",
})

const elem1 = useIMask({
    mask: "0000",
})

function changeState(event: { preventDefault: () => void; }, state: number) {
    event.preventDefault()
    formState.value = state
}

</script>

<style scoped>
.border-bottom {
    border-bottom: solid 2px white;
}

.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>