<script>
import { store } from "../store";
export default {
  name: "JumboTron",
  data() {
    return {
      store,
      selectedSpecialization: ""
    };
  }
};
</script>
<template>
  <div class="jumbotron p-5">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold text-white">
        Are you looking for a doctor?
      </h1>
      <p class="col-md-8 fs-4">
        Search more than 100 medical specialists in your area
      </p>
      <div class="col-sm-12 col-md-6 mb-3 d-flex gap-4 align-items-center">
        <div class="select">
          <label for="specializations" class="form-label fs-4 text-white">Specializations</label>
          <select v-model="selectedSpecialization" class="form-select form-select-lg text-dark" name="specializations"
            id="specializations">
            <option v-for="specialization in store.specializations" :value="specialization.id">
              {{ specialization.name }}
            </option>
          </select>
        </div>
        <div class="search w-50 mt-4">
          <router-link :to="{
            name: 'advanced-search',
            query: { specializationSelect: selectedSpecialization }
          }">
            <button type="button" class="btn btn-primary col-12 col-md-6 mt-3">
              Search
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
