export const throttle = (func: Function, timeout: number) => {

  let ready: boolean = true;

  return () => {
    if (!ready) {
      return;
    }

    ready = false;
    func();
    setTimeout(() => {
      ready = true;
    }, timeout);
  };
}