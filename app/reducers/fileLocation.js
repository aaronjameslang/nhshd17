// @flow
export type flatFileLocationStateType = {
  state: string
};

type actionType = {
  type: string
};

export default function save(state: string = '/tmp/', action: actionType) {
  if (action.type == 'save') {
    state = action.value
  }

  return state
};
