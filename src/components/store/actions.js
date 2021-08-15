import * as types  from './mutations-types';

export const ActionSetUser = ({ commit}, payload) => {
commit(types.SET_USER, payload)
}