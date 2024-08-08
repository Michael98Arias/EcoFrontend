<template>
    <q-page class="fullscreen-page">
        <q-card class="centered-card q-mx-lg">
            <q-card-section>
                <q-tabs v-model="dataLoginPage.tab" class="text-teal">
                    <q-tab name="login" icon="login" :label="$t('layout.mainLayout.loginPage.titles.logIn')" />
                    <q-tab name="create" icon="description"
                        :label="$t('layout.mainLayout.loginPage.titles.createAccount')" />
                </q-tabs>
                <q-separator />
                <q-tab-panels v-model="dataLoginPage.tab" style="width: 372px;" @transition="clearFields">
                    <q-tab-panel name="login">
                        <q-card>
                            <q-separator></q-separator>
                            <q-card-section class="q-pt-none">
                                <q-form class="q-gutter-xs">

                                    <q-input class="q-mt-lg" color="secondary" filled
                                        v-model="dataLoginPage.formLoginData.username"
                                        :label="$t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.username')"
                                        :rules="[val => !!val && val.length || $t('globalMessages.required'), val => val.length >= 2 || $t('globalMessages.minLengthRule', { min: 2 }), val => val.length <= 50 || $t('globalMessages.maxLengthRule', { max: 50 })]" />

                                    <q-input color="secondary" filled v-model="dataLoginPage.formLoginData.password"
                                        :type="dataLoginPage.showPassword ? 'text' : 'password'"
                                        :label="$t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.password')"
                                        :rules="[val => !!val || $t('globalMessages.required'), val => val.length >= 8 || $t('globalMessages.minLengthRule', { min: 8 }), val => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(val) || $t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.passwordRule')]">
                                        <template v-slot:append>
                                            <q-icon :name="dataLoginPage.showPassword ? 'visibility' : 'visibility_off'"
                                                class="cursor-pointer" @click="togglePasswordVisibility" />
                                        </template>
                                    </q-input>
                                </q-form>
                            </q-card-section>
                            <q-card-actions align="center">
                                <q-btn color="secondary" :label="$t('layout.mainLayout.loginPage.titles.logIn')"
                                    :disabled="!isFormValidLogin" @click="loginPage">
                                </q-btn>
                            </q-card-actions>
                        </q-card>
                    </q-tab-panel>
                </q-tab-panels>
                <q-tab-panels v-model="dataLoginPage.tab" style="width: 372px;" @transition="clearFields">
                    <q-tab-panel name="create">
                        <q-card>
                            <q-separator></q-separator>
                            <q-card-section class="q-pt-none">
                                <q-form class="q-gutter-xs">
                                    <q-input class="q-mt-lg" color="secondary" filled
                                        v-model="dataLoginPage.formLoginData.name"
                                        :label="$t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.name')"
                                        :hint="$t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.hintName')"
                                        :rules="[val => !!val && val.length || $t('globalMessages.required'), val => val.length >= 5 || $t('globalMessages.minLengthRule', { min: 5 }), val => val.length <= 80 || $t('globalMessages.maxLengthRule', { max: 80 })]" />

                                    <q-input class="q-mt-lg" color="secondary" filled
                                        v-model="dataLoginPage.formLoginData.username"
                                        :label="$t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.username')"
                                        :rules="[val => !!val && val.length || $t('globalMessages.required'), val => val.length >= 2 || $t('globalMessages.minLengthRule', { min: 2 }), val => val.length <= 50 || $t('globalMessages.maxLengthRule', { max: 50 })]" />

                                    <q-input color="secondary" filled v-model="dataLoginPage.formLoginData.email"
                                        :label="$t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.email')"
                                        :rules="[val => !!val || $t('globalMessages.required'), val => /.+@.+\..+/.test(val) || $t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.emailRule')]" />

                                    <q-input color="secondary" filled v-model="dataLoginPage.formLoginData.password"
                                        :type="dataLoginPage.showPassword ? 'text' : 'password'"
                                        :label="$t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.password')"
                                        :rules="[val => !!val || $t('globalMessages.required'), val => val.length >= 8 || $t('globalMessages.minLengthRule', { min: 8 }), val => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(val) || $t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.passwordRule')]">

                                        <template v-slot:append>
                                            <q-icon :name="dataLoginPage.showPassword ? 'visibility' : 'visibility_off'"
                                                class="cursor-pointer" @click="togglePasswordVisibility" />
                                        </template>
                                    </q-input>
                                    <div v-if="!dataLoginPage.formLoginData.userType"
                                        style="color: red; font-size: 0.875rem;">
                                        {{ $t('layout.mainLayout.loginPage.titles.userType') }}</div>
                                    <q-option-group v-model="dataLoginPage.formLoginData.userType"
                                        :options="dataLoginPage.options" color="secondary"/>
                                </q-form>
                            </q-card-section>
                            <q-card-actions align="center">
                                <q-btn color="secondary" :label="$t('layout.mainLayout.loginPage.titles.createAccount')"
                                    :disabled="!isFormValidCreate" @click="registerPage">
                                </q-btn>
                            </q-card-actions>
                        </q-card>
                    </q-tab-panel>
                </q-tab-panels>
            </q-card-section>
        </q-card>
        <q-img style="height: 400px; max-width: 600px" src="https://static.vecteezy.com/system/resources/previews/005/879/539/large_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg">
        </q-img>
    </q-page>
</template>

<script setup lang="ts">



import { ref, reactive, computed, onMounted } from 'vue';
import { useAuthStore } from '../../../stores/data-store';
import { useQuasar } from 'quasar';
import { onBeforeUnmount } from 'vue';
import { useI18n } from "vue-i18n";
import LoginApi from './LoginApi'
import { UserSendModelLogin, UserSendModelRegister } from './interfaces/Login'
import HttpService from '../../../shared/services/HttpService';
import { useRouter } from 'vue-router';

