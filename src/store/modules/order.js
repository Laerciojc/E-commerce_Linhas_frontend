import axios from "axios";

const state = {
};

const getters = {
};

const actions = {
  async GetOrders() {
    try {
      let response = await axios.get("orders")
      if (response == null || response.status == 404) {
        return []
      }
      else if (response.status != 200) {
        throw new Error('Ocorreu um erro na API');
      }
      return response.data
    } catch (error) {
      console.log(error);
      return []
    }

  },
  async SetOrderStatus(orderId, status) {
    try {
      let response = await axios.put(`orders/${orderId}`, { "status": status });
      if (response === null || response.status != 200) {
        throw new Error('Ocorreu um erro na API');
      }
    } catch (error) {
      console.log(error);
    }
  }
};

const mutations = {

};

export default {
  state,
  getters,
  actions,
  mutations,
};