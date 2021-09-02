import ApiService from '../api.service'

export const LOGIN = 'login';

const SET_AUTH = 'setAuth';
const PURGE_AUTH = 'purgeAuth';

export default {
    state: {
        isAuth: false
    },
    getters: {
        isAuth: (state) => state.isAuth
    },
    actions: {
        [LOGIN]: async (context, credential) => {
            return new Promise((resolve, reject) => {
                ApiService.post('/auth/login').then((result) => {
                    context.commit('setAuth')
                    resolve(result)
                }).catch((err) => {
                    context.commit('purgeAuth', err)
                    reject(err)
                })
            })
        }
    },
    mutations: {
        [SET_AUTH]: (state, payload) => state.isAuth = true,
        [PURGE_AUTH]: (state, payload) => state.isAuth = false
    }
}