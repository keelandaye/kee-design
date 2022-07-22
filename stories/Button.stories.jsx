import React from 'react';

import { Button } from './Button';

export default {
    title: 'Button',
    component: 'Button',
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'success', 'warning', 'danger'],
            control: 'select',
        },
        backgroundColor: { control: 'color' },
        onClick: { action: 'clicked' },
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    label: 'Button',
};

export const Success = Template.bind({});
Success.args = {
    variant: 'success',
    label: 'Button',
};

export const Warning = Template.bind({});
Warning.args = {
    variant: 'warning',
    label: 'Button',
};

export const Danger = Template.bind({});
Danger.args = {
    variant: 'danger',
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    label: 'Disabled button',
};