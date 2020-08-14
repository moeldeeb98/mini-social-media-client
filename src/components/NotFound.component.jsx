import React from 'react'

/**
 * design of page not found for all requests 
 * that are not supported by the website
 */
const PageNotFound = () => {
  return (
    <div className='container-xl'>
    <div className="card  text-white bg-danger mt-6 p-3 ">
      <div className="card-header">404</div>
      <div className="card-body">
        <h5 className="card-title">Page Not Found</h5>
        <p className="card-text">some error happend.</p>
      </div>
    </div>
    </div>
  )
}

export default PageNotFound
