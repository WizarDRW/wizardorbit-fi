import * as Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

/**
 * Service to call HTTP request via Axios
 */
let _app = null;
const ApiService = {
  init(app) {
    _app = app;
    _app.use(VueAxios, axios);
    _app.axios.defaults.baseURL = "/service/api/v1/";
  },

  /**
   * Set the default HTTP request headers
   */
  setHeader() {
    _app.axios.defaults.withCredentials = true;
  },
  query(resource, params) {
    return _app.axios.get(resource, params).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  },

  /**
   * Send the GET HTTP request
   * @param resource
   * @param slug
   * @returns {*}
   */
  async get(resource, slug = "") {
    return await _app.axios.get(`${resource}/${slug}`, this.setHeader());
  },

  /**
   * Set the POST HTTP request
   * @param resource
   * @param params
   * @returns {*}
   */
  async post(resource, params) {
    return await _app.axios.post(`${resource}`, params);
  },

  /**
   * Send the UPDATE HTTP request
   * @param resource
   * @param slug
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  async update(resource, slug, params) {
    return await _app.axios.put(`${resource}/${slug}`, params);
  },

  /**
   * Send the PUT HTTP request
   * @param resource
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  async put(resource, params) {
    return await _app.axios.put(`${resource}`, params);
  },

  /**
   * Send the DELETE HTTP request
   * @param resource
   * @returns {*}
   */
  async delete(resource) {
    return await _app.axios.delete(resource).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  }
};

export default ApiService;