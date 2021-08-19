<template>
    <div id="viewempl">
        <h3>viewempl</h3>

    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'viewempl',
    data () {
        return {
            id: null,
            fname: null,
            lname: null,
            email: null,
            gender: null,
            date: null
        }
    },
    beforeRouteEnter (to, from, next) {
        db.collection('users').where('employee.id', '==', to.params.employee_id).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.id = doc.data().id
                    vm.fname = doc.data().fname
                    vm.lname = doc.data().lname
                    vm.email = doc.data().email
                    vm.gender = doc.data().gender
                    vm.date = doc.data().date
                })
            })
        })
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData () {
            db.collection('users').where('employee.id','==',this.$route.params.employee_id)
            .get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.id = doc.data().id
                    this.fname = doc.data().fname
                    this.lname = doc.data().lname
                    this.email = doc.data().email
                    this.gender = doc.data().gender
                    this.date = doc.data().date
                })
            })
        }
    }
}
</script>
