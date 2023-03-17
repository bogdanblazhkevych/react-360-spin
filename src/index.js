import React, { useState, useEffect } from 'react'

export default function Spin360({imageArray, width, height, speed, border, autoPlay, autoPlaySpeed, reverse}){
        
    const containerStyle = {
        width: width,
        height: height,
        border: border,
        position: "relative"
    }
    
    const imageStyle = {
        width: "100%",
        height: "100%"
    }  
    
    var imageCount = imageArray.length;
    var interval = width / (imageCount * speed);

    var [autoPlayHook, setAutoPlayHook] = useState(autoPlay)
    var [isDragging, setIsDragging] = useState(false);
    var [initialMousePosition, setInitialMousePosition] = useState(null)
    var [currentMousePosition, setCurrentMousePosition] = useState(null) 
    var [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(()=>{

        async function delay(time){

            return new Promise(resolve => setTimeout(resolve, time));

        }

        async function autoPlay(){

            let currentCount = 0;

            while(autoPlayHook){
                
                await delay(autoPlaySpeed)

                currentCount = reverse ? currentCount - 1 : currentCount + 1;

                if(currentCount < 0){
                    currentCount = imageCount - 1;
                    setCurrentImageIndex(currentCount);
                    continue
                }

                if(currentCount === imageCount){
                    currentCount = 0;
                    setCurrentImageIndex(currentCount);
                    continue
                }

                setCurrentImageIndex(currentCount)
                
            }

        }

        autoPlay()

    }, [])

    function getDisplayImage(){
        return imageArray[currentImageIndex]
    }

    const body = document.querySelector("body");

    function handleMouseDown(e){
        setInitialMousePosition(e.clientX)
        setIsDragging(true)
        body.style.position = 'relative';
        body.style.overflow = 'hidden';
      }

    function handleMouseUp(e){
        setIsDragging(false)
        setCurrentMousePosition(null)
        body.style.position = 'static';
        body.style.overflow = 'visible';
    }
    
    function handleMouseLeave(){
        setIsDragging(false)
        setCurrentMousePosition(null)
    }

    function handleMouseMove(e){

        if(!isDragging || autoPlayHook){return};

        setCurrentMousePosition(e.clientX);

        if(currentMousePosition === null){return};

        let localIndex = currentImageIndex;

        if((initialMousePosition - currentMousePosition) > interval){
            setInitialMousePosition((initialMousePosition) => initialMousePosition - (initialMousePosition - currentMousePosition));
            localIndex = reverse ? currentImageIndex - 1 : currentImageIndex + 1;
        }
        
        if((initialMousePosition - currentMousePosition) < -interval){
            setInitialMousePosition((initialMousePosition) => initialMousePosition + interval);
            localIndex = reverse ? currentImageIndex + 1 : currentImageIndex - 1
        }
        
        if(localIndex < 0){
            localIndex = imageCount - 1;
            setCurrentImageIndex(localIndex);
        }else if(localIndex === imageCount){
            localIndex = 0;
            setCurrentImageIndex(localIndex);
        }else{
            setCurrentImageIndex(localIndex);
        }
        
    }

    return (
        <>
            <div style={containerStyle} onMouseMove={handleMouseMove}
                                        onPointerMove={handleMouseMove}
                                        onMouseDown={handleMouseDown}
                                        onPointerDown={handleMouseDown}
                                        onMouseUp={handleMouseUp}
                                        onPointerUp={handleMouseUp}
                                        onMouseLeave={handleMouseLeave}
                                        onPointerLeave={handleMouseLeave}>
                <img src={getDisplayImage()} draggable={false} style={imageStyle}></img>
            </div> 
        </>
      
    )
}