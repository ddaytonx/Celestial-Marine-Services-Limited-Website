<script setup></script>

<template>
    <!-- HERO -->
    <section class="hero-section d-flex align-items-center text-white text-center">
        <div class="container">
            <h1 class="display-5 fw-bold">
                Trusted Maritime<br />
                Technical & Project Experts
            </h1>
            <p class="lead mt-3">Technical solutions · Global project delivery · Strategic marine consulting</p>

            <div class="d-flex justify-content-center gap-3 mt-4">
                <!-- <a href="#" class="btn btn-gold px-4">Button 1</a> -->
                <!-- <a href="#" class="btn btn-secondary btn-outline-light px-4">Our Services</a> -->
                <a href="#" class="btn btn-gold px-4">Our Services</a>
            </div>
        </div>
    </section>

    <!-- WHAT SETS US APART -->
    <section class="py-5 bg-light">
        <div class="container text-center">
            <h2 class="mb-5 section-title">W<span>HAT</span> S<span>ETS</span> U<span>S</span> A<span>PART</span></h2>

            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card h-100 shadow-sm border-0 p-4">
                        <div class="icon mb-3">⚙️</div>
                        <h5>Technical Expertise</h5>
                        <p class="text-muted">Extensive maritime engineering and technical consultancy services delivered by seasoned industry professionals.</p>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card h-100 shadow-sm border-0 p-4">
                        <div class="icon mb-3">🌍</div>
                        <h5>Global Project Execution</h5>
                        <p class="text-muted">Expert management of maritime operating processes with a strong emphasis on safety, efficiency, and regulatory compliance across international waters.</p>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card h-100 shadow-sm border-0 p-4">
                        <div class="icon mb-3">🛠️</div>
                        <h5>Tailored Marine Solutions</h5>
                        <p class="text-muted">Customized solutions that align precisely with client requirements and operational objectives, ensuring reliable and sustainable performance.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FEATURED SERVICES -->
    <section class="py-5 featured-services text-white">
        <div class="container text-center">
            <h2 class="mb-5">Featured Services</h2>

            <div class="row g-4">
                <div class="col-md-3">
                    <div class="service-card p-4 h-100">
                        <div class="icon mb-3">🚢</div>
                        <h6>Marine Engineering</h6>
                        <p>Advanced engineering solutions tailored to marine operations.</p>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="service-card p-4 h-100">
                        <div class="icon mb-3">⚓</div>
                        <h6>Project Management</h6>
                        <p>End-to-end project oversight ensuring timely delivery.</p>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="service-card p-4 h-100">
                        <div class="icon mb-3">📋</div>
                        <h6>Technical Assessments</h6>
                        <p>Independent audits, inspections, and certifications.</p>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="service-card p-4 h-100">
                        <div class="icon mb-3">🛡️</div>
                        <h6>Compliance & Advisory</h6>
                        <p>Regulatory guidance and risk mitigation strategies.</p>
                    </div>
                </div>
            </div>

            <div class="mt-4">
                <a href="#" class="btn btn-gold px-4">View All Services</a>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="cta-section text-center text-white d-flex align-items-center">
        <div class="container">
            <h2 class="mb-3">Partner With Excellence on the Water</h2>
            <a href="#" class="btn btn-gold px-5">Contact Our Team</a>
        </div>
    </section>
</template>

<style scoped>
.hero-section {
    min-height: 80vh;
    background:
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('/assets/hero.jpg') center / cover no-repeat;
    background-attachment: fixed;
}

.featured-services {
    background:
        linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url('/assets/sea-texture.jpg') center / cover no-repeat;
    background-attachment: fixed;
}

@media (max-width: 768px) {
    .hero-section,
    .featured-services,
    .cta-section {
        background-attachment: scroll;
    }
}

.cta-section {
    min-height: 40vh;
    background:
        linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
        url('/assets/hero.jpg') center / cover no-repeat;
    background-attachment: fixed;
}

.section-title {
    font-family: serif;
    letter-spacing: 1px;
}

.section-title span {
    font-family: serif;
    letter-spacing: 1px;
    font-size: 70%;
}

.service-card {
    background-color: rgba(255, 255, 255, 0.95);
    color: #1f2d3d;
    border-radius: 0.5rem;
}

.btn-gold {
    background-color: #c8a253;
    color: #fff;
    border: none;
    font-weight: 600;
}

.btn-gold:hover {
    background-color: #b28d45;
}

.icon {
    font-size: 5rem;
}
</style>
