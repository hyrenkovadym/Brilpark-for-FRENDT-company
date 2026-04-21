<?php
if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>
<header class="topbar">
  <div class="container nav-wrap">
    <a href="#home" class="logo" aria-label="BRIL Industrial Park">
      <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/bril-logo.svg'); ?>" alt="BRIL Industrial Park logo">
    </a>

    <nav class="menu" aria-label="Main menu">
      <a href="#offer">Offer</a>
      <a href="#characteristics">Characteristics</a>
      <a href="#contacts">Contacts</a>
      <a href="#form-modal" class="menu-cta" data-open-form>Become a resident</a>
    </nav>
  </div>
</header>

<main id="home">
  <section class="hero section reveal">
    <div class="container hero-grid">
      <div>
        <p class="eyebrow">Agro-processing platform ready for launch</p>
        <h1>BRIL Industrial Park is a ready-to-use site for food and agricultural production</h1>
        <p class="lead">
          We combine energy infrastructure, water resources, and logistics to ensure a fast,
          low-risk production launch with expansion potential.
        </p>
        <a class="cta-btn" href="#form-modal" data-open-form>Become a resident</a>
      </div>

      <article class="hero-card">
        <h3>Why agro-processing companies choose BRIL</h3>
        <ul>
          <li>Reduced CAPEX for infrastructure</li>
          <li>Faster launch compared to competitors</li>
          <li>Guaranteed energy and water supply</li>
          <li>Direct access to raw materials</li>
          <li>Lowest energy costs in Ukraine</li>
        </ul>
      </article>
    </div>
  </section>

  <section id="offer" class="section container reveal">
    <div class="split-grid">
      <article class="dark-card">
        <h2>What we can offer to potential residents</h2>
        <ul class="angled-list">
          <li>Rapid production launch</li>
          <li>Ready-to-use engineering, road, and railway infrastructure</li>
          <li>Land plots and production facilities available</li>
          <li>Recruitment support and workforce up to 2,000 employees, including reservation from military mobilization</li>
          <li>Cooperation with Ukrainian agricultural producers</li>
          <li>Support in interaction with local and government authorities</li>
          <li>Professional management company</li>
        </ul>
      </article>

      <article class="dark-card">
        <h2>Agro-Processing Cluster Model</h2>
        <p class="small-note">
          We are developing a cluster of food processing enterprises that provides security,
          long-term planning ability, synergy between manufacturers, and cost savings from day one.
        </p>

        <h3>Access to raw materials</h3>
        <p class="small-note">Located in one of the strongest agricultural regions of Ukraine, with direct access to:</p>
        <ul class="chip-list">
          <li>corn</li>
          <li>wheat</li>
          <li>vegetables</li>
          <li>sunflower</li>
          <li>soybeans</li>
        </ul>

        <div class="border-box">
          <h3>Government incentives for residents</h3>
          <ul>
            <li>0% corporate income tax for 10 years</li>
            <li>Import duty exemption on equipment</li>
            <li>VAT exemption on imported equipment</li>
          </ul>
        </div>

        <h3>Additional support</h3>
        <ul class="triangle-list">
          <li>Grants up to EUR 3.4 million</li>
          <li>Access to bank financing</li>
          <li>Business relocation programs</li>
        </ul>
      </article>
    </div>
  </section>

  <section id="characteristics" class="section light-zone reveal">
    <div class="container light-grid">
      <article class="light-card">
        <h2>Key characteristics of the BRIL agro-processing hub</h2>
        <ul class="triangle-list dark-text">
          <li>Total area: 28 hectares with expansion potential</li>
          <li>Substation capacity: 2.9 MW available grid capacity</li>
          <li>Solar power plant potential: up to 30 MW</li>
          <li>Energy storage systems: up to 20 MW</li>
          <li>Industrial warehouse and administrative facilities: over 8,000 m2</li>
          <li>Availability of a workforce of up to 2,000 employees</li>
          <li>Lake (approximately 75 hectares)</li>
          <li>Industrial water intake and discharge capability</li>
          <li>Wastewater treatment plant capacity: 10,000 m3/day</li>
        </ul>

        <div class="border-box light-border">
          <h3>Logistics: critically important for food processing</h3>
          <ul>
            <li>Railway branch line within the park territory</li>
            <li>Access to international highways</li>
            <li>Close proximity to EU markets</li>
          </ul>
        </div>
      </article>

      <article class="light-contact">
        <h2>Oleksandr Sharchuk</h2>
        <p>Investment Manager<br>BRIL Industrial Park</p>
        <a href="tel:+380989460868">+380 98 946 08 68</a>
        <a href="mailto:o.sharchuk@brilpark.com">o.sharchuk@brilpark.com</a>
        <p class="region">Vinnytsia region, Ukraine</p>
        <a class="cta-btn cta-dark" href="#form-modal" data-open-form>Become a resident</a>
      </article>
    </div>
  </section>
</main>

<div id="form-modal" class="form-modal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="form-modal-title">
  <div class="form-modal__backdrop" data-close-form></div>
  <div class="form-modal__panel">
    <button class="form-modal__close" type="button" aria-label="Close form" data-close-form>&times;</button>
    <h2 id="form-modal-title">Resident Request Form</h2>
    <p class="resident-form__note">Test form with 4 fields.</p>

    <form class="resident-form">
      <label>
        1. Full name
        <input type="text" name="fullName" placeholder="Enter full name" required>
      </label>

      <label>
        2. Phone number
        <input type="tel" name="phone" placeholder="+380..." required>
      </label>

      <label>
        3. Email
        <input type="email" name="email" placeholder="example@mail.com" required>
      </label>

      <label>
        4. Company profile
        <select name="industry" required>
          <option value="">Select an option</option>
          <option value="food">Food processing</option>
          <option value="agro">Agro production</option>
          <option value="logistics">Logistics and storage</option>
          <option value="energy">Energy and utilities</option>
        </select>
      </label>

      <button class="cta-btn resident-form__submit" type="submit">Send test request</button>
      <p class="resident-form__status" aria-live="polite"></p>
    </form>
  </div>
</div>

<footer id="contacts" class="footer">
  <div class="container footer-grid">
    <p>BRIL Industrial Park</p>
    <a href="mailto:o.sharchuk@brilpark.com">o.sharchuk@brilpark.com</a>
    <a href="tel:+380989460868">+380 98 946 08 68</a>
    <p>Vinnytsia region, Ukraine</p>
  </div>
</footer>

<?php
get_footer();
