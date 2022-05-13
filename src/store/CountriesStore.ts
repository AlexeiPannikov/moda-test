import CountriesService from '@/api/services/CountriesService'
import { defineStore } from 'pinia'

interface IState {
    countryList: [],
    countriesNames: string[]
}

export const useCountriesStore = defineStore('countries', {
    state: () => {
        return {
            countryList: [],
            countriesNames: []
        } as IState
    },

    actions: {
        async getCountries() {
            this.countryList = await CountriesService.getCountries()
            this.countriesNames = this.countryList.map((item: any) => item.name.common).sort()
        }
    }
})