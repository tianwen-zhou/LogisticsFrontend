import { AuthProvider, HttpError } from "react-admin";

export const authProvider: AuthProvider = {
    // 登录函数
    login: async ({ username, password }) => {
        const request = new Request('http://localhost:5137/api/Auth/Login', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({ username, password }),
        });

        const response = await fetch(request);
        if (!response.ok) {
            throw new Error('Invalid credentials');
        }

        const { token } = await response.json();
        // 保存登录令牌到本地存储
        localStorage.setItem('authToken', token);
    },

    // 登出函数
    logout: () => {
        localStorage.removeItem('authToken');
        return Promise.resolve();
    },

    // 验证登录状态
    checkAuth: () => {
        return localStorage.getItem('authToken') ? Promise.resolve() : Promise.reject();
    },

    // 获取权限（可扩展）
    getPermissions: () => Promise.resolve(),
};

export default authProvider;