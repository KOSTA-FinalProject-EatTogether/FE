import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// 샘플 대기 데이터
const SAMPLE_WAITING = [
  {
    id: 1,
    name: "김민수",
    people: 2,
    phone: "010-1234-5678",
    status: "waiting", 
    timeAdded: "2024-12-01T14:30:00",
    estimatedTime: "2024-12-01T15:00:00",
    note: "창가자리 선호",
    timeSeated: null,
    timeCancelled: null
  },
  {
    id: 2,
    name: "이지은",
    people: 4,
    phone: "010-2345-6789",
    status: "seated",
    timeAdded: "2024-12-01T14:35:00",
    estimatedTime: "2024-12-01T15:15:00",
    note: "",
    timeSeated: "2024-12-01T15:10:00",
    timeCancelled: null
  },
  {
    id: 3,
    name: "박준호",
    people: 3,
    phone: "010-3456-7890",
    status: "cancelled",
    timeAdded: "2024-12-01T13:30:00",
    estimatedTime: "2024-12-01T14:00:00",
    note: "아기 의자 필요",
    timeSeated: null,
    timeCancelled: "2024-12-01T13:45:00"
  }
];

const QueueHistoryComponent = () => {
  const [waitingList, setWaitingList] = useState(SAMPLE_WAITING);
  const [view, setView] = useState('current'); // current, history, add
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [newWaiting, setNewWaiting] = useState({
    name: '',
    people: 2,
    phone: '',
    note: ''
  });

  const handleAddCustomer = (e) => {
    e.preventDefault();
    setView('current');
  };

  const handleStatusChange = (id, newStatus) => {
    setWaitingList(prev => 
      prev.map(item => {
        if (item.id === id) {
          const now = new Date().toISOString();
          return {
            ...item,
            status: newStatus,
            timeSeated: newStatus === 'seated' ? now : item.timeSeated,
            timeCancelled: newStatus === 'cancelled' ? now : item.timeCancelled
          };
        }
        return item;
      })
    );
  };

  const renderHeader = () => (
    <div className="mb-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h5 mb-0">웨이팅 관리</h2>
        {view === 'current' && (
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => setView('add')}
          >
            웨이팅 추가
          </button>
        )}
      </div>
      {view !== 'add' && (
        <div className="btn-group w-100">
          <button 
            className={`btn btn-sm ${view === 'current' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setView('current')}
          >
            현재 웨이팅
          </button>
          <button 
            className={`btn btn-sm ${view === 'history' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setView('history')}
          >
            지난 내역
          </button>
        </div>
      )}
    </div>
  );

  const renderStats = () => {
    const waiting = waitingList.filter(item => item.status === 'waiting').length;
    const seated = waitingList.filter(item => 
      item.status === 'seated' && 
      new Date(item.timeSeated).toDateString() === new Date().toDateString()
    ).length;

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
            <div className="small text-muted">오늘 착석</div>
            <div className="h5 mb-0">{seated}팀</div>
          </div>
        </div>
      </div>
    );
  };

  const renderHistoryStats = () => {
    const selectedDateStr = new Date(selectedDate).toDateString();
    const dailyStats = waitingList.reduce((acc, item) => {
      const itemDate = new Date(item.timeAdded).toDateString();
      if (itemDate === selectedDateStr) {
        acc.total += 1;
        if (item.status === 'seated') acc.seated += 1;
        if (item.status === 'cancelled') acc.cancelled += 1;
      }
      return acc;
    }, { total: 0, seated: 0, cancelled: 0 });

    return (
      <div className="card mb-3">
        <div className="card-body">
          <div className="row g-2">
            <div className="col-4">
              <div className="text-center">
                <div className="small text-muted">총 웨이팅</div>
                <div className="h5 mb-0">{dailyStats.total}팀</div>
              </div>
            </div>
            <div className="col-4">
              <div className="text-center">
                <div className="small text-muted">착석</div>
                <div className="h5 mb-0">{dailyStats.seated}팀</div>
              </div>
            </div>
            <div className="col-4">
              <div className="text-center">
                <div className="small text-muted">취소</div>
                <div className="h5 mb-0">{dailyStats.cancelled}팀</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderHistory = () => (
    <>
      <div className="mb-3">
        <input
          type="date"
          className="form-control form-control-sm"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
      {renderHistoryStats()}
      <div className="card">
        <div className="card-body p-0">
          <div className="list-group list-group-flush">
            {waitingList
              .filter(item => 
                new Date(item.timeAdded).toDateString() === new Date(selectedDate).toDateString() &&
                (item.status === 'seated' || item.status === 'cancelled')
              )
              .map((item) => (
                <div key={item.id} className="list-group-item">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <div className="mb-1">
                        <span className={`badge ${
                          item.status === 'seated' ? 'bg-success' : 'bg-danger'
                        } me-2`}>
                          {item.status === 'seated' ? '착석' : '취소'}
                        </span>
                        <span className="fw-bold">{item.name}</span>
                        <span className="ms-2 small text-muted">{item.people}명</span>
                      </div>
                      <div className="small text-muted">
                        대기시간: {Math.round((
                          new Date(item.status === 'seated' ? item.timeSeated : item.timeCancelled) - 
                          new Date(item.timeAdded)
                        ) / 1000 / 60)}분
                      </div>
                    </div>
                    <div className="text-end small text-muted">
                      <div>
                        등록: {new Date(item.timeAdded).toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </div>
                      <div>
                        {item.status === 'seated' ? '착석' : '취소'}: {
                          new Date(item.status === 'seated' ? item.timeSeated : item.timeCancelled)
                            .toLocaleTimeString([], { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })
                        }
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );

  // 기존 renderWaitingList, renderAddForm 함수는 동일하게 유지

  const renderCurrentWaiting = () => (
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
              onClick={() => setView('current')}
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <>
      {renderHeader()}
      {view === 'current' && (
        <>
          {renderStats()}
          {renderCurrentWaiting()}
        </>
      )}
      {view === 'history' && renderHistory()}
      {view === 'add' && renderAddForm()}
    </>
  );
};

export default QueueHistoryComponent;