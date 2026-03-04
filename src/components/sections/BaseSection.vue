<template>
    <section :class="sectionClass" class="py-5">
        <div :class="containerClass">
            <h2 v-if="$slots.title" class="section-title mb-5">
                <slot name="title" />
            </h2>
            <slot />
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    bg: String,
    centered: Boolean,
})

const sectionClass = computed(() => (props.bg === 'light' ? 'bg-light' : ''))

const containerClass = computed(() => (props.centered ? 'container text-center' : 'container'))
</script>
