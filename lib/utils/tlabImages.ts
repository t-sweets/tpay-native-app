export const adjustImagePath = (
  path: string,
  defaultImage: any = require("../../assets/icon.png")
) => {
  return path
    ? {
        uri: path.match(/^https?:\/\//)
          ? path
          : `https://tpay.t-lab.cs.teu.ac.jp/${path}`
      }
    : defaultImage;
};
