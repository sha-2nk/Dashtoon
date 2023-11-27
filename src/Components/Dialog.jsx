import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

import MenuIcon from '@mui/icons-material/Menu';

const TempDialog = (props) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const click = () => {
        window.open('https://github.com/JKP-2001/Dashtoon-Assignment', '_blank');
    }

    return (
        <>
            <MenuIcon onClick={handleOpen} variant="gradient"/>

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Github Project Link.</DialogHeader>
                <DialogBody className="text-center">
                    <button className="transition delay-150 duration-300 ease-in-out bg-blue-700 text-sm sm:text-base px-2 py-2 rounded-md text-white hover:scale-110 font-Button " onClick={click}>Project Repo</button>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Close</span>
                    </Button>

                </DialogFooter>
            </Dialog>
        </>
    );
};

export default TempDialog;
