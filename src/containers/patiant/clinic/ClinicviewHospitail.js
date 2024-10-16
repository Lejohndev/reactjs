import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { doctorData } from '../Doctor/DetailDoctor';
import './ClinicviewHeader.scss'

// Dữ liệu bác sĩ (giả định từ API hoặc state)
const ClinicviewHospitail = ({ history }) => {
    const [selectedSpecialty, setSelectedSpecialty] = useState('');
    const [selectedHospital, setSelectedHospital] = useState('');
    const [isTopDoctor, setIsTopDoctor] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    // Function to find doctor by id (assuming you pass DoctorId as props or some other way)
    const handleDoctorSelect = (DoctorId) => {
        const doctor = doctorData.find(doc => doc.DoctorId === DoctorId);
        setSelectedDoctor(doctor);
    }

    // Lọc danh sách bác sĩ dựa trên chuyên khoa, bệnh viện, và tiêu chí bác sĩ giỏi
    const filteredDoctors = doctorData.filter(doctor => {
        const specialtyMatch = selectedSpecialty ? doctor.specialty === selectedSpecialty : true;
        const hospitalMatch = selectedHospital ? doctor.hospital === selectedHospital : true;
        const topDoctorMatch = isTopDoctor ? doctor.experience >= 15 : true;
        return specialtyMatch && hospitalMatch && topDoctorMatch;
    });

    const handleRegister = (DoctorId) => {
        history.push(`/doctor/${DoctorId}`);
    }

    return (
        <div className='bg-select'>
            <div className="doctor-search-container">
                <h2>Tìm kiếm bác sĩ</h2>

                {/* Tìm kiếm theo bệnh viện/phòng khám */}
                <div>
                    <label htmlFor="hospital">Bệnh viện/Phòng khám:</label>
                    <select id="hospital" value={selectedHospital} onChange={(e) => setSelectedHospital(e.target.value)}>
                        <option value="">Tất cả</option>
                        <option value="Bệnh viện 108">Bệnh viện 108</option>
                        <option value="Bệnh viện đa khoa Hà Nội">Bệnh viện đa khoa Hà Nội</option>
                        <option value="Bệnh viện Đại học Y Hà Nội">Bệnh viện Đại học Y Hà Nội</option>
                    </select>
                </div>



                {/* Hiển thị danh sách bác sĩ */}
                <div className="doctor-list">
                    {filteredDoctors.length > 0 ? (
                        filteredDoctors.map(doctor => (
                            <div key={doctor.DoctorId} className="doctor-card">
                                <div >
                                    <img src={doctor.image} className="doctor-image" /></div>
                                <h3>{`${doctor.title} ${doctor.name}`}</h3>
                                <p>Chuyên khoa: {doctor.specialty}</p>
                                <p>Bệnh viện: {doctor.hospital}</p>
                                <p>Kinh nghiệm: {doctor.experience} năm</p>
                                <p>{doctor.description}</p>
                                <button onClick={() => handleRegister(doctor.DoctorId)}>Đăng kí khám bệnh</button>
                            </div>
                        ))
                    ) : (
                        <p>Không tìm thấy bác sĩ phù hợp</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default withRouter(ClinicviewHospitail);