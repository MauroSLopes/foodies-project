'use client';
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
    const imageInput = useRef();
    const [pickedImage, setPickedImage] = useState();

    function handleImageChange(event) {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }

        fileReader.readAsDataURL(file);
    }
    function OnPickerButtonClick() {
        imageInput.current.click();
    }

    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <input
                className={classes.input}
                type="file"
                id={name}
                accept="image/png, image/jpeg"
                name={name}
                onChange={handleImageChange}
                ref={imageInput}
                required />
            <button
                className={classes.button}
                type="button"
                onClick={OnPickerButtonClick}>
                Pick your image
            </button>
            <div className={classes.preview}>
                {!pickedImage ? <p>No image picked yet.</p> : <Image src={pickedImage} alt="User selected image." fill />}
            </div>
        </div>
    </div>
}