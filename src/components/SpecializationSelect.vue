<script>
import { store } from '../store';
export default {
    name: 'SpecializationSelect',
    data() {
        return {
            store,
            selectedSpecialization : ''
        }
    },
    mounted(){
        this.selectedSpecialization = this.$route.query.specializationSelect;
        this.store.selectSpecialization(this.$route.query.specializationSelect);
    }
}
</script>
<template>
    <div class="mb-3 w-50">
        <label for="specializations" class="form-label fs-4">Specializations</label>
        <select v-model="selectedSpecialization" class="form-select form-select-lg text-dark" name="specializations"
            id="specializations">
            <option value="all">All</option>
            <option v-for="specialization in store.specializations" :value="specialization.id">
                {{ specialization.name }}
            </option>
        </select>
    </div>
</template>