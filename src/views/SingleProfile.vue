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
      store
    };
  },
  mounted() {
    const myModal = new bootstrap.Modal(document.getElementById("modalId"));

    //create url for axios call
    const url = this.store.api_url + "api/profile/" + this.$route.params.slug;
    //use function for axios call
    this.store.getSingleProfile(url);
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

  <div class="container mt-5">
    <div class="row">
      <div class="col-12 bg-info">
        <div class="card-header d-flex">
          <div class="rounded h-25 w-25">
            <img
              class="img-fluid"
              :src="store.url_image + store.singleProfile.doctor_image"
              alt=""
            />
          </div>

          <div>
            <h2>{{ store.user.name }} {{ store.user.surname }}</h2>
            <ul class="list-unstyled">
              <li v-for="specialization in store.singleProfile.specializations">
                {{ specialization.name }}
              </li>
            </ul>
            <p>{{ store.singleProfile.phone_number }}</p>
            <p>{{ store.singleProfile.address }}</p>
            <p>{{ store.user.email }}</p>
            <p>{{ store.singleProfile.performances }}</p>

            <a
              class="btn btn-primary"
              v-show="store.singleProfile.cv"
              :href="store.url_image + store.singleProfile.cv"
              role="button"
              >PDF</a
            >
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
    <!-- profile info Doctor -->

    <div class="row">
      <div class="col-4 bg-success">
        <p>stars</p>
        <ul v-show="store.singleProfile.votes">
          <li v-for="vote in store.singleProfile.votes">
            {{ vote.vote }}
          </li>
        </ul>
      </div>
      <div class="col-8">
        <div class="container bg-dark px-0 mx-0">
          <div class="row flex-column">
            <div class="col bg-danger">
              <div class="card-footer">
                <div class="container">
                  <div class="row flex-column">
                    <div class="col">
                      <p>ricorda modifiche: togliere sezione email</p>
                      <ReviewDoctor></ReviewDoctor>
                    </div>
                  </div>
                </div>
              </div>
              <!-- review doctor -->
            </div>
            <div class="col bg-info">
              <p>reviews ricevute</p>
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
