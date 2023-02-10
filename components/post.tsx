import {Flex} from "@chakra-ui/react";
import Link from "next/link";
import styles from '@/styles/Home.module.css'

function Post({post}) {
    return (
        <Flex p={4} border="1px solid green" rounded={8} m={2} background='yellow.50' maxWidth='30%' minWidth={100}
            direction='column'
        >
            <p><b>Title:</b> {post.title}</p>
            <p><b>Post:</b> {post.body}</p>
            <Link href={`/${post.id}`} color='red' className={styles.link}>See more >>> </Link>
        </Flex>
    )
}

export default Post;