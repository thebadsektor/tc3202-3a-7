import React, { useRef, useState, useEffect } from 'react'
import { AiOutlineClose, AiFillPlayCircle } from 'react-icons/ai'
import { motion } from 'framer-motion'
import videoFile from '../assets/video1.mp4'

const Video = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef(null)

    useEffect(() => {
        document.body.style.overflow = isPlaying ? 'hidden' : 'auto'
    }, [isPlaying])

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    };

    const closeVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause()
            videoRef.current.currentTime = 0
        }
        setIsPlaying(false)
    };

    return (
        <div className='relative flex justify-center items-center w-full'>
                    {/* Background Overlay */}
                    {isPlaying && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ duration: 0.5 }}
                            className='fixed inset-0 bg-black z-20'
                        />
                    )}
        
                    {/* Video Container with Animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50, rotateX: 25 }}
                        animate={{
                            opacity: 1,
                            scale: isPlaying ? 1 : 1,
                            y: isPlaying ? 0 : 50,
                            rotateX: isPlaying ? 0 : 25,
                        }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className={`z-20 ${isPlaying ? 'fixed inset-0 flex items-center justify-center px-6 md:px-12' : 'relative w-full max-w-3xl mx-auto px-6 md:px-0 mt-[-330px]'}`}
                    >
                        {/* Video Element */}
                        <div className='relative w-full max-w-3xl'>
                            {/* Close Button (Upper Right of Video) */}
                            {isPlaying && (
                                <button
                                    onClick={closeVideo}
                                    className='absolute top-4 right-4 bg-opacity-70 text-white bg-black p-2 rounded-full z-50 hover:bg-opacity-90 transition duration-300 cursor-pointer'
                                >
                                    <AiOutlineClose className='text-md' />
                                </button>
                            )}
        
                            <video
                                ref={videoRef}
                                src={videoFile}
                                className='relative rounded-lg shadow-[0px_0px_40px_10px_rgba(92,212,204,0.5)] w-full'
                                style={isPlaying ? {} : { transform: 'perspective(900px) rotateX(20deg)' }}
                                muted
                                controls={isPlaying}
                            />
        
                            {/* Play Button Overlay (Only Shows When Paused) */}
                            {!isPlaying && (
                                <button
                                    onClick={togglePlay}
                                    className='absolute inset-0 flex items-center justify-center cursor-pointer'
                                >
                                    <AiFillPlayCircle className='w-10 h-10 text-black drop-shadow-lg' />
                                </button>
                            )}
                        </div>
                    </motion.div>
                </div>
    )
}

export default Video
