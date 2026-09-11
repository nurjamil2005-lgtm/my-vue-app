<script setup>
</script>

<template>
  <div class="student-portal">
    <section class="hero-card">
      <div class="hero-text">
        <div class="tags">
          <span class="badge">ESTABLISHED 993</span>
        </div>
        <h1>Exemplary <span class="highlight">Wizarding</span> Education for Life.</h1>
        <p>A leading institution of magic in the wizarding world, Hogwarts School of Witchcraft and Wizardry nurtures wisdom and magical growth through a commitment to Knowledge, Courage, Loyalty, and Ambition.</p>
        <div class="action-buttons">
          <button class="btn-main">Explore Academics →</button>
          <button class="btn-sub">Request Info</button>
        </div>
      </div>
      <div class="university-badge">
        <img src="@/assets/H-Logo.png" alt="CPU Logo" class="brand-logo" />
        <h2>HOGWARTS SCHOOL</h2> 
        <p class="slogan">"Draco Dormiens Nunquam Titillandus"</p>
        <p class="slogan">(Never Tickle a Sleeping Dragon)</p>
      </div>
    </section>

    <section class="stats-grid">
      <div class="stat-card">
        <span class="number">1000+</span>
        <span class="label">Years of Magic</span>
      </div>
      <div class="stat-card">
        <span class="number">4</span>
        <span class="label">Houses</span>
      </div>
      <div class="stat-card">
        <span class="number">100+</span>
        <span class="label">Magical Courses</span>
      </div>
      <div class="stat-card">
        <span class="number">3</span>
        <span class="label">Towers</span>
      </div>
    </section>

    <section class="about-us">
      <h1>About Us</h1>
      <div class="gold-line"></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </section>

    <section class="admissions-preview">
      <p class="subheading">JOIN OUR COMMUNITY</p>
      <h1>Admissions</h1>
      <div class="gold-line"></div>
      <div class="preview-grid">
        <div class="preview-card">
          <h3>Admission Process</h3>
          <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
          </ol>
        </div>
        <div class="preview-card">
          <h3>Requirements</h3>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
          </ul>
        </div>
        <div class="preview-card">
          <h3>Programs Offered</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <ul class="program-list">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
          </ul>
        </div>
      </div>
      <div class="preview-cta">
        <router-link to="/admissions" class="btn-main">View Full Admissions Details →</router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.student-portal {
  max-width: 1100px;
  margin: 30px auto;
  padding: 0 20px;
  font-family: 'Times New Roman', Times, serif;
}

button {
  font-family: 'Times New Roman', Times, serif;
}

.hero-card {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 30px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  align-items: center;
}

.tags {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.badge {
  color: #b8860b;
  font-size: 11px;
  font-weight: bold;
  padding: 4px 10px;
  letter-spacing: 0.5px;
}

h1 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 38px;
  color: #1a0b40;
  line-height: 1.2;
  margin: 0 0 15px 0;
}

.highlight {
  color: #b8860b;
  font-style: italic;
}

p {
  color: #475569;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 25px;
}

.action-buttons {
  display: flex;
  gap: 12px;
}

.btn-main {
  background: #1a0b40;
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
  text-decoration: none;
  display: inline-block;
}

.btn-main:hover {
  background: #2a1360;
  transform: translateY(-2px);
}

.btn-sub {
  background: #f8fafc;
  color: #1a0b40;
  border: 1px solid #cbd5e1;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
}

.btn-sub:hover {
  background: #f1f5f9;
}

.university-badge {
  background: linear-gradient(180deg, #fefce8 0%, #ffffff 100%);
  border: 1px solid #fef08a;
  border-radius: 12px;
  padding: 30px 20px;
  text-align: center;
}

.brand-logo {
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 15px;
}

.university-badge h2 {
  font-size: 20px;
  color: #1a0b40;
  margin: 0 0 10px 0;
}

.slogan {
  font-size: 13px;
  font-style: italic;
  color: #64748b;
  margin: 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-top: 25px;
}

.stat-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
}

.stat-card .number {
  display: block;
  font-size: 28px;
  font-weight: bold;
  color: #1a0b40;
}

.stat-card .label {
  display: block;
  font-size: 11px;
  color: #64748b;
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.about-us {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 40px;
  margin-top: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
}

.about-us h1 {
  font-size: 28px;
  color: #1a0b40;
  margin: 0 0 12px;
  text-align: center;
}

.about-us p {
  color: #475569;
  font-size: 15px;
  line-height: 1.7;
  margin: 0 0 12px;
}

.admissions-preview {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 40px;
  margin-top: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
  text-align: center;
}

.subheading {
  color: #b8860b;
  letter-spacing: 2px;
  font-size: 14px;
  margin: 0 0 8px;
}

.admissions-preview h1 {
  font-size: 28px;
  color: #1a0b40;
  margin: 0 0 12px;
}

.gold-line {
  width: 100px;
  height: 2px;
  background-color: #b8860b;
  margin: 0 auto 24px;
}

.preview-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.preview-card {
  background: #f8fafc;
  border-radius: 8px;
  padding: 20px;
}

.preview-card h3 {
  font-size: 16px;
  color: #1a0b40;
  margin-bottom: 12px;
  text-align: center;
}

.preview-card ol,
.preview-card ul {
  text-align: left;
  padding-left: 22px;
  margin: 0;
}

.preview-card li {
  color: #475569;
  font-size: 14px;
  line-height: 1.7;
  margin-bottom: 6px;
}

.preview-card p {
  text-align: left;
  margin: 0 0 12px;
  color: #475569;
  font-size: 14px;
}

.program-list {
  list-style: none;
  padding: 0;
}

.program-list li {
  background: #ffffff;
  padding: 8px 12px;
  border-radius: 6px;
  color: #1a0b40;
  font-weight: 500;
}

.preview-cta {
  text-align: center;
}

@media (max-width: 840px) {
  .hero-card {
    grid-template-columns: 1fr;
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .preview-grid {
    grid-template-columns: 1fr;
  }
}
</style>