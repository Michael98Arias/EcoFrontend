<template>
    <q-page class="row items-center justify-evenly" style="min-height: 415px;">
        <div class="q-ma-lg q-pt-md">
            <div class="row q-col-gutter-lg">
                <div v-if="authState.userRole === 'ADMIN'" class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <q-card class="my-card text-secondary">
                        <q-card-section>

                            <div class="title" flex-center>
                                {{
                    $t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.cards.category.titles')
                }}
                            </div>
                            <div class="row q-col-gutter-lg">
                                <div class="number text-grey-6 col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                    <span>{{ dataProductsPage.dataCount.category }}</span>
                                    <div class="subtitle text-grey-6">{{
                    $t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.cards.overall')
                }}
                                        {{
                        $t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.cards.category.titles')
                    }}</div>
                                </div>
                                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                    <q-icon class="icon" name="category"
                                        :color="dataProductsPage.selectedButton === 'CATEGORY' ? 'secondary' : 'grey-6'" />
                                </div>
                            </div>
                        </q-card-section>
                        <q-card-actions vertical>
                            <q-btn flat @click="listItems('CATEGORY')">{{
                    $t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.cards.category.buttonAction')
                }}
                            </q-btn>
                        </q-card-actions>
                    </q-card>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <q-card class="my-card text-secondary">
                        <q-card-section>
                            <div class="title" flex-center>
                                {{
                        $t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.cards.product.titles')
                    }}
                            </div>
                            <div class="row q-col-gutter-lg">
                                <div class="number text-grey-6 col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                    <span>{{ dataProductsPage.dataCount.products }}</span>
                                    <div class="subtitle text-grey-6">{{
                    $t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.cards.overall')
                }}
                                        {{
                        $t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.cards.product.titles')
                    }}</div>
                                </div>
                                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                    <q-icon class="icon" name="inventory"
                                        :color="dataProductsPage.selectedButton === 'PRODUCT' ? 'secondary' : 'grey-6'" />
                                </div>
                            </div>
                        </q-card-section>
                        <q-card-actions vertical>
                            <q-btn flat @click="listItems('PRODUCT')">{{
                    $t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.cards.product.buttonAction')
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
                        dataProductsPage.selectedButton === 'CATEGORY'
                            ?
                            $t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.cards.category.titles')
                            : dataProductsPage.selectedButton === 'PRODUCT'
                                ?
                                $t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.cards.product.titles')
                                : undefined
                    }}
                                </div>
                            </div>
                        </div>
                        <q-separator class="q-my-md"></q-separator>
                        <div v-if="dataProductsPage.skeletonTable">
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
                            <q-table v-if="dataProductsPage.selectedButton === 'CATEGORY'"
                                :rows="dataProductsPage.categoryRows" :columns="categoryColumns" row-key="id"
                                virtual-scroll :filter="filter" :filter-method="customFilterC">
                                <template v-slot:top>
                                    <q-toggle v-model="dataProductsPage.filterToggle.active" val="active"
                                        :label="$t('buttons.toggle.active')" checked-icon="check" color="green"
                                        unchecked-icon="clear" />
                                    <q-toggle v-model="dataProductsPage.filterToggle.inactive" val="inactive"
                                        :label="$t('buttons.toggle.inactive')" checked-icon="clear" color="red"
                                        unchecked-icon="clear" />
                                    <q-toggle v-model="showAll" val="showAll" :label="$t('buttons.toggle.showAll')"
                                        checked-icon="open_with" color="blue" unchecked-icon="clear" />
                                    <q-space></q-space>
                                    <q-input outlined debounce="400" color="secondary"
                                        v-model="dataProductsPage.search">
                                        <template v-slot:append>
                                            <q-icon name="search" />
                                        </template>
                                    </q-input>
                                    <q-btn class="glossy q-mx-md" color="teal" :label="$t('buttons.create')"
                                        :icon="dataProductsPage.selectedButton === 'CATEGORY' ? 'category' : dataProductsPage.selectedButton === 'PRODUCT' ? 'inventory' : undefined"
                                        @click="openDialog('', 'new')" />
                                    <q-btn dense icon="download" color="green" aria-label="DownloadFile"
                                        @mouseover="dataProductsPage.showTooltip = true"
                                        @mouseleave="dataProductsPage.showTooltip = false">
                                        <q-tooltip v-if="dataProductsPage.showTooltip">{{ $t('buttons.downloadFile')
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
                            <q-table v-else-if="dataProductsPage.selectedButton === 'PRODUCT'" :rows="productRows"
                                :columns="productColumns" row-key="id" virtual-scroll :filter="filter"
                                :filter-method="customFilterP">
                                <template v-slot:top>
                                    <q-toggle v-model="dataProductsPage.filterToggle.active" val="active"
                                        :label="$t('buttons.toggle.active')" checked-icon="check" color="green"
                                        unchecked-icon="clear" />
                                    <q-toggle v-model="dataProductsPage.filterToggle.inactive" val="inactive"
                                        :label="$t('buttons.toggle.inactive')" checked-icon="clear" color="red"
                                        unchecked-icon="clear" />
                                    <q-toggle v-model="showAll" val="showAll" :label="$t('buttons.toggle.showAll')"
                                        checked-icon="open_with" color="blue" unchecked-icon="clear" />
                                    <q-space></q-space>
                                    <q-input outlined debounce="400" color="secondary"
                                        v-model="dataProductsPage.search">
                                        <template v-slot:append>
                                            <q-icon name="search" />
                                        </template>
                                    </q-input>
                                    <q-btn class="glossy q-mx-md" color="teal" :label="$t('buttons.create')"
                                        :icon="dataProductsPage.selectedButton === 'CATEGORY' ? 'category' : dataProductsPage.selectedButton === 'PRODUCT' ? 'inventory' : undefined"
                                        @click="openDialog('', 'new')" />
                                    <q-btn dense icon="download" color="green" aria-label="DownloadFile"
                                        @mouseover="dataProductsPage.showTooltip = true"
                                        @mouseleave="dataProductsPage.showTooltip = false">
                                        <q-tooltip v-if="dataProductsPage.showTooltip">{{ $t('buttons.downloadFile')
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
                <q-dialog v-model="dataProductsPage.formStatus" persistent position="top">
                    <q-card style="top: 150px">
                        <q-card-section class="q-py-md shadow-2 text-white bg-secondary">
                            <div class="title">
                                {{
                    dataProductsPage.formChoice === 'new'
                        ? (dataProductsPage.selectedButton === 'CATEGORY'
                            ? $t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.titleNew')
                            : $t('globalMessages.titleNew'))
                        : (dataProductsPage.formChoice === 'edit'
                            ? $t('globalMessages.titleUpdate')
                            : '') }}
                        {{ 
                        dataProductsPage.selectedButton === 'CATEGORY'
                            ? $t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.cards.category.title')
                            : dataProductsPage.selectedButton === 'PRODUCT'
                                ? $t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.cards.product.title')
                                : undefined }}
                            </div>
                        </q-card-section>
                        <q-separator></q-separator>
                        <q-card-section class="q-pt-none">
                            <q-form class="q-gutter-xs">
                                <q-input
                                    v-if="(dataProductsPage.formChoice === 'new' || dataProductsPage.formChoice === 'edit') && dataProductsPage.selectedButton === 'CATEGORY'"
                                    class="q-mt-lg" color="secondary" filled
                                    v-model="dataProductsPage.formDataCategory.name"
                                    :label="$t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.name')"
                                    :hint="$t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.hintName')"
                                    :rules="[val => !!val && val.length || $t('globalMessages.required'), val => val.length >= 5 || $t('globalMessages.minLengthRule', { min: 5 }), val => val.length <= 80 || $t('globalMessages.maxLengthRule', { max: 80 })]" />
                                <q-input v-if="dataProductsPage.selectedButton === 'PRODUCT'" class="q-mt-lg"
                                    color="secondary" filled v-model="dataProductsPage.formCreateDataProduct.username"
                                    :label="$t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.username')"
                                    :rules="[val => !!val && val.length || $t('globalMessages.required'), val => val.length >= 2 || $t('globalMessages.minLengthRule', { min: 2 }), val => val.length <= 50 || $t('globalMessages.maxLengthRule', { max: 50 })]" />

                                <q-input v-if="dataProductsPage.selectedButton === 'PRODUCT'" color="secondary" filled
                                    v-model="dataProductsPage.formCreateDataProduct.email"
                                    :label="$t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.email')"
                                    :rules="[val => !!val || $t('globalMessages.required'), val => /.+@.+\..+/.test(val) || $t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.emailRule')]" />

                                <q-input
                                    v-if="dataProductsPage.formChoice === 'new' && dataProductsPage.selectedButton === 'PRODUCT'"
                                    color="secondary" filled v-model="dataProductsPage.formCreateDataProduct.password"
                                    :type="dataProductsPage.showPassword ? 'text' : 'password'"
                                    :label="$t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.password')"
                                    :rules="[val => !!val || $t('globalMessages.required'), val => val.length >= 8 || $t('globalMessages.minLengthRule', { min: 8 }), val => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(val) || $t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.passwordRule')]">

                                    <template v-slot:append>
                                        <q-icon :name="dataProductsPage.showPassword ? 'visibility' : 'visibility_off'"
                                            class="cursor-pointer" @click="togglePasswordVisibility" />
                                    </template>
                                </q-input>
                                <q-input
                                    v-else-if="dataProductsPage.formChoice === 'edit' && dataProductsPage.selectedButton === 'PRODUCT'"
                                    color="secondary" filled v-model="dataProductsPage.formCreateDataProduct.password"
                                    :type="dataProductsPage.showPassword ? 'text' : 'password'"
                                    :label="$t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.updatePassword')"
                                    :rules="[val => !val || val.length >= 8 || $t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.minLengthRule', { min: 8 }),
                val => !val || /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(val) || $t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.passwordRule')]">
                                    <template v-slot:append>
                                        <q-icon :name="dataProductsPage.showPassword ? 'visibility' : 'visibility_off'"
                                            class="cursor-pointer" @click="togglePasswordVisibility" />
                                    </template>
                                </q-input>
                            </q-form>
                        </q-card-section>
                        <q-card-actions align="right">
                            <q-btn v-if="dataProductsPage.formChoice === 'new'" color="secondary"
                                :label="$t('buttons.create')" :disabled="!isFormValidCreate" @click="createItem">
                            </q-btn>
                            <q-btn v-else-if="dataProductsPage.formChoice === 'edit'" color="secondary"
                                :label="$t('buttons.update')" :disabled="!isFormValidCreate" @click="editItem">
                            </q-btn>
                            <q-btn color="negative" :label="$t('buttons.cancel')"
                                @click="dataProductsPage.formStatus = false">
                            </q-btn>
                        </q-card-actions>
                    </q-card>
                </q-dialog>
                <q-dialog v-model="dataProductsPage.confirmation" persistent position="top">
                    <q-card class="bg-white" style=" max-width: 450px; top: 250px">
                        <q-card-section class="q-py-md shadow-2">
                            <div style="font-size: 25px" align="center">
                                <div style="font-family: fantasy; color: rgb(90, 90, 105);">
                                    {{ $t('globalMessages.confirm') }}
                                </div>
                                <q-icon :name="dataProductsPage.confirmationChoice === 'delete' ? 'error' : 'warning'"
                                    :color="dataProductsPage.confirmationChoice === 'delete' ? 'negative' : 'amber'"
                                    size="4em" />
                                <br>
                                <div style="font-family: fantasy; color: rgb(90, 90, 105);">
                                    {{ dataProductsPage.confirmationChoice === 'delete' ? $t('globalMessages.delete')
                                    : $t('globalMessages.enable') }}
                                    {{ dataProductsPage.dataChangeStatus.name }}
                                </div>
                            </div>
                        </q-card-section>
                        <q-card-actions align="center">
                            <q-btn color="green" @click="changeStatus()" :label="$t('buttons.accept')" />
                            <span class="q-pr-xs"></span>
                            <q-btn color="negative" @click="dataProductsPage.confirmation = false"
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
import { useAuthStore } from '../../../stores/data-store';
import { useQuasar } from 'quasar';
import { onBeforeUnmount } from 'vue';
import { useI18n } from "vue-i18n";
import { useRouter } from 'vue-router';

import UserApi from './ProductsApi';
import { ItemSendModel, CategoryList, CategorySendModel, ProductList, StatusSendModel, ProductSendModel } from './interfaces/Products';
import HttpService from '../../../shared/services/HttpService';

defineOptions({
    name: 'Products'
});
onMounted(() => {
    categoryProductCount()
    if (authState.value.userRole === 'ADMIN') {
        listItems('CATEGORY')
    } else if (authState.value.userRole === 'SELLER') {
        listItems('PRODUCT')
    }

});
const router = useRouter();
export type SelectedButtonType = 'CATEGORY' | 'PRODUCT';
const { t } = useI18n()
const dataProductsPage = reactive({
    $q: useQuasar(),
    formStatus: false,
    confirmation: false,
    confirmationChoice: '',
    showTooltip: false,
    formChoice: '',
    selectedButton: ref<SelectedButtonType>('CATEGORY'),
    skeletonTable: false,
    filterToggle: {
        active: true,
        inactive: true,
    },
    timer: null as null | ReturnType<typeof setTimeout>,
    search: '',
    searchQuery: '',
    showPassword: false,
    dataCount: { category: 0, products: 0 },
    categoryRows: [] as CategoryList[],
    tempRows: [],
    dataChangeStatus: {
        name: '',
        id: 0,
        status: ''
    },
    formDataCategory: {
        name: '',
        id: 0
    },
    formCreateDataProduct: {
        categoryId: 0,
        sellerId: 0,
        name: '',
        description: '',
        amount: 0,
        price: 0,
        id: 0
    }
})

const authStore = useAuthStore();
const authState = computed(() => ({
    isAuthenticated: authStore.isAuthenticated,
    userRole: authStore.userRole,
    userId: authStore.userId,
}));
const productRows = ref([])
const categoryColumns = [
    { name: 'name', required: true, label: t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.name'), align: 'left', field: 'name', sortable: true },
    { name: 'state', label: t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.state'), field: 'state', sortable: true },
    { name: 'createdAt', label: t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.creationDate'), align: 'center', field: 'createdAt', sortable: true },
    {
        name: 'updatedAt', label: t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.updateDate'), align: 'center', field: 'updatedAt', sortable: true,
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
        label: t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.actions'),
        align: 'center',
        field: ''
    }
];
const productColumns = [
    {
        name: 'seller', required: true, label: t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.usernameSeller'), align: 'left',
        field: (productRows: { seller: { username: string } }) => productRows.seller.username,
        sortable: true
    },
    { name: 'category', label: t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.categoryName'), align: 'center', field: (productRows: { category: { name: string } }) => productRows.category.name, sortable: true },
    { name: 'name', label: t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.name'), align: 'center', field: 'name', sortable: true },
    { name: 'description', required: true, label: t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.description'), align: 'left', field: 'description', sortable: true },
    { name: 'amount', label: t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.amount'), field: 'amount', sortable: true },
    { name: 'price', label: t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.price'), align: 'center', field: 'price', sortable: true },
    { name: 'state', label: t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.state'), field: 'state', sortable: true },
    { name: 'createdAt', label: t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.creationDate'), align: 'center', field: 'createdAt', sortable: true },
    {
        name: 'updatedAt', label: t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.updateDate'), align: 'center', field: 'updatedAt', sortable: true,
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
        label: t('layout.mainLayoutUsers.sideBar.options.products.pageProducts.dialog.options.actions'),
        align: 'center',
        field: ''
    }
];
const rowsCate =
    [
        {
            "id": 1,
            "category": {
                "id": 1,
                "name": "Bedrooms",
                "state": "ACTIVE",
                "createdAt": "2024-06-03T13:46:40",
                "updatedAt": "2024-06-03T16:19:38"
            },
            "seller": {
                "id": 3,
                "fullname": "Seller One",
                "username": "seller123",
                "email": "seller@seller.com",
                "role": "SELLER",
                "state": "ACTIVE",
                "createdAt": "2024-06-03T13:46:40",
                "updatedAt": null
            },
            "name": "Product 1",
            "description": "Description for Product 1",
            "amount": 10,
            "price": 20.00,
            "state": "ACTIVE",
            "createdAt": "2024-06-03T13:46:40",
            "updatedAt": null
        },
        {
            "id": 2,
            "category": {
                "id": 2,
                "name": "Offices",
                "state": "ACTIVE",
                "createdAt": "2024-06-03T13:46:40",
                "updatedAt": null
            },
            "seller": {
                "id": 3,
                "fullname": "Seller One",
                "username": "seller123",
                "email": "seller@seller.com",
                "role": "SELLER",
                "state": "ACTIVE",
                "createdAt": "2024-06-03T13:46:40",
                "updatedAt": null
            },
            "name": "Product 2",
            "description": "Description for Product 2",
            "amount": 15,
            "price": 25.00,
            "state": "ACTIVE",
            "createdAt": "2024-06-03T13:46:40",
            "updatedAt": null
        },
        {
            "id": 3,
            "category": {
                "id": 3,
                "name": "Kitchens",
                "state": "ACTIVE",
                "createdAt": "2024-06-03T13:46:40",
                "updatedAt": null
            },
            "seller": {
                "id": 3,
                "fullname": "Seller One",
                "username": "seller123",
                "email": "seller@seller.com",
                "role": "SELLER",
                "state": "ACTIVE",
                "createdAt": "2024-06-03T13:46:40",
                "updatedAt": null
            },
            "name": "Product 3",
            "description": "Description for Product 3",
            "amount": 20,
            "price": 30.00,
            "state": "ACTIVE",
            "createdAt": "2024-06-03T13:46:40",
            "updatedAt": null
        },
        {
            "id": 4,
            "category": {
                "id": 4,
                "name": "Decor & Accessories",
                "state": "INACTIVE",
                "createdAt": "2024-06-03T13:46:40",
                "updatedAt": null
            },
            "seller": {
                "id": 3,
                "fullname": "Seller One",
                "username": "seller123",
                "email": "seller@seller.com",
                "role": "SELLER",
                "state": "ACTIVE",
                "createdAt": "2024-06-03T13:46:40",
                "updatedAt": null
            },
            "name": "Product 4",
            "description": "Description for Product 4",
            "amount": 25,
            "price": 35.00,
            "state": "ACTIVE",
            "createdAt": "2024-06-03T13:46:40",
            "updatedAt": null
        },
        {
            "id": 5,
            "category": {
                "id": 1,
                "name": "Bedrooms",
                "state": "ACTIVE",
                "createdAt": "2024-06-03T13:46:40",
                "updatedAt": "2024-06-03T16:19:38"
            },
            "seller": {
                "id": 3,
                "fullname": "Seller One",
                "username": "seller123",
                "email": "seller@seller.com",
                "role": "SELLER",
                "state": "ACTIVE",
                "createdAt": "2024-06-03T13:46:40",
                "updatedAt": null
            },
            "name": "Product 5",
            "description": "Description for Product 5",
            "amount": 30,
            "price": 40.00,
            "state": "ACTIVE",
            "createdAt": "2024-06-03T13:46:40",
            "updatedAt": null
        },
        {
            "id": 6,
            "category": {
                "id": 2,
                "name": "Offices",
                "state": "ACTIVE",
                "createdAt": "2024-06-03T13:46:40",
                "updatedAt": null
            },
            "seller": {
                "id": 3,
                "fullname": "Seller One",
                "username": "seller123",
                "email": "seller@seller.com",
                "role": "SELLER",
                "state": "ACTIVE",
                "createdAt": "2024-06-03T13:46:40",
                "updatedAt": null
            },
            "name": "Product 6",
            "description": "Description for Product 6",
            "amount": 35,
            "price": 45.00,
            "state": "ACTIVE",
            "createdAt": "2024-06-03T13:46:40",
            "updatedAt": null
        },
        {
            "id": 7,
            "category": {
                "id": 3,
                "name": "Kitchens",
                "state": "ACTIVE",
                "createdAt": "2024-06-03T13:46:40",
                "updatedAt": null
            },
            "seller": {
                "id": 3,
                "fullname": "Seller One",
                "username": "seller123",
                "email": "seller@seller.com",
                "role": "SELLER",
                "state": "ACTIVE",
                "createdAt": "2024-06-03T13:46:40",
                "updatedAt": null
            },
            "name": "Product 7",
            "description": "Description for Product 7",
            "amount": 40,
            "price": 50.00,
            "state": "ACTIVE",
            "createdAt": "2024-06-03T13:46:40",
            "updatedAt": null
        },
        {
            "id": 8,
            "category": {
                "id": 4,
                "name": "Decor & Accessories",
                "state": "INACTIVE",
                "createdAt": "2024-06-03T13:46:40",
                "updatedAt": null
            },
            "seller": {
                "id": 3,
                "fullname": "Seller One",
                "username": "seller123",
                "email": "seller@seller.com",
                "role": "SELLER",
                "state": "ACTIVE",
                "createdAt": "2024-06-03T13:46:40",
                "updatedAt": null
            },
            "name": "Product 8",
            "description": "Description for Product 8",
            "amount": 45,
            "price": 55.00,
            "state": "ACTIVE",
            "createdAt": "2024-06-03T13:46:40",
            "updatedAt": null
        },
        {
            "id": 9,
            "category": {
                "id": 1,
                "name": "Bedrooms",
                "state": "ACTIVE",
                "createdAt": "2024-06-03T13:46:40",
                "updatedAt": "2024-06-03T16:19:38"
            },
            "seller": {
                "id": 3,
                "fullname": "Seller One",
                "username": "seller123",
                "email": "seller@seller.com",
                "role": "SELLER",
                "state": "ACTIVE",
                "createdAt": "2024-06-03T13:46:40",
                "updatedAt": null
            },
            "name": "Product 9",
            "description": "Description for Product 9",
            "amount": 50,
            "price": 60.00,
            "state": "ACTIVE",
            "createdAt": "2024-06-03T13:46:40",
            "updatedAt": null
        },
        {
            "id": 10,
            "category": {
                "id": 2,
                "name": "Offices",
                "state": "ACTIVE",
                "createdAt": "2024-06-03T13:46:40",
                "updatedAt": null
            },
            "seller": {
                "id": 3,
                "fullname": "Seller One",
                "username": "seller123",
                "email": "seller@seller.com",
                "role": "SELLER",
                "state": "ACTIVE",
                "createdAt": "2024-06-03T13:46:40",
                "updatedAt": null
            },
            "name": "Product 10",
            "description": "Description for Product 10",
            "amount": 55,
            "price": 65.00,
            "state": "ACTIVE",
            "createdAt": "2024-06-03T13:46:40",
            "updatedAt": null
        }
    ]

onBeforeUnmount(() => {
    if (dataProductsPage.timer !== null) {
        clearTimeout(dataProductsPage.timer)
        dataProductsPage.$q.loading.hide()
    }
})
const categoryProductCount = async () => {
    dataProductsPage.$q.loading.show({
        message: t('globalMessages.wait')
    })
    try {
        const responseCategory = await UserApi.categoryCount()
        dataProductsPage.dataCount.category = responseCategory.CATEGORY
        const responseProduct = await UserApi.productCount()
        dataProductsPage.dataCount.products = responseProduct.PRODUCT

    } catch (e: any) {
        if (e.statusCode !== 200) {
            dataProductsPage.$q.loading.hide()
            console.log('error', e.statusCode)
            dataProductsPage.$q.notify({
                color: 'negative',
                icon: 'report_problem',
                message: t('globalMessages.errorApi'),
                position: 'top-right',
                actions: [{ label: 'OK', color: 'white', handler: () => { } }],
                timeout: 5000
            });
        }
    } finally {
        dataProductsPage.$q.loading.hide()
    }
}
const listItems = async (item: SelectedButtonType) => {
    dataProductsPage.skeletonTable = true
    dataProductsPage.selectedButton = item
    dataProductsPage.$q.loading.show({
        message: t('globalMessages.wait')
    })
    dataProductsPage.search = ''
    dataProductsPage.filterToggle.active = true
    dataProductsPage.filterToggle.inactive = true
    if (item === 'CATEGORY') {
        categoriesList(item)
    } else if (item === 'PRODUCT') {
        productList(item)
    }

}
const categoriesList = async (item: SelectedButtonType) => {
    try {
        const roleModel = new ItemSendModel();
        roleModel.item = item;
        dataProductsPage.categoryRows = []
        const response = await UserApi.categoriesList()
        dataProductsPage.tempRows = response
        dataProductsPage.tempRows.forEach(user => {
            dataProductsPage.categoryRows.push(user);
        });
    } catch (e: any) {
        if (e.statusCode !== 200) {
            dataProductsPage.$q.loading.hide()
            dataProductsPage.skeletonTable = false
            console.log('error', e.statusCode)
            dataProductsPage.$q.notify({
                color: 'negative',
                icon: 'report_problem',
                message: t('globalMessages.errorApi'),
                position: 'top-right',
                actions: [{ label: 'OK', color: 'white', handler: () => { } }],
                timeout: 5000
            });
        }
    } finally {
        dataProductsPage.$q.loading.hide()
        dataProductsPage.skeletonTable = false
    }
}
const productList = async (item: SelectedButtonType) => {
    try {
        const roleModel = new ItemSendModel();
        roleModel.item = item;
        productRows.value = []
        const response = await UserApi.productList()
        dataProductsPage.tempRows = response
        dataProductsPage.tempRows.forEach(user => {
            productRows.value.push(user);
        });
    } catch (e: any) {
        if (e.statusCode !== 200) {
            dataProductsPage.$q.loading.hide()
            dataProductsPage.skeletonTable = false
            console.log('error', e.statusCode)
            dataProductsPage.$q.notify({
                color: 'negative',
                icon: 'report_problem',
                message: t('globalMessages.errorApi'),
                position: 'top-right',
                actions: [{ label: 'OK', color: 'white', handler: () => { } }],
                timeout: 5000
            });
        }
    } finally {
        dataProductsPage.$q.loading.hide()
        dataProductsPage.skeletonTable = false
    }
}
const changeStatus = async () => {
    dataProductsPage.$q.loading.show({
        message: t('globalMessages.wait')
    })
    try {
        const dataSend = new StatusSendModel()
        dataSend.id = dataProductsPage.dataChangeStatus.id
        dataSend.status = dataProductsPage.dataChangeStatus.status
        if (dataProductsPage.selectedButton === 'CATEGORY') {
            await UserApi.changeCategoryStatus(dataSend)
        } else if (dataProductsPage.selectedButton === 'PRODUCT') {
            await UserApi.changeProductStatus(dataSend)
        }
        listItems(dataProductsPage.selectedButton)
        dataProductsPage.$q.notify({
            color: 'green',
            icon: 'check_circle',
            message: t('globalMessages.successfulChange'),
            position: 'top-right',
            actions: [{ label: 'OK', color: 'white', handler: () => { } }],
            timeout: 5000
        });
    } catch (e: any) {
        if (e.statusCode !== 200) {
            dataProductsPage.$q.loading.hide()
            console.log('error', e.statusCode)
            dataProductsPage.confirmation = false;
            dataProductsPage.$q.notify({
                color: 'negative',
                icon: 'report_problem',
                message: t('globalMessages.errorApi'),
                position: 'top-right',
                actions: [{ label: 'OK', color: 'white', handler: () => { } }],
                timeout: 5000
            });
        }
    } finally {
        dataProductsPage.$q.loading.hide()
        dataProductsPage.confirmation = false;
    }

}
const createItem = async () => {
    if (dataProductsPage.selectedButton === 'CATEGORY') {
        createCategory()
    } else if (dataProductsPage.selectedButton === 'PRODUCT') {
        createProduct
    }
}
const editItem = async () => {
    if (dataProductsPage.selectedButton === 'CATEGORY') {
        editCategory()
    } else if (dataProductsPage.selectedButton === 'PRODUCT') {
        createProduct
    }
}
const createCategory = async () => {

    try {
        const dataSend = new CategorySendModel()
        dataSend.name = dataProductsPage.formDataCategory.name
        await UserApi.createCategory(dataSend)
        listItems(dataProductsPage.selectedButton)
        dataProductsPage.$q.notify({
            color: 'green',
            icon: 'check_circle',
            message: t('globalMessages.successfulCreate'),
            position: 'top-right',
            actions: [{ label: 'OK', color: 'white', handler: () => { } }],
            timeout: 5000
        });
    } catch (e: any) {
        if (e.statusCode !== 200) {
            dataProductsPage.$q.loading.hide()
            console.log('error', e.statusCode)
            dataProductsPage.confirmation = false;
            dataProductsPage.$q.notify({
                color: 'negative',
                icon: 'report_problem',
                message: t('globalMessages.errorApi'),
                position: 'top-right',
                actions: [{ label: 'OK', color: 'white', handler: () => { } }],
                timeout: 5000
            });
            dataProductsPage.formStatus = false
        }
    } finally {
        dataProductsPage.$q.loading.hide()
        dataProductsPage.confirmation = false;
        dataProductsPage.formStatus = false
    }
}
const createProduct = async () => {
    try {
        const dataSend = new CategorySendModel()
        dataSend.name = dataProductsPage.formDataCategory.name
        await UserApi.createProduct(dataSend)
        listItems(dataProductsPage.selectedButton)
        dataProductsPage.$q.notify({
            color: 'green',
            icon: 'check_circle',
            message: t('globalMessages.successfulCreate'),
            position: 'top-right',
            actions: [{ label: 'OK', color: 'white', handler: () => { } }],
            timeout: 5000
        });
    } catch (e: any) {
        if (e.statusCode !== 200) {
            dataProductsPage.$q.loading.hide()
            console.log('error', e.statusCode)
            dataProductsPage.confirmation = false;
            dataProductsPage.$q.notify({
                color: 'negative',
                icon: 'report_problem',
                message: t('globalMessages.errorApi'),
                position: 'top-right',
                actions: [{ label: 'OK', color: 'white', handler: () => { } }],
                timeout: 5000
            });
            dataProductsPage.formStatus = false
        }
    } finally {
        dataProductsPage.$q.loading.hide()
        dataProductsPage.confirmation = false;
        dataProductsPage.formStatus = false
    }
}
const editCategory = async () => {
    dataProductsPage.$q.loading.show({
        message: t('globalMessages.wait')
    })
    try {
        const dataSend = new CategorySendModel()
        dataSend.name = dataProductsPage.formDataCategory.name
        await UserApi.editCategory(dataProductsPage.formDataCategory.id, dataSend)
        listItems(dataProductsPage.selectedButton)
        dataProductsPage.$q.notify({
            color: 'green',
            icon: 'check_circle',
            message: t('globalMessages.successfulChange'),
            position: 'top-right',
            actions: [{ label: 'OK', color: 'white', handler: () => { } }],
            timeout: 5000
        });
    } catch (e: any) {
        if (e.statusCode !== 200) {
            dataProductsPage.$q.loading.hide()
            console.log('error', e.statusCode)
            dataProductsPage.confirmation = false;
            dataProductsPage.$q.notify({
                color: 'negative',
                icon: 'report_problem',
                message: t('globalMessages.errorApi'),
                position: 'top-right',
                actions: [{ label: 'OK', color: 'white', handler: () => { } }],
                timeout: 5000
            });
            dataProductsPage.formStatus = false
        }
    } finally {
        dataProductsPage.$q.loading.hide()
        dataProductsPage.confirmation = false;
        dataProductsPage.formStatus = false
    }

}
const showAll = computed({
    get() {
        return dataProductsPage.filterToggle.active && dataProductsPage.filterToggle.inactive;
    },
    set(newValue: boolean) {
        dataProductsPage.filterToggle.active = newValue;
        dataProductsPage.filterToggle.inactive = newValue;
    }
});

const filter = computed(() => ({
    search: dataProductsPage.search,
    active: dataProductsPage.filterToggle.active,
    inactive: dataProductsPage.filterToggle.inactive,
}));
const customFilterC = (rows: readonly any[], terms: any, cols?: readonly any[], getCellValue?: (col: any, row: any) => any) => {
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
const customFilterP = (rows: readonly any[], terms: any, cols?: readonly any[], getCellValue?: (col: any, row: any) => any) => {
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
const filteredRowsC = computed(() => customFilterC(dataProductsPage.categoryRows, filter.value));
const filteredRowsP = computed(() => customFilterP(productRows.value, filter.value));
const openDialog = async (data: any, choice: string) => {


    dataProductsPage.formChoice = choice
    dataProductsPage.formDataCategory.id = 0
    dataProductsPage.formDataCategory.name = ''
    dataProductsPage.formCreateDataProduct.categoryId = 0
    dataProductsPage.formCreateDataProduct.sellerId = 0
    dataProductsPage.formCreateDataProduct.name = ''
    dataProductsPage.formCreateDataProduct.description = ''
    dataProductsPage.formCreateDataProduct.amount = 0
    dataProductsPage.formCreateDataProduct.price = 0
    if (dataProductsPage.selectedButton === 'CATEGORY') {
        dataProductsPage.formDataCategory.name = data.name
        dataProductsPage.formDataCategory.id = data.id

    } else if (dataProductsPage.selectedButton === 'PRODUCT') {
        if (authState.value.userRole === 'ADMIN') {
            dataProductsPage.formCreateDataProduct.id = 3
        } else {
            dataProductsPage.formCreateDataProduct.id = authState.value.userId
        }
        dataProductsPage.formCreateDataProduct.categoryId = 0
        dataProductsPage.formCreateDataProduct.sellerId = 0
        dataProductsPage.formCreateDataProduct.name = ''
        dataProductsPage.formCreateDataProduct.description = ''
        dataProductsPage.formCreateDataProduct.amount = 0
        dataProductsPage.formCreateDataProduct.price = 0
    }

    dataProductsPage.formStatus = true
}
const confirm = (data: any, choice: string) => {
    dataProductsPage.dataChangeStatus.name = ''
    dataProductsPage.dataChangeStatus.id = 0
    dataProductsPage.dataChangeStatus.status = ''
    dataProductsPage.dataChangeStatus.name = data.name
    dataProductsPage.dataChangeStatus.id = data.id
    dataProductsPage.dataChangeStatus.status = choice === 'delete' ? 'INACTIVE' : 'ACTIVE'
    dataProductsPage.confirmation = true;
    dataProductsPage.confirmationChoice = choice
};
const isFormValidCreate = computed(() => {
    if ((dataProductsPage.formChoice === 'new' || dataProductsPage.formChoice === 'edit') && dataProductsPage.selectedButton === 'CATEGORY') {
        return (
            !!dataProductsPage.formDataCategory.name && dataProductsPage.formDataCategory.name.length >= 5 && dataProductsPage.formDataCategory.name.length <= 100
        );
    } else if ((dataProductsPage.formChoice === 'new' || dataProductsPage.formChoice === 'edit') && dataProductsPage.selectedButton === 'PRODUCT') {
        !!dataProductsPage.formDataCategory.name && dataProductsPage.formDataCategory.name.length >= 5 && dataProductsPage.formDataCategory.name.length <= 100
    }

    else if (dataProductsPage.formChoice === 'edit' && dataProductsPage.selectedButton === 'PRODUCT') {
        return (
            !!dataProductsPage.formCreateDataProduct.name && dataProductsPage.formCreateDataProduct.name.length >= 5 && dataProductsPage.formCreateDataProduct.name.length <= 80 &&
            !!dataProductsPage.formCreateDataProduct.username && dataProductsPage.formCreateDataProduct.username.length >= 2 && dataProductsPage.formCreateDataProduct.username.length <= 50 &&
            !!dataProductsPage.formCreateDataProduct.email && /.+@.+\..+/.test(dataProductsPage.formCreateDataProduct.email) &&
            (
                !dataProductsPage.formCreateDataProduct.password ||
                (dataProductsPage.formCreateDataProduct.password.length >= 8 &&
                    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(dataProductsPage.formCreateDataProduct.password))
            )
        );
    }
});

const togglePasswordVisibility = () => {
    dataProductsPage.showPassword = !dataProductsPage.showPassword;
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
</style>../../../stores/data-store./interfaces/Products./ProductsApi