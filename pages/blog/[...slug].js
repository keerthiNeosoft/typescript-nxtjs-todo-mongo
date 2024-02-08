import { useRouter } from "next/router";

const dynamicBlogPages = () => {
    const router = useRouter();
    console.log('router <<<< ',router.query)
}

export default dynamicBlogPages;