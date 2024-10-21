import React from "react";


const AdBlock = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="text-muted gap-2 d-grid justify-content-center p-3 bg-dark-mat w-75 rounded-3 m-5">
                <p className="mx-auto m-auto" style={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}>Advertisement</p>
                <h3 className="mx-auto " style={{ fontSize: '20px', fontWeight: 600, lineHeight: '24px' }}>You can place ads</h3>
                <h5 className="mx-auto " style={{ fontSize: '18px', fontWeight: 400, lineHeight: '26px' }}>750x100</h5>
            </div>
        </div>
    );
};

export default AdBlock;