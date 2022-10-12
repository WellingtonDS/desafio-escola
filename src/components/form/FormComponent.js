import { useVuelidate } from '@vuelidate/core'
import { required, minLength , email } from '@vuelidate/validators'
import Message from '../message/MessageComponent';

export default {
    name: "form",
    components: {
        Message
    },

    setup () {
        return { v$: useVuelidate() }
    },

    data() {
        return {
            maxLength: 100,
            classes: null,
            name: null,
            turma: null,
            photo: null,
            status: "Ativo",
            email: '',
            msg: "",
            error: []
        }
    },

    validations: {
        name: {
          required,
          minLength: minLength(5),
        },
        email: { required, email},
        turma: {required}
      },

    methods: {
        async getData() {
            let currentDate = new Date(); //variável recebe a data atual 
            let hour = currentDate.toLocaleTimeString();

            const req = await fetch("http://localhost:3000/data");  //requisição para o fake api que contém dados de um json
            const data = await req.json(); // espera a requisição e espera transformar em json para obter dados
            
            this.turmas = data.turmas;
            return hour;
        },

        async createUser(e) {

            e.preventDefault();

            this.v$.$validate();
            if(!this.v$.$error) {
                const data = {
                    name: this.name,
                    email: this.email,
                    photo: this.photo,
                    turma: this.turma,
                    status: "Ativo"
                }

                const dataJson = JSON.stringify(data); 
    
                const req = await fetch("Http://localhost:3000/users", {
                    method: "POST", 
                    headers: {"Content-Type": "application/json"},
                    body: dataJson
                });

                const res = await req.json();

                this.msg = `${res.name}, cadastro realizado com sucesso!`;

                this.name = "";
                this.email = "";
                this.photo = "";
                this.turma = "";
                    
                
            } else {
                
            }
            
            
            setTimeout(() => this.msg = "", 5000);
            
        }    
    },

    mounted() {
        setTimeout(() => {
            this.getData() //atraso no carregamento de requisicao do json em 500ms
         }, 500);
    },
}