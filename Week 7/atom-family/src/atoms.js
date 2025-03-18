import { atomFamily, selectorFamily } from "recoil";
import { TODOS } from "./todos";
import { useEffect } from "react";
import axios from 'axios';

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: 'todosAtomFamilySelector',
    get: id => async ({get}) => {
      const response = await axios.get('http://localhost:4000/notification')
      console.log(response.data[id]);
      console.log(id);
      return response.data[id]
    }
  })
});
