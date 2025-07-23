// src/hooks/usePosts.js
import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

export default function usePosts() {
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

 

  return {
    posts: data || [],
    isLoading,
    error,
  };
}
