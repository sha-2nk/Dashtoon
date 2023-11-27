import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
  } from "@material-tailwind/react";
   
  export function Note() {
    return (
      <Popover 
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <PopoverHandler >
          <Button className="bg-white text-black font-handwritten2">Press Me</Button>
        </PopoverHandler>
        <PopoverContent>
          <div className="font-handwritten2">Click/Touch on the image to download it.</div>
        </PopoverContent>
      </Popover>
    );
  }