import { Component } from '@angular/core';
import { SafeLinkDirective } from '../safe-link.directive';

@Component({
  selector: 'app-learning-resources',
  standalone: true,
  imports: [SafeLinkDirective],
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.scss'
})
export class LearningResourcesComponent {

}
