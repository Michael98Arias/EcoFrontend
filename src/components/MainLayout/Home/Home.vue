<template>
    <div class="q-pa-md">
        <q-carousel arrows animated infinite v-model="dataUserPage.slideInitial" height="600px"
            control-color="secondary">
            <q-carousel-slide name="first" img-src="https://picsum.photos/id/504/3456/2304">
                <div class="absolute-bottom custom-caption">
                    <div class="text-h3">{{ $t('layout.mainLayout.home.images.titlePhotoOne') }}</div>
                    <q-btn outline  :label="$t('buttons.shopNow')" />
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="second" img-src="https://picsum.photos/id/119/3456/2304">
                <div class="absolute-bottom custom-caption">
                    <div class="text-h3">{{ $t('layout.mainLayout.home.images.titlePhotoTwo') }}</div>
                    <q-btn outline  :label="$t('buttons.shopNow')" />
                </div>>
            </q-carousel-slide>
            <q-carousel-slide name="third" img-src="https://picsum.photos/id/42/3456/2304">
                <div class="absolute-bottom custom-caption">
                    <div class="text-h3">{{ $t('layout.mainLayout.home.images.titlePhotoThree') }}</div>
                    <q-btn outline  :label="$t('buttons.shopNow')" />
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="four" img-src="https://picsum.photos/id/48/3456/2304">
                <div class="absolute-bottom custom-caption">
                    <div class="text-h3">{{ $t('layout.mainLayout.home.images.titlePhotoFour') }}</div>
                    <q-btn outline  :label="$t('buttons.shopNow')" />
                </div>
            </q-carousel-slide>
        </q-carousel>
    </div>
    <div class="q-pa-md">
        <q-carousel v-model="dataUserPage.slideCategories" transition-prev="slide-right" transition-next="slide-left"
            swipeable animated control-color="secondary" navigation padding arrows height="300px"
            class=" shadow-3 rounded-borders">
            <q-carousel-slide :name="1" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <div class="rounded-borders col-12 col-md-6 full-height">
                        <q-img class="rounded-borders full-width full-height"
                        src="https://cdn.quasar.dev/img/parallax1.jpg">
                            <div class="absolute-bottom text-center">
                                <q-btn class="full-width" icon="shopping_cart_checkout" flat
                                    :label="$t('buttons.shopNow')" />
                            </div>
                        </q-img>
                    </div>
                    <div class="rounded-borders col-12 col-md-6 full-height">
                        <q-img class="rounded-borders full-width full-height"
                            src="https://cdn.quasar.dev/img/parallax1.jpg">
                            <div class="absolute-bottom text-center">
                                <q-btn class="full-width" icon="shopping_cart_checkout" flat
                                    :label="$t('buttons.shopNow')" />
                            </div>
                        </q-img>
                    </div>
                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <div class="rounded-borders col-12 col-md-6 full-height">
                        <q-img class="rounded-borders full-width full-height"
                            src="https://cdn.quasar.dev/img/parallax1.jpg">
                            <div class="absolute-bottom text-center">
                                <q-btn class="full-width" icon="shopping_cart_checkout" flat
                                    :label="$t('buttons.shopNow')" />
                            </div>
                        </q-img>
                    </div>
                    <div class="rounded-borders col-12 col-md-6 full-height">
                        <q-img class="rounded-borders full-width full-height"
                            src="https://cdn.quasar.dev/img/parallax1.jpg">
                            <div class="absolute-bottom text-center">
                                <q-btn class="full-width" icon="shopping_cart_checkout" flat
                                    :label="$t('buttons.shopNow')" />
                            </div>
                        </q-img>
                    </div>
                </div>
            </q-carousel-slide>
        </q-carousel>
    </div>
</template>

<script setup lang="ts">


import { ref, reactive, computed } from 'vue';
import { useAuthStore } from './../../../stores/data-store';
import { useQuasar } from 'quasar';
import { onBeforeUnmount } from 'vue';
import { useI18n } from "vue-i18n";

defineOptions({
    name: 'Users'
});
export type SelectedButtonType = 'admin' | 'seller' | 'customer';
const { t } = useI18n()
const dataUserPage = reactive({
    slideInitial: 'first',
    slideCategories: ref(1),

    $q: useQuasar(),
    formStatus: false,
    confirmation: false,
    confirmationChoice: '',
    showTooltip: false,
    formChoice: '',
    selectedButton: ref<SelectedButtonType>('admin'),
    skeletonTable: false,
    // Filter table
    filterToggle: {
        breakfast: true,
        lunch: true,
        dinner: true,
    },
    timer: null as null | ReturnType<typeof setTimeout>,
    search: '',
    searchQuery: '',
    showPassword: false,
    formUserData: {
        name: '',
        email: '',
        password: ''
    }

})

</script>

<style lang="scss">
.custom-caption {
    text-align: center;
    padding: 12px;
    color: white;
    background-color: rgba(0, 0, 0, .3);
}
</style>