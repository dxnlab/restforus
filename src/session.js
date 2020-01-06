import axios from 'axios'
import dummy from '@/dummy_api.json'

const HOST = 'http://localhost:5000';


export default {
    account: null,
    ajax(method, endpoint, params) {
        return new Promise((rs, rj) => {
            try {
                rs(dummy[method.toLowerCase()][endpoint]);
            } catch {
                rj(method, endpoint, params);
            }
        });
        //return axios[method](`${HOST}/${endpoint}`, params);
    },
    try_login() {

    },
    try_logout() {

    },
    // TODO: list projects affiliated
    list_projects(owner) {

    },
    // TODO: list api documents order by recent updates
    list_rest_endpoints(owner, project) {

    },
    list_rest_models(owner, project) {

    }

}