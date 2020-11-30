import { LOADER } from '../../constants/loader/loaderConst';
export function setLoader() {
  return {
    type: LOADER,
    payload: true,
  };
}
export function unsetLoader() {
  return {
    type: LOADER,
    payload: false,
  };
}
