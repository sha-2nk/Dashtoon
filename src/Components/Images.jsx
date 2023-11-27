import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';

const Images = (props) => {
  const className =
    props.typeo === 'static'
      ? 'text-center mx-6 my-2 h-5/6 w-auto rounded-lg border-gray-400 shadow-md hover:shadow-lg hover:cursor-pointer overflow-hidden'
      : 'mx-6 h-auto text-center w-auto my-2 rounded-lg border-gray-400 shadow-md hover:shadow-lg hover:cursor-pointer overflow-hidden';

  const [showButtons, setShowButtons] = useState(false);

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = props.imgurl;
    link.download = 'image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className={className}
      style={{ position: 'relative' }}
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      <img className="object-fill transition delay-75 rounded-lg hover:scale-105" src={props.imgurl} alt="" />
      {showButtons && (
        <div className="absolute bottom-1 right-1 p-2 cursor-pointer hover:scale-[1.2] transition delay-50 duration-300">
          <DownloadForOfflineOutlinedIcon fontSize="large" className='text-white' onClick={downloadImage} />
        </div>
      )}
    </motion.div>
  );
};

export default Images;
