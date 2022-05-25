import React from 'react'
import PostItem from '../PostItem/PostItem'
import classes from './PostList.module.css'

const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return (
        <h1 style={{textAlign: "center", color: "teal", marginTop: "10px"}}>
            No posts found
      </h1>
    )
    }
    return (
        <div>
            <h1 className={classes.myTitle}>
                {title}
            </h1>
            {posts.map((post, index) =>
                <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
            )}
        </div>
    )
}

export default PostList