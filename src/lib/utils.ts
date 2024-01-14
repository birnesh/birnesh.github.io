export const mergeClasses = (...classNames:string[]) => {
  let className = "";
  classNames.map((item) => {
    if (item) {
     className =  className + item + " ";
    }
  });
  return className;
};
