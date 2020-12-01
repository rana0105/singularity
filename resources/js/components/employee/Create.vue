<template>
	<div class="container">
		<form @submit.prevent="emploeePost">
		  <div class="form-row">
		    <div class="form-group col-md-6">
		      <label for="name">Name</label>
		      <input type="name" class="form-control" id="name" v-model="name" placeholder="Name">
		    </div>
		    <div class="form-group col-md-6">
		      <label for="employee_id">Employee Id</label>
		      <input type="employee_id" class="form-control" id="employee_id" v-model="employee_id" placeholder="Employee Id">
		    </div>
		  </div>
		  <div class="form-row">
		    <div class="form-group col-md-6">
		      <label for="email">Email</label>
		      <input type="email" class="form-control" id="email" v-model="email" placeholder="Email">
		    </div>
		    <div class="form-group col-md-6">
		      <label for="phone">Phone</label>
		      <input type="phone" class="form-control" id="phone" v-model="phone" placeholder="Phone">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="address">Address</label>
		    <input type="text" class="form-control" id="address" v-model="address" placeholder="1234 Main St">
		  </div>
		  <button type="submit" class="btn btn-primary">Sign in</button>
		</form>
	</div>
</template>
<script>
	export default {
		name: "Create",

		data() {
			return {
				name: '',
				employee_id: '',
				email: '',
				phone: '',
				address: ''
			}
		},

		mounted() {

		},

		methods: {
			emploeePost() {
				var formData = new FormData();
		        formData.append("name", this.name);
		        formData.append("employee_id", this.employee_id);
		        formData.append("email", this.email);
		        formData.append("phone", this.phone);
		        formData.append("address", this.address);
	          axios.post("/employeeStore", formData)
	          .then((response) => {
	          	console.log(response.data);
	            this.$router.push({ name: "employee" }).catch(() => {});
	            this.$toasted.success(
	              "Success !! - Employee created successfully",
	              {
	                theme: "outline",
	                position: "top-right",
	                duration: 9000,
	              }
	            );
	          })
	          .catch((error) => {
	            if (error.response.status == 422) {
	              this.$toasted.error(
	                "Errors !! -" + error.response.data.errors.email,
	                {
	                  theme: "outline",
	                  position: "top-right",
	                  duration: 9000,
	                }
	              );
	            }
	          });
			}
		}
	};
</script>