defineOptions({
    name: 'Login'
});
onMounted(() => {
    if (authState.value.isAuthenticated && (authState.value.userRole === 'ADMIN' || authState.value.userRole === 'SELLER')) {
        router.push('/Dashboard');
    } else if (authState.value.isAuthenticated) {
        router.push('/HOME');
    }
});
const router = useRouter();
const { t } = useI18n()
const dataLoginPage = reactive({
    $q: useQuasar(),
    tab: 'login',
    showPassword: false,
    formLoginData: {
        name: '',
        username: '',
        email: '',
        password: '',
        userType: ''
    },
    options: [
        {
            label: t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.cards.seller.title'),
            value: 'SELLER'
        },
        {
            label: t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.cards.customer.title'),
            value: 'CUSTOMER'
        }
    ]
})
const authStore = useAuthStore();
const authState = computed(() => ({
  isAuthenticated: authStore.isAuthenticated,
  userRole: authStore.userRole,
  userId: authStore.userId,
}));
function clearFields() {
    dataLoginPage.formLoginData.name = '';
    dataLoginPage.formLoginData.email = '';
    dataLoginPage.formLoginData.password = '';
    dataLoginPage.formLoginData.userType = '';
};
clearFields()
const togglePasswordVisibility = () => {
    dataLoginPage.showPassword = !dataLoginPage.showPassword;
};
const isFormValidCreate = computed(() => {
    return (
        !!dataLoginPage.formLoginData.name && dataLoginPage.formLoginData.name.length >= 5 && dataLoginPage.formLoginData.name.length <= 80 &&
        !!dataLoginPage.formLoginData.username && dataLoginPage.formLoginData.username.length >= 2 && dataLoginPage.formLoginData.username.length <= 50 &&
        !!dataLoginPage.formLoginData.email && /.+@.+\..+/.test(dataLoginPage.formLoginData.email) &&
        !!dataLoginPage.formLoginData.password && dataLoginPage.formLoginData.password.length >= 8 &&
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(dataLoginPage.formLoginData.password) &&
        !!dataLoginPage.formLoginData.userType
    );
});
const isFormValidLogin = computed(() => {
    return (
        !!dataLoginPage.formLoginData.username && dataLoginPage.formLoginData.username.length >= 2 && dataLoginPage.formLoginData.username.length <= 50 &&
        !!dataLoginPage.formLoginData.password && dataLoginPage.formLoginData.password.length >= 8 &&
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(dataLoginPage.formLoginData.password)
    );
});
const loginPage = async () => {
    dataLoginPage.$q.loading.show({
        message: t('globalMessages.wait')
    })
    const dataSend = new UserSendModelLogin()
    dataSend.username = dataLoginPage.formLoginData.username
    dataSend.password = dataLoginPage.formLoginData.password
    try {
        const response = await LoginApi.login(dataSend)
        HttpService.accessToken = response.token
        if (response.id > 0) {
            if (response.role === 'ADMIN' || response.role === 'SELLER' ) {
                authStore.login(true, response.role, response.id);
                router.push('/Dashboard');
            } else {
                authStore.login(false, response.role, response.id);
                router.push('/Home');
            }
        }
        if (response.errorMessage !== '') {
            if (response.errorMessage === 'not_found') {
                dataLoginPage.$q.notify({
                    color: 'negative',
                    icon: 'report_problem',
                    message: t('globalMessages.errorNotFound'),
                    position: 'top-right',
                    actions: [{ label: 'OK', color: 'white', handler: () => { } }],
                    timeout: 5000
                });
            } else if (response.errorMessage === 'disabled'){
                dataLoginPage.$q.notify({
                    color: 'negative',
                    icon: 'report_problem',
                    message: t('globalMessages.errorDisabled'),
                    position: 'top-right',
                    actions: [{ label: 'OK', color: 'white', handler: () => { } }],
                    timeout: 5000
                });
            }
            
        }
    } catch (e: any) {
        if (e.statusCode !== 200) {
            dataLoginPage.$q.loading.hide()
            console.log('error', e.statusCode)
        }
    } finally {
        dataLoginPage.$q.loading.hide()
    }
}
const registerPage = async () => {
    dataLoginPage.$q.loading.show({
        message: t('globalMessages.wait')
    })
    const dataSend = new UserSendModelRegister()

    dataSend.fullname = dataLoginPage.formLoginData.name
    dataSend.username = dataLoginPage.formLoginData.username
    dataSend.email = dataLoginPage.formLoginData.email
    dataSend.password = dataLoginPage.formLoginData.password
    dataSend.role = dataLoginPage.formLoginData.userType
    try {
        const response = await LoginApi.register(dataSend)
        HttpService.accessToken = response.token
        if (response.id > 0) {
            if (response.role === 'SELLER' ) {
                authStore.login(true, response.role, response.id);
                router.push('/Dashboard');
            } else {
                authStore.login(false, response.role, response.id);
                router.push('/Home');
            }
        }
    } catch (e: any) {
        if (e.statusCode !== 200) {
            dataLoginPage.$q.loading.hide()
            console.log('error', e.statusCode)
        }
    } finally {
        dataLoginPage.$q.loading.hide()
    }
}


</script>

<style lang="scss">
.custom-caption {
    text-align: center;
    color: white;
    background-color: rgba(0, 0, 0, .3);
}

.fullscreen-page {
    display: flex;
    justify-content: center;
    align-items: center;
}

.centered-card {
    width: 70%;
    max-width: 400px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>