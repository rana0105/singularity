<template>
	<div class="container">
		<form @submit.prevent="emploeeUpdate">
		  <div class="form-row">
		    <div class="form-group col-md-6">
		      <label for="name">Name</label>
		      <input type="name" class="form-control" id="name" v-model="employee.name" placeholder="Name">
		      <input type="hidden" name="id" v-model="employee.id">
		    </div>
		    <div class="form-group col-md-6">
		      <label for="employee_id">Employee Id</label>
		      <input type="employee_id" class="form-control" id="employee_id" v-model="employee.employee_id" placeholder="Employee Id">
		    </div>
		  </div>
		  <div class="form-row">
		    <div class="form-group col-md-6">
		      <label for="email">Email</label>
		      <input type="email" class="form-control" id="email" v-model="employee.email" placeholder="Email">
		    </div>
		    <div class="form-group col-md-6">
		      <label for="phone">Phone</label>
		      <input type="phone" class="form-control" id="phone" v-model="employee.phone" placeholder="Phone">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="address">Address</label>
		    <input type="text" class="form-control" id="address" v-model="employee.address" placeholder="1234 Main St">
		  </div>
		  <button type="submit" class="btn btn-primary">Sign in</button>
		</form>
	</div>
</template>
<script>
	export default {
		name: "Edit",

		data() {
			return {
				employee: {}
			}
		},

		created() {
			axios
	        .get(`/editEmployee/${this.$route.params.id}`)
	        .then((response) => {
	          this.employee = response.data;
	        })
	        .catch((error) => {
	          this.$toasted.error("Errors !! -" + error.response.data.message, {
	            theme: "outline",
	            position: "top-right",
	            duration: 9000,
	          });
	        });
		},

		methods: {
			emploeeUpdate() {
				var formData = new FormData();
		        formData.append("id", this.employee.id);
		        formData.append("name", this.employee.name);
		        formData.append("employee_id", this.employee.employee_id);
		        formData.append("email", this.employee.email);
		        formData.append("phone", this.employee.phone);
		        formData.append("address", this.employee.address);
	          axios.post("/employeeUpdate", formData)
	          .then((response) => {
	          	console.log(response.data);
	            this.$router.push({ name: "employee" }).catch(() => {});
	            this.$toasted.success(
	              "Success !! - Employee Updated successfully",
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