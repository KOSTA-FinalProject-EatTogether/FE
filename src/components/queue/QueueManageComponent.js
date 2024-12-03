import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// 샘플 대기 데이터
const SAMPLE_WAITING = [
    {
        id: 1,
        name: "김민수",
        people: 2,
        phone: "010-1234-5678",
        status: "waiting", // waiting, seated, cancelled
        timeAdded: "2024-12-01T14:30:00",
        estimatedTime: "2024-12-01T15:00:00",
        note: "창가자리 선호"
    },
    {
        id: 2,
        name: "이지은",
        people: 4,
        phone: "010-2345-6789",
        status: "waiting",
        timeAdded: "2024-12-01T14:35:00",
        estimatedTime: "2024-12-01T15:15:00",
        note: ""
    }
];

const QueueManageComponent = () =>{
    const [waitingList, setWaitingList] = useState(SAMPLE_WAITING);
    const [view, setView] = useState('list'); // list, add
    const [newWaiting, setNewWaiting] = useState({
        name: '',
        people: 2,
        phone: '',
        note: ''
    });

    const handleAddCustomer = (e) => {
        e.preventDefault();
        // 실제 구현 시 여기에 웨이팅 추가 로직
        setView('list');
    };

    const handleStatusChange = (id, newStatus) => {
        setWaitingList(prev =>
            prev.map(item =>
                item.id === id ? { ...item, status: newStatus } : item
            )
        );
    };

    const renderHeader = () => (
        <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="h5 mb-0">웨이팅 관리</h2>
            {view === 'list' && (
                <button
                    className="btn btn-primary btn-sm"
                    onClick={() => setView('add')}
                >
                    웨이팅 추가
                </button>
            )}
        </div>
    );

    const renderStats = () => {
        const waiting = waitingList.filter(item => item.status === 'waiting').length;
        const seated = waitingList.filter(item => item.status === 'seated').length;

        return (
            <div className="row g-2 mb-3">
                <div className="col-6">
                    <div className="border rounded p-2">
                        <div className="small text-muted">대기 중</div>
                        <div className="h5 mb-0">{waiting}팀</div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="border rounded p-2">
                        <div className="small text-muted">착석 완료</div>
                        <div className="h5 mb-0">{seated}팀</div>
                    </div>
                </div>
            </div>
        );
    };

    const renderAddForm = () => (
        <div className="card">
            <div className="card-body">
                <form onSubmit={handleAddCustomer}>
                    <div className="mb-3">
                        <label className="form-label small">고객명</label>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            value={newWaiting.name}
                            onChange={e => setNewWaiting({...newWaiting, name: e.target.value})}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label small">인원</label>
                        <select
                            className="form-select form-select-sm"
                            value={newWaiting.people}
                            onChange={e => setNewWaiting({...newWaiting, people: parseInt(e.target.value)})}
                        >
                            {[1,2,3,4,5,6,7,8].map(num => (
                                <option key={num} value={num}>{num}명</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label small">연락처</label>
                        <input
                            type="tel"
                            className="form-control form-control-sm"
                            value={newWaiting.phone}
                            onChange={e => setNewWaiting({...newWaiting, phone: e.target.value})}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label small">메모</label>
                        <textarea
                            className="form-control form-control-sm"
                            rows="2"
                            value={newWaiting.note}
                            onChange={e => setNewWaiting({...newWaiting, note: e.target.value})}
                        />
                    </div>

                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary btn-sm">등록</button>
                        <button
                            type="button"
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => setView('list')}
                        >
                            취소
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

    const renderWaitingList = () => (
        <div className="card">
            <div className="card-body p-0">
                <div className="list-group list-group-flush">
                    {waitingList
                        .filter(item => item.status === 'waiting')
                        .map((item, index) => (
                            <div key={item.id} className="list-group-item">
                                <div className="d-flex justify-content-between align-items-start mb-1">
                                    <div>
                                        <span className="badge bg-secondary me-2">대기 {index + 1}</span>
                                        <span className="fw-bold">{item.name}</span>
                                        <span className="ms-2 small text-muted">{item.people}명</span>
                                    </div>
                                    <small className="text-muted">
                                        {new Date(item.timeAdded).toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </small>
                                </div>
                                {item.note && (
                                    <div className="small text-muted mb-2">{item.note}</div>
                                )}
                                <div className="btn-group btn-group-sm">
                                    <button
                                        className="btn btn-success"
                                        onClick={() => handleStatusChange(item.id, 'seated')}
                                    >
                                        착석
                                    </button>
                                    <button
                                        className="btn btn-outline-primary"
                                        onClick={() => alert('문자 전송')}
                                    >
                                        호출
                                    </button>
                                    <button
                                        className="btn btn-outline-danger"
                                        onClick={() => handleStatusChange(item.id, 'cancelled')}
                                    >
                                        취소
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );

    return (
        <>
            {renderHeader()}
            {view === 'list' ? (
                <>
                    {renderStats()}
                    {renderWaitingList()}
                </>
            ) : (
                renderAddForm()
            )}
        </>
    );
};

export default QueueManageComponent

