import Service from "./Service";

class CountriesService extends Service {

    constructor(url = "https://restcountries.com/") {
        super(url);
    }

    async getCountries() {
        return await this.request("v3.1/all")
    }
}

export default new CountriesService();