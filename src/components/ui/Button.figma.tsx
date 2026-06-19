// Code Connect mapping — links the Figma Button component to this repo's <Button />.
// Reference example: other components follow the same shape (map Figma variant
// properties to React props). Publish with `npx figma connect publish` (requires
// `@figma/code-connect` and a Figma Dev Mode plan).
import figma from '@figma/code-connect'
import Button from './Button'

figma.connect(
  Button,
  'https://www.figma.com/design/njWLlZEF7ekubL8zrsegQ3/Claude-Design-System?node-id=24-2',
  {
    props: {
      label: figma.string('Label'),
      variant: figma.enum('Style', {
        Primary: 'primary',
        Secondary: 'secondary',
        Ghost: 'ghost',
      }),
      size: figma.enum('Size', {
        Small: 'sm',
        Medium: 'md',
        Large: 'lg',
      }),
      disabled: figma.enum('State', { Disabled: true }),
    },
    example: ({ label, variant, size, disabled }) => (
      <Button variant={variant} size={size} disabled={disabled}>
        {label}
      </Button>
    ),
  },
)
