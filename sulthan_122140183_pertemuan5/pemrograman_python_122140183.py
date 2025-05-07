from abc import ABC, abstractmethod

class LibraryItem(ABC):
    def __init__(self, id, title):
        self._id = id  
        self._title = title  

    @property
    def title(self):
        return self._title

    @property
    def id(self):
        return self._id

    @abstractmethod
    def display_info(self):
        pass

class Book(LibraryItem):
    def __init__(self, id, title, author):
        super().__init__(id, title)
        self.__author = author  

    @property
    def author(self):
        return self.__author

    def display_info(self):
        print(f"Book ID: {self.id}, Title: {self.title}, Author: {self.author}")

class Magazine(LibraryItem):
    def __init__(self, id, title, issue_number):
        super().__init__(id, title)
        self.__issue_number = issue_number  

    @property
    def issue_number(self):
        return self.__issue_number

    def display_info(self):
        print(f"Magazine ID: {self.id}, Title: {self.title}, Issue Number: {self.issue_number}")

class Library:
    def __init__(self):
        self.__items = []  

    def add_item(self, item):
        if isinstance(item, LibraryItem):
            self.__items.append(item)
        else:
            print("Only LibraryItem objects can be added.")

    def display_items(self):
        if not self.__items:
            print("No items in the library.")
        for item in self.__items:
            item.display_info()

    def search_by_title(self, title):
        found_items = [item for item in self.__items if item.title.lower() == title.lower()]
        if found_items:
            for item in found_items:
                item.display_info()
        else:
            print(f"No items found with title '{title}'.")

    def search_by_id(self, id):
        found_items = [item for item in self.__items if item.id == id]
        if found_items:
            for item in found_items:
                item.display_info()
        else:
            print(f"No items found with ID '{id}'.")

if __name__ == "__main__":
    library = Library()

    book1 = Book(1, "Python Programming", "John Doe")
    magazine1 = Magazine(2, "Tech Monthly", 34)

    library.add_item(book1)
    library.add_item(magazine1)

    print("All items in the library:")
    library.display_items()

    print("\nSearch by title 'Python Programming':")
    library.search_by_title("Python Programming")

    print("\nSearch by ID 2:")
    library.search_by_id(2)
