// import { render, screen, waitFor, act } from '@testing-library/react';
// import App from '../components/App';

// describe('App', () => {
//   const mockResponse = [
//     {
//       id: '1',
//       title: 'Buy This Book Now',
//       author: 'Chris Minnick',
//       published: '2023',
//       country: 'USA',
//       lang: 'English',
//       pages: '1000',
//       image: 'defult.jpg',
//       url: '',
//       price: '5',
//     },
//   ];

//   beforeEach(() => {
//     global.fetch = jest.fn(() =>
//       Promise.resolve({
//         json: () => Promise.resolve(mockResponse),
//       })
//     );
//   });

//   afterEach(() => {
//     jest.restoreAllMocks();
//   });

//   it('returns data from the api', async () => {
//     render(<App />);
//     await waitFor(() => {
//       expect(screen.getByText(/buy this book now/i)).toBeInTheDocument();
//     });
//     screen.debug();
//   });

//   test('demo', () => {
//     expect(true).toBe(true);
//   });

//   test('Renders the main page', () => {
//     render(<App />);
//     expect(true).toBeTruthy();
//   });

//   test('renders as expected', () => {
//     const { container } = render(<App />);
//     expect(container).toMatchSnapshot();
//   });
// });
