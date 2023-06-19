import React from 'react'

function Home() {
  return (
    <div className="container" style={{alignItems:"center",justifyContent:"center"}}>
      <h1 style={{textAlign:'center'}} className="my-3" >Add A Note</h1>
      <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Title</label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Title"  aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">Give a title to your notes</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Description" />
    <div id="emailHelp" className="form-text">Write your description here</div>

  </div>
  
  <button type="submit" className="btn btn-primary">Save</button>
</form>
    </div>
  )
}

export default Home
