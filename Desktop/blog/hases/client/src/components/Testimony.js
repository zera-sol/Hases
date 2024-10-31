import testimonies from "../dataToMap/testimony.json"
export default function Testimony(){
      return(
        <div className="how-works testimony">
            <h2>What our <span>jobPortal users</span> say</h2>
            <div className="testimony-cards">   
                {
                    testimonies.map((list, index) => (
                        <div className={`testimony-card ${list.class}`}>
                            <p>"{list.description}"</p>
                            <div className="icon-div"><i class={list.icon}></i></div>
                        </div> 
                    ))
                }                        
            </div>
        </div>
      )
}