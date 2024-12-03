import React, { useState } from 'react';

const QueueHistoryComponent = () => {
  const [waitings, setWaitings] = useState([
    {
      id: 1,
      date: '2023-01-15',
      time: '12:30',
      entryTime: '13:20',
      name: '이지은',
      guests: 2,
      phone: '010-1111-2222',
      status: '입장완료',
      waitingNumber: 1,
      estimatedTime: '40분',
      request: '창가자리 희망'
    },
    {
      id: 2,
      date: '2023-02-14',
      time: '18:35',
      entryTime: '19:15',
      name: '박서준',
      guests: 4,
      phone: '010-2222-3333',
      status: '입장완료',
      waitingNumber: 3,
      estimatedTime: '35분',
      request: '아이 있음'
    },
    {
      id: 3,
      date: '2023-03-01',
      time: '12:40',
      entryTime: '',
      name: '김민수',
      guests: 3,
      phone: '010-3333-4444',
      status: '취소',
      waitingNumber: 2,
      estimatedTime: '50분',
      request: ''
    },
    {
      id: 4,
      date: '2023-04-05',
      time: '19:30',
      entryTime: '20:10',
      name: '최다인',
      guests: 2,
      phone: '010-4444-5555',
      status: '입장완료',
      waitingNumber: 5,
      estimatedTime: '35분',
      request: ''
    },
    {
      id: 5,
      date: '2023-05-05',
      time: '18:35',
      entryTime: '',
      name: '정우성',
      guests: 5,
      phone: '010-5555-6666',
      status: '취소',
      waitingNumber: 4,
      estimatedTime: '45분',
      request: '단체석 필요'
    },
    {
      id: 6,
      date: '2023-06-15',
      time: '13:00',
      entryTime: '13:45',
      name: '강하늘',
      guests: 3,
      phone: '010-6666-7777',
      status: '입장완료',
      waitingNumber: 2,
      estimatedTime: '40분',
      request: ''
    },
    {
      id: 7,
      date: '2023-07-25',
      time: '19:15',
      entryTime: '20:00',
      name: '이성경',
      guests: 4,
      phone: '010-7777-8888',
      status: '입장완료',
      waitingNumber: 6,
      estimatedTime: '50분',
      request: '조용한 자리'
    },
    {
      id: 8,
      date: '2023-08-15',
      time: '12:20',
      entryTime: '',
      name: '한소희',
      guests: 2,
      phone: '010-8888-9999',
      status: '취소',
      waitingNumber: 1,
      estimatedTime: '30분',
      request: ''
    },
    {
      id: 9,
      date: '2023-09-25',
      time: '18:45',
      entryTime: '19:30',
      name: '박보검',
      guests: 6,
      phone: '010-9999-0000',
      status: '입장완료',
      waitingNumber: 4,
      estimatedTime: '45분',
      request: '생일파티'
    },
    {
      id: 10,
      date: '2023-10-03',
      time: '13:15',
      entryTime: '14:00',
      name: '김고은',
      guests: 3,
      phone: '010-0000-1111',
      status: '입장완료',
      waitingNumber: 3,
      estimatedTime: '40분',
      request: ''
    },
    {
      id: 11,
      date: '2023-11-11',
      time: '19:00',
      entryTime: '',
      name: '송중기',
      guests: 4,
      phone: '010-1234-5678',
      status: '취소',
      waitingNumber: 5,
      estimatedTime: '55분',
      request: '창가자리'
    },
    {
      id: 12,
      date: '2023-12-24',
      time: '18:30',
      entryTime: '19:15',
      name: '전지현',
      guests: 5,
      phone: '010-8765-4321',
      status: '입장완료',
      waitingNumber: 2,
      estimatedTime: '40분',
      request: '크리스마스 이브 파티'
    },
    {
      id: 13,
      date: '2024-01-01',
      time: '12:00',
      entryTime: '12:45',
      name: '류준열',
      guests: 4,
      phone: '010-2468-1357',
      status: '입장완료',
      waitingNumber: 1,
      estimatedTime: '45분',
      request: '신년 가족모임'
    },
    {
      id: 14,
      date: '2024-02-14',
      time: '19:00',
      entryTime: '',
      name: '김태리',
      guests: 2,
      phone: '010-1357-2468',
      status: '취소',
      waitingNumber: 3,
      estimatedTime: '35분',
      request: '발렌타인데이'
    },
    {
      id: 15,
      date: '2024-03-01',
      time: '13:30',
      entryTime: '14:10',
      name: '조정석',
      guests: 6,
      phone: '010-9876-5432',
      status: '입장완료',
      waitingNumber: 4,
      estimatedTime: '40분',
      request: ''
    }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedWaiting, setSelectedWaiting] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });

  // 날짜 포맷팅
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  // 대기시간 계산
  const calculateWaitingTime = (timeIn, timeOut) => {
    if (!timeOut) return '-';
    const [inHour, inMin] = timeIn.split(':');
    const [outHour, outMin] = timeOut.split(':');
    const totalMinutes = (outHour - inHour) * 60 + (outMin - inMin);
    return `${totalMinutes}분`;
  };

  // 정렬 처리
  const handleSort = (key) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    });
  };

  // 필터링된 데이터
  const filteredWaitings = waitings.filter(waiting => {
    const matchesSearch =
        waiting.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        waiting.phone.includes(searchTerm) ||
        waiting.date.includes(searchTerm);

    const matchesStatus =
        filterStatus === 'all' || waiting.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  // 정렬된 데이터
  const sortedWaitings = [...filteredWaitings].sort((a, b) => {
    if (sortConfig.key === 'date') {
      const dateA = new Date(`${a.date}T${a.time}`);
      const dateB = new Date(`${b.date}T${b.time}`);
      return sortConfig.direction === 'asc' ? dateA - dateB : dateB - dateA;
    }
    return sortConfig.direction === 'asc'
        ? a[sortConfig.key] > b[sortConfig.key] ? 1 : -1
        : a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
  });

  // 페이지네이션
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedWaitings.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedWaitings.length / itemsPerPage);

  return (
      <div className="container mt-4">
        {/* 검색 및 필터 섹션 */}
        <div className="row mb-4">
          <div className="col-md-6">
            <input
                type="text"
                className="form-control"
                placeholder="이름, 전화번호, 날짜로 검색"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <select
                className="form-select"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">모든 상태</option>
              <option value="입장완료">입장완료</option>
              <option value="취소">취소</option>
            </select>
          </div>
        </div>

        {/* 웨이팅 테이블 */}
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
            <tr>
              <th onClick={() => handleSort('date')} style={{cursor: 'pointer'}}>
                날짜 {sortConfig.key === 'date' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
              </th>
              <th>웨이팅 번호</th>
              <th onClick={() => handleSort('name')} style={{cursor: 'pointer'}}>
                고객명 {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
              </th>
              <th>인원</th>
              <th>접수시간</th>
              <th>입장시간</th>
              <th>대기시간</th>
              <th>상태</th>
              <th>액션</th>
            </tr>
            </thead>
            <tbody>
            {currentItems.map((waiting) => (
                <tr key={waiting.id}>
                  <td>{formatDate(waiting.date)}</td>
                  <td>{waiting.waitingNumber}번</td>
                  <td>{waiting.name}</td>
                  <td>{waiting.guests}명</td>
                  <td>{waiting.time}</td>
                  <td>{waiting.entryTime || '-'}</td>
                  <td>{calculateWaitingTime(waiting.time, waiting.entryTime)}</td>
                  <td>
                  <span className={`badge bg-${waiting.status === '입장완료' ? 'success' : 'danger'}`}>
                    {waiting.status}
                  </span>
                  </td>
                  <td>
                    <button
                        className="btn btn-sm btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#waitingModal"
                        onClick={() => setSelectedWaiting(waiting)}
                    >
                      상세보기
                    </button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>

        {/* 페이지네이션 */}
        <nav>
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
              >
                이전
              </button>
            </li>
            {[...Array(totalPages)].map((_, i) => (
                <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                  <button
                      className="page-link"
                      onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
              >
                다음
              </button>
            </li>
          </ul>
        </nav>

        {/* 상세 정보 모달 */}
        <div className="modal fade" id="waitingModal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">웨이팅 상세 정보</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                {selectedWaiting && (
                    <div>
                      <p><strong>날짜:</strong> {formatDate(selectedWaiting.date)}</p>
                      <p><strong>웨이팅 번호:</strong> {selectedWaiting.waitingNumber}번</p>
                      <p><strong>고객명:</strong> {selectedWaiting.name}</p>
                      <p><strong>인원:</strong> {selectedWaiting.guests}명</p>
                      <p><strong>연락처:</strong> {selectedWaiting.phone}</p>
                      <p><strong>접수시간:</strong> {selectedWaiting.time}</p>
                      <p><strong>입장시간:</strong> {selectedWaiting.entryTime || '-'}</p>
                      <p><strong>예상 대기시간:</strong> {selectedWaiting.estimatedTime}</p>
                      <p><strong>실제 대기시간:</strong> {calculateWaitingTime(selectedWaiting.time, selectedWaiting.entryTime)}</p>
                      <p><strong>상태:</strong> {selectedWaiting.status}</p>
                      <p><strong>요청사항:</strong> {selectedWaiting.request || '없음'}</p>
                    </div>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default QueueHistoryComponent;