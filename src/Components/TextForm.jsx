import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

import { Textarea } from "@material-tailwind/react";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import showToast from "../Utils/showToast";

const TextForm = (props) => {
    const { open, setOpen, handleOpen } = props


    const imageState = useSelector((state) => state.image);

    const handleOpen1 =  () => {
        if(imageState.data.length>=10){
            showToast({
                msg:"You have reached the maximum limit of 10 images",
                type:"error",
                duration:3000,
            })
        }else{
            setOpen(!open)
        }
    };


    return (
        <>
            {!imageState.loading?<Button onClick={handleOpen1} variant="gradient" className="bg-pink-400 hover:bg-pink-800 font-handwritten2">
                Craft Comic Strip
            </Button>:

            <Button variant="gradient" className="bg-pink-400 font-handwritten2">
                
                <Loader />
            </Button>}
            <Dialog open={open} handler={handleOpen1}>
                <DialogHeader className="font-handwritten2 ">Design Your Story in Pixels!</DialogHeader>
                <DialogBody> 
                    <SearchBar handleOpen={handleOpen}/>
                    {/* <Textarea color="lightBlue" size="regular" outline={true} label="Enter your text here" className="font-handwritten2"/> */}
                </DialogBody>
                
            </Dialog>
        </>
    );
};

export default TextForm;
