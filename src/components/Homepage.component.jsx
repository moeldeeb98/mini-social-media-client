import React, { Component } from 'react'

import {getAllPosts} from './UserFunctions'
import Navbar from './Navbar.component'
import PostItem from './PostItem.component'
import Profile from './Profile.component'
import CreatePost from './CreatePost.component'

class Homepage extends Component{

    constructor(){
        super()

        this.state ={
            posts: []
        }

        getAllPosts().then((res)=>{
            if(res.data.data){
                this.setState({
                    posts: res.data.data
                })
            }else{
                alert(`error: ${res.data.message}`)
            }
        })
    }

    render(){
        return(
            
            <div className="app">
                <Navbar />
                    <div className="app-container">
                        <div className="row">
    
                            <div className="col-md-3 profile">
                                <div className="profile">
                                    <Profile />
                                    <CreatePost/>
                                </div>
                            </div>
    
                            <div className="col-md-6">
                                <div className="">
                                    <div className="card-header">Home</div>
                                    <div className="card-body">

                                        <div className="">

                                            {this.state.posts.map(post =>(
                                                <div key={post.id}>
                                                    <PostItem post={post} />
                                                </div> 
                                            ))}
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">tata</div>
                        </div>
                    </div>
            </div>
        )
    }

    

}


export default Homepage