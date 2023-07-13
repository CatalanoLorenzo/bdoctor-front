<script>
import { store } from "../store";
export default {
  name: "MessageDoctor",

  data() {
    return {
      store,
      inputNameSurname: "",
      inputEmail: "",
      inputMessage: "",
      errorName: false,
      errorEmail: false,
      errorMessage: false
    };
  },
  methods: {
    checkError(event) {
      if (
        this.inputNameSurname.length > 100 ||
        this.inputNameSurname.length <= 0
      ) {
        this.errorName = true;
        event.preventDefault();
      } else {
        this.errorName = false;
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

      if (this.inputMessage.length > 255 || this.inputMessage.length <= 0) {
        this.errorMessage = true;
        event.preventDefault();
      } else {
        this.errorMessage = false;
      }
    }
  }
};
</script>
<template>
  <form :action="store.api_url + 'api/messages'" method="post" @submit="checkError">
    <input type="hidden" :value="store.user.id" name="user_id" />
    <input type="hidden" :value="'2023-07-07 15:30:00'" name="date" />
    <input type="hidden" :value="store.singleProfile.slug" name="slug" />

    <div v-show="errorName" class="alert alert-danger" role="alert">
      <strong>Error: </strong> Name error
    </div>

    <div class="mb-3">
      <label for="user_name_surname" class="form-label">Name and Surname</label>
      <input v-model="inputNameSurname" type="text" class="form-control" name="user_name_surname" id="user_name_surname"
        aria-describedby="helpId" placeholder="Mario Rossi" />
    </div>
    <!-- Name -->

    <div v-show="errorEmail" class="alert alert-danger" role="alert">
      <strong>Error: </strong>error message email insert @
    </div>

    <div class="mb-3">
      <label for="email" class="form-label">E-mail</label>
      <input v-model="inputEmail" type="text" class="form-control" name="email" id="email" aria-describedby="helpId"
        placeholder="" />
    </div>
    <!-- Email -->
    <div v-show="errorMessage" class="alert alert-danger" role="alert">
      <strong>Error: </strong> Message error
    </div>
    <div class="mb-3">
      <label for="text" class="form-label"></label>
      <textarea v-model="inputMessage" class="form-control" name="text" id="text" rows="5"></textarea>
    </div>
    <!-- Email -->

    <button @click="checkError()" type="submit" class="btn btn-primary">
      Send Message
    </button>
  </form>
</template>
