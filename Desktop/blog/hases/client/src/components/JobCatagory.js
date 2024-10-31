import { useState } from "react"
import allJobs from "../dataToMap/allJobs.json";

export default function JobCatagory(){
  const [showAll, setShowAll] = useState(false);
  const visibleJobs = showAll? allJobs: allJobs.slice(0, 6)
  
  const handleShowAll = () =>{
    setShowAll(true)
  }
  return(
    <div className="job-catagory">
        <div className="job-catagory-texts">
            <h3>Explore by <span>catagory</span></h3>
            <button onClick={handleShowAll}>show all jobs <i class="fa fa-long-arrow-right"></i></button>
        </div>
        <div className="job-catagory-lists">          
          {visibleJobs.map((job, index) => (
            <div key={index} className="job-catagory-list">
            <div><i class={job.topIcon}></i></div>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <div className="bottom-icon"><i class={job.bottomIcon}></i></div>
          </div>
          ))}              
          </div>
    </div>
  )
}