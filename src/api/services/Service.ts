import Cookies from "js-cookie";
import { NotAuthorizedError } from "../models/errors/NotAuthorizedError";

class Service {
    protected url: string = "";

    constructor(url: string) {
        this.url = url
    }

    protected async request(resource: string, options: any = {}) {
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...options?.headers
        }

        const token = Cookies.get('token');

        if (token) {
            headers.Authorization = `bearer ${token}`;
        }

        try {
            const res = await fetch(this.url + resource, {
                ...options,
                headers: headers,
                // mode: "no-cors",
            })
            if (res.ok) {
                return await res.json()
            }
            if (res.status === 401) {
                throw new Error('Authorization Error')
            }
            if (res.status === 401) {
                throw new Error('Not Found')
            }
        } catch (e: any) {
            throw new Error(e.message)
        }
    }
}

export default Service;
