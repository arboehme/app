import Vue from "vue";
import { forEach } from "lodash";
import { SET_RELATIONS, ADD_RELATION, UPDATE_RELATION } from "../../mutation-types";

export default {
  [SET_RELATIONS](state, relations) {
    forEach(relations, (relation, i) => {
      Vue.set(state, i, relation);
    });
  },
  [ADD_RELATION](state, relation) {
    state = [...state, relation];
  },
  [UPDATE_RELATION](state, updatedRelation) {
    state = state.map(relation => {
      if (relation.id === updatedRelation.id) return updatedRelation;
      return relation;
    });
  }
};
