import React from 'react';
import { useParams } from 'react-router-dom';

// Dữ liệu các chuyên khoa
const specialties = [
    { SpecialtyId: 1, name: "Cơ xương khớp", description: "Chăm sóc và điều trị cho trẻ em." },
    { SpecialtyId: 2, name: "Nhi khoa", description: "Chăm sóc và điều trị các bệnh về tim." },
    { SpecialtyId: 3, name: "Tim mạch", description: "Chăm sóc và điều trị các bệnh về tim." },
    { SpecialtyId: 3, name: "Tiêu hóa", description: "Chẩn đoán và điều trị các bệnh nội khoa." },
    { SpecialtyId: 4, name: "Thần kinh", description: "Phẫu thuật và điều trị ngoại khoa." }
];

const DetailSpecialty = () => {
    const { SpecialtyId } = useParams(); // Lấy ID của chuyên khoa từ URL
    const specialty = specialties.find(s => s.SpecialtyId === parseInt(SpecialtyId, 10)); // Tìm chuyên khoa theo ID

    if (!specialty) {
        return <div>Không tìm thấy chuyên khoa</div>;
    }

    return (
        <div>
            <h1>{specialty.name} </h1>
            <p>{specialty.description} </p>
        </div>
    );
};
export default DetailSpecialty;
