import React from 'react'

function SocailIcons(src, href, alt) {
    return (
        // <div>
        //     <div className="d-flex gap-3 justify-content-center ">
        //         {/* <a href="#" class="card-link">Card link</a>
        // 						<a href="#" class="card-link">Another link</a> */}
        //         <a type="button" className="btn btn-secondary" width={16} height={16} href="www.facebook.com">
        //             <img src={facebook} alt="Twitter X" width={16} height={16} />
        //         </a>
        //         <a type="button" className="btn btn-secondary" href="http://www.twitter.com/">
        //             <img src={twitter} alt="Twitter X" width={16} height={16} />
        //         </a>
        //         <a type="button" className="btn btn-secondary" href="http://www.instagram.com/">
        //             <img src={instagram} alt="Twitter X" width={16} height={16} />
        //         </a>
        //         <a type="button" className="btn btn-secondary" href="http://www.youtube.com/">
        //             <img src={youtube} alt="Twitter X" width={16} height={16} />
        //         </a>
        //     </div>
        // </div>
        <a type="button" className="btn btn-secondary" width={16} height={16} href={href}>
            <img src={src.src} alt={alt} width={16} height={16} />
        </a>
    )
}

export default SocailIcons
