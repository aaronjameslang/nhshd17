// @flow
export type flatFileLocationStateType = {
  state: string
};

type actionType = {
  type: string
};

export default function save(state: string = '/tmp/followapp', action: actionType) {
  if (action.type == 'save') {
    state = action.value
  }

  return state
};
