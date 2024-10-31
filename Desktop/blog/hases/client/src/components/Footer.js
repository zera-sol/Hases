import footerLists from "../dataToMap/footer.json"
export default function Footer(){
    return(
        <div  className="luu">
          <div  className="landing-page-footer">
            <div>
                <div className="web-title">
                    <i class="fa fa-envelope white-color"></i>
                    <h5 className="white-color">JOBPORTAL</h5>
                </div>
                <p>Call now: <span className="white-color">(+251)91-672-77-78</span></p>
                <p>4kilo, Arada Sub city, Addis Ababa, Ethiopia</p>
            </div>
            {
                    footerLists.map((list, index) => (
                        <div className="footer-lists">
                        <h4 className="white-color">{list.title}</h4>
                        <ul>
                            <li>{list.listOne}</li>
                            <li className={list.class}>{list.icon && <i class={list.icon}></i>} {list.listTwo}</li>
                            <li>{list.listThree}</li>
                            <li>{list.listFour ? `${list.listFour}`:``}</li>
                        </ul>
                    </div>
                    ))
                }
             </div>
             <hr />
             <div class='bottom-footer'>
                <p><span className='white-color'>@zera - JOBPORTAL</span> All right reserved!</p>
                <div className="footer-social-media">
                    <li> <i class="fa fa-user-circle white-color"></i></li>
                    <li> <i class="fa fa-user-circle white-color"></i></li>
                    <li> <i class="fa fa-user-circle white-color"></i></li>
                    <li> <i class="fa fa-user-circle white-color"></i></li>
                    <li> <i class="fa fa-user-circle white-color"></i></li>
                </div>
             </div>
            

        </div>
    )
}