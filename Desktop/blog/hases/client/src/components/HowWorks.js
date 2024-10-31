export default function HowWorks(){
    const workList = [
        {"title":"Create Account", "icon": "fa fa-user-circle", "description": "Create your personalized account to begin your personalized journey."},
        {"title":"Upload CV/Resume", "icon": "fa fa-upload", "description": "Upload your resume to stand out to potential employers."},
        {"title":"Find suitable job", "icon": "fa fa-search-plus", "description": "Create your personalized account to begin your personalized journey."},
        {"title":"Apply job", "icon": "fa fa-thumbs-up", "description": "Find the perfect opportunity that suits your skills."}
    ]
    return(
        <div className="how-works">
              <h2>How <span>jobPortal</span> works</h2>
              <div className="how-works-cards">
                 {workList.map((job, index) => (
                    <div key={index} className="how-works-card">
                        <div className="icon-div"><i class={job.icon}></i></div>
                        <h4>{job.title}</h4>
                        <p>{job.description}</p>
                    </div>

                 ))}
                 
              </div>
        </div>
    )
}