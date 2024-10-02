import {isPlatformBrowser,CommonModule } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { OutsideClickDirective } from '../../directives/common.directive';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule , MatIconModule ,OutsideClickDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  theme: string = 'light';
  isDark: boolean = false;

 constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  isSideBarOpen = false;
  isDropownOpen = false;
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const storedTheme = window.localStorage.getItem('theme');
      if (storedTheme === 'dark') {
        this.theme = 'dark';
        this.isDark = true;
      }
    }
  }

  handleThemeSwitch(): void {
   if (isPlatformBrowser(this.platformId)) {
      if (this.theme === 'light') {
        this.theme = 'dark';
        this.isDark = true;
        window.localStorage.setItem('theme', 'dark');

      } else {
        this.theme = 'light';
        this.isDark = false;
        window.localStorage.setItem('theme', 'light');
      }
    }
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(this.theme);

  }
  toggleSidebar() {
    this.isSideBarOpen=!this.isSideBarOpen
  }
  toogleDropdown() {
    this.isDropownOpen = !this.isDropownOpen ;
  }
  handleClick(url:string) {

  }
}
