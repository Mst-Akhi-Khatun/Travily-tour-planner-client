import { useEffect, useState } from "react";


const usePackage = () => {
    const [packages, setPackages] = useState([]);

    // data load
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return [packages, setPackages]
}

export default usePackage;