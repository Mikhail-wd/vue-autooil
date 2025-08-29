<template>
    <div class="bg-image overflow-hidden">
        <div class="bg-bluring w-10/10 flex flex-col items-center py-[50px]">
            <div class="lg:w-4/10 w-7/10 bg-black/60 rounded-2xl py-[10px] px-[35px] text-white shadow-xl shadow-black">
                <p class="lg:text-[1.9rem] text-[2rem] text-center">Отзывы наших клиентов</p>
                <p class="lg:text-[1.5rem]/8 text-[1.7rem]/8 text-center mt-[12px] mb-[5px]">
                    Ежемесячно к нам обращаются 350 автолюбителей и уезжают на исправном автомобиле
                </p>
            </div>
            <div style="height:800px;overflow:hidden;position:relative;" class="yandex-reweivs mt-[30px]"><iframe
                    style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box"
                    src="https://yandex.ru/maps-reviews-widget/141996103777?comments"></iframe><a
                    href="https://yandex.ru/maps/org/domashnyaya_kukhnya/141996103777/" target="_blank"
                    style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;position:absolute;bottom:8px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;display:block;max-height:14px;white-space:nowrap;padding:0 16px;box-sizing:border-box">Домашняя
                    кухня на карте Читы — Яндекс Карты</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.bg-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: 1380%;
    background-image: url("../assets/service_work.jpg");
}

.bg-bluring {
    backdrop-filter: blur(4px);
}
.yandex-reweivs {
    width:560px
}
@media screen and (max-width:560px) {
    .yandex-reweivs{
        width: 345px;
    }
}
</style>