import { LoginResponse } from './../models/responses/LoginResponse';
import Cookies from "js-cookie";
import { LoginRequest } from "../models/requests/LoginRequest";
import Service from "./Service";
import { GetCurrentUserResponse } from '../models/responses/GetCurrentUserResponse';

class AuthService extends Service {

    constructor(url = "http://moda.elok.bike/api/v1/") {
        super(url);
    }

    async login(data: LoginRequest): Promise<boolean> {
        try {
            const res: LoginResponse = await this.request("auth/login", { method: 'POST', body: JSON.stringify(data) })
            if (res) {
                Cookies.set('token', `${res.access_token}`)
                return true
            }
            return false
        } catch (e: any) {
            console.error(e.message);
            throw new Error(e.message)
        }
    }

    async getCurrentUser(): Promise<GetCurrentUserResponse> {
        try {
            const res: GetCurrentUserResponse = await this.request("auth/me", { method: 'POST' })
            if (res) {
                return res
            }
        } catch (e: any) {
            console.error(e.message);
            throw new Error(e.message)
        }
    }

    async refreshToken(): Promise<boolean> {
        try {
            const res: LoginResponse = await this.request("auth/refresh", { method: 'POST' })
            if (res) {
                Cookies.set('token', `${res.access_token}`)
                return true
            }
            return false
        } catch (e: any) {
            console.error(e.message);
            throw new Error(e.message);
        }
    }

    async logout(): Promise<boolean> {
        try {
            const res = await this.request("auth/logout", { method: 'POST' })
            if (res) {
                Cookies.remove('token')
                return true
            }
            return false
        } catch (e: any) {
            console.error(e.message);
            throw new Error(e.message);
        }
    }
}

export default new AuthService();