import {MMKV} from 'react-native-mmkv';
import {STORAGE_ID} from '../constant';

const AppKey = '123';

export const AppStorage = new MMKV({
  id: `${STORAGE_ID}`,
  encryptionKey: AppKey,
});

/**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */
export function readKeyStr(key: string) {
  try {
    return AppStorage.getString(key);
  } catch {
    return null;
  }
}

/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export function saveKeyStr(key: string, value: string) {
  try {
    AppStorage.set(key, value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
export function readKey(key: string) {
  try {
    const almostThere = AppStorage.getString(key);
    return typeof almostThere === 'string' ? JSON.parse(almostThere) : null;
  } catch {
    return null;
  }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export function saveKey(key: string, value: any) {
  try {
    AppStorage.set(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
export async function deleteKey(key: string) {
  try {
    AppStorage.delete(key);
  } catch {}
}

/**
 * Removes all from storage.
 *
 * @param key The key to kill.
 */
export async function clearAllStorage() {
  try {
    AppStorage.clearAll();
  } catch {}
}
