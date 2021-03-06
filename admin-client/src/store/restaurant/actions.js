import {
  getRestaurantList,
  addRestaurant,
  getRestaurant,
  removeRestaurant,
  updateRestaurant
} from '@/services/restaurant'

export default {
  getList ({ commit, state }, data) {
    return getRestaurantList(data).then(result => {
      if (result.success) {
        commit('GET_LIST_SUCCESS', result.data)
        return result.data
      } else {
        commit('FAIL', result.message)
      }
    })
  },
  addRestaurant ({ commit, state }, data) {
    return addRestaurant(data).then(result => {
      if (result.success) {
        return result
      } else {
        commit('FAIL', result.message)
      }
    })
  },
  getRestaurant ({ commit, state }, data) {
    return getRestaurant(data).then(result => {
      if (result.success) {
        return result.data.data
      } else {
        commit('FAIL', result.message)
      }
    })
  },
  removeRestaurant ({ commit, state }, data) {
    return removeRestaurant(data).then(result => {
      if (result.success) {
        commit('REMOVE_SUCCESS', result.message)
        return result
      } else {
        commit('FAIL', result.message)
      }
    })
  },
  updateRestaurant ({ commit, state }, data) {
    return updateRestaurant(data).then(result => {
      if (result.success) {
        commit('REMOVE_SUCCESS', result.message)
        return result
      } else {
        commit('FAIL', result.message)
      }
    })
  }
}
