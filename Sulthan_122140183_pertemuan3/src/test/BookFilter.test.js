import { render, screen, fireEvent } from '@testing-library/react';
import { BookContext } from '../context/BookContext';
import BookFilter from '../components/BookFilter';

describe('BookFilter component', () => {
  const mockSetFilter = jest.fn();
  
  const renderWithContext = (currentFilter) => {
    return render(
      <BookContext.Provider value={{ filter: currentFilter, setFilter: mockSetFilter }}>
        <BookFilter />
      </BookContext.Provider>
    );
  };
  
  test('renders all filter options', () => {
    renderWithContext('all');
    
    expect(screen.getByText('Semua Buku')).toBeInTheDocument();
    expect(screen.getByText('Dimiliki')).toBeInTheDocument();
    expect(screen.getByText('Sedang Dibaca')).toBeInTheDocument();
    expect(screen.getByText('Ingin Dibeli')).toBeInTheDocument();
  });
  
  test('highlights the active filter', () => {
    renderWithContext('reading');
    
    const readingButton = screen.getByText('Sedang Dibaca');
    expect(readingButton).toHaveClass('bg-blue-600');
    
    const allButton = screen.getByText('Semua Buku');
    expect(allButton).not.toHaveClass('bg-blue-600');
  });
  
  test('calls setFilter when a filter option is clicked', () => {
    renderWithContext('all');
    
    const wishlistButton = screen.getByText('Ingin Dibeli');
    fireEvent.click(wishlistButton);
    
    expect(mockSetFilter).toHaveBeenCalledWith('wishlist');
  });
});