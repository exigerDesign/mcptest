import figma, { html } from '@figma/code-connect/html';

figma.connect(
  'https://www.figma.com/design/9ChlXfwFo7GnylfKnCWLma/v1.-System-Placeholder?node-id=522-32655&m=dev',
  {
    props: {

    },
    example: (props) => html`<app-text-field-input></app-text-field-input>`,
  }
);