<template>
  <div id="contact">
    <div
      class="row shadow-lg rounded container-sm container-md container-lg container-xl container-xxl mb-5"
    >
      <div class="col">
        <form
          class="mt-5 d-flex gap-3 contact-form"
          action="https://formspree.io/f/xbjwnawg"
          method="POST"
        >
          <h4>Send me a message:</h4>
          <input
            type="text"
            placeholder="Name"
            class="rounded"
            name="Client Name"
          />
          <input
            type="email"
            placeholder="Email"
            class="rounded"
            required
            name="Email"
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="5"
            placeholder="How can I be of service?"
            class="rounded"
          ></textarea>
          <button class="bg-primary rounded-pill submit" type="submit">
            SEND
          </button>
        </form>
      </div>
      <div class="col col-find-me">
        <h4 class="mt-5 find-me">
          Find Me: <i class="fa-solid fa-location-dot"></i>
        </h4>
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.267419708817!2d18.4905099151885!3d-33.98566428062404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc433bedd50e81%3A0x9c746d268c8e0ad9!2sLife%20Choices!5e0!3m2!1sen!2sza!4v1658396131920!5m2!1sen!2sza"
            width="600"
            height="350"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            class="rounded"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
form {
  flex-direction: column;
  width: 480px;
}

#contact {
  font-size: 1.2rem;
  font-family: "Abhaya Libre", serif;
}

button,
input {
  padding: 2px;
}

.fa-location-dot {
  color: red;
}

.submit:hover {
  color: white;
}

h4 {
  font-weight: bold;
  font-family: "Cinzel", serif;
}

.col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* MEDIA QUERIES */

@media screen and (max-width: 415px) {
  .contact-form {
    width: auto;
  }

  .map {
    display: none;
  }

  .find-me {
    display: none;
  }

  .col-find-me {
    display: none;
  }
}
</style>
