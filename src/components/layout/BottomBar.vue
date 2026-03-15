<template>
    <div class="copyright-bar">&copy; {{ year }} {{ companyName }}. All Rights Reserved.</div>
    <div class="legal-bar">
        <ul>
            <li><a href="#">Privacy Policy</a></li>
            <span class="separator">|</span>
            <li><a href="#">Terms & Conditions</a></li>
        </ul>
    </div>
</template>

<script setup>
import legal from '@/data/legal.json'
const { year, companyName } = legal
</script>

<style scoped>
/* COPYRIGHT BAR */
.copyright-bar {
    position: sticky;
    bottom: -2px;
    background: var(--bg-dark);
    color: var(--text-white);
    text-align: center;
    padding: 10px;
    font-size: 13px;
    z-index: 1000;
}

/* LEGAL BAR */
.legal-bar {
    background: var(--color-primary-dark);
    text-align: center;
    padding: 10px 0;
}

.legal-bar ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.legal-bar li,
.separator {
    display: inline-block;
    margin: 0 6px;
    color: var(--text-muted);
}

.legal-bar a {
    color: var(--text-light);
    font-size: 13px;
    text-decoration: none;
    transition: color 0.2s ease;
}

.legal-bar a:hover {
    color: var(--text-gold);
}

/* RESPONSIVE */
@media (max-width: 900px) {
    .copyright-bar {
        position: relative;
    }
}
</style>
