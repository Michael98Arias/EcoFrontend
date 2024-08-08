<template>
    <q-page class="row items-center justify-evenly" style="min-height: 415px;">
        <div class="q-ma-lg q-pt-md">
            <div class="row q-col-gutter-lg">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-card class="my-card text-secondary">
                        <q-card-section>

                            <div class="title" flex-center>
                                {{ $t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.cards.admin.titles') }}
                            </div>
                            <div class="row q-col-gutter-lg">
                                <div class="number text-grey-6 col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                    <span>{{ dataUserPage.dataRoleCount.admin }}</span>
                                    <div class="subtitle text-grey-6">{{
                                    $t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.cards.overall') }}
                                        {{
                                    $t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.cards.admin.titles')
                                }}</div>
                                </div>
                                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                    <q-icon class="icon" name="admin_panel_settings"
                                        :color="dataUserPage.selectedButton === 'ADMIN' ? 'secondary' : 'grey-6'" />
                                </div>
                            </div>
                        </q-card-section>
                        <q-card-actions vertical>
                            <q-btn flat @click="listByRole('ADMIN')">{{
                                    $t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.cards.admin.buttonAction') }}
                            </q-btn>
                        </q-card-actions>
                    </q-card>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-card class="my-card text-secondary">
                        <q-card-section>
                            <div class="title" flex-center>
                                {{ $t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.cards.seller.titles') }}
                            </div>
                            <div class="row q-col-gutter-lg">
                                <div class="number text-grey-6 col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                    <span>{{ dataUserPage.dataRoleCount.seller }}</span>
                                    <div class="subtitle text-grey-6">{{
                                    $t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.cards.overall') }}
                                        {{
                                    $t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.cards.seller.titles')
                                }}</div>
                                </div>
                                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                    <q-icon class="icon" name="shopping_basket"
                                        :color="dataUserPage.selectedButton === 'SELLER' ? 'secondary' : 'grey-6'" />
                                </div>
                            </div>
                        </q-card-section>
                        <q-card-actions vertical>
                            <q-btn flat @click="listByRole('SELLER')">{{
                                    $t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.cards.seller.buttonAction')
                                }} </q-btn>
                        </q-card-actions>
                    </q-card>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-card class="my-card text-secondary">
                        <q-card-section>
                            <div class="title" flex-center>
                                {{ $t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.cards.customer.titles') }}
                            </div>
                            <div class="row q-col-gutter-lg">
                                <div class="number text-grey-6 col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                    <span>{{ dataUserPage.dataRoleCount.customer }}</span>
                                    <div class="subtitle text-grey-6">{{
                                    $t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.cards.overall') }}
                                        {{
                                    $t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.cards.customer.titles')
                                }}
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                    <q-icon class="icon" name="account_circle"
                                        :color="dataUserPage.selectedButton === 'CUSTOMER' ? 'secondary' : 'grey-6'" />
                                </div>
                            </div>
                        </q-card-section>
                        <q-card-actions vertical>
                            <q-btn flat @click="listByRole('CUSTOMER')">{{
                                    $t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.cards.customer.buttonAction')
                                }} </q-btn>
                        </q-card-actions>
                    </q-card>
                </div>

                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-my-md">
                    <q-card class="my-card  text-white">
                        <div class="row q-col-gutter-lg ">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-ml-md">
                                <div class="title text-secondary" flex-center>
                                    {{
                                        dataUserPage.selectedButton === 'ADMIN'
                                            ? $t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.cards.admin.titles')
                                            : dataUserPage.selectedButton === 'SELLER'
                                                ? $t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.cards.seller.titles')
                                                : $t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.cards.customer.titles')
                                    }}
                                </div>
                            </div>
                        </div>
                        <q-separator class="q-my-md"></q-separator>
                        <div v-if="dataUserPage.skeletonTable">
                            <q-markup-table>
                                <thead>
                                    <tr>
                                        <th class="text-left" style="width: 150px">
                                            <q-skeleton animation="blink" type="text" />
                                        </th>
                                        <th class="text-right">
                                            <q-skeleton animation="blink" type="text" />
                                        </th>
                                        <th class="text-right">
                                            <q-skeleton animation="blink" type="text" />
                                        </th>
                                        <th class="text-right">
                                            <q-skeleton animation="blink" type="text" />
                                        </th>
                                        <th class="text-right">
                                            <q-skeleton animation="blink" type="text" />
                                        </th>
                                        <th class="text-right">
                                            <q-skeleton animation="blink" type="text" />
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr v-for="n in 5" :key="n">
                                        <td class="text-left">
                                            <q-skeleton animation="blink" type="text" width="85px" />
                                        </td>
                                        <td class="text-right">
                                            <q-skeleton animation="blink" type="text" width="50px" />
                                        </td>
                                        <td class="text-right">
                                            <q-skeleton animation="blink" type="text" width="35px" />
                                        </td>
                                        <td class="text-right">
                                            <q-skeleton animation="blink" type="text" width="65px" />
                                        </td>
                                        <td class="text-right">
                                            <q-skeleton animation="blink" type="text" width="25px" />
                                        </td>
                                        <td class="text-right">
                                            <q-skeleton animation="blink" type="text" width="85px" />
                                        </td>
                                    </tr>
                                </tbody>
                            </q-markup-table>
                        </div>
                        <div v-else>
                            <q-table :rows="dataUserPage.rowsUser" :columns="columns" row-key="id" virtual-scroll
                                :filter="filter" :filter-method="customFilter">
                                <template v-slot:top>
                                    <q-toggle v-model="dataUserPage.filterToggle.active" val="active"
                                        :label="$t('buttons.toggle.active')" checked-icon="check"
                                        color="green" unchecked-icon="clear"/>
                                    <q-toggle v-model="dataUserPage.filterToggle.inactive" val="inactive"
                                        :label="$t('buttons.toggle.inactive')" checked-icon="clear"
                                        color="red" unchecked-icon="clear"/>
                                    <q-toggle v-model="showAll" val="showAll" :label="$t('buttons.toggle.showAll')" checked-icon="open_with"
                                    color="blue" unchecked-icon="clear" />
                                    <q-space></q-space>
                                    <q-input outlined debounce="400" color="secondary" v-model="dataUserPage.search">
                                        <template v-slot:append>
                                            <q-icon name="search" />
                                        </template>
                                    </q-input>
                                    <q-btn class="glossy q-mx-md" color="teal" :label="$t('buttons.create')"
                                        :icon="dataUserPage.selectedButton === 'ADMIN' ? 'admin_panel_settings' : dataUserPage.selectedButton === 'SELLER' ? 'shopping_basket' : 'account_circle'"
                                        @click="openDialog('', 'new')" />
                                    <q-btn dense icon="download" color="green" aria-label="DownloadFile"
                                        @mouseover="dataUserPage.showTooltip = true"
                                        @mouseleave="dataUserPage.showTooltip = false">
                                        <q-tooltip v-if="dataUserPage.showTooltip">{{ $t('buttons.downloadFile')
                                            }}</q-tooltip>
                                    </q-btn>
                                </template>
                                <template v-slot:body-cell-action="props">
                                    <q-td :props="props">
                                        <q-btn icon="edit" dense flat round color="amber"
                                            @click="openDialog(props.row, 'edit')"><q-tooltip anchor="center right"
                                                self="center left" :offset="[10, 10]">
                                                <strong>{{ $t('buttons.update') }}</strong>
                                            </q-tooltip></q-btn>
                                        <q-btn v-if="props.row.state === 'ACTIVE'" icon="person_remove" dense flat round
                                            color="red" @click="confirm(props.row, 'delete')"><q-tooltip
                                                anchor="center right" self="center left" :offset="[10, 10]">
                                                <strong>{{ $t('buttons.delete') }}</strong>
                                            </q-tooltip></q-btn>
                                        <q-btn v-if="props.row.state === 'INACTIVE'" icon="person_add" dense flat round
                                            color="green" @click="confirm(props.row, 'enable')"><q-tooltip
                                                anchor="center right" self="center left" :offset="[10, 10]">
                                                <strong>{{ $t('buttons.enable') }}</strong>
                                            </q-tooltip></q-btn>
                                    </q-td>

                                </template>
                            </q-table>
                        </div>
                        <q-card-section>
                        </q-card-section>
                    </q-card>
                </div>
                <q-dialog v-model="dataUserPage.formStatus" persistent position="top">
                    <q-card style="top: 150px">
                        <q-card-section class="q-py-md shadow-2 text-white bg-secondary">
                            <div class="title">
                                {{ dataUserPage.formChoice === 'new' ?
                                    $t('globalMessages.titleNew') :
                                    (dataUserPage.formChoice === 'edit' ?
                                        $t('globalMessages.titleUpdate') :
                                        undefined) }}
                                {{
                                    dataUserPage.selectedButton === 'ADMIN'
                                        ? $t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.cards.admin.title')
                                        : dataUserPage.selectedButton === 'SELLER'
                                            ? $t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.cards.seller.title')
                                            : $t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.cards.customer.title')
                                }}
                            </div>
                        </q-card-section>
                        <q-separator></q-separator>
                        <q-card-section class="q-pt-none">
                            <q-form class="q-gutter-xs">
                                <q-input class="q-mt-lg" color="secondary" filled
                                    v-model="dataUserPage.formCreateData.name"
                                    :label="$t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.name')"
                                    :hint="$t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.hintName')"
                                    :rules="[val => !!val && val.length || $t('globalMessages.required'), val => val.length >= 5 || $t('globalMessages.minLengthRule', { min: 5 }), val => val.length <= 80 || $t('globalMessages.maxLengthRule', { max: 80 })]" />

                                <q-input class="q-mt-lg" color="secondary" filled
                                    v-model="dataUserPage.formCreateData.username"
                                    :label="$t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.username')"
                                    :rules="[val => !!val && val.length || $t('globalMessages.required'), val => val.length >= 2 || $t('globalMessages.minLengthRule', { min: 2 }), val => val.length <= 50 || $t('globalMessages.maxLengthRule', { max: 50 })]" />

                                <q-input color="secondary" filled v-model="dataUserPage.formCreateData.email"
                                    :label="$t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.email')"
                                    :rules="[val => !!val || $t('globalMessages.required'), val => /.+@.+\..+/.test(val) || $t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.emailRule')]" />

                                <q-input v-if="dataUserPage.formChoice === 'new'" color="secondary" filled
                                    v-model="dataUserPage.formCreateData.password"
                                    :type="dataUserPage.showPassword ? 'text' : 'password'"
                                    :label="$t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.password')"
                                    :rules="[val => !!val || $t('globalMessages.required'), val => val.length >= 8 || $t('globalMessages.minLengthRule', { min: 8 }), val => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(val) || $t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.passwordRule')]">

                                    <template v-slot:append>
                                        <q-icon :name="dataUserPage.showPassword ? 'visibility' : 'visibility_off'"
                                            class="cursor-pointer" @click="togglePasswordVisibility" />
                                    </template>
                                </q-input>
                                <q-input v-else-if="dataUserPage.formChoice === 'edit'" color="secondary" filled
                                    v-model="dataUserPage.formCreateData.password"
                                    :type="dataUserPage.showPassword ? 'text' : 'password'"
                                    :label="$t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.updatePassword')"
                                    :rules="[val => !val || val.length >= 8 || $t('globalMessages.minLengthRule', { min: 8 }),
                                val => !val || /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(val) || $t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.passwordRule')]">
                                    <template v-slot:append>
                                        <q-icon :name="dataUserPage.showPassword ? 'visibility' : 'visibility_off'"
                                            class="cursor-pointer" @click="togglePasswordVisibility" />
                                    </template>
                                </q-input>
                            </q-form>
                        </q-card-section>
                        <q-card-actions align="right">
                            <q-btn v-if="dataUserPage.formChoice === 'new'" color="secondary"
                                :label="$t('buttons.create')" :disabled="!isFormValidCreate" @click="createUser">
                            </q-btn>
                            <q-btn v-else-if="dataUserPage.formChoice === 'edit'" color="secondary"
                                :label="$t('buttons.update')" :disabled="!isFormValidCreate" @click="editUser">
                            </q-btn>
                            <q-btn color="negative" :label="$t('buttons.cancel')"
                                @click="dataUserPage.formStatus = false">
                            </q-btn>
                        </q-card-actions>
                    </q-card>
                </q-dialog>
                <q-dialog v-model="dataUserPage.confirmation" persistent position="top">
                    <q-card class="bg-white" style=" max-width: 450px; top: 250px">
                        <q-card-section class="q-py-md shadow-2">
                            <div style="font-size: 25px" align="center">
                                <div style="font-family: fantasy; color: rgb(90, 90, 105);">
                                    {{ $t('globalMessages.confirm') }}
                                </div>
                                <q-icon :name="dataUserPage.confirmationChoice === 'delete' ? 'error' : 'warning'"
                                    :color="dataUserPage.confirmationChoice === 'delete' ? 'negative' : 'amber'"
                                    size="4em" />
                                <br>
                                <div style="font-family: fantasy; color: rgb(90, 90, 105);">
                                    {{ dataUserPage.confirmationChoice === 'delete' ? $t('globalMessages.delete')
                                    : $t('globalMessages.enable') }}
                                    {{ dataUserPage.dataChangeStatus.name }}
                                </div>
                            </div>
                        </q-card-section>
                        <q-card-actions align="center">
                            <q-btn color="green" @click="changeStatus()" :label="$t('buttons.accept')" />
                            <span class="q-pr-xs"></span>
                            <q-btn color="negative" @click="dataUserPage.confirmation = false"
                                :label="$t('buttons.cancel')" />
                        </q-card-actions>
                    </q-card>
                </q-dialog>
            </div>
        </div>
    </q-page>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue';
import { useAuthStore } from './../../../stores/data-store';
import { useQuasar } from 'quasar';
import { onBeforeUnmount } from 'vue';
import { useI18n } from "vue-i18n";
import { useRouter } from 'vue-router';

import UserApi from './UsersApi';
import { RoleSendModel, ListUserByRole, StatusSendModel } from './interfaces/Users';
import HttpService from '../../../shared/services/HttpService';
import { UserSendModelRegister } from 'src/components/MainLayout/Login/interfaces/Login';

defineOptions({
    name: 'Users'
});
onMounted(() => {
    roleCount()
    listByRole('ADMIN')

});
const router = useRouter();
export type SelectedButtonType = 'ADMIN' | 'SELLER' | 'CUSTOMER';
const { t } = useI18n()
const dataUserPage = reactive({
    $q: useQuasar(),
    formStatus: false,
    confirmation: false,
    confirmationChoice: '',
    showTooltip: false,
    formChoice: '',
    selectedButton: ref<SelectedButtonType>('ADMIN'),
    skeletonTable: false,
    filterToggle: {
        active: true,
        inactive: true,
    },
    timer: null as null | ReturnType<typeof setTimeout>,
    search: '',
    searchQuery: '',
    showPassword: false,
    dataRoleCount: { admin: 0, seller: 0, customer: 0 },
    rowsUser: [] as ListUserByRole[],
    temprowsUser: [] as ListUserByRole[],
    tempArray: [],
    dataChangeStatus: {
        name: '',
        id: 0,
        status: ''
    },
    formCreateData: {
        name: '',
        username: '',
        email: '',
        password: '',
        userType: '',
        id: 0
    },


})
const columns = [
    { name: 'fullname', required: true, label: t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.name'), align: 'left', field: 'fullname', sortable: true },
    { name: 'username', align: 'center', label: t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.username'), field: 'username', sortable: true },
    { name: 'email', align: 'center', label: t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.email'), field: 'email', sortable: true },
    { name: 'role', label: t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.role'), field: 'role', sortable: true },
    { name: 'state', label: t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.state'), field: 'state', sortable: true },
    { name: 'createdAt', label: t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.creationDate'), align: 'center', field: 'createdAt', sortable: true },
    {
        name: 'updatedAt', label: t('layout.mainLayoutUsers.sideBar.options.users.pageUsers.dialog.options.updateDate'), align: 'center', field: 'updatedAt', sortable: true,
        format: (value) => {
            if (value) {
                return value;
            } else {
                return '-/-';
            }
        }
    },
    {
        name: 'action',
        align: 'center',
        field: ''
    }
];
onBeforeUnmount(() => {
    if (dataUserPage.timer !== null) {
        clearTimeout(dataUserPage.timer)
        dataUserPage.$q.loading.hide()
    }
})
const roleCount = async () => {
    dataUserPage.$q.loading.show({
        message: t('globalMessages.wait')
    })
    try {
        const response = await UserApi.roleCount()
        dataUserPage.dataRoleCount.admin = response.ADMIN
        dataUserPage.dataRoleCount.seller = response.SELLER
        dataUserPage.dataRoleCount.customer = response.CUSTOMER

    } catch (e: any) {
        if (e.statusCode !== 200) {
            dataUserPage.$q.loading.hide()
            console.log('error', e.statusCode)
            dataUserPage.$q.notify({
                color: 'negative',
                icon: 'report_problem',
                message: t('globalMessages.errorApi'),
                position: 'top-right',
                actions: [{ label: 'OK', color: 'white', handler: () => { } }],
                timeout: 5000
            });
        }
    } finally {
        dataUserPage.$q.loading.hide()
    }
}
const listByRole = async (role: SelectedButtonType) => {
    dataUserPage.skeletonTable = true
    dataUserPage.selectedButton = role
    dataUserPage.$q.loading.show({
        message: t('globalMessages.wait')
    })
    dataUserPage.search = ''
    dataUserPage.filterToggle.active = true
    dataUserPage.filterToggle.inactive = true
    try {
        const roleModel = new RoleSendModel();
        roleModel.role = role;
        dataUserPage.rowsUser = []
        const response = await UserApi.listByRole(roleModel)
        dataUserPage.tempArray = response
        dataUserPage.tempArray.forEach(user => {
            dataUserPage.rowsUser.push(user);
        });
    } catch (e: any) {
        if (e.statusCode !== 200) {
            dataUserPage.$q.loading.hide()
            dataUserPage.skeletonTable = false
            console.log('error', e.statusCode)
            dataUserPage.$q.notify({
                color: 'negative',
                icon: 'report_problem',
                message: t('globalMessages.errorApi'),
                position: 'top-right',
                actions: [{ label: 'OK', color: 'white', handler: () => { } }],
                timeout: 5000
            });
        }
    } finally {
        dataUserPage.$q.loading.hide()
        dataUserPage.skeletonTable = false
    }
}
const changeStatus = async () => {
    dataUserPage.$q.loading.show({
        message: t('globalMessages.wait')
    })
    try {
        const dataSend = new StatusSendModel()
        dataSend.id = dataUserPage.dataChangeStatus.id
        dataSend.status = dataUserPage.dataChangeStatus.status
        const response = await UserApi.changeStatus(dataSend)
        listByRole(dataUserPage.selectedButton)
        dataUserPage.$q.notify({
            color: 'green',
            icon: 'check_circle',
            message: t('globalMessages.successfulChange'),
            position: 'top-right',
            actions: [{ label: 'OK', color: 'white', handler: () => { } }],
            timeout: 5000
        });
    } catch (e: any) {
        if (e.statusCode !== 200) {
            dataUserPage.$q.loading.hide()
            console.log('error', e.statusCode)
            dataUserPage.confirmation = false;
            dataUserPage.$q.notify({
                color: 'negative',
                icon: 'report_problem',
                message: t('globalMessages.errorApi'),
                position: 'top-right',
                actions: [{ label: 'OK', color: 'white', handler: () => { } }],
                timeout: 5000
            });
        }
    } finally {
        dataUserPage.$q.loading.hide()
        dataUserPage.confirmation = false;
    }

}
const createUser = async () => {
    dataUserPage.$q.loading.show({
        message: t('globalMessages.wait')
    })
    try {
        const dataSend = new UserSendModelRegister()
        dataSend.fullname = dataUserPage.formCreateData.name
        dataSend.username = dataUserPage.formCreateData.username
        dataSend.email = dataUserPage.formCreateData.email
        dataSend.password = dataUserPage.formCreateData.password
        dataSend.role = dataUserPage.formCreateData.userType
        await UserApi.createUser(dataSend)
        listByRole(dataUserPage.selectedButton)
        dataUserPage.$q.notify({
            color: 'green',
            icon: 'check_circle',
            message: t('globalMessages.successfulCreate'),
            position: 'top-right',
            actions: [{ label: 'OK', color: 'white', handler: () => { } }],
            timeout: 5000
        });
    } catch (e: any) {
        if (e.statusCode !== 200) {
            dataUserPage.$q.loading.hide()
            console.log('error', e.statusCode)
            dataUserPage.confirmation = false;
            dataUserPage.$q.notify({
                color: 'negative',
                icon: 'report_problem',
                message: t('globalMessages.errorApi'),
                position: 'top-right',
                actions: [{ label: 'OK', color: 'white', handler: () => { } }],
                timeout: 5000
            });
            dataUserPage.formStatus = false
        }
    } finally {
        dataUserPage.$q.loading.hide()
        dataUserPage.confirmation = false;
        dataUserPage.formStatus = false
    }

}
const editUser = async () => {
    dataUserPage.$q.loading.show({
        message: t('globalMessages.wait')
    })
    try {
        const dataSend = new UserSendModelRegister()
        dataSend.fullname = dataUserPage.formCreateData.name
        dataSend.username = dataUserPage.formCreateData.username
        dataSend.email = dataUserPage.formCreateData.email
        dataSend.password = dataUserPage.formCreateData.password
        dataSend.role = dataUserPage.formCreateData.userType
        await UserApi.editUser(dataUserPage.formCreateData.id, dataSend)
        listByRole(dataUserPage.selectedButton)
        dataUserPage.$q.notify({
            color: 'green',
            icon: 'check_circle',
            message: t('globalMessages.successfulChange'),
            position: 'top-right',
            actions: [{ label: 'OK', color: 'white', handler: () => { } }],
            timeout: 5000
        });
    } catch (e: any) {
        if (e.statusCode !== 200) {
            dataUserPage.$q.loading.hide()
            console.log('error', e.statusCode)
            dataUserPage.confirmation = false;
            dataUserPage.$q.notify({
                color: 'negative',
                icon: 'report_problem',
                message: t('globalMessages.errorApi'),
                position: 'top-right',
                actions: [{ label: 'OK', color: 'white', handler: () => { } }],
                timeout: 5000
            });
            dataUserPage.formStatus = false
        }
    } finally {
        dataUserPage.$q.loading.hide()
        dataUserPage.confirmation = false;
        dataUserPage.formStatus = false
    }

}
//Table filters
const showAll = computed({
    get() {
        return dataUserPage.filterToggle.active && dataUserPage.filterToggle.inactive;
    },
    set(newValue: boolean) {
        dataUserPage.filterToggle.active = newValue;
        dataUserPage.filterToggle.inactive = newValue;
    }
});

const filter = computed(() => ({
    search: dataUserPage.search,
    active: dataUserPage.filterToggle.active,
    inactive: dataUserPage.filterToggle.inactive,
}));
const customFilter = (rows: readonly any[], terms: any, cols?: readonly any[], getCellValue?: (col: any, row: any) => any) => {
    const lowerSearch = terms.search ? terms.search.toLowerCase() : "";

    return rows.filter((row: any) => {
        let ans = false;

        const c1 = terms.active && row.state === "ACTIVE";
        const c2 = terms.inactive && row.state === "INACTIVE";

        let s1 = true;
        if (lowerSearch !== "") {
            s1 = false;
            for (const col of cols || []) {
                const cellValue = getCellValue ? getCellValue(col, row) : row[col];
                const cellValueStr = cellValue ? cellValue.toString().toLowerCase() : '';
                if (cellValueStr.includes(lowerSearch)) {
                    s1 = true;
                    break;
                }
            }
        }

        ans = (c1 && s1) || (c2 && s1);
        return ans;
    });
};
const filteredRows = computed(() => customFilter(dataUserPage.rowsUser, filter.value));

const openDialog = async (data: any, choice: string) => {
    dataUserPage.formChoice = choice
    dataUserPage.formCreateData.name = ''
    dataUserPage.formCreateData.username = ''
    dataUserPage.formCreateData.email = ''
    dataUserPage.formCreateData.password = ''
    dataUserPage.formCreateData.userType = ''
    dataUserPage.formCreateData.id = 0
    dataUserPage.formCreateData.userType = dataUserPage.selectedButton
    dataUserPage.formCreateData.id = data.id
    if (choice === 'edit') {
        dataUserPage.formCreateData.name = data.fullname
        dataUserPage.formCreateData.username = data.username
        dataUserPage.formCreateData.email = data.email
        dataUserPage.formCreateData.password = data.password
    }
    dataUserPage.formStatus = true
}
const confirm = (data: any, choice: string) => {
    dataUserPage.dataChangeStatus.name = ''
    dataUserPage.dataChangeStatus.id = 0
    dataUserPage.dataChangeStatus.status = ''
    dataUserPage.dataChangeStatus.name = data.fullname
    dataUserPage.dataChangeStatus.id = data.id
    dataUserPage.dataChangeStatus.status = choice === 'delete' ? 'INACTIVE' : 'ACTIVE'
    dataUserPage.confirmation = true;
    dataUserPage.confirmationChoice = choice
};
const isFormValidCreate = computed(() => {
    if (dataUserPage.formChoice === 'new') {
        return (
            !!dataUserPage.formCreateData.name && dataUserPage.formCreateData.name.length >= 5 && dataUserPage.formCreateData.name.length <= 80 &&
            !!dataUserPage.formCreateData.username && dataUserPage.formCreateData.username.length >= 2 && dataUserPage.formCreateData.username.length <= 50 &&
            !!dataUserPage.formCreateData.email && /.+@.+\..+/.test(dataUserPage.formCreateData.email) &&
            !!dataUserPage.formCreateData.password && dataUserPage.formCreateData.password.length >= 8 &&
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(dataUserPage.formCreateData.password)
        );
    } else if (dataUserPage.formChoice === 'edit') {
        return (
            !!dataUserPage.formCreateData.name && dataUserPage.formCreateData.name.length >= 5 && dataUserPage.formCreateData.name.length <= 80 &&
            !!dataUserPage.formCreateData.username && dataUserPage.formCreateData.username.length >= 2 && dataUserPage.formCreateData.username.length <= 50 &&
            !!dataUserPage.formCreateData.email && /.+@.+\..+/.test(dataUserPage.formCreateData.email) &&
            (
                !dataUserPage.formCreateData.password ||
                (dataUserPage.formCreateData.password.length >= 8 &&
                    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(dataUserPage.formCreateData.password))
            )
        );
    }
});

const togglePasswordVisibility = () => {
    dataUserPage.showPassword = !dataUserPage.showPassword;
};

</script>

<style lang="scss">
.title {
    font-size: 38px;
    font-weight: bold;
    margin-bottom: 10px;
}

.number {
    font-size: 36px;
    margin-bottom: 10px;
}

.icon {
    font-size: 85px;
    margin-bottom: 10px;
}

.subtitle {
    font-size: 16px;
}
</style>../../../stores/data-store