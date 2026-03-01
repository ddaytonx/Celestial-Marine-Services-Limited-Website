<template>
    <div class="top-bar">
        <div class="container d-flex justify-content-between align-items-center">
            <div class="top-left">
                <span>📞 +1 234 567 890</span>
                <span>✉ info@celestialmarineservices.com</span>
            </div>

            <div class="top-right">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener">
                    <i class="bi bi-facebook"></i>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener">
                    <i class="bi bi-twitter-x"></i>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener">
                    <i class="bi bi-linkedin"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.top-bar {
    background: var(--bg-dark);
    color: var(--text-light);
    font-size: 13px;
    padding: 6px 0;
}

.top-left span {
    margin-right: 16px;
    white-space: nowrap;
}

.top-right a {
    color: var(--text-light);
    margin-left: 12px;
    text-decoration: none;
    transition: color 0.2s ease;
}

.top-right a:hover {
    color: var(--text-gold);
}
</style>
