<template>
    <!-- STICKY COPYRIGHT -->
    <div class="copyright-bar">&copy; {{ year }} {{ companyName }}. All Rights Reserved.</div>

    <!-- LEGAL LINKS -->
    <div class="legal-bar">
        <ul>
            <li>
                <a href="#">Privacy Policy</a>
            </li>
            <span class="separator">|</span>
            <li>
                <a href="#">Terms & Conditions</a>
            </li>
        </ul>
    </div>
</template>

<script setup>
const companyName = 'Maritime Services'
const year = new Date().getFullYear()
</script>

<style scoped>
/* COPYRIGHT BAR */
.copyright-bar {
    position: sticky;
    bottom: 0;
    background: #081521;
    color: #ccc;
    text-align: center;
    padding: 10px;
    font-size: 13px;
    z-index: 1000;
}

/* LEGAL BAR */
.legal-bar {
    background: #060f18;
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
}

.legal-bar a {
    color: #ffffff;
    font-size: 13px;
    text-decoration: none;
}

.legal-bar a:hover {
    text-decoration: underline;
}

/* RESPONSIVE */
@media (max-width: 900px) {
    .copyright-bar {
        position: relative;
    }
}
</style>
