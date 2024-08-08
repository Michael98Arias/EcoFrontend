<template>
    <q-page class="row items-center justify-evenly" style="min-height: 415px;">
        <div class="q-ma-lg q-pt-md">
            <div class="row q-col-gutter-lg">
                <div v-if="authState.userRole === 'ADMIN'" class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <q-card class="my-card text-secondary">
                        <q-card-section>

                            <div class="title" flex-center>
                                {{
                    $t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.cards.channel.titles')
                }}
                            </div>
                            <div class="row q-col-gutter-lg">
                                <div class="number text-grey-6 col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                    <span>{{ dataMarketingPage.dataCount.channel }}</span>
                                    <div class="subtitle text-grey-6">{{
                    $t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.cards.overall')
                }}
                                        {{
                        $t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.cards.channel.titles')
                    }}</div>
                                </div>
                                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                    <q-icon class="icon" name="visibility"
                                        :color="dataMarketingPage.selectedButton === 'CHANNEL' ? 'secondary' : 'grey-6'" />
                                </div>
                            </div>
                        </q-card-section>
                        <q-card-actions vertical>
                            <q-btn flat @click="listItems('CHANNEL')">{{
                    $t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.cards.channel.buttonAction')
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
                        $t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.cards.campaign.titles')
                    }}
                            </div>
                            <div class="row q-col-gutter-lg">
                                <div class="number text-grey-6 col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                    <span>{{ dataMarketingPage.dataCount.campaigns }}</span>
                                    <div class="subtitle text-grey-6">{{
                    $t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.cards.overall')
                }}
                                        {{
                        $t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.cards.campaign.titles')
                    }}</div>
                                </div>
                                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                    <q-icon class="icon" name="campaign"
                                        :color="dataMarketingPage.selectedButton === 'CAMPAIGN' ? 'secondary' : 'grey-6'" />
                                </div>
                            </div>
                        </q-card-section>
                        <q-card-actions vertical>
                            <q-btn flat @click="listItems('CAMPAIGN')">{{
                    $t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.cards.campaign.buttonAction')
                }}
                            </q-btn>
                        </q-card-actions>
                    </q-card>
                </div>

                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-my-md">
                    <q-card class="my-card  text-white">
                        <div class="row q-col-gutter-lg ">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-ml-md">
                                <div class="title text-secondary" flex-center>
                                    {{
                        dataMarketingPage.selectedButton === 'CHANNEL'
                            ?
                            $t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.cards.channel.titles')
                            : dataMarketingPage.selectedButton === 'CAMPAIGN'
                                ?
                                $t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.cards.campaign.titles')
                                : undefined
                    }}
                                </div>
                            </div>
                        </div>
                        <q-separator class="q-my-md"></q-separator>
                        <div v-if="dataMarketingPage.skeletonTable">
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
                        <div v-else class="q-pa-md">
                            <q-table v-if="dataMarketingPage.selectedButton === 'CHANNEL'"
                                :rows="dataMarketingPage.channelRows" :columns="channelColumns" row-key="id"
                                virtual-scroll :filter="filter" :filter-method="customFilterC">
                                <template v-slot:top>
                                    <q-toggle v-model="dataMarketingPage.filterToggle.active" val="active"
                                        :label="$t('buttons.toggle.active')" checked-icon="check" color="green"
                                        unchecked-icon="clear" />
                                    <q-toggle v-model="dataMarketingPage.filterToggle.inactive" val="inactive"
                                        :label="$t('buttons.toggle.inactive')" checked-icon="clear" color="red"
                                        unchecked-icon="clear" />
                                    <q-toggle v-model="showAll" val="showAll" :label="$t('buttons.toggle.showAll')"
                                        checked-icon="open_with" color="blue" unchecked-icon="clear" />
                                    <q-space></q-space>
                                    <q-input outlined debounce="400" color="secondary"
                                        v-model="dataMarketingPage.search">
                                        <template v-slot:append>
                                            <q-icon name="search" />
                                        </template>
                                    </q-input>
                                    <q-btn class="glossy q-mx-md" color="teal" :label="$t('buttons.create')"
                                        :icon="dataMarketingPage.selectedButton === 'CHANNEL' ? 'visibility' : dataMarketingPage.selectedButton === 'CAMPAIGN' ? 'inventory' : undefined"
                                        @click="openDialog('', 'new')" />
                                    <q-btn dense icon="download" color="green" aria-label="DownloadFile"
                                        @mouseover="dataMarketingPage.showTooltip = true"
                                        @mouseleave="dataMarketingPage.showTooltip = false">
                                        <q-tooltip v-if="dataMarketingPage.showTooltip">{{ $t('buttons.downloadFile')
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
                            <q-table v-if="dataMarketingPage.selectedButton === 'CAMPAIGN'" :rows="campaignRows"
                                :columns="campaignColumns" row-key="id" :filter="filter"
                                :filter-method="customFilterC" class="">
                                <template v-slot:top>
                                    <q-toggle v-model="dataMarketingPage.filterToggle.active" val="active"
                                        :label="$t('buttons.toggle.active')" checked-icon="check" color="green"
                                        unchecked-icon="clear" />
                                    <q-toggle v-model="dataMarketingPage.filterToggle.inactive" val="inactive"
                                        :label="$t('buttons.toggle.inactive')" checked-icon="clear" color="red"
                                        unchecked-icon="clear" />
                                    <q-toggle v-model="showAll" val="showAll" :label="$t('buttons.toggle.showAll')"
                                        checked-icon="open_with" color="blue" unchecked-icon="clear" />
                                    <q-space></q-space>
                                    <q-input outlined debounce="400" color="secondary"
                                        v-model="dataMarketingPage.search">
                                        <template v-slot:append>
                                            <q-icon name="search" />
                                        </template>
                                    </q-input>
                                    <q-btn class="glossy q-mx-md" color="teal" :label="$t('buttons.create')"
                                        icon="campaign" @click="openDialog('', 'new')" />
                                    <q-btn dense icon="download" color="green" aria-label="DownloadFile"
                                        @mouseover="dataMarketingPage.showTooltip = true"
                                        @mouseleave="dataMarketingPage.showTooltip = false">
                                        <q-tooltip v-if="dataMarketingPage.showTooltip">{{ $t('buttons.downloadFile')
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
                <q-dialog v-model="dataMarketingPage.formStatus" persistent position="top">
                    <q-card style="top: 150px">
                        <q-card-section class="q-py-md shadow-2 text-white bg-secondary">
                            <div class="title">
                                {{
                    dataMarketingPage.formChoice === 'new'
                        ? (dataMarketingPage.selectedButton === 'CHANNEL'
                            ? $t('globalMessages.titleNew')
                            : $t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.titleNew'))
                        : (dataMarketingPage.formChoice === 'edit'
                            ? $t('globalMessages.titleUpdate')
                            : '') }}
                                {{
                    dataMarketingPage.selectedButton === 'CHANNEL'
                        ?
                        $t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.cards.channel.title')
                        : dataMarketingPage.selectedButton === 'CAMPAIGN'
                            ?
                            $t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.cards.campaign.title')
                            : undefined }}
                            </div>
                        </q-card-section>
                        <q-separator class="compact-separator"></q-separator>
                        <q-card-section class="q-pt-none">
                            <q-form class="q-gutter-xs">
                                <q-input
                                    v-if="(dataMarketingPage.formChoice === 'new' || dataMarketingPage.formChoice === 'edit') && dataMarketingPage.selectedButton === 'CHANNEL'"
                                    class="q-mt-lg" color="secondary" filled
                                    v-model="dataMarketingPage.formDataChannel.name"
                                    :label="$t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.name')"
                                    :hint="$t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.hintName')"
                                    :rules="[val => !!val && val.length || $t('globalMessages.required'), val => val.length >= 5 || $t('globalMessages.minLengthRule', { min: 5 }), val => val.length <= 80 || $t('globalMessages.maxLengthRule', { max: 80 })]" />
                                <div v-if="dataMarketingPage.selectedButton === 'CAMPAIGN'">
                                    <q-input class="q-mt-lg" color="secondary" filled
                                        v-model="dataMarketingPage.formDataCampaign.name"
                                        :label="$t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.name')"
                                        :rules="[val => !!val && val.length || $t('globalMessages.required'), val => val.length >= 5 || $t('globalMessages.minLengthRule', { min: 5 }), val => val.length <= 150 || $t('globalMessages.maxLengthRule', { max: 150 })]" />

                                    <div class="row items-center">
                                        <q-input class="q-mx-xs" filled
                                            v-model="dataMarketingPage.formDataCampaign.startDate" mask="date"
                                            :rules="['date']" readonly label="Start Date"
                                            :hint="t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.hintTotalDays', { days: dataMarketingPage.daysBetween })" />
                                        <q-input class="q-mx-xs" filled
                                            v-model="dataMarketingPage.formDataCampaign.endDate" mask="date"
                                            :rules="['date']" readonly label="End Date" />

                                        <q-btn class="q-mx-xs" icon="event" round color="secondary"
                                            style="margin-bottom: 20px; ">
                                            <q-popup-proxy v-model="dataMarketingPage.showDatePicker" cover
                                                transition-show="scale" transition-hide="scale">
                                                <q-date v-model="dataMarketingPage.dateRange" range>
                                                    <div class="row items-center justify-end q-gutter-sm">
                                                        <q-btn label="Cancel" color="primary" flat v-close-popup />
                                                        <q-btn label="OK" color="primary" flat @click="save"
                                                            v-close-popup />
                                                    </div>
                                                </q-date>
                                            </q-popup-proxy>
                                        </q-btn>
                                    </div>
                                    <q-select color="secondary" filled
                                        v-model="dataMarketingPage.formDataCampaign.category" :options="options"
                                        :label="$t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.category')"
                                        :rules="[val => !!val || $t('globalMessages.required')]" />
                                    <q-select color="secondary" filled
                                        v-model="dataMarketingPage.formDataCampaign.marketingChannel" :options="options"
                                        :label="$t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.marketingChannel')"
                                        :rules="[val => !!val || $t('globalMessages.required')]" />
                                    <q-input color=" secondary" filled
                                        v-model="dataMarketingPage.formDataCampaign.discount" type="number" min="0"
                                        max="100"
                                        :label="$t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.discount')"
                                        :rules="[value => value === null || value === '' || (value >= 1 && value <= 100) || $t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.numberDiscount')]" />
                                    <q-input v-model="dataMarketingPage.formDataCampaign.conditions" filled clearable
                                        autogrow color="secondary"
                                        :label="$t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.conditions')"
                                        :rules="[val => !!val && val.length || $t('globalMessages.required'), val => val.length >= 5 || $t('globalMessages.minLengthRule', { min: 5 }), val => val.length <= 500 || $t('globalMessages.maxLengthRule', { max: 500 })]" />
                                </div>

                            </q-form>
                        </q-card-section>
                        <q-card-actions align="right">
                            <q-btn v-if="dataMarketingPage.formChoice === 'new'" color="secondary"
                                :label="$t('buttons.create')" :disabled="!isFormValidCreate" @click="createItem">
                            </q-btn>
                            <q-btn v-else-if="dataMarketingPage.formChoice === 'edit'" color="secondary"
                                :label="$t('buttons.update')" :disabled="!isFormValidCreate" @click="editItem">
                            </q-btn>
                            <q-btn color="negative" :label="$t('buttons.cancel')"
                                @click="dataMarketingPage.formStatus = false">
                            </q-btn>
                        </q-card-actions>
                    </q-card>
                </q-dialog>
                <q-dialog v-model="dataMarketingPage.confirmation" persistent position="top">
                    <q-card class="bg-white" style=" max-width: 450px; top: 250px">
                        <q-card-section class="q-py-md shadow-2">
                            <div style="font-size: 25px" align="center">
                                <div style="font-family: fantasy; color: rgb(90, 90, 105);">
                                    {{ $t('globalMessages.confirm') }}
                                </div>
                                <q-icon :name="dataMarketingPage.confirmationChoice === 'delete' ? 'error' : 'warning'"
                                    :color="dataMarketingPage.confirmationChoice === 'delete' ? 'negative' : 'amber'"
                                    size="4em" />
                                <br>
                                <div style="font-family: fantasy; color: rgb(90, 90, 105);">
                                    {{ dataMarketingPage.confirmationChoice === 'delete' ? $t('globalMessages.delete')
                                    : $t('globalMessages.enable') }}
                                    {{ dataMarketingPage.dataChangeStatus.name }}
                                </div>
                            </div>
                        </q-card-section>
                        <q-card-actions align="center">
                            <q-btn color="green" @click="changeStatus()" :label="$t('buttons.accept')" />
                            <span class="q-pr-xs"></span>
                            <q-btn color="negative" @click="dataMarketingPage.confirmation = false"
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

import MarketingApi from './MarketingApi';
import { ItemSendModel, ChannelList, ChannelSendModel, CampaignList, StatusSendModel, CampaignSendModel } from './interfaces/Marketing';
import HttpService from '../../../shared/services/HttpService';
import { watch } from 'fs';

defineOptions({
    name: 'Marketing'
});
onMounted(() => {
    channelCampaignCount()
    if (authState.value.userRole === 'ADMIN') {
        listItems('CHANNEL')
    } else if (authState.value.userRole === 'SELLER') {
        listItems('CAMPAIGN')
    }
});
const router = useRouter();
export type SelectedButtonType = 'CHANNEL' | 'CAMPAIGN';
const { t } = useI18n()
const dataMarketingPage = reactive({
    $q: useQuasar(),
    formStatus: false,
    confirmation: false,
    confirmationChoice: '',
    showTooltip: false,
    formChoice: '',
    selectedButton: ref<SelectedButtonType>('CHANNEL'),
    skeletonTable: false,
    filterToggle: {
        active: true,
        inactive: true,
    },
    timer: null as null | ReturnType<typeof setTimeout>,
    search: '',
    showPassword: false,
    dataCount: { channel: 0, campaigns: 0 },
    channelRows: [] as ChannelList[],
    tempRows: [],
    dataChangeStatus: {
        name: '',
        id: 0,
        status: ''
    },
    formDataChannel: {
        name: '',
        id: 0
    },
    formDataCampaign: {
        id: 0,
        name: '',
        startDate: '',
        endDate: '',
        category: '',
        discount: 0,
        conditions: '',
        marketingChannel: ''
    },
    dateRange: ref({ from: '', to: '' }),
    showDatePicker: false,
    daysBetween: 0
})
const options = [
    'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]
const authStore = useAuthStore();
const authState = computed(() => ({
    isAuthenticated: authStore.isAuthenticated,
    userRole: authStore.userRole,
    userId: authStore.userId,
}));

const campaignRows = ref([])
const channelColumns = [
    { name: 'name', required: true, label: t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.name'), align: 'left', field: 'name', sortable: true },
    { name: 'state', label: t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.state'), field: 'state', sortable: true },
    { name: 'createdAt', label: t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.creationDate'), align: 'center', field: 'createdAt', sortable: true },
    {
        name: 'updatedAt', label: t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.updateDate'), align: 'center', field: 'updatedAt', sortable: true,
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
        label: t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.actions'),
        align: 'center',
        field: ''
    }
];
const campaignColumns = [
    { name: 'name', required: true, label: t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.name'), align: 'left', field: 'name', sortable: true },
    { name: 'startDate', required: true, label: t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.startDate'), align: 'left', field: 'startDate', sortable: true },
    { name: 'endDate', required: true, label: t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.endDate'), align: 'left', field: 'endDate', sortable: true },
    { name: 'category', required: true, label: t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.category'), align: 'left', field: (campaignRows: { category: { name: string } }) => campaignRows.category.name, sortable: true },
    { name: 'discount', required: true, label: t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.discount'), align: 'left', field: 'discount', sortable: true },
    { name: 'conditions', required: true, label: t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.conditions'), align: 'left', field: 'conditions', sortable: true },
    { name: 'marketingChannel', required: true, label: t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.marketingChannel'), align: 'left', field: (campaignRows: { channel: { name: string } }) => campaignRows.channel.name, sortable: true },
    { name: 'state', label: t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.state'), field: 'state', sortable: true },
    { name: 'createdAt', label: t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.creationDate'), align: 'center', field: 'createdAt', sortable: true },
    {
        name: 'updatedAt', label: t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.updateDate'), align: 'center', field: 'updatedAt', sortable: true,
        format: (value: string | undefined): string => {
            if (value) {
                return value;
            } else {
                return '-/-';
            }
        }
    },
    {
        name: 'action',
        label: t('layout.mainLayoutUsers.sideBar.options.marketing.pageMarketing.dialog.options.actions'),
        align: 'center',
        field: ''
    }
];


onBeforeUnmount(() => {
    if (dataMarketingPage.timer !== null) {
        clearTimeout(dataMarketingPage.timer)
        dataMarketingPage.$q.loading.hide()
    }
})

const channelCampaignCount = async () => {
    dataMarketingPage.$q.loading.show({
        message: t('globalMessages.wait')
    })
    try {
        const responseChannel = await MarketingApi.channelCount()
        dataMarketingPage.dataCount.channel = responseChannel.CHANNEL
        const responseCampaign = await MarketingApi.campaignCount()
        dataMarketingPage.dataCount.campaigns = responseCampaign.CAMPAIGN

    } catch (e: any) {
        if (e.statusCode !== 200) {
            dataMarketingPage.$q.loading.hide()
            console.log('error', e.statusCode)
            dataMarketingPage.$q.notify({
                color: 'negative',
                icon: 'report_problem',
                message: t('globalMessages.errorApi'),
                position: 'top-right',
                actions: [{ label: 'OK', color: 'white', handler: () => { } }],
                timeout: 5000
            });
        }
    } finally {
        dataMarketingPage.$q.loading.hide()
    }
}
const listItems = async (item: SelectedButtonType) => {
    dataMarketingPage.skeletonTable = true
    dataMarketingPage.selectedButton = item
    dataMarketingPage.$q.loading.show({
        message: t('globalMessages.wait')
    })
    dataMarketingPage.search = ''
    dataMarketingPage.filterToggle.active = true
    dataMarketingPage.filterToggle.inactive = true
    if (item === 'CHANNEL') {
        categoriesList(item)
    } else if (item === 'CAMPAIGN') {
        campaignList(item)
    }

}
const categoriesList = async (item: SelectedButtonType) => {
    try {
        const roleModel = new ItemSendModel();
        roleModel.item = item;
        dataMarketingPage.channelRows = []
        const response = await MarketingApi.categoriesList()
        dataMarketingPage.tempRows = response
        dataMarketingPage.tempRows.forEach(user => {
            dataMarketingPage.channelRows.push(user);
        });
    } catch (e: any) {
        if (e.statusCode !== 200) {
            dataMarketingPage.$q.loading.hide()
            dataMarketingPage.skeletonTable = false
            console.log('error', e.statusCode)
            dataMarketingPage.$q.notify({
                color: 'negative',
                icon: 'report_problem',
                message: t('globalMessages.errorApi'),
                position: 'top-right',
                actions: [{ label: 'OK', color: 'white', handler: () => { } }],
                timeout: 5000
            });
        }
    } finally {
        dataMarketingPage.$q.loading.hide()
        dataMarketingPage.skeletonTable = false
    }
}
const campaignList = async (item: SelectedButtonType) => {
    try {
        const roleModel = new ItemSendModel();
        roleModel.item = item;
        campaignRows.value = []
        const response = await MarketingApi.campaignList()
        dataMarketingPage.tempRows = response
        dataMarketingPage.tempRows.forEach(user => {
            campaignRows.value.push(user);
        });
    } catch (e: any) {
        if (e.statusCode !== 200) {
            dataMarketingPage.$q.loading.hide()
            dataMarketingPage.skeletonTable = false
            console.log('error', e.statusCode)
            dataMarketingPage.$q.notify({
                color: 'negative',
                icon: 'report_problem',
                message: t('globalMessages.errorApi'),
                position: 'top-right',
                actions: [{ label: 'OK', color: 'white', handler: () => { } }],
                timeout: 5000
            });
        }
    } finally {
        dataMarketingPage.$q.loading.hide()
        dataMarketingPage.skeletonTable = false
    }
}
const changeStatus = async () => {
    dataMarketingPage.$q.loading.show({
        message: t('globalMessages.wait')
    })
    try {
        const dataSend = new StatusSendModel()
        dataSend.id = dataMarketingPage.dataChangeStatus.id
        dataSend.status = dataMarketingPage.dataChangeStatus.status
        if (dataMarketingPage.selectedButton === 'CHANNEL') {
            await MarketingApi.changeChannelStatus(dataSend)
        } else if (dataMarketingPage.selectedButton === 'CAMPAIGN') {
            await MarketingApi.changeCampaignStatus(dataSend)
        }
        listItems(dataMarketingPage.selectedButton)
        dataMarketingPage.$q.notify({
            color: 'green',
            icon: 'check_circle',
            message: t('globalMessages.successfulChange'),
            position: 'top-right',
            actions: [{ label: 'OK', color: 'white', handler: () => { } }],
            timeout: 5000
        });
    } catch (e: any) {
        if (e.statusCode !== 200) {
            dataMarketingPage.$q.loading.hide()
            console.log('error', e.statusCode)
            dataMarketingPage.confirmation = false;
            dataMarketingPage.$q.notify({
                color: 'negative',
                icon: 'report_problem',
                message: t('globalMessages.errorApi'),
                position: 'top-right',
                actions: [{ label: 'OK', color: 'white', handler: () => { } }],
                timeout: 5000
            });
        }
    } finally {
        dataMarketingPage.$q.loading.hide()
        dataMarketingPage.confirmation = false;
    }

}
const createItem = async () => {
    if (dataMarketingPage.selectedButton === 'CHANNEL') {
        createChannel()
    } else if (dataMarketingPage.selectedButton === 'CAMPAIGN') {
        createCampaign
    }
}
function save() {
    dataMarketingPage.formDataCampaign.startDate = dataMarketingPage.dateRange.from;
    dataMarketingPage.formDataCampaign.endDate = dataMarketingPage.dateRange.to;
    const start = new Date(dataMarketingPage.formDataCampaign.startDate);
    const end = new Date(dataMarketingPage.formDataCampaign.endDate);
    dataMarketingPage.daysBetween = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
}
const editItem = async () => {
    if (dataMarketingPage.selectedButton === 'CHANNEL') {
        editChannel()
    } else if (dataMarketingPage.selectedButton === 'CAMPAIGN') {
        createCampaign
    }
}
const createChannel = async () => {

    try {
        const dataSend = new ChannelSendModel()
        dataSend.name = dataMarketingPage.formDataChannel.name
        await MarketingApi.createChannel(dataSend)
        listItems(dataMarketingPage.selectedButton)
        dataMarketingPage.$q.notify({
            color: 'green',
            icon: 'check_circle',
            message: t('globalMessages.successfulCreate'),
            position: 'top-right',
            actions: [{ label: 'OK', color: 'white', handler: () => { } }],
            timeout: 5000
        });
    } catch (e: any) {
        if (e.statusCode !== 200) {
            dataMarketingPage.$q.loading.hide()
            console.log('error', e.statusCode)
            dataMarketingPage.confirmation = false;
            dataMarketingPage.$q.notify({
                color: 'negative',
                icon: 'report_problem',
                message: t('globalMessages.errorApi'),
                position: 'top-right',
                actions: [{ label: 'OK', color: 'white', handler: () => { } }],
                timeout: 5000
            });
            dataMarketingPage.formStatus = false
        }
    } finally {
        dataMarketingPage.$q.loading.hide()
        dataMarketingPage.confirmation = false;
        dataMarketingPage.formStatus = false
    }
}
const createCampaign = async () => {
    try {
        const dataSend = new ChannelSendModel()
        dataSend.name = dataMarketingPage.formDataChannel.name
        await MarketingApi.createCampaign(dataSend)
        listItems(dataMarketingPage.selectedButton)
        dataMarketingPage.$q.notify({
            color: 'green',
            icon: 'check_circle',
            message: t('globalMessages.successfulCreate'),
            position: 'top-right',
            actions: [{ label: 'OK', color: 'white', handler: () => { } }],
            timeout: 5000
        });
    } catch (e: any) {
        if (e.statusCode !== 200) {
            dataMarketingPage.$q.loading.hide()
            console.log('error', e.statusCode)
            dataMarketingPage.confirmation = false;
            dataMarketingPage.$q.notify({
                color: 'negative',
                icon: 'report_problem',
                message: t('globalMessages.errorApi'),
                position: 'top-right',
                actions: [{ label: 'OK', color: 'white', handler: () => { } }],
                timeout: 5000
            });
            dataMarketingPage.formStatus = false
        }
    } finally {
        dataMarketingPage.$q.loading.hide()
        dataMarketingPage.confirmation = false;
        dataMarketingPage.formStatus = false
    }
}
const editChannel = async () => {
    dataMarketingPage.$q.loading.show({
        message: t('globalMessages.wait')
    })
    try {
        const dataSend = new ChannelSendModel()
        dataSend.name = dataMarketingPage.formDataChannel.name
        await MarketingApi.editChannel(dataMarketingPage.formDataChannel.id, dataSend)
        listItems(dataMarketingPage.selectedButton)
        dataMarketingPage.$q.notify({
            color: 'green',
            icon: 'check_circle',
            message: t('globalMessages.successfulChange'),
            position: 'top-right',
            actions: [{ label: 'OK', color: 'white', handler: () => { } }],
            timeout: 5000
        });
    } catch (e: any) {
        if (e.statusCode !== 200) {
            dataMarketingPage.$q.loading.hide()
            console.log('error', e.statusCode)
            dataMarketingPage.confirmation = false;
            dataMarketingPage.$q.notify({
                color: 'negative',
                icon: 'report_problem',
                message: t('globalMessages.errorApi'),
                position: 'top-right',
                actions: [{ label: 'OK', color: 'white', handler: () => { } }],
                timeout: 5000
            });
            dataMarketingPage.formStatus = false
        }
    } finally {
        dataMarketingPage.$q.loading.hide()
        dataMarketingPage.confirmation = false;
        dataMarketingPage.formStatus = false
    }

}
const showAll = computed({
    get() {
        return dataMarketingPage.filterToggle.active && dataMarketingPage.filterToggle.inactive;
    },
    set(newValue: boolean) {
        dataMarketingPage.filterToggle.active = newValue;
        dataMarketingPage.filterToggle.inactive = newValue;
    }
});

const filter = computed(() => ({
    search: dataMarketingPage.search,
    active: dataMarketingPage.filterToggle.active,
    inactive: dataMarketingPage.filterToggle.inactive,
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
const filteredRowsC = computed(() => customFilterC(dataMarketingPage.campaignRows, filter.value));
const filteredRowsP = computed(() => customFilterP(channelRows.value, filter.value));
const openDialog = async (data: any, choice: string) => {

    dataMarketingPage.formChoice = choice

    dataMarketingPage.formDataChannel.id = 0
    dataMarketingPage.formDataChannel.name = ''
    dataMarketingPage.formDataCampaign.id = 0
    dataMarketingPage.formDataCampaign.name = ''
    dataMarketingPage.formDataCampaign.startDate = ''
    dataMarketingPage.formDataCampaign.endDate = ''
    dataMarketingPage.formDataCampaign.category = ''
    dataMarketingPage.formDataCampaign.discount = 0
    dataMarketingPage.formDataCampaign.conditions = ''
    dataMarketingPage.formDataCampaign.marketingChannel = ''
    dataMarketingPage.formDataCampaign.name = ''
    if (dataMarketingPage.selectedButton === 'CAMPAIGN') {
        dataMarketingPage.formDataCampaign.name = data.name
        dataMarketingPage.formDataCampaign.id = data.id

    }
    dataMarketingPage.formStatus = true
}
const confirm = (data: any, choice: string) => {
    dataMarketingPage.dataChangeStatus.name = ''
    dataMarketingPage.dataChangeStatus.id = 0
    dataMarketingPage.dataChangeStatus.status = ''
    dataMarketingPage.dataChangeStatus.name = data.name
    dataMarketingPage.dataChangeStatus.id = data.id
    dataMarketingPage.dataChangeStatus.status = choice === 'delete' ? 'INACTIVE' : 'ACTIVE'
    dataMarketingPage.confirmation = true;
    dataMarketingPage.confirmationChoice = choice
};
const isFormValidCreate = computed(() => {
    if ((dataMarketingPage.formChoice === 'new' || dataMarketingPage.formChoice === 'edit') && dataMarketingPage.selectedButton === 'CHANNEL') {

        return (
            !!dataMarketingPage.formDataChannel.name && dataMarketingPage.formDataChannel.name.length >= 5 && dataMarketingPage.formDataChannel.name.length <= 100
        );
    } else if ((dataMarketingPage.formChoice === 'new' || dataMarketingPage.formChoice === 'edit') && dataMarketingPage.selectedButton === 'CAMPAIGN') {
        return (
            !!dataMarketingPage.formDataCampaign.name && dataMarketingPage.formDataCampaign.name.length >= 5 && dataMarketingPage.formDataCampaign.name.length <= 150 &&
            !!dataMarketingPage.formDataCampaign.startDate && !!dataMarketingPage.formDataCampaign.endDate && !!dataMarketingPage.formDataCampaign.category && !!dataMarketingPage.formDataCampaign.marketingChannel &&
            !!dataMarketingPage.formDataCampaign.discount && dataMarketingPage.formDataCampaign.discount >= 1 && dataMarketingPage.formDataCampaign.discount <= 100 &&
            !!dataMarketingPage.formDataCampaign.conditions && dataMarketingPage.formDataCampaign.conditions.length >= 5 && dataMarketingPage.formDataCampaign.conditions.length <= 500
        );
    }
});

const togglePasswordVisibility = () => {
    dataMarketingPage.showPassword = !dataMarketingPage.showPassword;
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

.my-table .conditions-cell {
    max-width: 200px;
    white-space: normal;
    overflow-wrap: break-word;
    word-wrap: break-word;
}
.q-td {
  padding: 4px 8px;
}
.conditions-text {
    max-height: 100px;
    overflow-y: auto;
}
</style>