<template>
<div>
    <Message :msg="msg" v-show="msg"/>
    <div>
        <form id="form-data" @submit="createUser">
            <div class="input-container">
                <label for="name">Nome Completo</label>
                <input type="text" id="name" name="name" v-model="name" aria-placeholder="Digite seu nome">
            </div>
            <div class="input-container">
                <label for="turma">Escolha uma turma</label>
                <select name="turma" id="turma" v-model="turma">
                    <option value="">Selecione sua turma</option>
                    <option v-for="turma in turmas" :key="turma.id" :value="turma"
                    >
                        {{ turma }}
                    </option>
                </select>
            </div>
            <div class="input-container">
                <label for="email">E-mail</label>
                <input type="email" id="email" name="email" v-model="email" aria-placeholder="Digite seu e-mail">
            </div>
            <div class="input-container">
                <label for="file">Envie uma foto</label>
                <input type="file" name="arquivos" class="btn btn-success"  accept="image/png, image/jpeg"  multiple /> 
            </div>
            <div class="input-container">
                <input type="submit" class="submit-btn" value="Criar cadastro">
            </div>
        </form>
    </div>
</div>

</template>

<script lang="js">

require("../message/Message.vue");

import FormComponent from './FormComponent';
export default FormComponent 
</script>

<style lang="scss">
@import './Form.scss';
</style>