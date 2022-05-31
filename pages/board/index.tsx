import AddPost from "@/components/board/AddPost";
import Article from "@/components/board/Article";
import { IArticle } from "@/types";
import { InferGetServerSidePropsType } from "next";
import { useState } from "react";

export default function Blog({articles}: InferGetServerSidePropsType<typeof getStaticProps>){
    const [articlelist, setArticlelist] = useState(articles)
    return <>
    <AddPost/>
    {articlelist.map((article: IArticle)=>(
        <Article key={article.artId} article={article}/>
    ))}

    </>
}

export async function getStaticProps(){
    const res = await fetch(BASE_URL)
    const articles: IArticle[] = await res.json()

    return {props:{articles}}
}

const BASE_URL: string = "http://localhost:8080/articles"
//async 를 하는이유는 자바서버 갔다오겟다는것