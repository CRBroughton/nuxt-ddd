import type { Meta, StoryObj } from '@storybook/vue3'
import DashboardButton from './DashboardButton.vue'

const meta = {
  title: 'Dashboard/Button',
  component: DashboardButton,
} satisfies Meta<typeof DashboardButton>

export default meta
type Story = StoryObj<typeof meta>
type StoryWithSlots = Story & {
  args: {
    default: string
  }
}
export const Default: StoryWithSlots = {
  args: {
    default: 'Default slot content',
    intent: "tailwind"
  },
  render: (args) => ({
    components: {
      DashboardButton
    },
    setup(props, { slots }) {
      return () => 
        h(DashboardButton, args, {
          default: () => args.default
        })
    },
  })
}
