import Message from '../message/MessageComponent';

export default {
    name: "Dashboard",
    components: {
        Message,
    },

    data() {
        return {
            users: null,
            user_id: null,
            status: [],
            msg: "",
            selected: null,
            search: ''
        }
    },

    computed: {
        // async  filteredUsers() {
        //     let valor = [];
        //     valor = this.users.filter((user) => {
        //         return (
        //             user.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
        //             user.email.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        //         );
        //     });
            
        //     return valor;
        // }
    },

    methods: {
        async getUsers() {
            const req = await fetch("http://localhost:3000/users");  //requisição para o fake api que contém dados de um json
            const data = await req.json(); // espera a requisição e espera transformar em json
    
            this.users = data;

            this.getStatus();
        },

        async getStatus() {
            const req = await fetch("http://localhost:3000/status");  //requisição para o fake api que contém dados de um json
            const data = await req.json();

            this.status = data;
            console.log(this.status, "aqui");
        },

        async deleteUser(id) {
            const req = await fetch(`http://localhost:3000/users/${id}`, {
                method: "DELETE"
            });

            const res = await req.json();
            
            this.msg = "Seu cadastro foi removido com sucesso!";
            setTimeout(() => this.msg = "", 5000);
            
            this.getUsers(); 
        },

        cleanFilter() {
            this.selected =  null,
            this.search = ''
        },

        async updateUser(event, id) {
            const option = event.target.value;
            const dataJson = JSON.stringify({status: option});

            const req = await fetch(`http://localhost:3000/users/${id}`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: dataJson
            });

            const res = await req.json();
            console.log(res);

            this.getUsers();
        }
    },
    

    mounted() {
        this.getUsers();
    },
}