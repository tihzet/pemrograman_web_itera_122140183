import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { BookContext } from '../context/BookContext';
import BookCard from '../components/BookCard';

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('BookCard component', () => {
  const mockBook = {
    id: 1,
    title: 'Test Book',
    author: 'Test Author',
    status: 'owned'
  };
  
  const mockDeleteBook = jest.fn();
  
  const renderWithContext = (book) => {
    return render(
      <BookContext.Provider value={{ deleteBook: mockDeleteBook }}>
        <BrowserRouter>
          <BookCard book={book} />
        </BrowserRouter>
      </BookContext.Provider>
    );
  };
  
  test('renders book information correctly', () => {
    renderWithContext(mockBook);
    
    expect(screen.getByText('Test Book')).toBeInTheDocument();
    expect(screen.getByText('Test Author')).toBeInTheDocument();
    expect(screen.getByText('Dimiliki')).toBeInTheDocument();
  });
  
  test('calls deleteBook when delete button is clicked', () => {
    renderWithContext(mockBook);
    
    const deleteButton = screen.getByText('Hapus');
    fireEvent.click(deleteButton);
    
    expect(mockDeleteBook).toHaveBeenCalledWith(1);
  });
});