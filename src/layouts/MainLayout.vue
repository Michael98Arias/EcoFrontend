<template>
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lFf">
      <q-header elevated style="background-color: #f1f2ec; height: 77px;">
        <q-toolbar>
          <q-toolbar-title class="text-blue-10" style="font-family: 'Roboto Slab', serif;"></q-toolbar-title>
          <q-btn-group flat class="q-my-lg">
            <q-btn flat color="secondary" :label="$t('layout.mainLayout.header.home')" stack icon="home" to="/Home" />
            <q-btn flat class="q-mx-lg" color="secondary" :label="$t('layout.mainLayout.header.shop')" stack
              icon="shopping_cart" to="/Shop" />
            <q-btn flat color="secondary" :label="$t('layout.mainLayout.header.about')" stack icon="groups"
              to="/About" />
          </q-btn-group>
          <q-space></q-space>
          
          <div class="q-mr-lg">
            <q-btn flat :icon="icon" @click="toggleDarkMode" color="secondary"/>
            <q-btn flat color="secondary" icon="person" to="/Login" />
            <q-btn class="q-ml-xl" flat color="secondary" icon="translate" style="float:left;">
              <q-menu auto-close>
                <q-list style="min-width: 100px">
                  <q-item clickable v-for="lang in dataHomePage.languages" :key="lang.code"
                    @click="changeLanguage(lang.code)">
                    <q-item-section>{{ lang.name }}</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <router-view />
      </q-page-container>
      <q-separator></q-separator>
      <div>
        footer
      </div>
    </q-layout>

  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue';
import { useI18n } from "vue-i18n";
import logoDec from '/photos/initial/logoDec.jpg'
import eCommerce from '/icons/e-commerce.png'
import { useQuasar } from 'quasar'

defineOptions({
  name: 'MainLayout'
});
const $q = useQuasar()
const isDarkMode = ref($q.dark.isActive)
const icon = computed(() => (isDarkMode.value ? 'light_mode' : 'dark_mode'))
const toggleDarkMode = () => {
  $q.dark.toggle()
  isDarkMode.value = $q.dark.isActive
}
const dataHomePage = reactive({
  languages: [
    { code: 'en-US', name: 'English' },
    { code: 'es', name: 'Spanish' },
  ],
  showMenu: false
})
const t = useI18n();
const changeLanguage = (langCode: string) => {
  t.locale.value = langCode;
  dataHomePage.showMenu = false;
};

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
