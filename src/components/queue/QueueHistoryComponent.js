import React, { useState, useEffect } from 'react';

const QueueHistoryComponent = () => {
  const [waitings, setWaitings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedWaiting, setSelectedWaiting] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });

  // 데이터 가져오기 함수
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/owner/queue/?state=in'); // API 엔드포인트를 실제 URL로 변경
      const data = await response.json();
      setWaitings(data); // 받아온 데이터를 상태에 저장
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  };

  // 컴포넌트 마운트 시 데이터 가져오기
  useEffect(() => {
    fetchData();
  }, []); // 빈 배열([])을 전달하여 처음 한 번만 실행되도록 함

  // 날짜 포맷팅
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  // 대기시간 계산
  function calculateWaitingTime(createdAt, updatedAt) {
      if (!createdAt || !updatedAt) return "0분"; // 값이 없을 경우 0분 처리

      // ISO 8601 문자열을 Date 객체로 변환
      const createdDate = new Date(createdAt);
      const updatedDate = new Date(updatedAt);

      // 두 시간의 차이를 밀리초 단위로 계산
      const diffInMs = updatedDate - createdDate;

      // 밀리초 -> 분 단위로 변환 (1000ms = 1초, 60초 = 1분)
      const diffInMinutes = Math.floor(diffInMs / (1000 * 60));

      // 결과 반환
      return `${diffInMinutes}분`;
  }

  function enterTheRestaurantTIme(updatedAt){
    if (!updatedAt) return "0시 0분"; // 값이 없을 경우 0시 0분 처리

    // ISO 8601 문자열을 Date 객체로 변환
    const updatedDate = new Date(updatedAt);

    // 시와 분 추출
    const hours = updatedDate.getHours(); // 시
    const minutes = updatedDate.getMinutes(); // 분

    // 결과를 "시분" 형식으로 반환
    return `${hours}시 ${minutes}분`;
  }

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
        (waiting.userName?.toLowerCase().includes(searchTerm.toLowerCase()) || false) ||
        (waiting.phone?.includes(searchTerm) || false) ||
        (waiting.queueDate?.includes(searchTerm) || false);

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
                <td>{formatDate(waiting.queueDate)}</td>
                <td>{waiting.queueId}번</td>
                <td>{waiting.userName}</td>
                <td>{waiting.queueNumber}명</td>
                <td>{waiting.queueTime}</td>
                <td>{enterTheRestaurantTIme(waiting.queueUpdatedAt) || '-'}</td>
                <td>{calculateWaitingTime(waiting.queueCreatedAt, waiting.queueUpdatedAt)}</td>  {/*대기 시간*/}
                <td>
                  <span className={`badge bg-${waiting.queueState === '입장완료' ? 'success' : 'danger'}`}>
                    {waiting.queueState}
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
                  <p><strong>날짜:</strong> {formatDate(selectedWaiting.queueDate)}</p>
                  <p><strong>웨이팅 번호:</strong> {selectedWaiting.queueId}번</p>
                  <p><strong>고객명:</strong> {selectedWaiting.userName}</p>
                  <p><strong>인원:</strong> {selectedWaiting.queueNumber}명</p>
                  <p><strong>연락처:</strong> {selectedWaiting.phone}</p>
                  <p><strong>접수시간:</strong> {selectedWaiting.queueTime}</p>
                  <p><strong>입장시간:</strong> {enterTheRestaurantTIme(selectedWaiting.queueUpdatedAt) || '-'}</p>
                  <p><strong>예상 대기시간:</strong> {selectedWaiting.estimatedTime}</p>
                  <p><strong>실제 대기시간:</strong> {calculateWaitingTime(selectedWaiting.queueCreatedAt, selectedWaiting.queueUpdatedAt)}</p>
                  <p><strong>상태:</strong> {selectedWaiting.queueState}</p>
                  <p><strong>요청사항:</strong> {selectedWaiting.queueOrderRequestMemo || '없음'}</p>
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
