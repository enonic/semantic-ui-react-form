import cloneDeep from 'lodash.clonedeep';

export const deReference = (ref) => {
  return cloneDeep(ref);

  // Lossy on: functions, undefined, Infinity, RegExps, Maps, Sets, Blobs, FileLists, ImageDatas, sparse Arrays, Typed Arrays and other complex types
  //return JSON.parse(JSON.stringify(ref));

} // deReference
