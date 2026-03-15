<template>
    <PageHero
        title="Engineering the Future of Maritime Excellence"
        description="Specializing in shipbuilding, retrofit solutions, and advanced marine maintenance, we combine innovation, craftsmanship, and global standards to power the next generation of vessels."
        bgImage="/assets/home-hero.jpg"
        :buttons="heroButtons"
    />

    <template v-for="(section, index) in sections" :key="index">
        <MediaTextSection :title="section.title" :image="section.image" :imageAlt="section.title" :imageRight="section.imageRight">
            <p v-for="(text, i) in section.descriptionStack" :key="i" class="text-muted">
                {{ text }}
            </p>
        </MediaTextSection>
        <hr v-if="index !== sections.length - 1" />
    </template>

    <CtaSection
        title="Start Your Next Marine Project with Confidence"
        description="From new vessel construction to advanced retrofits and emergency repairs, our shipyard delivers precision-driven solutions built to perform in the most demanding maritime environments."
        bgImage="/assets/about-us-cta-section.jpg"
        :buttons="[{ label: 'Request a Consultation', to: '/contact', class: 'btn-gold' }]"
    />
</template>

<script setup>
import PageHero from '@/components/sections/PageHero.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
import MediaTextSection from '@/components/sections/MediaTextSection.vue'
import services from '@/data/services.json'
const sections = services.services
</script>

<style scoped>
hr {
    margin: 0;
    background: transparent;
}
</style>
