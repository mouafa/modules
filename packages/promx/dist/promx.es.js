function promix(promise) {
  return new Promise((resolve, reject) => {
    promise.then((res = null) => resolve([null, res]), (err = new Error('promix')) => resolve([err, null]));
  });
}

export default promix;
