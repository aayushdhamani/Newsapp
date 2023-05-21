import React, { Component } from 'react'


export class NewsItems extends Component {
  render() {
  let { title,description,imageUrl, newsUrl, author, date,source}=this.props;
  console.log(imageUrl)
    return (
      <div className="text-center mx-6 ">
<div className="card">
<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
    {source}
  </span>
  <img src={imageUrl?imageUrl :`https://source.unsplash.com/random/?sig=${Math.floor(Math.random()*100)}`}className="card-img-top" alt="..."/>

  <div className="card-body">
    <h5 className="card-title"> {title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} rel="noreferrer" target="_blank"className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
      </div>
      
    )
  }
}

export default NewsItems
