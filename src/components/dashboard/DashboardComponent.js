export default {
    name: "Dashboard",
    data() {
        return {
            users: null,
            user_id: null,
            status: []
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
            //msg
            
            //metodo para forcar a atualizacao do sistema apos o delete
            this.getUsers(); 

        }
    },
    

    mounted() {
        this.getUsers();
    },
}