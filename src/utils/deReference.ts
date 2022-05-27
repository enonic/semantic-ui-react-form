import cloneDeep from 'lodash.clonedeep';


export function deReference<Type>(ref :Type) {
  return cloneDeep(ref);
} // deReference

// Lossy on: functions, undefined, Infinity, RegExps, Maps, Sets, Blobs, FileLists, ImageDatas, sparse Arrays, Typed Arrays and other complex types
//return JSON.parse(JSON.stringify(ref));
