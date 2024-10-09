import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import './DetailDoctor.scss';

import bs1 from '../../../assets/DoctorIMG/bs1.jpg';
import bs2 from '../../../assets/DoctorIMG/bs2.jpg';
import bs3 from '../../../assets/DoctorIMG/bs3.jpg';
import bs4 from '../../../assets/DoctorIMG/bs4.jpg';
import bs5 from '../../../assets/DoctorIMG/bs5.jpg';

const doctorData = [
    {
        DoctorId: 1,
        name: "Nguyễn Thị Lưu Phương",
        title: "Bác sĩ",
        specialty: "Nhi khoa",
        experience: "Nguyễn Thị Lưu Phương",
        description: "Giáo sư Nguyễn Văn Long là chuyên gia đầu ngành về Nhi khoa với nhiều nghiên cứu và đóng góp quan trọng trong lĩnh vực chăm sóc sức khỏe trẻ em.",
        availableTimes: ["08:00 AM", "10:00 AM", "01:00 PM", "03:00 PM"],
        hospital: "Bệnh viện Đại học y",
        image: bs5
    },
    {
        DoctorId: 2,
        name: "Nguyễn Văn Long",
        title: "Bác sĩ",
        specialty: "Tiêu hóa",
        experience: "15 năm kinh nghiệm",
        description: "Bác sĩ Nguyễn Văn Long có nhiều năm kinh nghiệm trong điều trị các bệnh lý trẻ em và được biết đến với sự tận tâm, chu đáo trong công việc.",
        availableTimes: ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"],
        hospital: "Bệnh viện 108",
        image: bs1
    },
    {
        DoctorId: 3,
        name: "Lê Quốc Hùng",
        title: "Tiến sĩ",
        specialty: "Thần kinh",
        experience: "10 năm kinh nghiệm",
        description: "Tiến sĩ Lê Quốc Hùng chuyên điều trị các bệnh lý về tim mạch, với nhiều công trình nghiên cứu được công nhận ở cấp quốc tế.",
        availableTimes: ["07:00 AM", "09:00 AM", "12:00 PM", "03:00 PM"],
        hospital: "Bệnh viện 108",
        image: bs2
    },
    {
        DoctorId: 4,
        name: "Lê Quốc Hùng",
        title: "Tiến sĩ",
        specialty: "Tim mạch",
        experience: "10 năm kinh nghiệm",
        description: "Tiến sĩ Lê Quốc Hùng chuyên điều trị các bệnh lý về tim mạch, với nhiều công trình nghiên cứu được công nhận ở cấp quốc tế.",
        availableTimes: ["07:00 AM", "09:00 AM", "12:00 PM", "03:00 PM"],
        hospital: "Bệnh viện đa khoa Hà Nội",
        image: bs3
    },
    {
        DoctorId: 5,
        name: "Lê Quốc Hùng",
        title: "Tiến sĩ",
        specialty: "Cơ xương khớp",
        experience: "10 năm kinh nghiệm",
        description: "Tiến sĩ Lê Quốc Hùng chuyên điều trị các bệnh lý về tim mạch, với nhiều công trình nghiên cứu được công nhận ở cấp quốc tế.",
        availableTimes: ["07:00 AM", "09:00 AM", "12:00 PM", "03:00 PM"],
        hospital: "Bệnh viện đa khoa Hà Nội",
        image: bs4
    },

];

const DetailDoctor = ({ match }) => {
    const { DoctorId } = match.params;
    const doctor = doctorData.find(doc => doc.DoctorId === parseInt(DoctorId, 10));

    // State để quản lý thông tin đặt lịch
    const [appointment, setAppointment] = useState({
        name: '',
        date: '',
        time: '',
        PhoneNumber: '',
    });

    // Xử lý khi có thay đổi trong form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAppointment({
            ...appointment,
            [name]: value
        });
    };

    // Xử lý khi gửi form
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Đặt lịch thành công cho ${appointment.name} vào ngày ${appointment.date} lúc ${appointment.time} với bác sĩ ${doctor.name}`);

    };

    // Nếu không tìm thấy bác sĩ
    if (!doctor) {
        return <div>Bác sĩ không tồn tại!</div>;
    }
    return (
        <div className='bg-doctor'>
            <div className="doctor-detail">
                <div className="doctor-info">
                    <div >
                        <img src={doctor.image} className="doctor-image" /></div>

                    <h1>{`${doctor.title} ${doctor.name}`}</h1>
                    <h3>Chuyên khoa: {doctor.specialty}</h3>
                    <p>Kinh nghiệm: {doctor.experience}</p>
                    <p>{doctor.description}</p>
                </div>

                <div className="appointment-form">
                    <h2>Đặt lịch hẹn</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Họ và tên:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={appointment.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="date">Ngày hẹn:</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={appointment.date}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="PhoneNumber">Số điện thoại:</label>
                            <input
                                type="string"
                                id="PhoneNumber"
                                name="PhoneNumber"
                                value={appointment.string}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="time">Giờ hẹn:</label>
                            <select
                                id="time"
                                name="time"
                                value={appointment.time}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Chọn giờ</option>
                                {doctor.availableTimes.map(time => (
                                    <option key={time} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button type="submit">Đặt lịch hẹn</button>
                    </form>
                </div>
            </div>
        </div>
    );

};

export default withRouter(DetailDoctor);
export { doctorData };
