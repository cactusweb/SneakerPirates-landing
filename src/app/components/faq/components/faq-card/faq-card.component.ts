import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Faq } from '../../models/faq.interfaces';

enum CardCollapseStates {
  collapsed = 'collapsed',
  expanded = 'expanded',
}

@Component({
  selector: 'app-faq-card',
  templateUrl: './faq-card.component.html',
  styleUrls: ['./faq-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('collapsePanel', [
      state(
        CardCollapseStates.collapsed,
        style({
          height: '0px',
          marginTop: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        CardCollapseStates.expanded,
        style({
          height: '*',
          marginTop: '16px',
        })
      ),
      transition(
        `${CardCollapseStates.collapsed} <=> ${CardCollapseStates.expanded}`,
        animate('0.2s')
      ),
    ]),
  ],
})
export class FaqCardComponent {
  @Input()
  faq!: Faq;

  state: CardCollapseStates = CardCollapseStates.collapsed;
  readonly CardCollapseStates = CardCollapseStates;

  onChangeCollapseState() {
    if (this.state == CardCollapseStates.collapsed)
      this.state = CardCollapseStates.expanded;
    else this.state = CardCollapseStates.collapsed;
  }
}
