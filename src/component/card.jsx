export default function Card({link,type}){
    return(
        <>
        <div className="card mb-3 w-75" style={{height:''}} >
    <div className="row g-0">
      <div className="col-md-4">
        <img src={link.thumbnail} className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
        <ul className="list-group">       
    <li className="list-group-item">
      <div className="row">
          <h4 className="col card-title border-end">Title</h4>
          <h5 className="col">{link.title}</h5>
      </div>
    </li>
    <li className="list-group-item">
      <div className="row">
          <h4 className="col card-title border-end">{type == 'mp4' ? 'Video' : 'Audio'} By</h4>
          <h5 className="col">{link.author.name}</h5>
      </div>
    </li>
    <li className="list-group-item">
      <div className="row">
          <h4 className="col card-title border-end">Format</h4>
          <h5 className="col">{type=='mp4'?'Video/Mp4': 'Audio/Mp3'}</h5>
      </div>
    </li>
   
    <a href={type == 'mp4' ? link.download.video : link.download.audio} className="btn btn-primary h-75 mt-3">
      <div className="d-flex justify-content-center align-items-center">
      <svg width="25px" height="25px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fillRule="evenodd" d="M11 2a1 1 0 10-2 0v7.74L5.173 6.26a1 1 0 10-1.346 1.48l5.5 5a1 1 0 001.346 0l5.5-5a1 1 0 00-1.346-1.48L11 9.74V2zm-7.895 9.204A1 1 0 001.5 12v3.867a2.018 2.018 0 002.227 2.002c1.424-.147 3.96-.369 6.273-.369 2.386 0 5.248.236 6.795.383a2.013 2.013 0 002.205-2V12a1 1 0 10-2 0v3.884l-13.895-4.68zm0 0L2.5 11l.605.204zm0 0l13.892 4.683a.019.019 0 01-.007.005h-.006c-1.558-.148-4.499-.392-6.984-.392-2.416 0-5.034.23-6.478.38h-.009a.026.026 0 01-.013-.011V12a.998.998 0 00-.394-.796z"></path> </g></svg>
        <div className="ms-2">Download To Your Device </div>
      </div>

      </a>
    
  </ul>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}