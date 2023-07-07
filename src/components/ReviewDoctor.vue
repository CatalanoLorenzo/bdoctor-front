<script>
import { store } from '../store';
export default {
  name: 'ReviewDoctor',

  data() {
    return {
      store
    };
  }
}
</script>
<template>
  <div>
    <form :action="store.api_url + 'api/reviews/'" method="post">
      <input type="hidden" :value="store.singleProfile.id" name="profile_id" />
      <input type="hidden" :value="'2023-07-07 15:30:00'" name="date" />
      <input type="hidden" :value="store.singleProfile.slug" name="slug" />
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" name="name" id="name" aria-describedby="helpId" placeholder="">
      </div>

      <div class="mb-3">
        <label for="surname" class="form-label">Surname</label>
        <input type="text" class="form-control" name="surname" id="surname" aria-describedby="helpId" placeholder="">
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">email</label>
        <input type="text" class="form-control" name="email" id="email" aria-describedby="helpId" placeholder="">
      </div>

      <div class="mb-3">
        <label for="text" class="form-label"></label>
        <textarea class="form-control" name="text" id="text" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">write a review</button>
    </form>
  </div>
</template>
