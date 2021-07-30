import React from 'react'
import Article from './Article'

const ArticleList = (props) => {
    console.log("what is this =>", props)
    return(
        <div>
            <main>
        {props.posts.map((p, i) => <Article key={i} post={p} />)}
            </main>
        </div>
    )
}

export default ArticleList