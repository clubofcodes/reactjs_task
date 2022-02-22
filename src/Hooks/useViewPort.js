import { useEffect, useState } from "react";

/**
 * 
 * @returns array of all type of windows size.
 */
export default function useViewPort() {
    //Setting size variable default value as of current viewport resolution.
    const [size, setSize] = useState([window.screen.height, window.screen.width, window.innerHeight, window.innerWidth, window.outerHeight, window.outerWidth]);

    //To set resize value to size State this hook is used.
    //This hook Will be called whenever window screen is modified/resized manually.
    useEffect(() => window.addEventListener("resize", () => setSize([window.screen.height, window.screen.width, window.innerHeight, window.innerWidth, window.outerHeight, window.outerWidth])), []);

    return size;
}
