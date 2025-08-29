import { onUnmounted, onMounted, ref } from 'vue';

const windowSize = ref(0)

onMounted(() => {
    windowSize.value = window.innerWidth
    window.addEventListener("resize", () => windowSize.value = window.innerWidth)
})
onUnmounted(() => {
    window.removeEventListener("resize", () => { })
})

export default windowSize;