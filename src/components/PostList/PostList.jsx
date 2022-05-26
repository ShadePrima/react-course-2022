import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { TransitionGroup } from 'react-transition-group'
import PostItem from '../PostItem/PostItem'
import classes from './PostList.module.css'

const PostList = ({ posts, title, remove }) => {
    if (!posts.length) {
        return (
            <h1 style={{ textAlign: "center", color: "teal", marginTop: "10px" }}>
                No posts found
            </h1>
        )
    }
    return (
        <div>
            <h1 className={classes.myTitle}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} number={index + 1} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default PostList