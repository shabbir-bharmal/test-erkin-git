<template>
    <navbar></navbar>
    <div
        class="overflow-x-auto w-full min-w-full align-middle sm:rounded-md"
    >
        <div class="flex place-content-end mb-4">
            <button
                class="cursor-pointer bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
                <router-link :to="{ name: 'users.create' }" class=""
                    >Create User</router-link
                >
            </button>
        </div>

        <table class="w-full min-w-full border divide-y divide-gray-200 overflow-auto">
            <thead>
                <tr>
                    <th class="px-6 py-3 bg-gray-50">
                        <span
                            class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase"
                            >Photo</span
                        >
                    </th>
                    <th class="px-6 py-3 bg-gray-50">
                        <span
                            class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase"
                            >Name</span
                        >
                    </th>
                    <th class="px-6 py-3 bg-gray-50">
                        <span
                            class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase"
                            >Email</span
                        >
                    </th>
                    <th class="px-6 py-3 bg-gray-50">
                        <span
                            class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase"
                            >Phone</span
                        >
                    </th>
                    <th class="px-6 py-3 bg-gray-50">
                        <span
                            class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase"
                            >Company</span
                        >
                    </th>
                    <th class="px-6 py-3 bg-gray-50">
                        <span
                            class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase"
                            >Address</span
                        >
                    </th>
                    <th class="px-6 py-3 bg-gray-50">
                        <span
                            class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase"
                            >Action</span
                        >
                    </th>
                </tr>
            </thead>

            <tbody class="bg-white divide-y divide-gray-200 divide-solid">
                <template v-for="item in users" :key="item.id">
                    <tr class="bg-white">
                        <td
                            class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap"
                        >
                            <img
                                class="h-50 w-50 rounded-full"
                                :src="'/' + item.photo"
                            />
                        </td>
                        <td
                            class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap"
                        >
                            {{ item.name + " " + item.surname }}
                        </td>
                        <td
                            class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap"
                        >
                            {{ item.email }}
                        </td>
                        <td
                            class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap"
                        >
                            {{ item.phone }}
                        </td>

                        <td
                            class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap"
                        >
                            {{ item.company }}
                        </td>

                        <td
                            class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap"
                        >
                            {{ item.address }}
                        </td>
                        <td
                            class="px-6 py-4 text-sm text-center leading-5 text-gray-900 whitespace-no-wrap"
                        >
                            <router-link
                                :to="{
                                    name: 'users.edit',
                                    params: { id: item.id },
                                }"
                                class="mr-2 ..."
                                >Edit</router-link
                            >

                            <button
                                class="cursor-pointer"
                                v-on:click="view"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                View
                            </button>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>

        <!-- Modal -->
        <Dialog
            as="div"
            :open="isOpen"
            @close="setIsOpen"
            class="fixed inset-0 z-10 overflow-y-auto"
        >
            <div class="flex items-center justify-center min-h-screen">
                <DialogOverlay class="fixed inset-0 bg-black opacity-30" />

                <div class="relative max-w-sm mx-auto bg-white rounded">
                    <DialogTitle>Complete your order</DialogTitle>
                </div>
            </div>
        </Dialog>
    </div>
</template>

<script>
import useUsers from "../composables/users";
import { onMounted, ref } from "vue";
import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/outline";
import Navbar from "../Components/Navbar.vue";

export default {
    components: {
        Navbar,
        Dialog,
        DialogOverlay,
        DialogTitle,
        TransitionChild,
        TransitionRoot,
        CheckIcon,
    },
    setup() {
        const { users, getUsers } = useUsers();

        onMounted(getUsers);

        const openModel = false;
        const open = ref(false);
        const isOpen = ref(true);

        return {
            users,
            openModel,
            open,
            isOpen,
        };
    },
    methods: {
        view() {
            this.openModel = true;
            this.open = true;
        },
        close() {
            this.openModel = false;
            this.open = false;
        },
        setIsOpen(value) {
            this.isOpen = value;
        },
    },
};
</script>
