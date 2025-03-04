## Introduction
The Book Social Network is a comprehensive application that allows users to organize and share their book collections while connecting with fellow book lovers. It includes features like user registration, secure email verification, book management (such as creating, updating, sharing, and archiving books), borrowing books with availability checks, returning borrowed books, and approving book returns. The system ensures security with JWT tokens and follows best practices in REST API design. The backend is developed using Spring Boot 3 and Spring Security 6, while the frontend is built with Angular and styled with Bootstrap.
## Functional Requirement
  - User Registration: Users are able to sign up for a new account.
  - Email Verification: Accounts are activated through a secure email verification code.
  - User Login: Returning users can securely log into their accounts.
  - Book Management: Users can add, modify, share, and archive their books.
  - Book Borrowing: The system checks the availability of a book before allowing borrowing.
  - Book Return: Users can return books they have borrowed.
  - Book Return Approval: There is a feature to approve the return of books.
## Class Diagram
![image](https://github.com/user-attachments/assets/1502df1a-0339-47a9-8713-33a648b7bf8b)

## Security Pipeline
![security (1)](https://github.com/user-attachments/assets/c1e0eabd-8ed3-45e4-9d56-ae269c3aa2c0)

## Technology Used
Backend (book-network)
  - Spring Boot 3
  - Spring Security 6
  - JWT Token Authentication
  - Spring Data JPA
  - JSR-303 and Spring Validation
  - OpenAPI and Swagger UI Documentation
  - Docker
  - GitHub Actions
  - Keycloak

Frontend (book-network-ui)
  - Angular
  - Component-Based Architecture
  - Lazy Loading
  - Authentication Guard
  - OpenAPI Generator for Angular
  - Bootstrap
