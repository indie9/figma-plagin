const axios = require("axios").default;
const inst = axios.create({
  baseURL: "https://api.ocr.space/parse/",
});

export const RecoTest = (url, lang) => {
  let resp = `imageurl?apikey=K86916654288957&url=${url}`;
  if (lang !== "lat") {
    resp += `&language=${lang}`;
  }
  return inst
    .get(resp)
    .then((res) => {
      return res;
    })
    .catch((err) => {});
};

// export const RecoTest = (image) => {
//   console.log(image);
//   let config = {
//     headers: {
//       apikey: "figmarecognize_x22",
//     },
//   };
//   let formdata = new FormData();

//   formdata.append("file", image);
//   formdata.append("isOverlayRequired", "true");
//   formdata.append("OCREngine", "2");

//   return inst
//     .post("/image", formdata, config)
//     .then((res) => {
//       //console.log(res);
//       return res;
//     })
//     .catch((err) => {});
// };
