<script>
import { store } from "../store";
export default {
  name: "ReviewDoctor",

  data() {
    return {
      store,
      inputName: "",
      inputSurname: "",
      inputText: "",
      inputEmail: "",
      errorName: false,
      errorSurname: false,
      errorText: false,
      errorEmail: false
    };
  },
  methods: {
    checkError(event) {
      if (this.inputName.length > 50 || this.inputName.length <= 0) {
        this.errorName = true;
        event.preventDefault();
      } else {
        this.errorName = false;
      }

      if (this.inputSurname.length > 50 || this.inputSurname.length <= 0) {
        this.errorSurname = true;
        event.preventDefault();
      } else {
        this.errorSurname = false;
      }

      if (
        this.inputEmail.length > 255 ||
        this.inputEmail.length <= 0 ||
        !this.inputEmail.includes("@")
      ) {
        this.errorEmail = true;
        event.preventDefault();
      } else {
        this.errorEmail = false;
      }

      if (this.inputText.length > 255 || this.inputText.length <= 0) {
        this.errorText = true;
        event.preventDefault();
      } else {
        this.errorText = false;
      }
    }
  }
};
</script>
<template>
  <div>
    <h3>Add a Review</h3>
    <form
      :action="store.api_url + 'api/reviews/'"
      method="post"
      @submit="checkError"
    >
      <input type="hidden" :value="store.singleProfile.id" name="profile_id" />
      <input type="hidden" :value="'2023-07-07 15:30:00'" name="date" />
      <input type="hidden" :value="store.singleProfile.slug" name="slug" />

      <!-- name -->
      <div v-show="errorName" class="alert alert-danger" role="alert">
        <strong>Error: </strong> Name error
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          v-model="inputName"
          type="text"
          class="form-control"
          name="name"
          id="name"
          aria-describedby="helpId"
          placeholder="Type your name and here"
        />
      </div>

      <!-- surname -->
      <div v-show="errorSurname" class="alert alert-danger" role="alert">
        <strong>Error: </strong> The Name must be less then 50 characters
      </div>

      <div class="mb-3">
        <label for="surname" class="form-label">Surname</label>
        <input
          v-model="inputSurname"
          type="text"
          class="form-control"
          name="surname"
          id="surname"
          aria-describedby="helpId"
          placeholder="Type your Surname here"
        />
      </div>

      <!-- email -->
      <div v-show="errorEmail" class="alert alert-danger" role="alert">
        <strong>Error: </strong> The email isn't correct
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">email</label>
        <input
          v-model="inputEmail"
          type="text"
          class="form-control"
          name="email"
          id="email"
          aria-describedby="helpId"
          placeholder="Type your Email here"
        />
      </div>

      <!-- text -->
      <div v-show="errorText" class="alert alert-danger" role="alert">
        <strong>Error: </strong> The Text must be less then 255 characters
      </div>

      <div class="mb-3">
        <label for="text" class="form-label">Reviews</label>
        <textarea
          v-model="inputText"
          class="form-control"
          name="text"
          id="text"
          rows="3"
        ></textarea>
      </div>

      <!-- submit -->
      <button @click="checkError()" type="submit" class="btn btn-primary">
        write a Review
      </button>
    </form>
  </div>
</template>
