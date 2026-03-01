<template>
    <div class="top-bar">
        <div class="container d-flex justify-content-between">
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
    background: #081521;
    color: var(--gray);
    font-size: 13px;
    padding: 6px 0;
}

.top-left span {
    margin-right: 15px;
}

.top-right a {
    color: var(--gray);
    margin-left: 10px;
    text-decoration: none;
}
</style>
