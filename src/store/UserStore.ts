import { UserModel } from './../pages/settings-pages/users/components/models/UserModel';
import { AddUserModel } from './../pages/settings-pages/users/add-user/models/AddUserModel';
import CountriesService from '@/api/services/CountriesService'
import { defineStore } from 'pinia'
import AuthService from '@/api/services/AuthService';
import { LoginRequest } from '@/api/models/requests/LoginRequest';
import Cookies from 'js-cookie';
import { StateModel } from './models/StateModel';

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            state: new StateModel<UserModel>()
        }
    },

    actions: {
        async login(data: LoginRequest) {
            this.state.startLoading()
            try {
                const res = await AuthService.login(data)
                if (res) {
                    this.state.resetError()
                    this.getCurrentUser()
                }
            } catch (e: any) {
                this.state.error = e.message
            } finally {
                this.state.endLoading()
            }
        },

        async getCurrentUser() {
            this.state.startLoading()
            try {
                const res = await AuthService.getCurrentUser()
                if (res) {
                    this.state.resetError()
                    this.state.value = new UserModel({
                        id: res.id,
                        name: res.name,
                        email: res.email,
                        avatar: res.avatar
                    })
                }
            } catch (e: any) {
                this.state.value = null;
                this.state.error = e.message
            } finally {
                this.state.endLoading()
            }
        },

        async logout(): Promise<boolean> {
            this.state.startLoading()
            try {
                const res = await AuthService.logout()
                if (res) {
                    this.$reset()
                    return true
                }
            } catch (e: any) {
                this.state.error = e.message
            } finally {
                this.state.endLoading()
            }
        }
    }
})