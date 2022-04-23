import { useEffect } from "react"

export default function NotFound() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            setTimeout(() => {
                window.location.href = "/dashboard";
            },1000)
        }
    }, [])
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 25, }}>
            <img src="https://blog.kobisi.com/wp-content/uploads/2019/01/error-404-1252056_1280.png" width={250} alt="404Page" />
        </div>
    )
}