import CarList from '../components/Car/CarList';

const DUMMY_MEETUPS = [
  {
    id: '1',
    title: 'Toyota',
    image:
      'https://s.isanook.com/au/0/rp/r/w850/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2F1LzAvdWQvMTUvNzU1MzIvbmV3LWNhci1tYXkuanBn.jpg',
    // address: 'Some address 5, 12345 Some City',
    description: 'C-HR BY KARL LAGERFELD',
  },
  {
    id: '2',
    title: 'Honda',
    image:
      'https://s.isanook.com/au/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2F1LzAvdWQvMTUvNzU0ODQvaG9uZGEuanBn.jpg',
    // address: 'Some address 10, 12345 Some City',
    description: 'All-new Honda City 2020',
  },
  {
    id: '3',
    title: 'Mitsubish',
    image:
      'https://s.isanook.com/au/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2F1LzAvdWQvMTUvNzU1MjcvbWl0enUzLmpwZw==.jpg',
    // address: 'Some address 10, 12345 Some City',
    description: 'Xpander Cross 2020',
  },
  {
    id: '4',
    title: 'Chevrolet',
    image:
      'https://s.isanook.com/au/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2F1LzAvdWQvMTUvNzU1MDAvY2hldjQuanBn.jpg',
    // address: 'Some address 10, 12345 Some City',
    description: 'Chevrolet Captiva',
  },
  {
    id: '5',
    title: 'Isuzu',
    image:
      'https://s.isanook.com/au/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2F1LzAvdWQvMTUvNzU1MzEvaXN1enUxLmpwZw==.jpg',
    // address: 'Some address 10, 12345 Some City',
    description: 'MU-X The New ONYX New',
  },
  {
    id: '6',
    title: 'BMW',
    image:
      'https://s.isanook.com/au/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2F1LzAvdWQvMTUvNzU1MTkvYm13LmpwZw==.jpg',
    // address: 'Some address 10, 12345 Some City',
    description: 'M4 Coupe Competition Package',
  },
  {
    id: '7',
    title: 'Mercedes-Benz',
    image:
      'https://s.isanook.com/au/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2F1LzAvdWQvMTUvNzU1MTEvYmVuejEuanBn.jpg',
    // address: 'Some address 10, 12345 Some City',
    description: 'E 300 Cabriolet ',
  },
  {
    id: '8',
    title: 'MG',
    image:
      'https://s.isanook.com/au/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2F1LzAvdWQvMTUvNzU0ODgvbWcuanBn.jpg',
    // address: 'Some address 10, 12345 Some City',
    description: 'NEW MG ZS 2020',
  },
  {
    id: '9',
    title: 'Mazda',
    image:
      'https://s.isanook.com/au/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2F1LzAvdWQvMTUvNzU1MjgvbWF6ZGEyLmpwZw==.jpg',
    // address: 'Some address 10, 12345 Some City',
    description: 'New Mazda2 Minorchange',
  },
  {
    id: '10',
    title: 'Ford',
    image:
      'https://s.isanook.com/au/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2F1LzAvdWQvMTUvNzU0OTUvZm9yZC5qcGc=.jpg',
    // address: 'Some address 10, 12345 Some City',
    description: 'Ford Ranger Wildtrak X',
  },
  
];

function HomePage(props) {
  return <CarList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  }; 
}

export default HomePage;
