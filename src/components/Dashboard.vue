<template>
    <div id="dashboard">
        <ul class="collection with-header">
            <li class="collection-header"><h4>Employees</h4></li>
            <li v-for='employee in employees' v-bind:key='employee.id' class="collection-item">
                <div class="chip">{{employee.id}}</div>
                {{employee.fname}} {{employee.lname}}

                <router-link class="secondary-content" v-bind:to="{name: 'viewempl', params: {employee_id:employee.id}}">
                    <i class="fa fa-eye"></i>
                </router-link>
            </li>
        </ul>

        <div class="fixed-action-btn">
            <router-link to="/new" class="btn-floating btn-large red">
                <i class="fa fa-plus"></i>
            </router-link>
        </div>

    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'dashboard',
    data() {
        return {
            employees: []
        }
    },
    created () {
        db.collection('users').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'fname': doc.data().fname,
                    'lname': doc.data().lname,
                    'email': doc.data().email,
                    'gender': doc.data().gender,
                    'date': doc.data().date
                }
                this.employees.push(data)
            })
        })
    }
}
</script>
