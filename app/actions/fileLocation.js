// @flow
import type { flatFileLocationStateType } from '../reducers/fileLocation';
import { state } from '../reducers/fileLocation';

export const SAVE_FILE_PATH = 'SAVE_FILE_PATH';

export function getFilePath() {
  return (dispatch: () => void, getState: () => flatFileLocationStateType) => {
    const { filePath } = getState();
    return filePath
  }
}

export function saveFilePath(newFilePath) {
  return (dispatch: () => void) => {
    dispatch({ type: 'save', value: newFilePath })
  }
}
