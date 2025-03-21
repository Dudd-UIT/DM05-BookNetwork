package com.demo05.book_network.history;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BookTransactionHistoryRepository extends JpaRepository<BookTransactionHistory, Integer> {

        @Query("""
                        SELECT history
                        FROM BookTransactionHistory history
                        WHERE history.user.id = :userId
                        """)
        Page<BookTransactionHistory> findAllBorrowedBooks(Pageable pageable, Integer userId);

        @Query("""
                        SELECT history
                        FROM BookTransactionHistory history
                        WHERE history.book.owner.id = :userId
                        """)
        Page<BookTransactionHistory> findAllReturnedBooks(Pageable pageable, Integer userId);

        @Query("""
                        SELECT (COUNT(*) >0) AS isBorrowed
                        FROM BookTransactionHistory bookTransactionHistory
                        WHERE bookTransactionHistory.user.id = :userId
                        AND bookTransactionHistory.book.id = :bookId
                        AND bookTransactionHistory.returnApproved = false
                        """)
        boolean isAlreadyBorrowedByUser(Integer bookId, Integer userId);

        @Query("""
                        SELECT bookTransactionHistory
                        FROM BookTransactionHistory bookTransactionHistory
                        WHERE bookTransactionHistory.user.id = :userId
                        AND bookTransactionHistory.book.id = :bookId
                        AND bookTransactionHistory.returned = false
                        AND bookTransactionHistory.returnApproved = false
                        """)
        Optional<BookTransactionHistory> findByBookIdAndUserId(Integer bookId, Integer userId);

        @Query("""
                        SELECT bookTransactionHistory
                        FROM BookTransactionHistory bookTransactionHistory
                        WHERE bookTransactionHistory.book.owner.id = :ownerId
                        AND bookTransactionHistory.book.id = :bookId
                        AND bookTransactionHistory.returned = true
                        AND bookTransactionHistory.returnApproved = false
                        """)
        Optional<BookTransactionHistory> findByBookIdAndOwnerId(Integer bookId, Integer ownerId);

}
