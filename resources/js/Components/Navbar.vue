<template>
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 mb-3 pb-3 bg-gray-600">
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
                    <router-link
                        class="block text-xl lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                        :to="{ name: 'users.index' }"
                        >Users</router-link
                    >
            </div>
        </div>
    </nav>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    setup() {},
});
</script>
