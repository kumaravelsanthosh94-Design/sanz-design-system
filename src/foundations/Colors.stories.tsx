import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Foundations/Colors',
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Brand: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <div>
        <div
          style={{
            width: '120px',
            height: '80px',
            background: 'var(--sanz-color-brand-100)',
          }}
        />
        <p>Brand 100</p>
      </div>

      <div>
        <div
          style={{
            width: '120px',
            height: '80px',
            background: 'var(--sanz-color-brand-200)',
          }}
        />
        <p>Brand 200</p>
      </div>

      <div>
        <div
          style={{
            width: '120px',
            height: '80px',
            background: 'var(--sanz-color-brand-300)',
          }}
        />
        <p>Brand 300</p>
      </div>

      <div>
        <div
          style={{
            width: '120px',
            height: '80px',
            background: 'var(--sanz-color-brand-400)',
          }}
        />
        <p>Brand 400</p>
      </div>
    </div>
  ),
}