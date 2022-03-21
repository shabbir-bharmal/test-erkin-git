import {
    ref
} from 'vue'
import axios from 'axios'
import {
    useRouter
} from 'vue-router'

export default function useUsers() {
    const user = ref([])
    const users = ref([])

    const errors = ref('')
    const router = useRouter()

    const getUsers = async () => {
        let response = await axios.get('/api/users')
        users.value = response.data.data
    }

    const getUser = async (id) => {
        let response = await axios.get(`/api/users/${id}`)
        user.value = response.data.data
    }

    const storeUser = async (data, file) => {
        errors.value = ''
        let formData = new FormData();
        console.log(file)
        if (file) {
            formData.append('photo', file);
        }

        formData.append('name', data.name);
        formData.append('surname', data.surname);
        formData.append('address', data.address);
        formData.append('phone', data.phone);
        formData.append('company', data.company);
        formData.append('email', data.email);

        try {
            await axios.post('/api/users', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            await router.push({
                name: 'users.index'
            })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' <br/>';
                }
            } else if (e.response.status === 500) {
                errors.value += e.message + ' <br/>';
            }
        }

    }

    const updateUser = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`/api/users/${id}`, user.value)
            await router.push({
                name: 'users.index'
            })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    return {
        errors,
        user,
        users,
        getUser,
        getUsers,
        storeUser,
        updateUser
    }
}
