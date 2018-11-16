export default {
  fetchLemons ({ commit }) {
    fetch('./static/lemons.json')
      .then(res => res.json())
      .then(data => commit('setLemons', data))
      .catch(err => console.error(err))
  }
}
