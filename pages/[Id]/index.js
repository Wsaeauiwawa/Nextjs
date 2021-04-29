import CarDetail from '../../components/Car/CarDetail';

function CarDetails() {
  return (
    <CarDetail
      image='https://www.headlightmag.com/hlmwp/wp-content/uploads/2020/04/TMT-News-IMG-e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855.jpg'
      title='Toyota C-HR KARL LAGERFELD'
      // address='Nakhon Si Thammarat'
      description='

      ราคาอย่างเป็นทางการ
      
      1.8 Hybrid High KARL LAGERFELD  1,219,000 บาท
      มาพร้อมเงื่อนไขการรับประกันตัวรถ, ระบบ Hybrid และ ฟรีค่าแรงเช็คระยะ
      
      ทุกรุ่น ฟรีค่าแรง 11 ระยะ ตั้งแต่ 1,000 – 100,000 กิโลเมตร
      ทุกรุ่น ขยายเวลารับประกันคุณภาพรถใหม่ Warranty เป็น 5 ปี หรือ 150,000 กม.
      รุ่น Hybrid รับประกันระบบ Hybrid นาน 5 ปี โดยไม่จำกัดระยะทาง
      รุ่น Hybrid รับประกันแบตเตอรี่ Hybrid 10 ปี โดยไม่จำกัดระยะทาง
      '
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          Id: '1',
        },
      },
      {
        params: {
          Id: '2',
        },
      },
      {
        params: {
          Id: '3',
        },
      },
      {
        params: {
          Id: '4',
        },
      },
      {
        params: {
          Id: '5',
        },
      },
      {
        params: {
          Id: '6',
        },
      },
      {
        params: {
          Id: '7',
        },
      },
      {
        params: {
          Id: '8',
        },
      },
      {
        params: {
          Id: '9',
        },
      },
      {
        params: {
          Id: '10',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const Id = context.params.Id;

  console.log(Id);

  return {
    props: {
      meetupData: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        id: Id,
        title: 'First Meetup',
        address: 'Some Street 5, Some City',
        description: 'This is a first meetup',
      },
    },
  };
}

export default CarDetails;
