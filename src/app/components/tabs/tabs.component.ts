import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tab } from '../../models/tab.model';

@Component({
  selector: 'tabs',
  imports: [FormsModule, CommonModule],
  templateUrl: './tabs.component.html',
  standalone: true,
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  @Input('tabs') tabs: Tab[] = [];
  @Input('selected') selected: string = 'invited';
  @Output() selectedChange = new EventEmitter<string>();

  selectTab(tabName: string, onClick?: () => void) {
    this.selected = tabName;
    this.selectedChange.emit(this.selected);
    if (onClick) {
      onClick();
    }
  }
}
