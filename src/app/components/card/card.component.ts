import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Card } from '../../models/card.model';
import { LeadService } from '../../services/lead.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'card',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input('card') card?: Card;
  @Output() statusChanged = new EventEmitter<void>();

  constructor(
    private leadService: LeadService,
    private alertService: AlertService
  ) {}

  formatDateString(dateString?: string): string {
    if (dateString) {
      const date = new Date(dateString);

      const options: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      };

      return new Intl.DateTimeFormat(navigator.language, options)
        .format(date)
        .replace(',', ' @');
    }
    return '';
  }

  changeStatus(id: number, status: string) {
    this.leadService.changeStatus(id, status).subscribe({
      next: () => {
        this.statusChanged.emit();
      },
      error: (error) => console.error('Erro ao mudar status:', error),
    });
  }

  accept(id?: number) {
    if (id) {
      this.alertService.confirm(
        'Accept!',
        'Are you sure you want to accept this lead?',
        () => {
          this.changeStatus(id, 'Accepted');
        }
      );
    }
  }

  declined(id?: number) {
    if (id) {
      this.alertService.confirm(
        'Declined',
        'Are you sure you want to declined this lead?',
        () => {
          this.changeStatus(id, 'Declined');
        }
      );
    }
  }
}
