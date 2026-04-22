import { useEffect } from "react";
function useBodyClass(className){
    useEffect(() => {
        const addClass = document.body.classList.add(className);
        
        return () => {
            const removeClass = document.body.classList.remove(className)
        };
    }, []);
}

export default useBodyClass;