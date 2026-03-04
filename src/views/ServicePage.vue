<template>
    <PageHero title="Ship Building, Maintenance & Repair" description="Delivering world-class ship construction, marine engineering, maintenance, and repair solutions with precision and reliability." bgImage="/assets/about-us-page-hero.png" :buttons="heroButtons" />

    <!-- OVERVIEW -->
    <BaseSection bg="light">
        <div class="row align-items-center g-5">
            <div class="col-lg-6">
                <img src="/assets/about-us-consultation-inspection.png" class="img-fluid rounded-4 shadow-soft" alt="Shipyard Operations" />
            </div>
            <div class="col-lg-6">
                <h2 class="section-title mb-4">Engineering Excellence at Sea</h2>
                <p class="text-muted">We deliver full-scale ship construction and repair solutions backed by advanced shipyard facilities, certified marine engineers, and strict adherence to international maritime safety standards.</p>
                <p class="text-muted">From keel laying to final sea trials, our integrated process ensures structural integrity, operational efficiency, and long-term performance.</p>
            </div>
        </div>
    </BaseSection>

    <!-- CAPABILITIES -->
    <BaseSection centered>
        <template #title>Our Core Capabilities</template>

        <div class="row g-4">
            <div v-for="item in capabilities" :key="item.title" class="col-md-4">
                <ServiceCard :item="item" />
            </div>
        </div>
    </BaseSection>

    <!-- PROCESS -->
    <BaseSection bg="light" centered>
        <template #title>Our Construction & Repair Process</template>

        <div class="row g-4">
            <div v-for="(step, index) in processSteps" :key="step.title" class="col-md-3">
                <div class="process-step">
                    <h6>{{ String(index + 1).padStart(2, '0') }}</h6>
                    <p>{{ step.title }}</p>
                </div>
            </div>
        </div>
    </BaseSection>

    <!-- INDUSTRIES -->
    <BaseSection centered>
        <template #title>Industries We Serve</template>

        <div class="row g-4 justify-content-center">
            <div v-for="industry in industries" :key="industry" class="col-md-3">
                <div class="industry-card p-4">
                    {{ industry }}
                </div>
            </div>
        </div>
    </BaseSection>

    <!-- CTA -->
    <CtaSection title="Ready to Build or Restore Your Vessel?" buttonText="Speak With Our Marine Experts" to="/contact" bgImage="/assets/ship-dry-dock.jpg" />
</template>

<script setup>
import PageHero from '@/components/sections/PageHero.vue'
import BaseSection from '@/components/sections/BaseSection.vue'
import ServiceCard from '@/components/sections/ServiceCard.vue'
import CtaSection from '@/components/sections/CtaSection.vue'

const heroButtons = [
    {
        label: 'Explore Our Services',
        to: '/services',
        class: 'btn-secondary-custom',
    },
]

const capabilities = [
    {
        title: 'New Vessel Construction',
        desc: 'Design and construction of commercial, offshore, and industrial vessels built to international classification standards.',
        icon: '🚢',
    },
    {
        title: 'Hull Fabrication & Steel Works',
        desc: 'Precision steel cutting, welding, plate bending, and structural reinforcement for long-term durability.',
        icon: '🏗️',
    },
    {
        title: 'Engine & Propulsion Systems',
        desc: 'Main engine installation, shaft alignment, propulsion integration, and performance optimization.',
        icon: '⚙️',
    },
    {
        title: 'Dry Dock & Structural Repair',
        desc: 'Complete dry docking operations including blasting, coating, retrofitting, and underwater repairs.',
        icon: '🛠️',
    },
    {
        title: 'Electrical & Navigation Systems',
        desc: 'Integrated marine electrical systems, automation, and bridge navigation technology.',
        icon: '📡',
    },
    {
        title: 'Retrofitting & Modernization',
        desc: 'Upgrading aging vessels with new systems to improve safety, compliance, and fuel efficiency.',
        icon: '🔧',
    },
]

const processSteps = [{ title: 'Consultation & Technical Assessment' }, { title: 'Engineering Design & Planning' }, { title: 'Construction / Repair Execution' }, { title: 'Testing, Certification & Delivery' }]

const industries = ['Commercial Shipping', 'Offshore Oil & Gas', 'Naval & Defense', 'Port & Harbor Authorities', 'Industrial Marine Fleets']
</script>
