import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Custom Import */
import { LoginComponent } from './login/login.component';
import { ProfessorComponent } from './professor/professor.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentComponent } from './student/student.component';
import { CoursesComponent } from './courses/courses.component';

// Debug
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AfterComponent } from './professor/after/after.component';
import { StartComponent } from './professor/start/start.component';
import { PastComponent } from './professor/past/past.component';
import { TestComponent } from './test/test.component';
import { DemoComponent } from './demo/demo.component';
import { TaComponent } from './ta/ta.component';
import { Student2Component } from './student2/student2.component';

const routes: Routes = [
  // Set root to login page
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'professor', component: ProfessorComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'student', component: StudentComponent },
  // Re-designed
  { path: 'student-ui', component: Student2Component },

  // Debug Route
  { path: 'prof-start', component: StartComponent },
  { path: 'prof-after', component: AfterComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'prof-past', component: PastComponent },
  { path: 'ta', component: TaComponent },

  // Demo features
  { path: 'demo', component: DemoComponent },

  // Experimental features
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
