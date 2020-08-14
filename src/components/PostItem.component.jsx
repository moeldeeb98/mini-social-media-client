import React from 'react'
import {deletePost} from './UserFunctions'

/**
 * desgin display Post 
 */
const PostItem = (props) =>{
    const {post} = props
    return(
        <div className="card">
            <div className="card-body">
                <div className="card-title">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="creater-name">
                                <i className="fas fa-user"></i>{" " + post.creator.first_name} 
                            </div>
                        </div>
                        {(localStorage.getItem('user_id') == post.creator.id)?(
                            <div className="col-md-4 text-right">
                                <i className="fas fa-edit"></i>{" "}
                                <i onClick={() => handelDelete(post.id)} className="fas fa-trash-alt"></i>
                            </div>
                        
                        ):null}
                        
                    </div>
                    <hr/>
                </div>
                <div>
                    {post.desc}
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-12 text-right">
                        <small>{post.created_at}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}


const handelDelete = (post_id) =>{
    deletePost(post_id).then(res =>{
        if(!res.data.message){
            window.location.reload()
        }else{
            alert('error:' + res.data.message)
        }
    })

}

export default PostItem