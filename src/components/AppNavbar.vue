<template>
    <!-- Top Info Bar -->
    <div class="top-bar">
        <div class="container d-flex justify-content-between">
            <div class="top-left">
                <span>📞 +1 234 567 890</span>
                <span>✉ info@celestialmarineservices.com</span>
            </div>
            <div class="top-right">
                <a href="#">f</a>
                <a href="#">x</a>
                <a href="#">in</a>
            </div>
        </div>
    </div>

    <!-- Main Navbar -->
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <!-- Logo -->
            <router-link to="/" class="navbar-brand logo">
                <img src="/logo.png" alt="Maritime Logo" />
            </router-link>

            <!-- Mobile Toggle -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Links -->
            <div class="collapse navbar-collapse justify-content-end" id="mainNav">
                <ul class="navbar-nav align-items-lg-center">
                    <li class="nav-item">
                        <router-link to="/company" class="nav-link">Company</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/services" class="nav-link">Services</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/experience" class="nav-link">Experience</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/vacancies" class="nav-link">Vacancies</router-link>
                    </li>

                    <!-- News Dropdown -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"> News </a>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link to="/news" class="dropdown-item"> All News </router-link>
                            </li>
                            <li>
                                <router-link to="/press" class="dropdown-item"> Press Releases </router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link">Contact</router-link>
                    </li>

                    <!-- <li class="nav-item ms-lg-3">
            <router-link to="/login" class="btn btn-gold">
              Login
            </router-link>
          </li> -->
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup></script>

<style scoped>
/* =====================
   TOP BAR
===================== */
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

/* =====================
   NAVBAR
===================== */
.navbar {
    background: var(--white);
    border-bottom: 1px solid #e5e5e5;
}

.logo img {
    height: 90px;
}

.nav-link {
    color: var(--blue-dark);
    font-weight: 500;
    margin: 0 6px;
}

.nav-link:hover,
.router-link-active {
    color: var(--gold);
}

/* =====================
   DROPDOWN
===================== */
.dropdown-menu {
    border-radius: 0;
    border: none;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.dropdown-item {
    font-size: 14px;
}

.dropdown-item:hover {
    background: #f2f4f6;
    color: var(--gold);
}

/* =====================
   BUTTON
===================== */
.btn-gold {
    background: var(--gold);
    color: var(--white);
    padding: 8px 18px;
    border-radius: 2px;
    text-decoration: none;
}

.btn-gold:hover {
    background: #a88a4f;
    color: var(--white);
}

/* =====================
   MOBILE
===================== */
@media (max-width: 991px) {
    .logo img {
        height: 70px;
    }
}
</style>
