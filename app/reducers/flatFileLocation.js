// @flow
export type flatFileLocationStateType = {
  location: string
};

export default function fileLocation(state: string = '/tmp/followapp') {
  return state;
};
