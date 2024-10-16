import React, { useState, useEffect } from 'react';
import './UserProfile.scss';
import { withRouter } from 'react-router-dom';

const Userprofile = () => {
    const [appointments, setAppointments] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editData, setEditData] = useState({
        name: '',
        date: '',
        time: '',
        PhoneNumber: ''
    });

    useEffect(() => {
        const storedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
        setAppointments(storedAppointments);
    }, []);

    const saveAppointments = (newAppointments) => {
        localStorage.setItem('appointments', JSON.stringify(newAppointments));
        setAppointments(newAppointments);
    };

    const handleDelete = (index) => {
        const newAppointments = [...appointments];
        newAppointments.splice(index, 1);
        saveAppointments(newAppointments);
    };


    const handleEdit = (index) => {
        setEditIndex(index);
        setEditData({ ...appointments[index] });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData({
            ...editData,
            [name]: value
        });
    };

    const handleSaveEdit = () => {
        const newAppointments = [...appointments];
        newAppointments[editIndex] = editData;
        saveAppointments(newAppointments);
        setEditIndex(null);
    };

    const handleCancelEdit = () => {
        setEditIndex(null);
        setEditData({
            name: '',
            date: '',
            time: '',
            PhoneNumber: ''
        });
    };

    return (
        <div className="bg-img">
            <div className="user-profile">
                <h2>Hồ sơ người dùng</h2>
                <div className="appointments">
                    <h3>Lịch hẹn đã đăng ký</h3>
                    {appointments.length > 0 ? (
                        appointments.map((appointment, index) => (
                            <div key={index} className="appointment-item">
                                {editIndex === index ? (
                                    <div>
                                        <label>Họ và tên:</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={editData.name}
                                            onChange={handleInputChange}
                                        />
                                        <label>Ngày hẹn:</label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={editData.date}
                                            onChange={handleInputChange}
                                        />
                                        <label>Giờ hẹn:</label>
                                        <input
                                            type="time"
                                            name="time"
                                            value={editData.time}
                                            onChange={handleInputChange}
                                        />
                                        <label>Số điện thoại:</label>
                                        <input
                                            type="tel"
                                            name="PhoneNumber"
                                            value={editData.PhoneNumber}
                                            onChange={handleInputChange}
                                        />
                                        <button onClick={handleSaveEdit}>Lưu</button>
                                        <button onClick={handleCancelEdit}>Hủy</button>
                                    </div>
                                ) : (
                                    <div>
                                        <p><strong>Tên:</strong> {appointment.name}</p>
                                        <p><strong>Ngày hẹn:</strong> {appointment.date}</p>
                                        <p><strong>Giờ hẹn:</strong> {appointment.time}</p>
                                        <p><strong>Số điện thoại:</strong> {appointment.PhoneNumber}</p>
                                        <button onClick={() => handleEdit(index)}>Chỉnh sửa</button>
                                        <button onClick={() => handleDelete(index)}>Hủy lịch hẹn</button>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <p>Bạn chưa có lịch hẹn nào.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default withRouter(Userprofile);
