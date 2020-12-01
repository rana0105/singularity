<template>
	<div>
		<div>
			<router-link :to="{name: 'employee_create'}">Create</router-link>
		</div>
		<table class="table table-hover">
		  <thead>
		    <tr>
		      <th scope="col">#</th>
		      <th scope="col">Name</th>
		      <th scope="col">Employee Id</th>
		      <th scope="col">Email</th>
		      <th scope="col">Phone</th>
		      <th scope="col">Address</th>
		      <th scope="col">Action</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr v-for="(employee, index) in employees" :key="index">
		      <th scope="row">{{ ++index }}</th>
		      <td>{{employee.name}}</td>
		      <td>{{employee.employee_id}}</td>
		      <td>{{employee.email}}</td>
		      <td>{{employee.phone}}</td>
		      <td>{{employee.address}}</td>
		      <td>
		      	<router-link :to="{name: 'employee_edit', params: { id: employee.id }}" class="btn btn-primary">Edit</router-link>
		      	<button class="btn btn-danger" @click.prevent="deleteEmployee(employee.id)">Delete</button>
		      </td>
		    </tr>
		  </tbody>
		</table>
	</div>
</template>
<script>
	export default {
		name: "Index",

		data() {
			return {
				employees: []
			}
		},

		mounted(){
			this.loadEmployees();
		},

		methods: {
			loadEmployees() {
				axios
		        .get("/getEmployees/")
		        .then((response) => {
		          this.employees = response.data;
		        })
		        .catch((error) => {
		          this.$toasted.error("Errors !! -" + error.response.data.message, {
		            theme: "outline",
		            position: "top-right",
		            duration: 9000,
		          });
		        });
			},

			deleteEmployee(id) {
				axios
		        .get(`/deleteEmployee/${id}`)
		        .then((response) => {
		          	this.employees.splice(this.employees.indexOf(id), 1);
		            this.$router.push({ name: "employee" }).catch(() => {});
		            this.$toasted.error(
		              "Success !! - Employee Deleted successfully",
		              {
		                theme: "outline",
		                position: "top-right",
		                duration: 9000,
		              }
		            );
		        })
		        .catch((error) => {
		          this.$toasted.error("Errors !! -" + error.response.data.message, {
		            theme: "outline",
		            position: "top-right",
		            duration: 9000,
		          });
		        });
			}
		}
	};
</script>