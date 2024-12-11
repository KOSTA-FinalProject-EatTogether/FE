import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

// 서버에서 데이터를 받아오는 함수
const fetchWaitingListFromServer = async () => {
    try {
        const response = await fetch('http://localhost:8080/owner/queue/?state=waiting');
        if (!response.ok) {
            throw new Error('서버에서 데이터를 가져오는 데 실패했습니다.');
        }
        const data = await response.json();

        // 데이터를 가져온 후 부족한 부분을 'test'로 채워 넣기
        return data.map(item => ({
            queueDate: item.queueDate || "dataTest", // queueDate가 없으면 'test'로 설정
            queueId: item.queueId || "123", // queueId가 없으면 'test'로 설정
            queueNumber: item.queueNumber !== undefined ? item.queueNumber : "test", // queueNumber가 없으면 'test'로 설정
            queueOrder: item.queueOrder || "오더test", // queueOrder가 없으면 'test'로 설정
            queueState: item.queueState || "statetest", // queueState가 없으면 'test'로 설정
            queueTime: item.queueTime || "timetest", // queueTime이 없으면 'test'로 설정
            name: item.userName || "natest", // name이 없으면 'test'로 설정
            phone: item.phone || "전화번호 없음", // phone이 없으면 'test'로 설정
            queueOrderRequestMemo : item.queueOrderRequestMemo,
            queueCreatedAt : item.queueCreatedAt,
            queueUpdatedAt : item.queueUpdatedAt,
            note: item.queueOrderRequestMemo || "요청사항 없음" // note가 없으면 'test'로 설정
        }));
    } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
        return []; // 오류 발생 시 빈 배열 반환
    }
};

const QueueManageComponent = () => {
    const [waitingList, setWaitingList] = useState([]);
    const [view, setView] = useState('list'); // list, add
    const [newWaiting, setNewWaiting] = useState({
        name: '',
        people: 2,
        phone: '',
        note: ''
    });

    // 컴포넌트가 마운트될 때 데이터를 불러옵니다.
    useEffect(() => {
        const loadData = async () => {
            const data = await fetchWaitingListFromServer();
            setWaitingList(data);
        };

        loadData();
    }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행되도록 설정

    const handleAddCustomer = (e) => {
        e.preventDefault();
        // 실제 구현 시 여기에 웨이팅 추가 로직
        setView('list');
    };

    const handleStatusChange = (id, newStatus) => {
        fetch(`http://localhost:8080/owner/queue/?state=${newStatus}`, {
               method: 'PUT',
               headers: {
                   'Content-Type': 'application/json',
               },
           })
               .then(response => response.text())
               .then(data => {
                   console.log(data);
                   // 서버에서 성공적으로 응답이 오면, 상태를 UI에 반영
                   if (data === 'Success') {
                       setWaitingList(prevList => {
                           console.log("Prev List:", prevList); // 상태 업데이트 중
                           return prevList.map(item =>
                               item.queueId === id ? { ...item, queueState: newStatus } : item
                           );
                       });
                   } else {
                       console.error("Status update failed:", data.message);
                   }
               })
               .catch(error => {
                   console.error("Error updating status:", error);
               });
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
        const waiting = waitingList.filter(item => item.queueState === 'waiting').length;
        const seated = waitingList.filter(item => item.queueState === '입장완료').length;

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
                            value={newWaiting.queueNumber}
                            onChange={e => setNewWaiting({...newWaiting, queueNumber: parseInt(e.target.value)})}
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
                        .filter(item => item.queueState === 'waiting')
                        .map((item, index) => (
                            <div key={item.queueId} className="list-group-item">
                                <div className="d-flex justify-content-between align-items-start mb-1">
                                    <div>
                                        <span className="badge bg-secondary me-2">대기 {index + 1}</span>
                                        <span className="fw-bold">{item.name}</span>
                                        <span className="ms-2 small text-muted">{item.queueNumber}명</span>
                                    </div>
                                    <small className="text-muted">
                                        {new Date('1970-01-01T' + item.queueTime + 'Z').toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            timeZone: 'UTC'

                                        })}
                                    </small>
                                </div>
                                {item.note && (
                                    <div className="small text-muted mb-2">{item.note}</div>
                                )}
                                <div className="btn-group btn-group-sm">
                                    <button
                                        className="btn btn-success"
                                        onClick={() => handleStatusChange(item.queueId, '입장완료')}
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
                                        onClick={() => handleStatusChange(item.queueId, 'cancelled')}
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

export default QueueManageComponent;
