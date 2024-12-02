import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const BusinessHoursModifyComponent = () => {
    const [activeSection, setActiveSection] = useState('sameHours');
    const [sameHoursEnabled, setSameHoursEnabled] = useState(true);
    const [breakTimeEnabled, setBreakTimeEnabled] = useState(false);

    // State for different hours by day
    const [dayHoursEnabled, setDayHoursEnabled] = useState({
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true
    });

    // State for break times
    const [sameBreakTime, setSameBreakTime] = useState({
        startTime: '',
        endTime: ''
    });

    const [dayBreakTimes, setDayBreakTimes] = useState({
        monday: { startTime: '', endTime: '' },
        tuesday: { startTime: '', endTime: '' },
        wednesday: { startTime: '', endTime: '' },
        thursday: { startTime: '', endTime: '' },
        friday: { startTime: '', endTime: '' },
        saturday: { startTime: '', endTime: '' },
        sunday: { startTime: '', endTime: '' }
    });

    // Section class name generation function
    const getSectionClassName = (section) => {
        return `list-group-item list-group-item-action ${activeSection === section ? 'active' : ''}`;
    };

    // Section change handler
    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const BreakTimeSection = ({ 
        isEnabled, 
        onToggle, 
        breakTime, 
        onStartTimeChange, 
        onEndTimeChange 
    }) => (
        <div className="mt-3">
            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={isEnabled}
                    onChange={onToggle}
                />
                <label className="form-check-label">
                    + 휴게시간 추가
                </label>
            </div>
            {isEnabled && (
                <div className="row mt-2">
                    <div className="col-6">
                        <label className="form-label">휴게 시작 시간</label>
                        <input 
                            type="time" 
                            className="form-control" 
                            value={breakTime.startTime}
                            onChange={onStartTimeChange}
                        />
                    </div>
                    <div className="col-6">
                        <label className="form-label">휴게 종료 시간</label>
                        <input 
                            type="time" 
                            className="form-control" 
                            value={breakTime.endTime}
                            onChange={onEndTimeChange}
                        />
                    </div>
                </div>
            )}
        </div>
    );

    // Save handler
    const handleSave = () => {
        // Collect and process all the business hours data
        const businessHoursData = {
            section: activeSection,
            sameHoursEnabled,
            breakTimeEnabled,
            sameBreakTime,
            dayHoursEnabled,
            dayBreakTimes
        };
        
        // You can add logic here to save the data, 
        // such as sending it to an API or storing in parent component
        console.log('Saving Business Hours:', businessHoursData);
        
        // Optional: Add any additional save logic or notifications
        alert('영업 시간이 저장되었습니다.');
    };

    // Cancel handler
    const handleCancel = () => {
        // Reset all states to their initial values
        setSameHoursEnabled(true);
        setBreakTimeEnabled(false);
        setSameBreakTime({ startTime: '', endTime: '' });
        
        setDayHoursEnabled({
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true,
            saturday: true,
            sunday: true
        });

        setDayBreakTimes({
            monday: { startTime: '', endTime: '', isEnabled: false },
            tuesday: { startTime: '', endTime: '', isEnabled: false },
            wednesday: { startTime: '', endTime: '', isEnabled: false },
            thursday: { startTime: '', endTime: '', isEnabled: false },
            friday: { startTime: '', endTime: '', isEnabled: false },
            saturday: { startTime: '', endTime: '', isEnabled: false },
            sunday: { startTime: '', endTime: '', isEnabled: false }
        });

        // Optional: Add any additional cancel logic
        alert('변경 사항이 취소되었습니다.');
    };


    return (
        <div>
            <ul className="list-group list-group-horizontal mb-3">
                <li
                    className={getSectionClassName('sameHours')}
                    onClick={() => handleSectionChange('sameHours')}
                    style={{ cursor: 'pointer' }}
                >
                    매일 같은 시간에 영업
                </li>
                <li
                    className={getSectionClassName('diffHours')}
                    onClick={() => handleSectionChange('diffHours')}
                    style={{ cursor: 'pointer' }}
                >
                    요일별로 다르게 영업
                </li>
            </ul>
            
            {activeSection === 'sameHours' && (
                <div>
                    <div className="form-check form-switch mb-3">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            checked={sameHoursEnabled}
                            onChange={() => setSameHoursEnabled(!sameHoursEnabled)}
                        />
                        <label className="form-check-label">
                            {sameHoursEnabled ? '영업 중' : '휴무'}
                        </label>
                    </div>
                    {sameHoursEnabled && (
                        <>
                            <div className="row">
                                <div className="col-6">
                                    <label className="form-label">시작 시간</label>
                                    <input 
                                        type="time" 
                                        className="form-control" 
                                    />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">종료 시간</label>
                                    <input 
                                        type="time" 
                                        className="form-control" 
                                    />
                                </div>
                            </div>
                            <BreakTimeSection 
                                isEnabled={breakTimeEnabled}
                                onToggle={() => setBreakTimeEnabled(!breakTimeEnabled)}
                                breakTime={sameBreakTime}
                                onStartTimeChange={(e) => setSameBreakTime(prev => ({
                                    ...prev, 
                                    startTime: e.target.value
                                }))}
                                onEndTimeChange={(e) => setSameBreakTime(prev => ({
                                    ...prev, 
                                    endTime: e.target.value
                                }))}
                            />
                        </>
                    )}
                </div>
            )}
            
            {activeSection === 'diffHours' && (
                <div>
                    <ul className="list-group">
                        {[
                            { day: '월', key: 'monday' },
                            { day: '화', key: 'tuesday' },
                            { day: '수', key: 'wednesday' },
                            { day: '목', key: 'thursday' },
                            { day: '금', key: 'friday' },
                            { day: '토', key: 'saturday' },
                            { day: '일', key: 'sunday' }
                        ].map(({ day, key }) => (
                            <li key={key} className="list-group-item">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>{day}</span>
                                    <div className="form-check form-switch">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            checked={dayHoursEnabled[key]}
                                            onChange={() => setDayHoursEnabled(prev => ({
                                                ...prev, 
                                                [key]: !prev[key]
                                            }))}
                                        />
                                        <label className="form-check-label">
                                            {dayHoursEnabled[key] ? '영업 중' : '휴무'}
                                        </label>
                                    </div>
                                </div>
                                {dayHoursEnabled[key] && (
                                    <>
                                        <div className="row mt-2">
                                            <div className="col-6">
                                                <label className="form-label">시작 시간</label>
                                                <input 
                                                    type="time" 
                                                    className="form-control" 
                                                />
                                            </div>
                                            <div className="col-6">
                                                <label className="form-label">종료 시간</label>
                                                <input 
                                                    type="time" 
                                                    className="form-control" 
                                                />
                                            </div>
                                        </div>
                                        <BreakTimeSection 
                                            isEnabled={dayBreakTimes[key].isEnabled}
                                            onToggle={() => setDayBreakTimes(prev => ({
                                                ...prev,
                                                [key]: {
                                                    ...prev[key],
                                                    isEnabled: !prev[key].isEnabled
                                                }
                                            }))}
                                            breakTime={{
                                                startTime: dayBreakTimes[key].startTime,
                                                endTime: dayBreakTimes[key].endTime
                                            }}
                                            onStartTimeChange={(e) => setDayBreakTimes(prev => ({
                                                ...prev,
                                                [key]: {
                                                    ...prev[key],
                                                    startTime: e.target.value
                                                }
                                            }))}
                                            onEndTimeChange={(e) => setDayBreakTimes(prev => ({
                                                ...prev,
                                                [key]: {
                                                    ...prev[key],
                                                    endTime: e.target.value
                                                }
                                            }))}
                                        />
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
                     {/* Add Save and Cancel buttons at the bottom */}
                <div className="mt-4 d-flex justify-content-end">
                <button 
                    className="btn btn-secondary me-2" 
                    onClick={handleCancel}
                >
                    취소
                </button>
                <button 
                    className="btn btn-primary" 
                    onClick={handleSave}
                >
                    저장
                </button>
            </div>
        </div>

    );
}

export default BusinessHoursModifyComponent;