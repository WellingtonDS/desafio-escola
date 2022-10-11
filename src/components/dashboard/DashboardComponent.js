import Message from '../message/MessageComponent';

export default {
    name: "Dashboard",
    components: {
        Message
    },

    data() {
        return {
            users: null,
            user_id: null,
            status: [],
            msg: null
        }
    },

    methods: {
        async getUsers() {
            const req = await fetch("http://localhost:3000/users");  //requisição para o fake api que contém dados de um json
            const data = await req.json(); // espera a requisição e espera transformar em json
    
            this.users = data;

            // this.getStatus();
            //resgatar o status
        },

        // async getStatus() {
        //     const req = await fetch("http://localhost:3000/status");  //requisição para o fake api que contém dados de um json
        //     const data = await req.json();
        // },

        async deleteUser(id) {
            const req = await fetch(`http://localhost:3000/users/${id}`, {
                method: "DELETE"
            });

            const res = await req.json();
            
            this.msg = "Seu cadastro foi removido com sucesso!";
            setTimeout(() => this.msg = "", 5000);
            
            //metodo para forcar a atualizacao do sistema apos o delete
            this.getUsers(); 
        },

        async updateUser(event, id) {
            const edit = event.target.value;
            const dataJson = JSON.stringify({users: user});

            const req = await fetch(`http://localhost:3000/users/${id}`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: dataJson
            });

            const res = await req.json();
            console.log(res);
        }
    },
    

    mounted() {
        this.getUsers();
    },
}