<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom border-bottom-shadow sticky-top">
        <div class="container">
            <!-- Logo -->
            <router-link to="/" class="navbar-brand p-0">
                <img src="/logo.png" alt="Maritime Logo" height="60" />
            </router-link>

            <!-- Mobile Toggle -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Navigation -->
            <div class="collapse navbar-collapse justify-content-end" id="mainNav">
                <ul class="navbar-nav align-items-lg-center gap-lg-2">
                    <li class="nav-item"><router-link to="/about" class="nav-link">Company</router-link></li>
                    <li class="nav-item"><router-link to="/services" class="nav-link">Services</router-link></li>
                    <!-- <li class="nav-item"><router-link to="/experience" class="nav-link">Experience</router-link></li> -->
                    <!-- <li class="nav-item"><router-link to="/vacancies" class="nav-link">Vacancies</router-link></li> -->
                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> News </a>
                        <ul class="dropdown-menu shadow border-0 rounded-0">
                            <li><router-link to="/news" class="dropdown-item"> All News </router-link></li>
                            <li><router-link to="/press" class="dropdown-item"> Press Releases </router-link></li>
                        </ul>
                    </li> -->
                    <li class="nav-item"><router-link to="/contact" class="nav-link">Contact</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup></script>
<style scoped>
/* =====================
   NAV LINKS
===================== */
.nav-link {
    font-weight: 500;
    color: var(--text-dark);
}

.nav-link:hover,
.router-link-active {
    color: var(--color-secondary) !important;
}

/* =====================
   DROPDOWN (HOVER DESKTOP)
===================== */
@media (min-width: 992px) {
    .dropdown:hover .dropdown-menu {
        display: block;
        margin-top: 0;
    }
}

/* =====================
   DROPDOWN ITEMS
===================== */
.dropdown-item {
    color: var(--text-dark);
}

.dropdown-item:hover {
    background-color: var(--bg-light);
    color: var(--color-secondary);
}

/* =====================
   MOBILE LOGO
===================== */
@media (max-width: 991px) {
    .navbar-brand img {
        height: 70px;
    }
}

.border-bottom-shadow {
    box-shadow: 0 4px 12px rgb(15 30 46 / 10%);
}
</style>
