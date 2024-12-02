import React from 'react';
import InputField from "../common/InputField";
import 'bootstrap/dist/css/bootstrap.min.css';

const DUMMY_STORE = {
    name: "맛좋은 감자탕",
    description: "맛좋은 감자탕집입니다.",
    address: "서울시 중랑구 상봉동 2893848번지",
    openhour: "평일 : 오전 9시 30분 ~ 오후 7시 30분",
    contact: "02-1234-2345",
};

const OwnerRestaurantIntroComponent = () => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="card-title h5 mb-0">{DUMMY_STORE.name}</h3>
                    <a 
                        href="/owner/intromodify" 
                        className="btn btn-outline-primary btn-sm"
                    >
                        식당 소개 수정
                    </a>
                </div>

                <div className="mb-4">
                    <p className="card-text text-muted">
                        {DUMMY_STORE.description}
                    </p>
                </div>

                <div className="list-group list-group-flush border-top">
                    <div className="list-group-item px-0">
                        <div className="row">
                            <div className="col-3">
                                <span className="text-muted small">주소</span>
                            </div>
                            <div className="col-9">
                                {DUMMY_STORE.address}
                            </div>
                        </div>
                    </div>
                    <div className="list-group-item px-0">
                        <div className="row">
                            <div className="col-3">
                                <span className="text-muted small">영업시간</span>
                            </div>
                            <div className="col-9">
                                {DUMMY_STORE.openhour}
                            </div>
                        </div>
                    </div>
                    <div className="list-group-item px-0">
                        <div className="row">
                            <div className="col-3">
                                <span className="text-muted small">연락처</span>
                            </div>
                            <div className="col-9">
                                {DUMMY_STORE.contact}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OwnerRestaurantIntroComponent;