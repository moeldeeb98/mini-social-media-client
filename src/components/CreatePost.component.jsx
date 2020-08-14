import React from 'react'
import {creatPost} from './UserFunctions'

/**
 * desgin the form to create a new post
 * and handel its submition
 * 
 */

const CreatePost = () =>{

    return(
        <div className="row">
            <div className="card">
                <div className="card-header">Creat post</div>
                <form onSubmit={handelSubmit}>
                    <div className="row">
                        <div className="col-md-2">
                        <i className="fal fa-user"></i>
                        </div>
                        <div className="col-md-10">
                            <div className="form-group">
                                <textarea className="form-control" placeholder={`what's on your mind, ${localStorage.getItem('first_name')}?`}></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 text-right">
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    )

}


const handelSubmit = (e) =>{
    e.preventDefault()
    let post = {
        'desc': e.target.elements[0].value,
        'user_id': localStorage.getItem('user_id')
    }
    creatPost(post).then(res =>{
        if(res.data.data){
            window.location.reload()
        }else{
            alert('error : ' + res.data.message)
        }
    })
}

export default CreatePost