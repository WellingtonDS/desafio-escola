export default {
    name: "Search",
    data() {
        return {
            search: "",
            selected: null,
            options: [
                {
                    value: null,
                    text: "Selecione um status"
                },
                {
                    value: true,
                    text: "Ativo"
                },
                {
                    value: false,
                    text: "Inativo"
                }
            ]
        }
    },
    methods: {
        async limparFiltro() {
            this.search = "";
            this.selected = null;
        }
    },

    mounted() {
        this.limparFiltro();
        console.log("aqui", this.limparFiltro());
    },
}   