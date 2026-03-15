<template>
    <div class="about-page">
        <PageHero
            title="Ship Building, Dry Docking, Retrofit and Repairs."
            description="Delivering world-class ship construction, marine engineering, maintenance, and repair solutions with precision and reliability."
            bgImage="/assets/home-hero.jpg"
            :buttons="[{ label: 'Explore Our Services', to: '/services', class: 'btn-gold' }]"
        />

        <MediaTextSection title="Our Story" image="/assets/about-us-our-story.png" imageAlt="Shipbuilding Supervision">
            <p class="text-muted">Founded with a strong commitment to maritime excellence, quality assurance, and professional project oversight.</p>
            <p class="text-muted">We specialize in ship building supervision, technical consultancy, project management, and real-time progress monitoring for newbuilding projects.</p>
            <p class="text-muted">Our approach is centered on ensuring every project is delivered with precision, compliance, efficiency, and confidence at every stage of construction.</p>
        </MediaTextSection>
        <hr />
        <FeatureSection title="Why Choose Us" :items="features" />
        <hr />
        <SmallFeatureSection title="Our Process" description="A structured and transparent approach to shipbuilding supervision, consultancy, and project monitoring." :items="processSteps" />

        <CtaSection
            title="Need Expert Oversight for Your Next Maritime Project?"
            description="Work with us for trusted ship building supervision, technical consultancy, and real-time progress monitoring."
            bgImage="/assets/about-us-cta-section.jpg"
            :buttons="[{ label: 'Contact Us Today', to: '/contact', class: 'btn-gold' }]"
        />
    </div>
</template>

<script setup>
import PageHero from '@/components/sections/PageHero.vue'
import MediaTextSection from '@/components/sections/MediaTextSection.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
import FeatureSection from '@/components/sections/FeatureSection.vue'
import SmallFeatureSection from '@/components/sections/SmallFeatureSection.vue'
import services from '@/data/services.json'
const { features, processSteps } = services
</script>

<style scoped>
hr {
    margin: 0;
    background: transparent;
}
</style>
