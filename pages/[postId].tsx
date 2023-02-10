import {useRouter} from 'next/router';
import {Flex} from "@chakra-ui/react";

function PostDetail({post}) {
    const router = useRouter();

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    return (
        <Flex height='100vh' alignItems='center' justifyContent='center'>
            <Flex direction='column' border='1px solid grey' rounded={5} p={12}
                  maxWidth='500px' background='darkgrey'
            >
                <h1><b>Title: </b> {post.title}</h1>
                <p><b>Post: </b> {post.body}</p>
            </Flex>

        </Flex>
    )
}

export default PostDetail;

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {postId: '1'},
            },
            {
                params: {postId: '2'},
            },
        ],
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const {params} = context;

    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.postId);
    const data = await res.json();

    return {
        props: {
            post: data,
        },
    };
}