import axios from "axios";

const imageInstance = axios.create({
  baseURL: "https://image-uploader-anhhtus.herokuapp.com/api",
});

export const upload = (base64Image: String) => {
  const url = "/upload";
  return imageInstance.post(url, { data: base64Image });
};

export const UploadFile = async (file: any) => {
  const CLOUDINARY_NAME = "dqsykuvvc";
  const CLOUDINARY_API = `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload/`;
  const CLOUDINARY_PRESET = "paqqa4is";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_PRESET);

  const response = await axios.post(CLOUDINARY_API, formData, {
    headers: {
      "Content-Type": "application/form-data",
    },
  });
  return response;
};
