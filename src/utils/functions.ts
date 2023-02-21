export const getStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const setStorage = (key: string, value: string): void => {
  return localStorage.setItem(key, value);
};

export const destroyStorage = (key: string): void => {
  return localStorage.removeItem(key);
};

export const getSessionStorage = (key: string): string | null => {
  return sessionStorage.getItem(key);
};

export const setSessionStorage = (key: string, value: string): void => {
  return sessionStorage.setItem(key, value);
};

export const destroySessionStorage = (key: string): void => {
  return sessionStorage.removeItem(key);
};

export const checkImageExists = (
  url: string,
  callback: (err: Error | null, val: boolean) => void,
): void => {
  const img = new Image();

  img.onload = (): void => {
    callback(null, true);
  };

  img.onerror = (): void => {
    callback(new Error('error'), false);
  };

  img.src = url;
};

export function wrapPromise<T>(promise: Promise<T>): {
  read: () => T;
} {
  let status = 'pending';
  let response: T;

  const suspender = promise.then(
    (res: any) => {
      status = 'success';
      response = res;
    },
    (err: T) => {
      status = 'error';
      response = err;
    },
  );

  const read = (): T => {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw response;
      default:
        return response;
    }
  };

  return {read};
}

export const isEmptyObject = (param: any): boolean =>
  Object.keys(param).length === 0 && param.constructor === Object;
