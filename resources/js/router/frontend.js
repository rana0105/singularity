// import components
import Homecontent from "../components/Homecontent.vue";
import Index from "../components/employee/Index.vue";
import Create from "../components/employee/Create.vue";
import Edit from "../components/employee/Edit.vue";

export const routes = [
	// customer realated
	{ name: "home", path: "/home", component: Homecontent },
	{ name: "employee", path: "/employee", component: Index },
	{ name: "employee_create", path: "/employee/create", component: Create },
	{ name: "employee_edit", path: "/employee/edit/:id", component: Edit }
]

