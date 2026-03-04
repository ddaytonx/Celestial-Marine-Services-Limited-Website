<template>
    <div class="about-page">
        <PageHero
            title="Ship Building, Maintenance & Repair"
            description="Delivering world-class ship construction, marine engineering, maintenance, and repair solutions with precision and reliability."
            bgImage="/assets/about-us-page-hero.png"
            :buttons="[{ label: 'Explore Our Services', to: '/services', class: 'btn-gold' }]"
        />

        <MediaTextSection title="Our Story" imageSrc="/assets/about-us-our-story.png" imageAlt="Shipyard Operations">
            <p class="text-muted">Founded with a commitment to maritime excellence and engineering precision.</p>
            <p class="text-muted">We specialize in shipbuilding, vessel retrofitting, dry docking, marine system upgrades, and structural repairs for commercial and industrial fleets.</p>
            <p class="text-muted">Our philosophy is simple: build durable vessels, ensure operational efficiency, and maintain the highest international safety standards.</p>
        </MediaTextSection>

        <section class="py-5 text-center stats-section text-white">
            <div class="overlay-dark"></div>
            <div class="container position-relative">
                <div class="row g-4">
                    <div class="col-md-3" v-for="(stat, i) in stats" :key="i">
                        <h2 class="fw-bold counter">{{ stat.current }}+</h2>
                        <p>{{ stat.label }}</p>
                    </div>
                </div>
            </div>
        </section>

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
            stats: [
                { label: 'Ships Constructed', target: 120, current: 0 },
                { label: 'Vessels Repaired', target: 350, current: 0 },
                { label: 'Years in Maritime Industry', target: 25, current: 0 },
                { label: 'Dry Dock Operations', target: 500, current: 0 },
            ],
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
    mounted() {
        this.animateCounters()
    },
    methods: {
        animateCounters() {
            this.stats.forEach((stat) => {
                const update = () => {
                    if (stat.current < stat.target) {
                        stat.current += Math.ceil(stat.target / 100)
                        requestAnimationFrame(update)
                    } else {
                        stat.current = stat.target
                    }
                }
                update()
            })
        },
    },
}
</script>

<style scoped>
.stats-section {
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    position: relative;
    background-image: url('https://images.unsplash.com/photo-1529070538774-1843cb3265df');
}
.overlay-dark {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
}
.counter {
    font-size: 3rem;
}
</style>
