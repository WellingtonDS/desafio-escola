<template>
    <div id="list-table">
        <Message :msg="msg" v-show="msg"/>
        <div id="form-groups">
            <div class="form-group">
              <label for="">Buscar aluno ou turma:</label>
              <input type="text" id="#form-select"
                 placeholder="Nome ou turma" v-model="search" maxlength="75">
            </div>
            <div class="form-group">
              <label for="">Status</label>
              <select name="Status" v-model="selected" id="form-select">
              </select>
            </div>
            <div>
                <button class="clean-btn" @click="cleanFilter()">Limpar filtro</button>
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
                   <select name="status" class="status" @change="updateUser($event, user.id)">
                    <!-- <option value="">Selecione</option> -->
                    <option :value="s.tipo" v-for="s in status" :key="s.id" :selected="user.status == s.tipo">
                        {{s.tipo}}
                    </option>
                   </select>
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