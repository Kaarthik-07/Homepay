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

function AdminPage(): JSX.Element {
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
        setImageUrls([url]); 
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
    <div className="flex justify-evenly items-end">
<div className="grid grid-cols-4 gap-14">
  {imageUrls.map((url: string, index: number) => (
    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
      <img src={url} alt={`Image ${index}`} className="w-30 h-40 object-cover mb-4 rounded-lg" />
      <div className="text-center">
        <p className="text-gray-800 font-semibold">Image {index + 1}</p>
        <p className="text-gray-600">Description of the image</p>
      </div>
    </div>
  ))}
</div>
</div>

  );
}

export default AdminPage;
