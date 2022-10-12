import Message from '../message/MessageComponent';
import { required, minLength } from 'vuelidate/lib/validators'

export default {
    name: "form",
    components: {
        Message
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
            errors: []
        }
    },

    validations: {
        name: {
          required,
          minLength: minLength(4)
        }
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
            
            const data = {
                name: this.name,
                email: this.email,
                photo: this.photo,
                turma: this.turma,
                status: this.status
            }

            const dataJson = JSON.stringify(data); //transformando texto em formato json

            const req = await fetch("Http://localhost:3000/users", {            // metodo para enviar dados via post para arquivo json.
                method: "POST", 
                headers: {"Content-Type": "application/json"},
                body: dataJson
            });

            const res = await req.json();

            this.msg = `${res.name}, cadastro realizado com sucesso!`;


            setTimeout(() => this.msg = "", 3000);

            //limpar campos
            this.name = "";
            this.email = "";
            this.photo = "";
            this.turma = "";
            
        }    
    },

    mounted() {
        setTimeout(() => {
            this.getData() //atraso no carregamento de requisicao do json em 500ms
         }, 500);
    },
}