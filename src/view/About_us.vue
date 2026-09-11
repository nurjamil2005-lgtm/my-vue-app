<template>
  <Navbar />
  <div class="about-page">
    <section class="about-hero">
      <div class="container">
        <h1>About Us</h1>
        <div class="gold-line"></div>
      </div>
    </section>

    <section class="about-content">
      <div class="about-grid">
        <div class="about-text">
          <h2>Our Vision</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto recusandae, nostrum cum maiores molestiae sed totam quam qui tempora placeat odio praesentium consequuntur enim nemo incidunt.
          </p>
        </div>

        <div class="about-text">
          <h2>Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, adipisci. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
          </p>
        </div>

        <div class="about-text full-width">
          <h2>Our Core Values</h2>
          <ul class="values-list">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
      </div>
    </section>

  </div>
  <Footer />
</template>

<style scoped>
.about-page {
  max-width: 1100px;
  margin: 30px auto;
  padding: 0 20px;
  font-family: 'Times New Roman', Times, serif;
}

.about-hero {
  text-align: center;
  padding: 30px 0 10px;
}

.about-hero h1 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 32px;
  color: #1a0b40;
  margin: 0 0 12px;
}

.gold-line {
  width: 100px;
  height: 2px;
  background-color: #b8860b;
  margin: 0 auto;
}

.about-content {
  margin-top: 40px;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.about-text {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
}

.about-text.full-width {
  grid-column: 1 / -1;
}

.about-text h2 {
  font-size: 20px;
  color: #1a0b40;
  margin: 0 0 15px;
}

.about-text p {
  color: #475569;
  font-size: 15px;
  line-height: 1.7;
  margin: 0;
}

.values-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.values-list li {
  padding: 12px 16px;
  background: #f8fafc;
  border-radius: 6px;
  color: #475569;
  margin-bottom: 8px;
  font-size: 15px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>