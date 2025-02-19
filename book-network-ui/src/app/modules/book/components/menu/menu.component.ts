import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KeycloakService } from '../../../../services/keycloak/keycloak.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private keycloakService: KeycloakService
  
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log('📌 MenuComponent đang chạy trên trình duyệt (Client-Side)');

      const linkColor = document.querySelectorAll('.nav-link');
      linkColor.forEach((link) => {
        const href = link.getAttribute('routerLink');
        console.log('href', href);
        if (href && window.location.pathname.includes(href)) {
          link.classList.add('active');
        }
        link.addEventListener('click', () => {
          linkColor.forEach((l) => l.classList.remove('active'));
          link.classList.add('active');
        });
      });
    }
  }

  async logout() {
    this.keycloakService.logout()
  }
}
