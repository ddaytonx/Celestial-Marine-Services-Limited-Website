<template>
    <PageHero
        title="Engineering the Future of Maritime Excellence"
        description="Specializing in shipbuilding, retrofit solutions, and advanced marine maintenance, we combine innovation, craftsmanship, and global standards to power the next generation of vessels."
        bgImage="/assets/about-us-page-hero.png"
        :buttons="heroButtons"
    />

    <MediaTextSection title="Comprehensive Shipbuilding Solutions" imageSrc="/assets/about-us-our-story.png" imageAlt="Ship Construction Operations">
        <p class="text-muted">We deliver complete shipbuilding solutions—from initial naval architecture and structural fabrication to final sea trials and commissioning.</p>
        <p class="text-muted">Our shipyard is equipped to construct commercial vessels, offshore support ships, cargo carriers, and specialized marine platforms.</p>
        <p class="text-muted">Every project is executed with strict adherence to international maritime regulations and classification society standards.</p>
    </MediaTextSection>

    <hr />

    <MediaTextSection title="Marine Maintenance & Dry Docking" imageSrc="/assets/about-us-our-story.png" imageAlt="Dry Dock Maintenance" imageRight="true">
        <p class="text-muted">Our maintenance and dry docking services are designed to extend vessel lifespan and maximize operational efficiency.</p>
        <p class="text-muted">We perform hull inspections, structural repairs, blasting & painting, propulsion system servicing, and safety compliance upgrades.</p>
        <p class="text-muted">With rapid turnaround times and skilled marine technicians, we minimize downtime and keep fleets mission-ready.</p>
    </MediaTextSection>

    <hr />

    <MediaTextSection title="Advanced Marine Engineering & Retrofits" imageSrc="/assets/about-us-our-story.png" imageAlt="Marine Engineering Systems">
        <p class="text-muted">Our engineering division specializes in engine overhauls, automation integration, electrical system upgrades, and vessel retrofitting.</p>
        <p class="text-muted">We modernize aging fleets with fuel-efficient systems, advanced navigation technology, and environmentally compliant solutions.</p>
        <p class="text-muted">From minor system enhancements to full-scale conversions, we ensure performance, safety, and long-term reliability.</p>
    </MediaTextSection>

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
</script>

<style scoped>
hr {
    margin: 0;
    background: transparent;
}
</style>
