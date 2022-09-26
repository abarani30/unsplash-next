import { useRouter } from "next/router";
import { useEffect } from "react";

export default function HomeAr({lang}) {
    const router = useRouter()

    useEffect(() => {
        if(lang["ar"] != "ar") router.push("/404")
    }, [])
    
    return (
        <div>arbic content</div>
    )
}

export async function getServerSideProps(context) {
    return {
      props: {
        "lang": context.params
      },
    };
}