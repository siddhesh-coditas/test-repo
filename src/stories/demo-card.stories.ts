import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './../app/app.component';

export default {
  title: 'Example/Demo card',
  component: AppComponent
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  component: AppComponent,
  props: args,
});

export const Red = Template.bind({});
Red.args = {
  color: 'red',
  type: 'standard'
};