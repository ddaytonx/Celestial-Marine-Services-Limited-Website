<script setup>
import PageHero from '@/components/sections/PageHero.vue'
import CtaSection from '@/components/sections/CtaSection.vue'

/* FEATURES */
const features = [
    {
        icon: '⚙️',
        title: 'Technical Expertise',
        description: 'Extensive maritime engineering and technical consultancy services delivered by seasoned industry professionals.',
        delay: 100,
    },
    {
        icon: '🌍',
        title: 'Global Project Execution',
        description: 'Expert management of maritime operating processes with emphasis on safety, efficiency, and regulatory compliance.',
        delay: 200,
    },
    {
        icon: '🛠️',
        title: 'Tailored Marine Solutions',
        description: 'Customized solutions aligned with operational objectives, ensuring reliable and sustainable performance.',
        delay: 300,
    },
]

/* SERVICES */
const services = [
    {
        icon: '🚢',
        title: 'Marine Engineering',
        description: 'Advanced engineering solutions tailored to marine operations.',
        delay: 100,
    },
    {
        icon: '⚓',
        title: 'Project Management',
        description: 'End-to-end project oversight ensuring timely delivery.',
        delay: 200,
    },
    {
        icon: '📋',
        title: 'Technical Assessments',
        description: 'Independent audits, inspections, and certifications.',
        delay: 300,
    },
    {
        icon: '🛡️',
        title: 'Compliance & Advisory',
        description: 'Regulatory guidance and risk mitigation strategies.',
        delay: 400,
    },
]
</script>

<template>
    <!-- HERO -->
    <PageHero
        bgImage="/assets/home-hero.jpg"
        customClass="height-90"
        :useHomeOverlay="false"
        subtitle="Technical solutions · Global project delivery · Strategic marine consulting"
        :buttons="[
            { label: 'About Us', to: '/about', class: 'btn-gold' },
            { label: 'Our Services', to: '/services', class: 'btn-outline-light btn-rounded' },
        ]"
    >
        <template #title>
            Trusted Maritime <br />
            <span class="text-gold">Technical & Project Experts</span>
        </template>
    </PageHero>

    <!-- WHAT SETS US APART -->
    <section class="py-5 bg-light">
        <div class="container text-center">
            <h2 class="section-title mb-5">What Sets Us Apart</h2>

            <div class="row g-4">
                <div v-for="(item, index) in features" :key="index" class="col-md-4" data-aos="fade-up" :data-aos-delay="item.delay">
                    <div class="card custom-card h-100 p-4">
                        <div class="icon mb-3">{{ item.icon }}</div>
                        <h5>{{ item.title }}</h5>
                        <p class="text-muted">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FEATURED SERVICES -->
    <section class="py-5 featured-services text-white text-center">
        <div class="container">
            <h2 class="section-title-light mb-5">Featured Services</h2>

            <div class="row g-4">
                <div v-for="(service, index) in services" :key="index" class="col-md-3" data-aos="zoom-in" :data-aos-delay="service.delay">
                    <div class="service-card p-4 h-100">
                        <div class="icon mb-3">{{ service.icon }}</div>
                        <h6>{{ service.title }}</h6>
                        <p>{{ service.description }}</p>
                    </div>
                </div>
            </div>

            <div class="mt-5">
                <router-link to="/services" class="btn btn-gold"> View All Services </router-link>
            </div>
        </div>
    </section>

    <CtaSection
        title="Partner With Excellence on the Water"
        description="From custom builds to precision repairs, we provide the engineering excellence your fleet deserves. Let’s get to work."
        bgImage="/assets/home-hero.png"
        :buttons="[{ label: 'Contact Our Team', to: '/contact', class: 'btn-gold' }]"
    />
</template>

<style scoped>
/* SECTION TITLES */
.section-title,
.section-title-light {
    font-size: 2rem;
    font-weight: 700;
    position: relative;
    display: inline-block;
}

.section-title::after,
.section-title-light::after {
    content: '';
    width: 60px;
    height: 3px;
    background: var(--app-gold);
    display: block;
    margin: 12px auto 0;
}

/* CARDS */
.custom-card {
    border: none;
    border-radius: 12px;
    transition: all 0.35s ease;
    box-shadow: var(--shadow-soft);
}

.custom-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

/* SERVICE CARDS */
.featured-services {
    background:
        linear-gradient(rgba(15, 30, 46, 0.85), rgba(15, 30, 46, 0.85)),
        url('/assets/home-sea-texture.jpg') center / cover no-repeat;
    background-attachment: fixed;
}

.service-card {
    background: rgba(255, 255, 255, 0.95);
    color: #1f2d3d;
    border-radius: 12px;
    transition: all 0.35s ease;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* BUTTONS */
.btn-gold {
    background: linear-gradient(135deg, var(--app-gold), var(--color-secondary-dark));
    color: #fff;
    border: none;
    padding: 10px 28px;
    border-radius: 50px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-gold:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.btn-rounded {
    border-radius: 50px;
}

/* ICON */
.icon {
    font-size: 3.5rem;
    transition: transform 0.3s ease;
}

.custom-card:hover .icon,
.service-card:hover .icon {
    transform: scale(1.1);
}

/* MOBILE FIX */
@media (max-width: 768px) {
    .featured-services {
        background-attachment: scroll;
    }
}
</style>
