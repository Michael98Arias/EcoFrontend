<template>
    <div class="q-pa-lg no-borders " style="height: 100vh;">
        <q-layout view="hHh Lpr lff " container class="shadow-1 no-borders">
            <q-header class="bg-secondary text-primary" fixed-top style="right: 8px; border-radius: 3px;" elevated>
                <q-toolbar>
                    <q-btn flat text-color="grey-3" icon="menu" aria-label="Menu" @click.capture="drawerClick" />
                    <q-space></q-space>
                    <q-btn class="q-ml-xl" flat color="grey-3" icon="translate" style="float:left;">
                        <q-menu auto-close>
                            <q-list style="min-width: 100px">
                                <q-item clickable v-for="lang in languages" :key="lang.code"
                                    @click="changeLanguage(lang.code)">
                                    <q-item-section>{{ lang.name }}</q-item-section>
                                </q-item>
                            </q-list>
                        </q-menu>
                    </q-btn>
                    <q-btn flat :icon="icon" @click="toggleDarkMode" color="white"/>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/img/avatar.png">
                        <q-menu auto-close>
                            <q-list style="min-width: 100px">
                                <q-item clickable v-ripple @click="logOut">
                                    <q-item-section>
                                        <q-item-label>{{ $t('buttons.logOut') }}</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-menu>
                    </q-avatar>
                    
                </q-toolbar>
            </q-header>
            <q-drawer v-model="drawer" show-if-above :mini="!drawer || miniState" @mouseover="miniState = false"
                @mouseout="miniState = true" :width="220" bordered class="  q-pxy-sm">
                <q-toolbar row no-wrap items-center cursor-pointer ellipsis style="margin-top: 15px;">
                    <img :src="dashIcon">
                    <q-toolbar-title class="text-weight-medium" style=" font-size: 1.4rem; letter-spacing: -0.5px;">
                        {{ $t('layout.mainLayoutUsers.sideBar.title') }}
                    </q-toolbar-title>
                </q-toolbar>

                <q-list padding>
                    <q-item clickable v-ripple to="/Analysis" active-class="side-bar-link">
                        <q-item-section avatar>
                            <q-icon name="bar_chart"></q-icon>
                        </q-item-section>
                        <q-item-section>
                            {{ $t('layout.mainLayoutUsers.sideBar.options.analysis.title') }}
                        </q-item-section>
                    </q-item>

                    <q-item v-if="authState.userRole === 'ADMIN'" clickable v-ripple to="/Users"
                        active-class="side-bar-link">
                        <q-item-section avatar>
                            <q-icon name="group"></q-icon>
                        </q-item-section>
                        <q-item-section>
                            {{ $t('layout.mainLayoutUsers.sideBar.options.users.title') }}
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple to="/Products" active-class="side-bar-link">
                        <q-item-section avatar>
                            <q-icon name="inventory_2"></q-icon>
                        </q-item-section>
                        <q-item-section>
                            {{ $t('layout.mainLayoutUsers.sideBar.options.products.title') }}
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple to="/Sales" active-class="side-bar-link">
                        <q-item-section avatar>
                            <q-icon name="attach_money"></q-icon>
                        </q-item-section>
                        <q-item-section>
                            {{ $t('layout.mainLayoutUsers.sideBar.options.sales.title') }}
                        </q-item-section>
                    </q-item>

                    <q-item v-if="authState.userRole === 'ADMIN'" clickable v-ripple to="/Marketing"
                        active-class="side-bar-link">
                        <q-item-section avatar>
                            <q-icon name="add_business"></q-icon>
                        </q-item-section>
                        <q-item-section>
                            {{ $t('layout.mainLayoutUsers.sideBar.options.marketing.title') }}
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple to="/Reports" active-class="side-bar-link">
                        <q-item-section avatar>
                            <q-icon name="description"></q-icon>
                        </q-item-section>
                        <q-item-section>
                            {{ $t('layout.mainLayoutUsers.sideBar.options.reports.title') }}
                        </q-item-section>
                    </q-item>
                </q-list>


            </q-drawer>
            <q-page-container>
                <router-view />
            </q-page-container>
        </q-layout>

    </div>
</template>

<script setup lang="ts">

import { ref, computed } from 'vue';
import dashIcon from '/icons/dash.png'
import { useI18n } from "vue-i18n";
import { useAuthStore } from '../stores/data-store';
import HttpService from 'src/shared/services/HttpService';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

defineOptions({
    name: 'Dashboard'
});
const $q = useQuasar()
const isDarkMode = ref($q.dark.isActive)
const icon = computed(() => (isDarkMode.value ? 'light_mode' : 'dark_mode'))
const toggleDarkMode = () => {
  $q.dark.toggle()
  isDarkMode.value = $q.dark.isActive
}
const showMenu = ref(false);
const router = useRouter();
const authStore = useAuthStore();
const authState = computed(() => ({
    isAuthenticated: authStore.isAuthenticated,
    userRole: authStore.userRole,
    userId: authStore.userId,
}));
const languages = [
    { code: 'en-US', name: 'English' },
    { code: 'es', name: 'Spanish' },
];
const t = useI18n();
const logOut = async () => {
    HttpService.accessToken = ''
    authStore.logout();
    router.push('/Home');
}
const changeLanguage = (langCode: string) => {
    t.locale.value = langCode;
    showMenu.value = false;
};
const drawer = ref(false);
const miniState = ref(false);
function drawerClick(e: Event) {
    if (miniState.value) {
        miniState.value = false
        e.stopPropagation()
    }
    else {
        miniState.value = true
        e.stopPropagation()
    }
}
</script>
<style lang="scss">
.side-bar-link {
    color: white;
    background: #26A69A;
}
</style>