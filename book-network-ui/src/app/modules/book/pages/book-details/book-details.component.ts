import { Component } from '@angular/core';
import { BookResponse } from '../../../../services/models/book-response';
import { PageResponseFeedbackResponse } from '../../../../services/models/page-response-feedback-response';
import { BookService } from '../../../../services/services/book.service';
import { FeedbackService } from '../../../../services/services/feedback.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';
import { RatingComponent } from '../../components/rating/rating.component';

@Component({
  selector: 'app-book-details',
  imports: [NgFor, RatingComponent],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent {
  book: BookResponse = {};
  feedbacks: PageResponseFeedbackResponse = {};
  page = 0;
  size = 5;
  pages: any = [];
  private bookId = 0;

  constructor(
    private bookService: BookService,
    private feedbackService: FeedbackService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.bookId = this.activatedRoute.snapshot.params['bookId'];
    if (this.bookId) {
      this.bookService
        .findBookById({
          'book-id': this.bookId,
        })
        .subscribe({
          next: (book) => {
            this.book = book;
            this.findAllFeedbacks();
          },
        });
    }
  }

  private findAllFeedbacks() {
    this.feedbackService
      .findAllFeedbackByBook({
        'book-id': this.bookId,
        page: this.page,
        size: this.size,
      })
      .subscribe({
        next: (data) => {
          this.feedbacks = data;
        },
      });
  }

  gotToPage(page: number) {
    this.page = page;
    this.findAllFeedbacks();
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllFeedbacks();
  }

  goToPreviousPage() {
    this.page--;
    this.findAllFeedbacks();
  }

  goToLastPage() {
    this.page = (this.feedbacks.totalPages as number) - 1;
    this.findAllFeedbacks();
  }

  goToNextPage() {
    this.page++;
    this.findAllFeedbacks();
  }

  get isLastPage() {
    return this.page === (this.feedbacks.totalPages as number) - 1;
  }
}
