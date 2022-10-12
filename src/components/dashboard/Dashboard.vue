<template>
    <div id="list-table">
        <Message :msg="msg" v-show="msg"/> 
        <div id="form-groups">
            <div class="form-group">
              <label for="">Buscar aluno ou turma:</label>
              <input type="text" id="#form-select"
                class="form-control" placeholder="Nome ou turma" v-model="search" maxlength="75">
              <!-- <small id="helpId" class="form-text text-muted">{{search}}</small> -->
            </div>
            <div class="form-group">
              <label for="">Status</label>
              <select class="form-control" name="Status" v-model="selected" :options="options" id="form-select">
              </select>
            </div>
            <div class="btn">
                <button class="delete-btn" @click="cleanFilter()">Limpar filtro</button>
            </div>
        </div>
        <div>
            <div id="list-table-hedading">
                <div>Nome</div>
                <div>E-mail</div>
                <div>Turma</div>
                <div>Status</div>
                <div>ações</div>
            </div>
        </div>
        <div id="list-table-rows">
            <div class="list-table-row" v-for="user in users" :key="user.id">
               <div> {{ user.name }} </div>
               <div> {{ user.email }} </div>
               <div> {{ user.turma.label }} </div>
               <div> {{user.status}} </div>
               <div class="btn">
                   <button class="edit-btn" @click="updateUser(user.id)">Editar</button>
                   <button class="save-btn">Salvar</button>
                   <button class="delete-btn" @click="deleteUser(user.id)">Deletar</button>
               </div>
               
            </div>
        </div>
    </div>
</template>

<script lang="js">
require("../message/Message.vue");

import DashboardComponent from './DashboardComponent';
export default DashboardComponent;
</script>

<style lang="scss" scoped>
@import './Dashboard.scss';
</style>