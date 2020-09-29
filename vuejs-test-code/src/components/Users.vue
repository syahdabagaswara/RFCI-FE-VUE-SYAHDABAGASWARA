<template>
  <div class="main">
    <div class="main-title">{{ msg }}</div>
    <div class="user-count">
      <div class="count">{{ count.length }}</div>
      Users
    </div>
    <div class="wrapper">
      <div v-for="user in users" :key="user.name" class="card">
        <div class="body-card">
          <div class="title">Name</div>
          <div class="name">{{ user.name }}</div>
          <div class="wrapper-card">
            <div>
              <div class="title">Email</div>
              <div class="email">{{ user.email }}</div>
            </div>
            <div>
              <div class="title">Phone</div>
              <div class="phone">{{ user.phone }}</div>
            </div>
            <div>
              <div class="title">Website</div>
              <div class="website" >{{ user.website }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// // import { mapState } from "vuex";
// import { SET_DATA } from "../mutation-types";

export default {
  name: "Users",
  props: {
    msg: String,
  },
  computed: {
    users() {
      return this.$store.getters.getData;
    },
    count() {
      return this.$store.getters.getCountData;
    },
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setData(response.data);
      })
      .catch(() => (this.loading = false));
  },
  methods: {
    setData(data) {
      this.$store.dispatch("setData", data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  background-color: #f5f7fa;
  padding: 10px;
}
.count {
  color: #83dd8b;
  font-weight: 800;
  margin-right: 10px;
}
.user-count {
  border-bottom: 1px solid #e1e1e7;
  color: #646464;
  display: flex;
}
.wrapper{
  display: grid;
  grid-template-columns: 50% auto ;
}
.card {
  margin: 8px;
  background: white;
  border-radius: 8px;
}
.body-card{
  padding: 12px;
}
.title{
  color: grey;
  font-size: 12px;
  font-weight: bold;
  text-transform: capitalize;
}
.wrapper-card{
  margin-top: 12px;
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33% ;
}
.website{
  color: #83dd8b;
}
</style>
