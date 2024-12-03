import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDay, faClock, faMapMarkerAlt, faPencilAlt, faUsers} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import UserReviewWriteFormComponent from "./UserReviewWriteFormComponent";

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



const isWithinOneWeek = (dateString) => {
    const visitDate = new Date(dateString);
    const currentDate = new Date();
    const oneWeekAgo = new Date(currentDate.setDate(currentDate.getDate() - 7));
    return visitDate >= oneWeekAgo;
};

const UserPastQueueComponent = () => {
    const navigate = useNavigate()

    const [queueHistory, setQueueHistory] = useState([
        {
            id: 1,
            restaurantName: "인기 맛집",
            date: "2024-03-02",
            time: "19:00",
            waitTime: "30분",
            people: 2,
            status: "입장완료",
            location: "서울시 마포구",
        },
        {
            id: 2,
            restaurantName: "맛있는 원조집",
            date: "2024-03-01",
            time: "12:30",
            waitTime: "45분",
            people: 3,
            status: "취소",
            location: "서울시 용산구",
        }
    ]);

    const handleReviewClick = (visitId, restaurantName, visitDate) => {
        navigate('/mypage/reviewwrite', {
            state: {
                visitId,
                visitType: 'queue',
                restaurantName,
                visitDate
            }
        });
    };




    const getStatusBadgeClass = (status) => {
        switch (status) {
            case "입장완료":
                return "bg-success";
            case "취소":
                return "bg-danger";
            default:
                return "bg-secondary";
        }
    };

    return (
        <div className="container p-0" style={{ maxWidth: '480px' }}>
            <div className="card mb-3">
                <div className="card-header bg-white">
                    <h5 className="card-title mb-0">지난 줄서기 내역</h5>
                </div>
                <div className="card-body p-2">
                    {queueHistory.map((queue) => (
                        <div key={queue.id} className="border rounded mb-2">
                            <div className="p-3">
                                <div className="d-flex justify-content-between align-items-start mb-2">
                                    <h6 className="mb-0 fw-bold">{queue.restaurantName}</h6>
                                    <span className={`badge ${getStatusBadgeClass(queue.status)}`}>
                    {queue.status}
                  </span>
                                </div>
                                <div className="small text-muted">
                                    <div className="d-flex align-items-center mb-1">
                                        <FontAwesomeIcon icon={faCalendarDay} className="me-2" />
                                        <span>{queue.date}</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-1">
                                        <FontAwesomeIcon icon={faClock} className="me-2" />
                                        <span>{queue.time} (대기 {queue.waitTime})</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-1">
                                        <FontAwesomeIcon icon={faUsers} className="me-2" />
                                        <span>{queue.people}명</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                                        <span>{queue.location}</span>
                                    </div>
                                </div>
                                {queue.status === "입장완료" &&
                                    !queue.hasReview &&
                                    isWithinOneWeek(queue.date) && (
                                        <button
                                            className="btn btn-outline-primary btn-sm w-100"
                                            onClick={() => handleReviewClick(
                                                queue.id,
                                                queue.restaurantName,
                                                queue.date
                                            )}
                                        >
                                            <FontAwesomeIcon icon={faPencilAlt} className="me-1"/>
                                            리뷰 작성하기
                                        </button>
                                    )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default UserPastQueueComponent