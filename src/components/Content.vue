<template>
    <div class="container">
    <h1 class="mt-4 text-center">Add new user</h1>
    <form>
      <div class="form-group">
        <label for="fname">First Name</label>
        <input
          type="text"
          placeholder="Ex: Lucian"
          v-model="fname"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="lname">Last Name</label>
        <input
          type="text"
          placeholder="Ex: Masca"
          v-model="lname"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input
          type="email"
          placeholder="Ex: test@gmail.com"
          v-model="email"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="gender">Gender</label>
        <select name="gender" v-model="gender" class="form-control">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
      </div>
      <div class="form-group">
        <label for="date">Birth Date</label>
        <input
          type="date"
          v-model="date"
          class="form-control"
        />
      </div>
      <button type="button" @click="onSubmit" class="btn btn-dark">
        Submit
      </button>
    </form>
     <table class="table mt-5 centering">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">E-mail</th>
          <th scope="col">Gender</th>
          <th scope="col">Birth Date</th>
        </tr>
      </thead>
      <tbody>
      
        <tr v-for="(entry, i) in this.useri.slice()" :key="i">
          <th scope="row">{{ ++i }}</th>
          <td>{{ entry.fname }}</td>
          <td>{{ entry.lname }}</td>
          <td>{{ entry.email }}</td>
          <td>{{ entry.gender }}</td>
          <td>{{ entry.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

   
    // // Create a root reference
    // var storigi = firebase.storage().ref();
export default {
  name: "Content",
  data: () => ({ fname: "", lname: "", email: "", gender: "", date: "", useri: [] }),
//   computed: {
//     sortedList: function() {
//       return this.allScores.slice().sort(function(a, b) {
//         return b.score - a.score;
//       });
//     },
//   },
  methods: {
    onSubmit() {
      this.useri.push({ fname: this.fname, lname: this.lname, email: this.email, gender: this.gender, date: this.date });
      this.clearForm();
    },
    clearForm() {
      this.fname = "";
      this.lname = "";
      this.email = "";
      this.gender = "";
      this.date = "";
    },
  },
};
</script>

<style scoped>
.centering th {
    text-align: center;
}
</style>