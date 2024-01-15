import imageCompression from "browser-image-compression";

export async function handleImageUpload(file: File) {

    console.log('originalFile instanceof Blob', file instanceof Blob); // true
    console.log(`originalFile size ${file.size / 1024 / 1024} MB`);

    const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
    }
    try {
        const compressedFile = await imageCompression(file, options);
        console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB

        return (compressedFile); // write your own logic
    } catch (error) {
        console.log(error);
    }

}