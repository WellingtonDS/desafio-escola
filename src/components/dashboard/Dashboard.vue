<template>
    <div id="list-table">
        <div>
            <div id="list-table-hedading">
                <div class="order-id">#</div>
                <div>Nome</div>
                <div>E-mail</div>
                <div>Turma</div>
                <div>Status</div>
                <div>ações</div>
            </div>
        </div>
        <div id="list-table-rows">
            <div class="list-table-row" v-for="user in users" :key="user.id">
               <div class="order-number"> {{ user.id }} </div> 
               <div> {{ user.name }} </div>
               <div> {{ user.email }} </div>
               <div> {{ user.turma }} </div>
               <div> {{user.status}} </div>
               <div class="btn">
                   <button class="edit-btn">Editar</button>
                   <button class="save-btn">Salvar</button>
                   <button class="delete-btn" @click="deleteUser(user.id)">Deletar</button>
               </div>
               
            </div>
        </div>
    </div>
</template>

<script lang="js">
import DashboardComponent from './DashboardComponent';
export default DashboardComponent;
</script>

<style lang="scss" scoped>
@import './Dashboard.scss';
</style>