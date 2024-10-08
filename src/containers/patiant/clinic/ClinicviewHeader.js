import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { doctorData } from '../Doctor/DetailDoctor';

// Dữ liệu bác sĩ (giả định từ API hoặc state)
const ClinicviewHeader = () => {
    const [selectedSpecialty, setSelectedSpecialty] = useState('');
    const [selectedHospital, setSelectedHospital] = useState('');
    const [isTopDoctor, setIsTopDoctor] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    // Function to find doctor by id (assuming you pass doctorId as props or some other way)
    const handleDoctorSelect = (doctorId) => {
        const doctor = doctorData.find(doc => doc.DoctorId === doctorId);
        setSelectedDoctor(doctor);
    }
    // Lọc danh sách bác sĩ dựa trên chuyên khoa, bệnh viện, và tiêu chí bác sĩ giỏi
    const filteredDoctors = doctorData.filter(doctor => {
        const specialtyMatch = selectedSpecialty ? doctor.specialty === selectedSpecialty : true;
        const hospitalMatch = selectedHospital ? doctor.hospital === selectedHospital : true;
        const topDoctorMatch = isTopDoctor ? doctor.experience >= 15 : true;
        return specialtyMatch && hospitalMatch && topDoctorMatch;
    });

    return (
        <div className="doctor-search-container">
            <h2>Tìm kiếm bác sĩ</h2>
            {/* Tìm kiếm theo chuyên khoa */}
            <div>
                <label htmlFor="specialty">Chuyên khoa:</label>
                <select id="specialty" value={selectedSpecialty} onChange={(e) => setSelectedSpecialty(e.target.value)}>
                    <option value="">Tất cả</option>
                    <option value="Nhi khoa">Nhi khoa</option>
                    <option value="Tim mạch">Tim mạch</option>
                    <option value="tiêu hóa">Tiêu hóa</option>
                    <option value="Thần kinh">Thần kinh</option>
                    <option value="Cơ xương khớp">Cơ xương khớp</option>
                </select>
            </div>

            {/* Tìm kiếm theo bệnh viện/phòng khám */}
            <div>
                <label htmlFor="hospital">Bệnh viện/Phòng khám:</label>
                <select id="hospital" value={selectedHospital} onChange={(e) => setSelectedHospital(e.target.value)}>
                    <option value="">Tất cả</option>
                    <option value="Bệnh viện 108">Bệnh viện 108</option>
                    <option value="Bệnh viện đa khoa Hà Nội">Bệnh viện đa khoa Hà Nội</option>
                    <option value="Bệnh viện Đại học y">Bệnh viện Đại học y</option>
                </select>
            </div>

            {/* Lọc bác sĩ giỏi */}
            <div>
                <label>
                    <input type="checkbox" checked={isTopDoctor} onChange={(e) => setIsTopDoctor(e.target.checked)} />

                </label>
            </div>

            {/* Hiển thị danh sách bác sĩ */}
            <div className="doctor-list">
                {filteredDoctors.length > 0 ? (
                    filteredDoctors.map(doctor => (
                        <div key={doctor.doctorId} className="doctor-card">
                            <h3>{`${doctor.title} ${doctor.name}`}</h3>
                            <p>Chuyên khoa: {doctor.specialty}</p>
                            <p>Bệnh viện: {doctor.hospital}</p>
                            <p>Kinh nghiệm: {doctor.experience} năm</p>
                            <p>{doctor.description}</p>
                        </div>
                    ))
                ) : (
                    <p>Không tìm thấy bác sĩ phù hợp</p>
                )}
            </div>
        </div>
    );
};

export default withRouter(ClinicviewHeader);
