
class Service {
    protected url: string = "";

    constructor(url: string) {
        this.url = url
    }

    async request(resource: string, options: any = {}, customToken: string = null) {
        console.log(this.url + resource);
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...options?.headers
        }

        // const token = AuthStorage.GetAuthToken();

        // if (token) {
        //     headers.Authorization = `Bearer ${token}`;
        // }

        if (customToken) {
            headers.Authorization = `Bearer ${customToken}`;
        }


        return fetch(this.url + resource, {
            ...options,
            headers: headers,
            // mode: "no-cors",
        })
            .then(res => res.json())
            .then(result => result)
            .catch(err => ({
                success: false,
                error: err
            }));
    }
}

export default Service;
