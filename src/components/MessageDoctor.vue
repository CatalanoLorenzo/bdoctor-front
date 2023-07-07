<script>
import { store } from '../store';
export default {
    name: "MessageDoctor",

    data() {
        return {
            store
        };
    }
}
</script>
<template>
    <form :action="store.api_url + 'api/messages'" method="post">
        <input type="hidden" :value="store.user.id" name="user_id" />
        <input type="hidden" :value="'2023-07-07 15:30:00'" name="date" />
        <input type="hidden" :value="store.singleProfile.slug" name="slug" />
        <div class="mb-3">
            <label for="user_name_surname" class="form-label">Name and Surname</label>
            <input type="text" class="form-control" name="user_name_surname" id="user_name_surname"
                aria-describedby="helpId" placeholder="Mario Rossi">
        </div>

        <div class="mb-3">
            <label for="email" class="form-label">E-mail</label>
            <input type="email" class="form-control" name="email" id="email" aria-describedby="helpId" placeholder="">
        </div>

        <div class="mb-3">
            <label for="text" class="form-label"></label>
            <textarea class="form-control" name="text" id="text" rows="5"></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Send Message</button>
    </form>
</template>
