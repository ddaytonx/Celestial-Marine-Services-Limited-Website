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

        <section class="py-5 bg-light reveal-section">
            <div class="container">
                <div class="text-center mb-5">
                    <h2 class="fw-bold text-primary-custom">Why Choose Us</h2>
                </div>

                <div class="row g-4">
                    <div class="col-md-4" v-for="(item, i) in values" :key="i">
                        <div class="value-card h-100">
                            <div class="image-wrapper">
                                <img :src="item.image" alt="" />
                            </div>
                            <div class="p-4 text-center">
                                <h5 class="fw-bold text-gold-custom mb-3">
                                    {{ item.title }}
                                </h5>
                                <p class="text-muted">{{ item.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="process-section py-5 bg-light">
            <div class="container">
                <div class="text-center mb-5 reveal-section">
                    <h2 class="fw-bold text-primary-custom">Our Process</h2>
                    <p class="text-muted">A streamlined maritime engineering approach ensuring safety, durability, and performance.</p>
                </div>

                <div class="row g-4 text-center">
                    <div class="col-lg-3 col-md-6" v-for="(step, i) in processSteps" :key="i">
                        <div class="process-card reveal-section">
                            <div class="process-image">
                                <img :src="step.image" />
                            </div>
                            <h5 class="fw-bold mt-4 text-gold-custom">
                                {{ step.title }}
                            </h5>
                            <p class="text-muted mt-2">{{ step.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <CtaSection
            title="Ready to Build or Upgrade Your Vessel?"
            description="Partner with us for reliable ship construction, maintenance, and repair solutions."
            bgImage="/assets/about-us-cta-section.jpg"
            :buttons="[{ label: 'Contact Us Today', to: '/contact', class: 'btn-gold' }]"
        />
    </div>
</template>

<script>
import PageHero from '@/components/sections/PageHero.vue' // Adjust the import path as necessary
import MediaTextSection from '@/components/sections/MediaTextSection.vue' // Import the new component
import CtaSection from '@/components/sections/CtaSection.vue'

export default {
    name: 'AboutPage',
    components: {
        PageHero,
        MediaTextSection,
        CtaSection,
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
                {
                    image: '/assets/about-us-advanced-shipbuilding.png',
                    title: 'Advanced Shipbuilding',
                    desc: 'Modern shipyard facilities equipped for commercial and industrial vessel construction.',
                },
                {
                    image: '/assets/about-us-comprehensive-repairs.png',
                    title: 'Comprehensive Repairs',
                    desc: 'Hull repairs, engine overhauls, steel fabrication, and structural reinforcement.',
                },
                {
                    image: '/assets/about-us-certified-marine-engineers.png',
                    title: 'Certified Marine Engineers',
                    desc: 'Highly trained professionals ensuring compliance with international standards.',
                },
            ],

            processSteps: [
                {
                    image: '/assets/about-us-consultation-inspection.png',
                    title: 'Consultation & Inspection',
                    desc: 'Detailed vessel inspection and engineering consultation.',
                },
                {
                    image: '/assets/about-us-design-planning.png',
                    title: 'Design & Planning',
                    desc: 'Naval architecture planning and material selection.',
                },
                {
                    image: '/assets/about-us-construction-repair.png',
                    title: 'Construction / Repair',
                    desc: 'Precision shipbuilding and system integration.',
                },
                {
                    image: '/assets/about-us-testing-delivery.png',
                    title: 'Testing & Delivery',
                    desc: 'Sea trials, quality checks, and final deployment.',
                },
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
/* GENERAL SECTION STYLES */
.stats-section,
.cta-section {
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
}

.stats-section {
    background-image: url('https://images.unsplash.com/photo-1529070538774-1843cb3265df');
}

.cta-section {
    background-image: url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d');
    min-height: 350px;
}

.overlay-dark {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
}

/* REVEAL */
.reveal-section {
    opacity: 0;
    transform: translateY(40px);
    transition: 0.8s ease;
}
.reveal-section.active {
    opacity: 1;
    transform: translateY(0);
}

/* VALUE CARD */
.value-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
    transition: 0.4s ease;
}
.value-card:hover {
    transform: translateY(-10px);
}
.image-wrapper {
    overflow: hidden;
    height: 220px;
}
.image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.6s ease;
}
.value-card:hover img {
    transform: scale(1.1);
}

/* PROCESS */
.process-card {
    background: white;
    padding: 25px;
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
    transition: 0.4s ease;
}
.process-card:hover {
    transform: translateY(-10px);
}
.process-image {
    height: 160px;
    overflow: hidden;
    border-radius: 15px;
}
.process-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s ease;
}
.process-card:hover img {
    transform: scale(1.1);
}

.counter {
    font-size: 3rem;
}

/* Retained for the CTA Button */
.btn-secondary-custom {
    background: linear-gradient(45deg, #c6a75e, #e2c675);
    border: none;
    color: white;
    transition: 0.3s ease;
}
.btn-secondary-custom:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
}

.hover-zoom {
    transition: 0.5s ease;
}
.hover-zoom:hover {
    transform: scale(1.05);
}
</style>
