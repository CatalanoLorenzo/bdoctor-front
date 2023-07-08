<script>
export default {
    name: 'ReviewFilter',
    data() {
        return {
            selectedReview: ""
        }
    },
}
</script>
<template>
    <div class="mb-3 w-50">
        <label for="review" class="form-label fs-4">Filter by review</label>
        <select v-model="selectedReview" class="form-select form-select-lg text-dark" name="review" id="review">
            <option value="all">All</option>
            <option value="1">-2 </option>
            <option value="2">tra 2 e 5</option>
            <option value="3">5+</option>
        </select>
    </div>
</template>