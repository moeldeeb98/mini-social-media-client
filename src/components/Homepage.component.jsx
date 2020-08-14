import React, { Component } from 'react'

import {getAllPosts, getMyPosts} from './UserFunctions'
import Navbar from './Navbar.component'
import PostItem from './PostItem.component'
import Profile from './Profile.component'
import CreatePost from './CreatePost.component'

/**
 * design the homepage for all users who are 
 * logged in the website 
 */
class Homepage extends Component{

    constructor(props){
        super(props)

        this.state ={
            posts: [],
        }

        if(this.props.match.path == '/homepage'){
            getAllPosts().then((res)=>{
                if(res.data.data){
                    this.setState({
                        posts: res.data.data
                    })
                }else{
                    alert(`error: ${res.data.message}`)
                }
            })
        }else if(this.props.match.path == '/timeline'){
            getMyPosts().then((res)=>{
                if(res.data.data){
                    this.setState({
                        posts: res.data.data
                    })
                }else{
                    alert(`error: ${res.data.message}`)
                }
            })
        }

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
                                    <div className="card-body">

                                        <div className="">
                                            {(this.state.posts.length) ? (
                                                this.state.posts.map(post =>(
                                                    <div key={post.id}>
                                                        <PostItem post={post} />
                                                    </div> 
                                                ))
                                            ): (
                                                <div class="alert alert-danger" role="alert">
                                                    There is no posts to show!
                                                </div>
                                            )}
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }

    

}


export default Homepage