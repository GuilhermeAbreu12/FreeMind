import { useEffect } from "react";
function useRootClass(className){
    useEffect(() => {
        const root = document.querySelector('#root')
        const addClass = root.classList.add(className);
        
        return () => {
            const removeClass = root.classList.remove(className)
        };
    }, []);
}

export default useRootClass;