import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCalendarDay,
    faClock,
    faComments,
    faMapMarkerAlt,
    faPencilAlt,
    faUsers
} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import UserReviewWriteFormComponent from "./UserReviewWriteFormComponent";

const isWithinOneWeek = (dateString) => {
    const visitDate = new Date(dateString);
    const currentDate = new Date();
    const oneWeekAgo = new Date(currentDate.setDate(currentDate.getDate() - 7));
    return visitDate >= oneWeekAgo;
};

// 리뷰 작성 페이지로 이동하는 라우터 컴포넌트
const ReviewRouter = ({ visitId, visitType, restaurantName, visitDate }) => {
    return (
        <UserReviewWriteFormComponent
            visitId={visitId}
            visitType={visitType}
            restaurantName={restaurantName}
            visitDate={visitDate}
        />
    );
};



const UserPastReservationComponent = () => {
    const navigate = useNavigate()

    const [reservations, setReservations] = useState([
        {
            id: 1,
            restaurantName: "맛있는 식당",
            date: "2024-03-01",
            time: "18:30",
            people: 4,
            status: "완료",
            location: "서울시 강남구",
        },
        {
            id: 2,
            restaurantName: "행복한 식당",
            date: "2024-02-28",
            time: "12:00",
            people: 2,
            status: "취소",
            location: "서울시 서초구",
        },{
            id: 3,
            restaurantName: "서울식당",
            date: "2024-12-01",
            time: "18:30",
            people: 4,
            status: "완료",
            location: "서울시 강남구",
            hasReview: false
        },
        {
            id: 4,
            restaurantName: "맛있는 식당",
            date: "2024-11-20",
            time: "12:00",
            people: 2,
            status: "완료",
            location: "서울시 서초구",
            hasReview: false
        }
    ]);

    const handleReviewClick = (visitId, restaurantName, visitDate) => {
        navigate('/mypage/reviewwrite', {
            state: {
                visitId,
                visitType: 'reservation',
                restaurantName,
                visitDate
            }
        });
    };

    const handleViewReview = (reviewId) => {
        navigate(`/review/${reviewId}`);
    };

    return (
        <div className="container p-0" style={{ maxWidth: '480px' }}>
            <div className="card mb-3">
                <div className="card-header bg-white">
                    <h5 className="card-title mb-0">지난 예약 내역</h5>
                </div>
                <div className="card-body p-2">
                    {reservations.map((reservation) => (
                        <div key={reservation.id} className="border rounded mb-2">
                            <div className="p-3">
                                <div className="d-flex justify-content-between align-items-start mb-2">
                                    <h6 className="mb-0 fw-bold">{reservation.restaurantName}</h6>
                                    <span className={`badge ${reservation.status === "완료" ? "bg-success" : "bg-danger"}`}>
                    {reservation.status}
                  </span>
                                </div>
                                <div className="small text-muted">
                                    <div className="d-flex align-items-center mb-1">
                                        <FontAwesomeIcon icon={faCalendarDay} className="me-2" />
                                        <span>{reservation.date}</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-1">
                                        <FontAwesomeIcon icon={faClock} className="me-2" />
                                        <span>{reservation.time}</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-1">
                                        <FontAwesomeIcon icon={faUsers} className="me-2" />
                                        <span>{reservation.people}명</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                                        <span>{reservation.location}</span>
                                    </div>
                                </div>
                                {reservation.status === "완료" && (
                                    reservation.hasReview ? (
                                        <button
                                            className="btn btn-outline-secondary btn-sm w-100"
                                            onClick={() => handleViewReview(reservation.reviewId)}
                                        >
                                            <FontAwesomeIcon icon={faComments} className="me-1" />
                                            내 리뷰 보기
                                        </button>
                                    ) : (
                                        isWithinOneWeek(reservation.date) && (
                                            <button
                                                className="btn btn-outline-primary btn-sm w-100"
                                                onClick={() => handleReviewClick(
                                                    reservation.id,
                                                    reservation.restaurantName,
                                                    reservation.date
                                                )}
                                            >
                                                <FontAwesomeIcon icon={faPencilAlt} className="me-1" />
                                                리뷰 작성하기
                                            </button>
                                        )
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserPastReservationComponent