import React, {useState} from 'react'
import { MoreVert} from '@mui/icons-material'
import './Post.css'
import { Users } from '../../DummyData'

const Post = ({post}) => {
    const [like, setLikes]=useState(post.like)
    const [isLiked, setisLiked]=useState(false)

    function likee(){
        // since isliked is false it execute like+1
        setLikes(isLiked ? like - 1 : like + 1);
        // making the setisliked to true so that we can decrease the like as well
        setisLiked(!isLiked)
    }

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="top">
                    <div className="topLeft">
                        {/* harek users lai filter garera tesko id if post ko userid sanga milyo bhne tesko name ra photo dekhako */}
                        <img className='profileImg' src={Users.filter((u)=> u.id=== post?.userId)[0].profilePicture} alt="/" />
                        <span className='postName'>{Users.filter((u)=> u.id=== post?.userId)[0].username}</span>
                        <span className='postTime'>{post.date}</span>
                    </div>
                    <div className="topLeft">
                        <MoreVert className='postOption' />
                    </div>
                </div>


                <div className="center">
                    <span className='caption'>{post?.desc}</span>
                    <img className='postImg' src={post.photo} alt="" />
                </div>
                <div className="bottom">
                    <div className="bottomLeft">
                        <img className='likeIcon' src="assets/like.png" alt="/"  onClick={likee}/>
                        <img className='likeIcon' src="assets/heart.png" alt="/" onClick={likee}/>
                        <span className='postLike' >{like} people like it</span> 
                    </div>
                    <div className="bottomRight">
                        <span className='postComment'> {post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
