
import React from 'react';
import { useParams } from 'react-router-dom';
import './DetailSpecialty.scss';
const DetailSpecialty = () => {
    const { SpecialtyId } = useParams();

    const specialties = [
        {
            specialtyId: 1,
            name: 'Cơ xương khớp',
            description: 'Chuyên khoa cơ xương khớp là chuyên khoa chăm sóc và điều trị các bệnh lý về cơ xương khớp, bao gồm cả các bệnh lý về xương, khớp, cơ và gân.',
            symptoms: 'Đau nhức xương, khớp, cơ; sưng, đỏ, nóng; khó di chuyển',
            treatment: 'Điều trị bằng thuốc, vật lý trị liệu, phẫu thuật',
            prevention: 'Tập thể dục thường xuyên, ăn uống cân đối, tránh chấn thương',
        },
        {
            specialtyId: 2,
            name: 'Nhi khoa',
            description: 'Chuyên khoa nhi khoa là chuyên khoa chăm sóc và điều trị các bệnh lý về trẻ em, bao gồm cả các bệnh lý về nhiễm trùng, dị ứng, và các bệnh lý khác.',
            symptoms: 'Sốt, ho, khò khè, nôn mửa, tiêu chảy',
            treatment: 'Điều trị bằng thuốc, tiêm chủng, chăm sóc tại nhà',
            prevention: 'Tiêm chủng đầy đủ, giữ gìn vệ sinh, tránh tiếp xúc với người bệnh',
        },
        {
            specialtyId: 3,
            name: 'Tim mạch',
            description: 'Chuyên khoa tim mạch là chuyên khoa chăm sóc và điều trị các bệnh lý về tim mạch, bao gồm cả các bệnh lý về tim, mạch máu và các bệnh lý khác.',
            symptoms: 'Đau ngực, khó thở, mệt mỏi, sưng chân',
            treatment: 'Điều trị bằng thuốc, phẫu thuật, thay đổi lối sống',
            prevention: 'Tập thể dục thường xuyên, ăn uống cân đối, tránh hút thuốc',
        },
        {
            specialtyId: 4,
            name: 'Tiêu hóa',
            description: 'Chuyên khoa tiêu hóa là chuyên khoa chăm sóc và điều trị các bệnh lý về tiêu hóa, bao gồm cả các bệnh lý về dạ dày, ruột và các bệnh lý khác.',
            symptoms: 'Đau bụng, nôn mửa, tiêu chảy, đầy hơi',
            treatment: 'Điều trị bằng thuốc, thay đổi lối sống, phẫu thuật',
            prevention: 'Ăn uống cân đối, tránh ăn quá no, uống đủ nước',
        },
        {
            specialtyId: 5,
            name: 'Thần kinh',
            description: 'Chuyên khoa thần kinh là chuyên khoa chăm sóc và điều trị các bệnh lý về thần kinh, bao gồm cả các bệnh lý về não, tủy sống và các bệnh lý khác.',
            symptoms: 'Đau đầu, chóng mặt, mất ngủ, khó tập trung',
            treatment: 'Điều trị bằng thuốc, vật lý trị liệu, phẫu thuật',
            prevention: 'Tập thể dục thường xuyên, ăn uống cân đối, tránh căng thẳng',
        },
    ];

    const specialty = specialties.find((specialty) => specialty.specialtyId === parseInt(SpecialtyId, 10));

    if (!specialty) {
        return <div>Không tìm thấy chuyên khoa</div>;
    }

    return (
        <div className='bg-specialty'>
            <div className="detail-specialty">
                <h1>{specialty.name}</h1>
                <p>{specialty.description}</p>
                <h2>Triệu chứng</h2>
                <ul>
                    {specialty.symptoms.split(';').map((symptom, index) => (
                        <li key={index}>{symptom}</li>
                    ))}
                </ul>
                <h2>Điều trị</h2>
                <p>{specialty.treatment}</p>
                <h2>Phòng ngừa</h2>
                <p>{specialty.prevention}</p>
            </div>
        </div>
    );
};

export default DetailSpecialty;