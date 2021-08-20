export const loadLock = () => {
  let lock = localStorage.getItem("lock");
  return JSON.parse(lock!);
};

export const saveLock = (isLock: boolean, password: any) => {
  localStorage.setItem("lock", JSON.stringify({ isLock, password }));
};
