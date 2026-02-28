<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <router-link to="/">
          <img src="/logo.png" alt="Logo" />
        </router-link>
        <p>Delivering excellence in maritime technical services.</p>
      </div>

      <div class="footer-col">
        <h6>About Us</h6>
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>

      <div class="footer-col">
        <h6>Services</h6>
        <router-link to="/services">Marine Engineering</router-link>
        <router-link to="/services">Project Management</router-link>
        <router-link to="/services">Technical Advisory</router-link>
      </div>

      <div class="footer-col">
        <h6>Contact</h6>
        <p>info@maritime.com</p>
        <p>+1 234 567 890</p>
      </div>
    </div>

    <div class="footer-bottom">© 2026 Maritime Services. All Rights Reserved.</div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer {
  background: #0f1e2e;
  color: #dcdcdc;
  padding-top: 60px;
}

.footer-grid {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.footer-brand img {
  height: 70px;
  margin-bottom: 15px;
}

.footer-col h6 {
  color: #ffffff;
  margin-bottom: 15px;
}

.footer-col a {
  display: block;
  color: #dcdcdc;
  text-decoration: none;
  margin-bottom: 8px;
  font-size: 14px;
}

.footer-col a:hover {
  color: #ffffff;
}

.footer-bottom {
  margin-top: 40px;
  padding: 20px 0;
  text-align: center;
  font-size: 13px;
  background: #081521;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>
