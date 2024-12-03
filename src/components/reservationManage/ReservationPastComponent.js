import React, { useState, useEffect } from 'react';

const PastReservations = () => {
    const [reservations, setReservations] = useState([
        {
            id: 1,
            date: '2023-12-10',
            time: '12:00',
            name: '홍길동',
            guests: 4,
            status: '완료',
            phone: '010-1234-5678',
            request: '창가 자리 부탁드립니다'
        },
        {
            id: 2,
            date: '2023-12-10',
            time: '13:30',
            name: '김영희',
            guests: 2,
            status: '취소',
            phone: '010-2345-6789',
            request: '알러지 주의해주세요'
        },
        {
            id: 3,
            date: '2023-12-10',
            time: '18:00',
            name: '이철수',
            guests: 6,
            status: '완료',
            phone: '010-3456-7890',
            request: '아이 의자 필요합니다'
        },
        {
            id: 4,
            date: '2023-12-11',
            time: '11:30',
            name: '박민지',
            guests: 3,
            status: '완료',
            phone: '010-4567-8901',
            request: ''
        },
        {
            id: 5,
            date: '2023-12-11',
            time: '19:00',
            name: '정수진',
            guests: 5,
            status: '취소',
            phone: '010-5678-9012',
            request: '주차 가능한가요?'
        },
        {
            id: 6,
            date: '2023-12-12',
            time: '12:30',
            name: '강동원',
            guests: 2,
            status: '완료',
            phone: '010-6789-0123',
            request: '조용한 자리로 부탁드립니다'
        },
        {
            id: 7,
            date: '2023-12-12',
            time: '17:30',
            name: '최예린',
            guests: 4,
            status: '완료',
            phone: '010-7890-1234',
            request: '와인 준비해주세요'
        },
        {
            id: 8,
            date: '2023-12-13',
            time: '13:00',
            name: '송미란',
            guests: 8,
            status: '완료',
            phone: '010-8901-2345',
            request: '단체석으로 부탁드립니다'
        },
        {
            id: 9,
            date: '2023-12-13',
            time: '20:00',
            name: '윤재호',
            guests: 2,
            status: '취소',
            phone: '010-9012-3456',
            request: ''
        },
        {
            id: 10,
            date: '2023-12-14',
            time: '18:30',
            name: '백지원',
            guests: 3,
            status: '완료',
            phone: '010-0123-4567',
            request: '생일 파티입니다'
        }
    ]);

    // 상태 관리
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });
    const [filterStatus, setFilterStatus] = useState('all');
    const [selectedReservation, setSelectedReservation] = useState(null);

    // 현재 날짜 이전의 예약만 필터링
    const pastReservations = reservations.filter(reservation => {
        const reservationDate = new Date(`${reservation.date}T${reservation.time}`);
        return reservationDate < new Date();
    });

    // 검색 필터링
    const filteredReservations = pastReservations.filter(reservation => {
        const matchesSearch =
            reservation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            reservation.phone.includes(searchTerm) ||
            reservation.date.includes(searchTerm);

        const matchesStatus =
            filterStatus === 'all' || reservation.status === filterStatus;

        return matchesSearch && matchesStatus;
    });

    // 정렬
    const sortedReservations = [...filteredReservations].sort((a, b) => {
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
    const currentItems = sortedReservations.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(sortedReservations.length / itemsPerPage);

    // 정렬 핸들러
    const handleSort = (key) => {
        setSortConfig({
            key,
            direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
        });
    };

    // 날짜 포맷팅
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
        return new Date(dateString).toLocaleDateString('ko-KR', options);
    };

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
                        <option value="완료">완료</option>
                        <option value="취소">취소</option>
                    </select>
                </div>
            </div>

            {/* 예약 테이블 */}
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th onClick={() => handleSort('date')} style={{cursor: 'pointer'}}>
                            날짜 {sortConfig.key === 'date' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                        </th>
                        <th onClick={() => handleSort('name')} style={{cursor: 'pointer'}}>
                            예약자 {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                        </th>
                        <th>인원</th>
                        <th>연락처</th>
                        <th>상태</th>
                        <th>액션</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentItems.map((reservation) => (
                        <tr key={reservation.id}>
                            <td>{formatDate(reservation.date)} {reservation.time}</td>
                            <td>{reservation.name}</td>
                            <td>{reservation.guests}명</td>
                            <td>{reservation.phone}</td>
                            <td>
                  <span className={`badge bg-${reservation.status === '완료' ? 'success' : 'danger'}`}>
                    {reservation.status}
                  </span>
                            </td>
                            <td>
                                <button
                                    className="btn btn-sm btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#reservationModal"
                                    onClick={() => setSelectedReservation(reservation)}
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
            <div className="modal fade" id="reservationModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">예약 상세 정보</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            {selectedReservation && (
                                <div>
                                    <p><strong>예약자명:</strong> {selectedReservation.name}</p>
                                    <p><strong>예약일시:</strong> {formatDate(selectedReservation.date)} {selectedReservation.time}</p>
                                    <p><strong>인원:</strong> {selectedReservation.guests}명</p>
                                    <p><strong>연락처:</strong> {selectedReservation.phone}</p>
                                    <p><strong>상태:</strong> {selectedReservation.status}</p>
                                    <p><strong>요청사항:</strong> {selectedReservation.request || '없음'}</p>
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

export default PastReservations;