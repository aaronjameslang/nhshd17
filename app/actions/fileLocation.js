// @flow
import type { flatFileLocationStateType } from '../reducers/fileLocation';

export const SAVE_FILE_PATH = 'SAVE_FILE_PATH';

export function save() {
  return {
    type: SAVE_FILE_PATH
  };
}

export function saveFilePath() {
  return (dispatch: () => void, getState: () => flatFileLocationStateType) => {
    const { filePath } = getState();

    console.log( filePath )

    dispatch(save());
  };
}
