<script>
export default {
    name: 'StarFilter',
    data() {
        return {
            selectedVote: "",
        }
    },
}
</script>
<template>
    <div class="mb-3 filter-star">
        <label for="vote" class="form-label fs-4">Filter by vote:</label>
        <select v-model="selectedVote" class="form-select form-select-lg text-dark d-inline-block" name="vote" id="vote">
            <option value="all">All</option>
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
    </div>
</template>