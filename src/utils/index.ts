/** 使用json进行深克隆 */
export const deepCloneByJson = (T) => JSON.parse(JSON.stringify(T));

/** 手写的深拷贝，解决循环引用 */
export const deepClone = (obj) => {
  function clone(obj, hash) {
    const newobj = Array.isArray(obj) ? [] : {};
    hash = hash || new WeakMap();
    if (hash.has(obj)) {
      return hash.get(obj);
    }
    hash.set(obj, newobj);

    Object.keys(obj).forEach((i) => {
      if (obj[i] instanceof Object) {
        newobj[i] = clone(obj[i], hash);
      } else {
        newobj[i] = obj[i];
      }
    });
    return newobj;
  }
  return clone(obj, undefined);
};

/** 模拟ajax请求 */
export const mockAjax = async (flag?: boolean) => {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      if (flag) {
        resolve({
          code: 200,
          data: {
            id: 1,
            name: '张三',
            age: 18,
            token: Math.random(),
          },
        });
      } else {
        rejected({
          code: 400,
          msg: '请求失败',
        });
      }
    }, 500);
  });
};
