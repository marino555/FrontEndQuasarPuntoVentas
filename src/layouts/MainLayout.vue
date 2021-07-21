<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="drawer = !drawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="240" :breakpoint="400">
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item clickable v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="home"></q-icon>
            </q-item-section>

            <q-item-section> Home </q-item-section>
          </q-item>

          <q-expansion-item expand-separator :content-inset-level="0.2" icon="store" label="Almacen">
            <q-item clickable v-ripple to="/categorias">
              <q-item-section> Categorias</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/articulos">
              <q-item-section> Articulos </q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item expand-separator :content-inset-level="0.2" icon="shopping_basket" label="Compra">
            <q-item clickable v-ripple>
              <q-item-section> Ingresos </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section> Proveedores </q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item expand-separator :content-inset-level="0.2" icon="shopping_cart" label="Ventas">
            <q-item clickable v-ripple>
              <q-item-section> Ventas </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section> Clientes </q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item expand-separator :content-inset-level="0.2" icon="people_alt" label="Accesos">
            <q-item clickable v-ripple>
              <q-item-section> Usuarios </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section> Roles a configurar </q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item expand-separator :content-inset-level="0.2" icon="leaderboard" label="Consulta">
            <q-item clickable v-ripple>
              <q-item-section> Consulta Compras </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section> Consulta Ventas </q-item-section>
            </q-item>
          </q-expansion-item>




        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      drawer: ref(false),
    };
  },
};
</script>