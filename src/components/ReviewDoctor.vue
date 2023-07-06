<script>
export default {
    name:'ReviewDoctor'
}
</script>
<template>
    <div>
        <form action="" method="get">

            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text"
                class="form-control" name="name" id="name" aria-describedby="helpId" placeholder="">
            </div>

            <div class="mb-3">
              <label for="surname" class="form-label">Surname</label>
              <input type="text"
                class="form-control" name="surname" id="surname" aria-describedby="helpId" placeholder="">
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">email</label>
              <input type="text"
                class="form-control" name="email" id="email" aria-describedby="helpId" placeholder="">
            </div>

            <div class="mb-3">
              <label for="text" class="form-label"></label>
              <textarea class="form-control" name="text" id="text" rows="3"></textarea>
            </div>
             <button type="submit" class="btn btn-primary">whrite a review</button>
        </form>
    </div>
</template>
