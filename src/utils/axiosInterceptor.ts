import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const { method, url, headers } = config;
    headers.setContentType('application/json');
    headers.setAuthorization(`Bearer ${localStorage.getItem('token')}`)
    // Set Headers Here
    // Check Authentication Here
    // Set Loading Start Here

    if (method === "get") {
        config.timeout = 15000;
    }
    return config;
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
    /* const { method, url } = response.config; */
    const { status } = response;

    return response;
};


const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
    if (axios.isAxiosError(error)) {
        const { message } = error;
        const { method, url } = error.config as AxiosRequestConfig;
        const { statusText, status } = error.response as AxiosResponse ?? {};
        switch (status) {
            case 400: {
                // "Login required"
                break;
            }
            case 401: {
                // "Login required"
                console.log('Login required')

                break;
            }
            case 403: {
                // "Permission denied"
                break;
            }
            case 404: {
                console.log('iNTERCEPTOR ------- otro errorspage no encontrada');
                break;
            }
            case 500: {
                // "Server error"
                break;
            }
            default: {
                console.log('iNTERCEPTOR ------- otro errors');
                break;
            }
        }
    } else {

    }
    return Promise.reject(error);
};
export const setupInterceptors = (instance: AxiosInstance): AxiosInstance => {
    instance.interceptors.request.use(onRequest, onErrorResponse);
    instance.interceptors.response.use(onResponse, (error: AxiosError) => {
        axios.isAxiosError(error)
        const { message } = error;
        const { method, url } = error.config as AxiosRequestConfig;
        const { statusText, status } = error.response as AxiosResponse ?? {};
        var descripcionError = '';
        console.log('ERROR', error)
        switch (status) {
            case 400: {
                descripcionError = 'Error bad request'
                break;
            }
            case 401: {
                descripcionError = 'No autorizado'
                window.location.reload();
                localStorage.removeItem('token')
                break;
            }
            case 403: {
                descripcionError = 'Permiso denegado'
                break;
            }
            case 404: {
                descripcionError = 'Pagina no encontrada'
                break;
            }
            case 405: {
                descripcionError = 'Error de validacion'
                break;
            }
            case 500: {
                descripcionError = 'Error 500 '
                break;
            }
            default: {
                descripcionError = 'Desconocido servidor desconectado'
                break;
            }
        }
        return {
            data: {
                status: 2,
                message: descripcionError,
                data: null
            }
        }
    });

    return instance;
};