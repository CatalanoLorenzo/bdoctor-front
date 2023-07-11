<script>
import { store } from '../store';
export default {
  name: 'ReviewDoctor',

  data() {
    return {
      store,
      inputName: '',
      inputSurname: '',
      inputText: '',
      inputEmail: '',
      errorName: false,
      errorSurname: false,
      errorText: false,
      errorEmail: false,
    };
  },
  methods: {
    checkSubmit() {
      this.checkError()
    },
    checkError() {
      this.checkErrorName()
      this.checkErrorSurname()
      this.checkErrorEmail()
      this.checkErrorText()

    },
    checkErrorName() {
      if (this.inputName.length > 50) {
        this.errorName = true
      } else {
        this.errorName = false
      }
    },
    checkErrorSurname() {
      if (this.inputSurname.length > 50) {
        this.errorSurname = true
      } else {
        this.errorSurname = false
      }
    },
    checkErrorEmail() {
      if (this.inputEmail.length > 50) {
        this.errorEmail = true
      } else {
        this.errorEmail = false
      }
    },
    checkErrorText() {
      if (this.inputText.length > 255) {
        this.errorText = true
      } else {
        this.errorText = false
      }
    },
  }
}
</script>
<template>
  <div>
    <h3>Add a Review</h3>
    <form :action="store.api_url + 'api/reviews/'" method="post" @submit.prevent="checkSubmit">
      <input type="hidden" :value="store.singleProfile.id" name="profile_id" />
      <input type="hidden" :value="'2023-07-07 15:30:00'" name="date" />
      <input type="hidden" :value="store.singleProfile.slug" name="slug" />

      <!-- name -->
      <div v-show="errorName" class="alert alert-danger" role="alert">
        <strong>Error: </strong> Name error
      </div>


      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input v-model="inputName" type="text" class="form-control" name="name" id="name" aria-describedby="helpId"
          placeholder="type your name and surname">
      </div>

      <!-- surname -->
      <div v-show="errorSurname" class="alert alert-danger" role="alert">
        <strong>Error: </strong> Name error
      </div>

      <div class="mb-3">
        <label for="surname" class="form-label">Surname</label>
        <input v-model="inputSurname" type="text" class="form-control" name="surname" id="surname"
          aria-describedby="helpId" placeholder="">
      </div>

      <!-- email -->
      <div v-show="errorEmail" class="alert alert-danger" role="alert">
        <strong>Error: </strong> Name error
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">email</label>
        <input v-model="inputEmail" type="text" class="form-control" name="email" id="email" aria-describedby="helpId"
          placeholder="">
      </div>

      <!-- text -->
      <div v-show="errorText" class="alert alert-danger" role="alert">
        <strong>Error: </strong> Name error
      </div>

      <div class="mb-3">
        <label for="text" class="form-label"></label>
        <textarea v-model="inputText" class="form-control" name="text" id="text" rows="3"></textarea>
      </div>

      <!-- submit -->
      <button @click="checkError()" @submit.prevent='submit' type="submit" class="btn btn-primary">write areview</button>

    </form>
  </div>
</template>
