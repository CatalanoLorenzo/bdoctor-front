<script>
export default {
    name: "MessageDoctor"
}
</script>
<template>
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" name="name" id="name" aria-describedby="helpId"
                            placeholder="Mario..">
                    </div>

                    <div class="mb-3">
                        <label for="Surname" class="form-label">Surname</label>
                        <input type="text" class="form-control" name="Surname" id="Surname" aria-describedby="helpId"
                            placeholder="Rossi...">
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">E-mail</label>
                        <input type="email" class="form-control" name="email" id="email" aria-describedby="helpId"
                            placeholder="">
                    </div>

                    <div class="mb-3">
                        <label for="text" class="form-label"></label>
                        <textarea class="form-control" name="text" id="text" rows="5"></textarea>
                    </div>

</template>
