<script>
import { store } from "../store";
import MessageDoctor from "../components/MessageDoctor.vue";
import ReviewDoctor from "../components/ReviewDoctor.vue";

export default {
  name: "SingleProfile",
  components: {
    MessageDoctor,
    ReviewDoctor,

  },
  data() {
    return {
      store,
      vote: null,
      hoverVote: null
    };
  },
  mounted() {
    const myModal = new bootstrap.Modal(document.getElementById("modalId"));

    //create url for axios call
    const url = this.store.api_url + "api/profile/" + this.$route.params.slug;
    //use function for axios call
    this.store.getSingleProfile(url);

  },
  methods: {
    setHoverVote: function (vote) {
      this.hoverVote = vote;
    },
    clearHoverVote: function () {
      this.hoverVote = null;
    },
    openConfirmationModal: function (vote) {
      this.vote = vote;
      this.$refs.confirmationModal.classList.add("show");
      this.$refs.confirmationModal.style.display = "block";
    },
    closeConfirmationModal: function () {
      this.$refs.confirmationModal.classList.remove("show");
      this.$refs.confirmationModal.style.display = "none";
    },
    submitVote: function () {
      // Qui puoi aggiungere la logica per inviare il voto al backend
      console.log("Voto inviato:", this.vote);

      // Chiudi la modale di conferma
      this.closeConfirmationModal();
    }
  }
};
</script>
<template>
  <div id="info_doctor" class="container">
    <div class="row">
      <div class="col-12 bg-light-gray mt-5">
        <div class="d-flex flex-wrap shadow-lg rounded-4 p-4">
          <div class="col-12 col-lg-6 mb-4 mb-lg-0">
            <img class="rounded-3" :src="store.url_image + store.singleProfile.doctor_image"
              alt="{{ store.singleProfile.name }}" />
          </div>
          <div class="col-12 col-lg-6 d-flex flex-column justify-content-between ps-4">
            <div>
              <h1 class="mb-3">
                {{ store.user.name }} {{ store.user.surname }}
              </h1>
              <div class="specializations mb-3">
                <h5 class="fs-4">Specializations:</h5>
                <ul class="list-inline mb-0">
                  <li v-for="specialization in store.singleProfile
                    .specializations" class="list-inline-item me-2 fs-5">
                    <em>{{ specialization.name }}</em>
                  </li>
                </ul>
              </div>
              <p class="mb-3 fs-5">
                <strong>Phone number: </strong><br />
                {{ store.singleProfile.phone_number }}
              </p>
              <p class="mb-3 fs-5">
                <strong>Address: </strong><br />
                {{ store.singleProfile.address }}
              </p>
              <p class="mb-3 fs-5">
                <strong>Doctor email: </strong><br />
                {{ store.user.email }}
              </p>
              <p class="mb-3 fs-5">
                <strong>About this doctor: </strong><br />
                {{ store.singleProfile.performances }}
              </p>
            </div>

            <div>
              <!-- download doctor curriculum -->
              <a class="btn btn-primary mt-3" v-show="store.singleProfile.cv"
                :href="store.url_image + store.singleProfile.cv" role="button">Doctor Curriculum</a>

              <!-- Modal -->
              <div class="col mt-3">
                <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
                  Send Message to Doctor
                </button>
                <div class="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
                  role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                  <div
                    class="modal-dialog modal-xl modal-fullscreen-sm-down modal-dialog-scrollable modal-dialog-centered"
                    role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5>Scrivi un messaggio al Dottore</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <form action="" method="get">
                        <div class="modal-body">
                          <MessageDoctor></MessageDoctor>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- profile info Doctor -->
  <div id="vote_doctor" class="container mt-4 text-center">
    <div class="row">
      <div class="col-12 bd-secondary rounded">
        <div class="shadow p-4 rounded-4 h-100">
          <p class="text-dark-gray"></p>

          <!-- Add a vote to doctor -->
          <h2 class="text-white">Add vote to this doctor</h2>
          <form :action="store.api_url + 'api/votes/'" method="POST">
            <div class="mb-3 text-white">
              <input type="hidden" :value="store.singleProfile.id" name="profile_id" />
              <input type="hidden" :value="'2023-07-07 15:30:00'" name="time" />
              <input type="hidden" name="vote" :value="vote" />
              <input type="hidden" name="slug" :value="store.singleProfile.slug" />
              <div class="d-flex justify-content-center my-3">
                <div v-for="i in 5" :key="i" class="rating-star " @click="openConfirmationModal(i)"
                  @mouseover="setHoverVote(i)" @mouseout="clearHoverVote">
                  <i :class="[hoverVote >= i ? 'fas' : 'far', 'fa-star fa-xl']"></i>
                </div>
              </div>
            </div>

            <!-- Modale di conferma voto -->
            <div class="modal" ref="confirmationModal" @click.self="closeConfirmationModal">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Conferma voto</h5>
                    <button type="button" class="close" data-dismiss="modal" @click="closeConfirmationModal">
                      <span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>Do you want to send this vote?</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeConfirmationModal">
                      Annulla
                    </button>
                    <button type="submit" class="btn btn-primary">Yes</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <h3 class="text-white">Average vote</h3>
          <h5 class="text-white" v-show="store.singleProfile.votes">
            {{ store.singleProfile.average_vote }}
          </h5>
        </div>
      </div>
      <!-- col-12 VOTE -->
    </div>
  </div>




  <div id="review_doctor" class="container bg-light-gray mt-4">
    <div class="row">
      <div class="col-sm-12 col-lg-6 bg-lighter-gray">
        <div class="shadow p-4 rounded-4 h-100">
          <!-- Review Component -->
          <ReviewDoctor></ReviewDoctor>
        </div>
      </div>
      <!-- review doctor -->
      <div class="col-sm-12 col-lg-6 bg-lighter-gray mt-4 mt-lg-0">
        <div class="shadow p-4 rounded-4">
          <h4 class="mb-5">Last Reviews</h4>
          <ul class="last_reviews" v-show="store.singleProfile.reviews">
            <li v-for="review in store.singleProfile.reviews">
              <p>{{ review.name }} {{ review.surname }}</p>
              <p>{{ review.text }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Reviews container -->
</template>
