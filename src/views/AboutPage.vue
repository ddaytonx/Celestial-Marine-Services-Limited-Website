<template>
    <div class="about-page">
        <PageHero
            title="Ship Building, Dry Docking, Retrofit and Repairs."
            description="Delivering world-class ship construction, marine engineering, maintenance, and repair solutions with precision and reliability."
            bgImage="/assets/home-hero.jpg"
            :buttons="[{ label: 'Explore Our Services', to: '/services', class: 'btn-gold' }]"
        />

        <MediaTextSection title="Our Story" imageSrc="/assets/about-us-our-story.png" imageAlt="Shipyard Operations">
            <p class="text-muted">Founded with a commitment to maritime excellence and engineering precision.</p>
            <p class="text-muted">We specialize in shipbuilding, vessel retrofitting, dry docking, marine system upgrades, and structural repairs for commercial and industrial fleets.</p>
            <p class="text-muted">Our philosophy is simple: build durable vessels, ensure operational efficiency, and maintain the highest international safety standards.</p>
        </MediaTextSection>

        <FeatureSection title="Why Choose Us" :items="values" />

        <SmallFeatureSection title="Our Process" description="A streamlined maritime engineering approach ensuring safety, durability, and performance." :items="processSteps" />

        <CtaSection
            title="Ready to Build or Upgrade Your Vessel?"
            description="Partner with us for reliable ship construction, maintenance, and repair solutions."
            bgImage="/assets/about-us-cta-section.jpg"
            :buttons="[{ label: 'Contact Us Today', to: '/contact', class: 'btn-gold' }]"
        />
    </div>
</template>

<script>
import PageHero from '@/components/sections/PageHero.vue'
import MediaTextSection from '@/components/sections/MediaTextSection.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
import FeatureSection from '@/components/sections/FeatureSection.vue'
import SmallFeatureSection from '@/components/sections/SmallFeatureSection.vue'

export default {
    name: 'AboutPage',
    components: {
        PageHero,
        MediaTextSection,
        CtaSection,
        FeatureSection,
        SmallFeatureSection,
    },
    data() {
        return {
            values: [
                { image: '/assets/about-us-advanced-shipbuilding.png', title: 'Advanced Shipbuilding', desc: 'Modern shipyard facilities equipped for commercial and industrial vessel construction.' },
                { image: '/assets/about-us-comprehensive-repairs.png', title: 'Comprehensive Repairs', desc: 'Hull repairs, engine overhauls, steel fabrication, and structural reinforcement.' },
                { image: '/assets/about-us-certified-marine-engineers.png', title: 'Certified Marine Engineers', desc: 'Highly trained professionals ensuring compliance with international standards.' },
            ],
            processSteps: [
                { image: '/assets/about-us-consultation-inspection.png', title: 'Consultation & Inspection', desc: 'Detailed vessel inspection and engineering consultation.' },
                { image: '/assets/about-us-design-planning.png', title: 'Design & Planning', desc: 'Naval architecture planning and material selection.' },
                { image: '/assets/about-us-construction-repair.png', title: 'Construction / Repair', desc: 'Precision shipbuilding and system integration.' },
                { image: '/assets/about-us-testing-delivery.png', title: 'Testing & Delivery', desc: 'Sea trials, quality checks, and final deployment.' },
            ],
        }
    },
}
</script>

<style scoped></style>
