import type { Meta, StoryObj } from '@storybook/react-vite'
import { ColorSwatch } from '../components/atoms/ColorSwatch'

const meta = {
  title: 'Foundations/Colors/Primitives',
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const grayColors = [
  { name: '50', token: '--sanz-color-gray-50' },
  { name: '100', token: '--sanz-color-gray-100' },
  { name: '200', token: '--sanz-color-gray-200' },
  { name: '300', token: '--sanz-color-gray-300' },
  { name: '400', token: '--sanz-color-gray-400' },
  { name: '500', token: '--sanz-color-gray-500' },
  { name: '600', token: '--sanz-color-gray-600' },
  { name: '700', token: '--sanz-color-gray-700' },
  { name: '800', token: '--sanz-color-gray-800' },
  { name: '900', token: '--sanz-color-gray-900' },
  { name: '950', token: '--sanz-color-gray-950' },
]

export const Gray: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
      }}
    >
      {grayColors.map((color) => (
        <ColorSwatch
          key={color.name}
          name={color.name}
          token={color.token}
        />
      ))}
    </div>
  ),
}