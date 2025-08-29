<script lang="ts" setup>
</script>


<template>
    <div class="welcome w-10/10 image-bg h-[100dvh] pb-[30px]">
        <div class="opacity-option w-10/10 h-[100dvh] pb-[30px]">
            <div class="content w-7/9 relative z-[11] left-1/9 lg:top-1/5 top-[80px]">
                <h1 class="text-white text-[3rem] font-bold text-base/13 py-[10px]">Все, что нужно для вашего автомобиля!
                    <br>
                </h1>
                <h2 class="text-white text-[3rem] font-bold text-base/19 py-[10px]">Замена масла</h2>
                <div class="flex flex-row lg:flex-nowrap flex-wrap justify-between">
                    <ul class="text-white text-[1.9rem] lg:text-[2.2rem] mt-[40px]">
                        <li><strong>✓ </strong>Экспрес-замена масла</li>
                        <li><strong>✓ </strong>Замена масла в ДВС</li>
                        <li><strong>✓ </strong>Замена масла в АКПП и КПП</li>
                        <li><strong>✓ </strong>Слив старого масла и его утилизация</li>
                        <li><strong>✓ </strong>Замена масляного фильтра под ваш авто</li>
                        <li><strong>✓ </strong>Залив нового масла</li>
                        <li><strong>✓ </strong>Замена масла в вариаторе</li>
                    </ul>
                    <div
                        class="w-[400px] p-[20px] mt-[30px] bg-black rounded-2xl opacity-70 outline-2 outline-offset-2 outline-red-800">
                        <p class="text-white text-[1.15rem] w-fit mx-auto">Запишись сейчас</p>
                        <p class="text-white text-[1.1rem] py-[1.2rem]">и получите в подарок диагностику авто по 45 параметрам
                            с выдачей чек-листа</p>
                        <form action="submit" class="w-10/10 flex flex-col justify-center gap-[20px]">
                            <label class="text-white text-[1.1rem]" for="name">
                                Ваше имя:<br>
                                <input type="text" id="name" class="text-black w-10/10 bg-white rounded-2xl text-[1.7rem] py-[3px] px-[12px] ">
                            </label>
                            <label class="text-white text-[1.1rem]" for="phone">
                                Ваш телефон:<br>
                                <input type="text" id="phone" class="text-black w-10/10 bg-white rounded-2xl text-[1.7rem] py-[3px] px-[12px]">
                            </label>
                            <button class="bg-red-800 text-white text-bold rounded-2xl py-[6px] px-[50px] w-fit mx-auto text-[1.15rem]">
                                Далее
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.image-bg {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/engine.png");
    background-position: center center;
}
.opacity-option {
    background-color: rgba(39, 38, 38, 0.637);
}
@media screen and (max-width: 500px) {
    .welcome {
        height: 850px;
    }
}
</style>