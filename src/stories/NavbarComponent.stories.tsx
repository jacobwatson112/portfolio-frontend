import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NavbarComponent from '../components/NavbarComponent'
import { NavbarComponentProps } from '../Types/props/NavbarComponentProps';

const meta: Meta = {
    title: 'Navigation/Navbar Component',
    component: NavbarComponent,
    argTypes: {
        pageWidth: {
            defaultValue: 1920
        }
    }
};

export default meta;

const Template: Story<NavbarComponentProps> = (args) => <NavbarComponent {...args}></NavbarComponent>
export const Default = Template.bind({});