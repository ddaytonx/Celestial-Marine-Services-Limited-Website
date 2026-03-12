<template>
    <div class="container my-5">
        <h2 class="text-center mb-5">Contact Us</h2>

        <!-- ROW 1: 3 COLUMNS WITH CARDS -->
        <div class="row mb-5 g-4">
            <!-- Column 1: Get in Touch -->
            <div class="col-lg-4">
                <div class="card h-100 shadow-sm border-0">
                    <div class="card-body">
                        <h5 class="card-title">Get in Touch</h5>
                        <hr />
                        <p class="card-text">Have questions or need assistance? Our team is here to help. Fill out the contact form, or reach us via phone or email. We strive to respond within 24 hours.</p>
                    </div>
                </div>
            </div>

            <!-- Column 2: Contact Form -->
            <div class="col-lg-4">
                <div class="card h-100 shadow-sm border-0">
                    <div class="card-body">
                        <h5 class="card-title">Send Us a Message</h5>
                        <hr />
                        <form @submit.prevent="submitForm">
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" id="name" class="form-control" v-model="form.name" required />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" id="email" class="form-control" v-model="form.email" required />
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea id="message" class="form-control" rows="4" v-model="form.message" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-gold w-100">Send Message</button>
                            <p v-if="successMessage" class="text-success mt-2">{{ successMessage }}</p>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Column 3: Office Info -->
            <div class="col-lg-4">
                <div class="card h-100 shadow-sm border-0">
                    <div class="card-body">
                        <h5 class="card-title">Our Office</h5>
                        <hr />
                        <p><i class="bi bi-geo-alt-fill me-2"></i>Room 1101, 11/F., Capital Centre, 151 Gloucester Road, Wanchai, Hong Kong, China</p>
                        <p><i class="bi bi-telephone-fill me-2"></i>+91 9882455421</p>
                        <p><i class="bi bi-envelope-fill me-2"></i>commercial@celestialmarineservices.com</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- ROW 2: FULL WIDTH MAP -->
        <div class="row">
            <div class="col-12">
                <h5>Our Location</h5>
                <hr />
                <div class="map-responsive mt-3">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.234567!2d-74.005941!3d40.712784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sYour+Business!5e0!3m2!1sen!2sus!4v1678901234567"
                        width="100%"
                        height="400"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', message: '' })
const successMessage = ref('')

function submitForm() {
    console.log('Contact Form Submitted:', form.value)
    successMessage.value = 'Thank you for contacting us! We will get back to you soon.'
    form.value = { name: '', email: '', message: '' }

    setTimeout(() => {
        successMessage.value = ''
    }, 10000)
}
</script>

<style scoped>
/* Map responsive */
.map-responsive {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
}
.map-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 8px;
    border: 0;
}

/* Button style using root variables */
.btn-gold {
    background-color: var(--btn-secondary-bg);
    color: var(--btn-secondary-text);
    font-weight: 500;
    transition: background-color 0.2s ease;
}
.btn-gold:hover {
    background-color: var(--btn-secondary-bg-hover);
}

/* Card styling using root variables */
.card {
    border-radius: 8px;
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-soft);
    background-color: var(--bg-body);
}

.card h5 {
    font-weight: 600;
    color: var(--text-dark);
}

.card p,
.card label,
.card textarea,
.card input {
    color: var(--text-dark);
    font-weight: 400;
}

/* Divider style */
hr {
    border-top: 2px solid var(--text-gold);
    margin: 0.5rem 0 1rem 0;
}

/* Form input styling */
.card input,
.card textarea {
    border: 1px solid var(--border-color);
    border-radius: 4px;
    padding: 8px 10px;
    background-color: var(--bg-light);
    color: var(--text-dark);
}

/* Form input focus state */
.card input:focus,
.card textarea:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 0.2rem rgba(31, 58, 95, 0.25); /* primary-light transparent */
    outline: none;
}

/* Success message */
.text-success {
    color: var(--color-secondary-dark) !important;
}
</style>
