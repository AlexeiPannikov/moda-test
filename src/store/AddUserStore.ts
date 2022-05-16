import { AddUserModel } from './../pages/settings-pages/users/add-user/models/AddUserModel';
import CountriesService from '@/api/services/CountriesService'
import { defineStore } from 'pinia'

interface IState {
    addUserModel: AddUserModel
}

export const useAddUserStore = defineStore('add-user', {
    state: () => {
        return {
            addUserModel: new AddUserModel()
        } as IState
    },

    actions: {
        
    }
})