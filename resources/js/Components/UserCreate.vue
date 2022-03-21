<template>
    <navbar></navbar>
    <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
        <p v-html="errors"></p>
    </div>

    <form class="space-y-6" @submit.prevent="saveUser">
        <div class="space-y-4 rounded-md shadow-sm">
            <div>
                <label
                    for="name"
                    class="block text-sm font-medium text-gray-700"
                    >Name</label
                >
                <div class="mt-1">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        v-model="form.name"
                    />
                </div>
            </div>

            <div>
                <label
                    for="surname"
                    class="block text-sm font-medium text-gray-700"
                    >Surname</label
                >
                <div class="mt-1">
                    <input
                        type="text"
                        name="surname"
                        id="surname"
                        class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        v-model="form.surname"
                    />
                </div>
            </div>

            <div>
                <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                    >Email</label
                >
                <div class="mt-1">
                    <input
                        type="text"
                        name="email"
                        id="email"
                        class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        v-model="form.email"
                    />
                </div>
            </div>

            <div>
                <label
                    for="phone"
                    class="block text-sm font-medium text-gray-700"
                    >Phone</label
                >
                <div class="mt-1">
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        v-model="form.phone"
                    />
                </div>
            </div>

            <div>
                <label
                    for="company"
                    class="block text-sm font-medium text-gray-700"
                    >Company</label
                >
                <div class="mt-1">
                    <input
                        type="text"
                        name="company"
                        id="company"
                        class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        v-model="form.company"
                    />
                </div>
            </div>

            <div>
                <label
                    for="address"
                    class="block text-sm font-medium text-gray-700"
                    >Address</label
                >
                <div class="mt-1">
                    <input
                        type="text"
                        name="address"
                        id="address"
                        class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        v-model="form.address"
                    />
                </div>
            </div>

            <div>
                <label
                    for="photo"
                    class="block text-sm font-medium text-gray-700"
                    >Photo</label
                >
                <div class="mt-1">
                    <input
                        ref="file"
                        v-on:change="handleFileUpload()"
                        type="file"
                        name="photo"
                        id="file"
                        class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>
            </div>
        </div>

        <div class="mt-5 py-4">
            <button
                type="submit"
                class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25"
            >
                Create
            </button>
            &nbsp;
            <button
                type="button"
                class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25"
            >
                <router-link :to="{ name: 'users.index' }" class=""
                    >Back</router-link
                >
            </button>
        </div>
    </form>
</template>

<script>
import useUsers from "../composables/users";
import { reactive, ref } from "vue";
import Navbar from "../Components/Navbar.vue";

export default {
    components: { Navbar },
    setup() {
        const form = reactive({
            name: "",
            email: "",
            address: "",
            surname: "",
            file: "",
        });

        const { errors, storeUser } = useUsers();

        const file = ref("");
        const saveUser = async () => {
            await storeUser({ ...form }, file.value);
        };

        return {
            form,
            errors,
            saveUser,
            file,
        };
    },
    methods: {
        handleFileUpload() {
            this.file = this.$refs.file.files[0];
        },
    },
};
</script>
