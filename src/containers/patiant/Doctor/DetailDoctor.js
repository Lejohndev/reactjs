import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';



// Dữ liệu bác sĩ (giả định từ API hoặc state)
const doctorData = [
    {
        DoctorId: 1,
        name: "Nguyễn Văn Long",
        title: "Giáo sư, Tiến sĩ",
        specialty: "Chuyên khoa Nhi",
        experience: "Hơn 20 năm kinh nghiệm",
        description: "Giáo sư Nguyễn Văn Long là chuyên gia đầu ngành về Nhi khoa với nhiều nghiên cứu và đóng góp quan trọng trong lĩnh vực chăm sóc sức khỏe trẻ em.",
        availableTimes: ["08:00 AM", "10:00 AM", "01:00 PM", "03:00 PM"]
    },
    {
        DoctorId: 2,
        name: "Trần Thị Minh",
        title: "Bác sĩ chuyên khoa II",
        specialty: "Nhi khoa",
        experience: "15 năm kinh nghiệm",
        description: "Bác sĩ Trần Thị Minh có nhiều năm kinh nghiệm trong điều trị các bệnh lý trẻ em và được biết đến với sự tận tâm, chu đáo trong công việc.",
        availableTimes: ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"]
    },
    {
        DoctorId: 3,
        name: "Lê Quốc Hùng",
        title: "Tiến sĩ",
        specialty: "Tim mạch",
        experience: "10 năm kinh nghiệm",
        description: "Tiến sĩ Lê Quốc Hùng chuyên điều trị các bệnh lý về tim mạch, với nhiều công trình nghiên cứu được công nhận ở cấp quốc tế.",
        availableTimes: ["07:00 AM", "09:00 AM", "12:00 PM", "03:00 PM"]
    },
    {
        DoctorId: 4,
        name: "Lê Quốc Hùng",
        title: "Tiến sĩ",
        specialty: "Tim mạch",
        experience: "10 năm kinh nghiệm",
        description: "Tiến sĩ Lê Quốc Hùng chuyên điều trị các bệnh lý về tim mạch, với nhiều công trình nghiên cứu được công nhận ở cấp quốc tế.",
        availableTimes: ["07:00 AM", "09:00 AM", "12:00 PM", "03:00 PM"]
    },
    {
        DoctorId: 5,
        name: "Lê Quốc Hùng",
        title: "Tiến sĩ",
        specialty: "Tim mạch",
        experience: "10 năm kinh nghiệm",
        description: "Tiến sĩ Lê Quốc Hùng chuyên điều trị các bệnh lý về tim mạch, với nhiều công trình nghiên cứu được công nhận ở cấp quốc tế.",
        availableTimes: ["07:00 AM", "09:00 AM", "12:00 PM", "03:00 PM"]
    },
];

const DetailDoctor = ({ match }) => {
    const { DoctorId } = match.params;
    const doctor = doctorData.find(doc => doc.DoctorId === parseInt(DoctorId, 10));

    // State để quản lý thông tin đặt lịch
    const [appointment, setAppointment] = useState({
        name: '',
        date: '',
        time: ''
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
        // Bạn có thể thêm logic để gửi dữ liệu đến server ở đây
    };

    // Nếu không tìm thấy bác sĩ
    if (!doctor) {
        return <div>Bác sĩ không tồn tại!</div>;
    }

    return (
        <div className="doctor-detail">
            <h1>{`${doctor.title} ${doctor.name}`}</h1>
            <h3>Chuyên khoa: {doctor.specialty}</h3>
            <p>Kinh nghiệm: {doctor.experience}</p>
            <p>{doctor.description}</p>

            <h2>Đặt lịch hẹn với {doctor.name}</h2>
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
    );
};

export default withRouter(DetailDoctor);
