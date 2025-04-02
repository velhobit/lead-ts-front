import { Component } from '@angular/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { Tab } from '../../models/tab.model';
import { CardComponent } from '../../components/card/card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Card } from '../../models/card.model';
import { LeadService } from '../../services/lead.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderComponent } from '../../components/loader/loader.component';
import { AlertComponent } from '../../components/alert/alert.component';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    TabsComponent,
    CardComponent,
    LoaderComponent,
    AlertComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  tabs: Tab[] = [
    {
      name: 'Invited',
      label: 'Invited',
      onClick: () => {
        this.loadInvitedLeads();
        this.goToLeads();
      },
    },
    {
      name: 'Accepted',
      label: 'Accepted',
      onClick: () => {
        this.loadAcceptedLeads();
        this.goToLeads();
      },
    },
  ];
  leads: Card[] = [];
  status: string = 'Invited';
  loading: boolean = false;

  constructor(
    private leadService: LeadService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.status = this.route.snapshot.paramMap.get('status') || 'Invited';
    if (this.status == 'Accepted') {
      this.loadAcceptedLeads();
    } else {
      this.loadInvitedLeads();
    }
  }

  loadInvitedLeads() {
    this.loading = true;
    //Force Loading Animation
    setTimeout(() => {
      this.leadService.getInviteds().subscribe({
        next: (data) => {
          this.leads = data;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error to load invite lead:', error);
          this.loading = false;
        },
      });
    }, 1000);
  }

  loadAcceptedLeads() {
    this.loading = true;
    //Force Loading Animation
    setTimeout(() => {
      this.leadService.getAccepteds().subscribe({
        next: (data) => {
          this.leads = data;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error to load accepted lead:', error);
          this.loading = false;
        },
      });
    }, 1000);
  }

  goToLeads() {
    this.router.navigate(['/', this.status]);
  }

  statusChanged() {
    if (this.status == 'Accepted') {
      this.loadAcceptedLeads();
    } else {
      this.loadInvitedLeads();
    }
  }
}
