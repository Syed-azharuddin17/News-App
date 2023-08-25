import React, { Component } from 'react'


export class NewsItem extends Component {


  

  render() {

   let {title,description,imageurl,newsurl,author,time,source}=this.props
    return (
      <div>
       

        <div className="my-4">
        <div className="card" >
       
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{right:'50%', zIndex:'5'}}>
          {source}
     </span>

  <img src={!imageurl?"https://www.hindustantimes.com/ht-img/img/2023/03/13/1600x900/sensex_1678709666304_1678709666492_1678709666492.JPG":imageurl} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="text-muted">Published by {author?author:"unknown"} on {new Date(time).toGMTString()}</p>
    <a href={newsurl} rel="noopener noreferrer" target="_blank" className="btn btn -sm btn-dark">Read More</a>
  </div>
</div>
  
</div>
      </div>
    )
  }
}

export default NewsItem
