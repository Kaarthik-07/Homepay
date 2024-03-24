import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  StorageReference,
} from "firebase/storage";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";

function UserPay(): JSX.Element {
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const imagesListRef: StorageReference = ref(storage, "images/");

  const uploadFile = (): void => {
    if (imageUpload == null) return;
    const imageRef: StorageReference = ref(
      storage,
      `images/${imageUpload.name + uuidv4()}`
    );
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="w-1/2 h-80 top-0 border-2 border-black p-4 m-8">
      <div className="flex justify-center items-center">
      <input
        type="file"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          if (event.target.files) {
            setImageUpload(event.target.files[0]);
            alert("Image uploaded successfully")
          }
        }}
      />
      <button onClick={uploadFile} className="p-4 bg-violet-500 rounded-md hover:bg-green-500">Upload Image</button>
      {/* {imageUrls.map((url: string, index: number) => (
        <img key={index} src={url} alt={`Image ${index}`} />
      ))} */}
      </div>
    </div>
  );
}

export default UserPay;
