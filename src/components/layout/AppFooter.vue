<template>
    <footer class="footer">
        <!-- MAIN FOOTER -->
        <div class="container">
            <div class="row gx-4 gy-4 footer-grid">
                <!-- Brand + Contact -->
                <div class="col-md-4 footer-brand">
                    <h4>Celestial Marine Services Limited</h4>
                    <div class="footer-contact mt-3">
                        <p><i class="bi bi-geo-alt"></i>Room 1101, 11/F., Capital Centre, 151 Gloucester Road, Wanchai, Hong Kong, China</p>
                        <p><i class="bi bi-telephone"></i>+91 9882455421</p>
                        <p><i class="bi bi-envelope"></i>commercial@celestialmarineservices.com</p>
                    </div>
                    <div class="social-links d-flex gap-3 mt-3">
                        <a href="#" class="me-3"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="me-3"><i class="bi bi-twitter-x"></i></a>
                        <a href="#"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>

                <!-- Useful Links -->
                <div class="col-md-2 footer-col">
                    <h6>USEFUL LINKS</h6>
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About Us</router-link>
                    <router-link to="/contact">Contact</router-link>
                    <router-link to="/news">News</router-link>
                </div>

                <!-- Services -->
                <div class="col-md-2 footer-col">
                    <h6>Services</h6>
                    <router-link to="/services">Marine Engineering</router-link>
                    <router-link to="/services">Project Management</router-link>
                    <router-link to="/services">Technical Advisory</router-link>
                </div>

                <!-- Newsletter Subscription -->
                <div class="col-md-4 footer-col subscribe">
                    <h6>Subscribe to Our Newsletter</h6>
                    <p>Stay updated with our latest news and offers.</p>
                    <form @submit.prevent="subscribeNewsletter" class="newsletter-form mt-3 gap-2 d-flex">
                        <input type="email" v-model="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                    <p v-if="successMessage" class="mt-2 text-success">{{ successMessage }}</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const successMessage = ref('')

function subscribeNewsletter() {
    // Here you can call your API or service
    console.log('Subscribed email:', email.value)
    successMessage.value = `Thank you for subscribing, ${email.value}!`
    email.value = ''

    setTimeout(() => {
        successMessage.value = ''
    }, 10000)
}
</script>

<style scoped>
.footer {
    background: var(--bg-dark);
    color: var(--text-light);
    padding-top: 60px;
}

.footer-brand p {
    font-size: 14px;
    line-height: 1.6;
    font-weight: 100;
}

/* COLUMNS */
.footer-col h6 {
    color: var(--text-light);
    margin-bottom: 15px;
    font-size: 15px;
}

.footer-col a {
    display: block;
    color: var(--text-white);
    text-decoration: none;
    margin-bottom: 8px;
    font-size: 14px;
    transition: color 0.2s ease;
    font-weight: 100;
}

.footer-col a:hover {
    color: var(--text-gold);
}

/* CONTACT + SOCIAL */
.footer-contact p {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 100;
    color: var(--text-light);
}

.footer-contact i {
    color: var(--text-gold);
    font-size: 16px;
    min-width: 18px;
}

.social-links a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--text-muted);
    text-decoration: none;
    font-size: 14px;
    transition: color 0.2s ease;
}

.social-links a i {
    font-size: 25px;
}

.social-links a:hover {
    color: var(--text-gold);
}

.subscribe p {
    font-size: 14px;
    font-weight: 100;
    color: var(--text-light);
}

.newsletter-form input {
    padding: 8px 10px;
    border-radius: 4px;
    border: 1px solid var(--text-light);
    width: 70%;
    margin-right: 5px;
    font-size: 14px;
}

.newsletter-form button {
    padding: 8px 12px;
    background-color: var(--text-gold);
    border: none;
    color: var(--text-dark);
    font-weight: 500;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.2s ease;
}

.newsletter-form button:hover {
    background-color: #bfa130; /* Slightly darker gold */
}

/* RESPONSIVE */
@media (max-width: 900px) {
    .footer-grid {
        text-align: center;
    }
}
</style>
