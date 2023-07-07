<script>
import { store } from "../store";
import MessageDoctor from "../components/MessageDoctor.vue";
import ReviewDoctor from "../components/ReviewDoctor.vue";
export default {
  name: "SingleProfile",
  components: {
    MessageDoctor,
    ReviewDoctor
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
  methods:{
    setHoverVote: function (vote) {
      this.hoverVote = vote;
    },
    clearHoverVote: function () {
      this.hoverVote = null;
    },
    openConfirmationModal: function (vote) {
      this.vote = vote;
      this.$refs.confirmationModal.classList.add('show');
      this.$refs.confirmationModal.style.display = 'block';
    },
    closeConfirmationModal: function () {
      this.$refs.confirmationModal.classList.remove('show');
      this.$refs.confirmationModal.style.display = 'none';
    },
    submitVote: function () {
      // Qui puoi aggiungere la logica per inviare il voto al backend
      console.log('Voto inviato:', this.vote);

      // Chiudi la modale di conferma
      this.closeConfirmationModal();
    }
  }
};
</script>
<template>
  <!-- <div class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-header">
            <h2>{{ store.user.name }} {{ store.user.surname }}</h2>
            <img
              class="img-fluid"
              :src="store.url_image + store.singleProfile.doctor_image"
              alt=""
            />
          </div>
          <div class="card-body">
            <p>{{ store.singleProfile.phone_number }}</p>
            <p>{{ store.singleProfile.address }}</p>

            <ul>
              <li v-for="specialization in store.singleProfile.specializations">
                {{ specialization.name }}
              </li>
            </ul>

            <ul v-show="store.singleProfile.votes">
              <li v-for="vote in store.singleProfile.votes">
                {{ vote.vote }}
              </li>
            </ul>

            <ul v-show="store.singleProfile.reviews">
              <li v-for="review in store.singleProfile.reviews">
                <p>{{ review.name }} {{ review.surname }}</p>
                <p>{{ review.text }}</p>
                <p>{{ review.data }}</p>
              </li>
            </ul>
            <a
              class="btn btn-primary"
              v-show="store.singleProfile.cv"
              :href="store.url_image + store.singleProfile.cv"
              role="button"
              >PDF</a
            >
          </div>

          <div class="card-footer">
            <div class="container">
              <div class="row flex-column">
                <div class="col">
                  <ReviewDoctor></ReviewDoctor>
                </div>
                <div class="col">
                  <button
                    type="button"
                    class="btn btn-primary btn-lg"
                    data-bs-toggle="modal"
                    data-bs-target="#modalId"
                  >
                    Send Message to Doctor
                  </button>

                  <div
                    class="modal fade"
                    id="modalId"
                    tabindex="-1"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    role="dialog"
                    aria-labelledby="modalTitleId"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-xl modal-fullscreen-sm-down modal-dialog-scrollable modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5>Scrivi un messagio al Dottore</h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <form action="" method="get">
                          <div class="modal-body">
                            <MessageDoctor></MessageDoctor>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="submit" class="btn btn-primary">
                              Send
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
  </div> -->
  <div class="container">
    <div class="row">
      <div class="col-12 bg-light-gray mt-5 shadow-lg rounded-4 p-4">
        <div class="d-flex flex-wrap align-items-center">
          <div class="h-25 w-25 mx-5">
            <img class="img-fluid rounded-5" :src="store.url_image + store.singleProfile.doctor_image" alt="" />
          </div>
          <div class="flex-grow-1">
            <h2>{{ store.user.name }} {{ store.user.surname }}</h2>
            <ul class="list-inline mb-0">
              <li v-for="specialization in store.singleProfile.specializations" class="list-inline-item me-2">
                {{ specialization.name }}
              </li>
            </ul>
            <p class="mb-1">{{ store.singleProfile.phone_number }}</p>
            <p class="mb-1">{{ store.singleProfile.address }}</p>
            <p class="mb-1">{{ store.user.email }}</p>
            <p class="mb-1">{{ store.singleProfile.performances }}</p>
            <a class="btn btn-primary mt-3" v-show="store.singleProfile.cv"
              :href="store.url_image + store.singleProfile.cv" role="button">PDF</a>

            <!-- Modal -->
            <div class="col mt-3">
              <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
                Send Message to Doctor
              </button>
              <div class="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
                role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-fullscreen-sm-down modal-dialog-scrollable modal-dialog-centered"
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
                        <button type="submit" class="btn btn-primary">
                          Send
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
    <!-- profile info Doctor -->
    <div class="row mt-4">
      <div class="col-4 bg-light-gray shadow-lg rounded-4">
        <p class="text-dark-gray"></p>

        <form :action="store.api_url + 'api/votes/'" method="POST">
      <div class="mb-3">
        <input type="hidden" :value="store.singleProfile.id" name="profile_id" />
        <input type="hidden" :value="'2023-07-07 15:30:00'" name="time" />
        <input type="hidden" name="vote" :value="vote">
        <input type="hidden" name="slug" :value="store.singleProfile.slug">
        <span v-for="i in 5" :key="i" class="rating-star" @click="openConfirmationModal(i)" @mouseover="setHoverVote(i)"
          @mouseout="clearHoverVote">
          <i :class="[hoverVote >= i ? 'fas' : 'far', 'fa-star']"></i>
        </span>
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
              <button type="button" class="btn btn-secondary" data-dismiss="modal"
                @click="closeConfirmationModal">Annulla</button>
              <button type="submit" class="btn btn-primary">Yes</button>
            </div>
          </div>
        </div>
      </div>
    </form>


        <ul v-show="store.singleProfile.votes">
          <li v-for="vote in store.singleProfile.votes">
            {{ vote.vote }}
          </li>
        </ul>
      </div>
      <div class="col-8">
        <div class="container bg-light-gray px-0 mx-0">
          <div class="row flex-column">
            <div class="col bg-lighter-gray shadow-lg rounded-4">
              <div class="p-4">
                <p>Ricorda modifiche: togliere sezione email</p>

                <!-- Review Component -->
                <ReviewDoctor></ReviewDoctor>
              </div>
            </div>
            <!-- review doctor -->
            <div class="col bg-lighter-gray shadow-lg rounded-4 mt-3">
              <p class="text-dark-gray">Reviews ricevute</p>
              <ul v-show="store.singleProfile.reviews">
                <li v-for="review in store.singleProfile.reviews">
                  <p>{{ review.name }} {{ review.surname }}</p>
                  <p>{{ review.text }}</p>
                  <p>{{ review.data }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
