import styles from '@/styles/Home.module.css'
import Post from "@/components/post";
import {Flex} from "@chakra-ui/react";

interface BlogPost {
  id: number;
  title: string;
  body: string;
}

interface Props {
  posts: BlogPost[];
}

function Home(props: Props) {
  return (
    <>
      <main className={styles.main}>
        <h1>Blog Posts</h1>
        <Flex justifyContent='center' wrap='wrap'>
          {props.posts.map(post => (
            <Post key={post.id} post={post}/>
          ))}
        </Flex>
      </main>
    </>
  )
}

export default Home;

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};
