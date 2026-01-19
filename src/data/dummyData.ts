import { Page, Task, Goal, Workspace } from '@/types/workspace';

export const dummyPages: Page[] = [
  {
    id: 'page-1',
    title: 'Getting Started',
    icon: '🚀',
    blocks: [
      { id: 'block-1', type: 'heading1', content: 'Welcome to Your Workspace' },
      { id: 'block-2', type: 'text', content: 'This is your personal productivity hub. Use it to organize your thoughts, track tasks, and achieve your goals.' },
      { id: 'block-3', type: 'heading2', content: 'Quick Tips' },
      { id: 'block-4', type: 'todo', content: 'Press / to see all block types', checked: true },
      { id: 'block-5', type: 'todo', content: 'Use the AI assistant for smart suggestions', checked: false },
      { id: 'block-6', type: 'todo', content: 'Create nested pages for better organization', checked: false },
      { id: 'block-7', type: 'divider', content: '' },
      { id: 'block-8', type: 'quote', content: 'The secret of getting ahead is getting started. — Mark Twain' },
    ],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-20'),
  },
  {
    id: 'page-2',
    title: 'Project Notes',
    icon: '📝',
    blocks: [
      { id: 'block-9', type: 'heading1', content: 'Project Alpha' },
      { id: 'block-10', type: 'text', content: 'Key objectives and milestones for Q1 2024.' },
      { id: 'block-11', type: 'heading2', content: 'Objectives' },
      { id: 'block-12', type: 'todo', content: 'Complete user research', checked: true },
      { id: 'block-13', type: 'todo', content: 'Design system implementation', checked: true },
      { id: 'block-14', type: 'todo', content: 'MVP development', checked: false },
      { id: 'block-15', type: 'todo', content: 'Beta testing', checked: false },
      { id: 'block-16', type: 'heading2', content: 'Notes' },
      { id: 'block-17', type: 'text', content: 'Focus on core features first. User feedback is crucial for iteration.' },
    ],
    children: [
      {
        id: 'page-2-1',
        title: 'Meeting Notes',
        icon: '📅',
        parentId: 'page-2',
        blocks: [
          { id: 'block-18', type: 'heading1', content: 'Weekly Standup - Jan 22' },
          { id: 'block-19', type: 'text', content: 'Team discussed progress on current sprint.' },
          { id: 'block-20', type: 'heading3', content: 'Action Items' },
          { id: 'block-21', type: 'todo', content: 'Review PRs by Wednesday', checked: false },
          { id: 'block-22', type: 'todo', content: 'Update documentation', checked: false },
        ],
        createdAt: new Date('2024-01-22'),
        updatedAt: new Date('2024-01-22'),
      },
    ],
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-22'),
  },
  {
    id: 'page-3',
    title: 'Ideas',
    icon: '💡',
    blocks: [
      { id: 'block-23', type: 'heading1', content: 'Idea Bank' },
      { id: 'block-24', type: 'text', content: 'A collection of ideas to explore.' },
      { id: 'block-25', type: 'toggle', content: 'App Ideas', children: [
        { id: 'block-26', type: 'text', content: '• Habit tracker with AI insights' },
        { id: 'block-27', type: 'text', content: '• Smart reading list manager' },
        { id: 'block-28', type: 'text', content: '• Collaborative whiteboard tool' },
      ]},
      { id: 'block-29', type: 'toggle', content: 'Content Ideas', children: [
        { id: 'block-30', type: 'text', content: '• Blog series on productivity' },
        { id: 'block-31', type: 'text', content: '• Video tutorials on the app' },
      ]},
    ],
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-18'),
  },
  {
    id: 'page-4',
    title: 'Daily Journal',
    icon: '📓',
    blocks: [
      { id: 'block-32', type: 'heading1', content: 'January 2024' },
      { id: 'block-33', type: 'heading2', content: 'January 23' },
      { id: 'block-34', type: 'text', content: 'Started the day with a productive morning routine. Completed the design review and made good progress on the frontend implementation.' },
      { id: 'block-35', type: 'heading3', content: 'Gratitude' },
      { id: 'block-36', type: 'text', content: '• Great coffee this morning\n• Helpful feedback from the team\n• Made progress on personal goals' },
    ],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-23'),
  },
];

export const dummyTasks: Task[] = [
  { id: 'task-1', title: 'Review PRs by Wednesday', completed: false, priority: 'high', pageId: 'page-2-1' },
  { id: 'task-2', title: 'Update documentation', completed: false, priority: 'medium', pageId: 'page-2-1' },
  { id: 'task-3', title: 'Complete user research', completed: true, priority: 'high', pageId: 'page-2' },
  { id: 'task-4', title: 'Design system implementation', completed: true, priority: 'high', pageId: 'page-2' },
  { id: 'task-5', title: 'MVP development', completed: false, priority: 'high', pageId: 'page-2', goalId: 'goal-1' },
  { id: 'task-6', title: 'Beta testing', completed: false, priority: 'medium', pageId: 'page-2', goalId: 'goal-1' },
  { id: 'task-7', title: 'Morning meditation', completed: true, priority: 'low' },
  { id: 'task-8', title: 'Read for 30 minutes', completed: false, priority: 'low', goalId: 'goal-2' },
];

export const dummyGoals: Goal[] = [
  {
    id: 'goal-1',
    title: 'Launch MVP by Q1',
    description: 'Complete the minimum viable product and get it in front of beta users.',
    progress: 65,
    tasks: dummyTasks.filter(t => t.goalId === 'goal-1'),
    dueDate: new Date('2024-03-31'),
  },
  {
    id: 'goal-2',
    title: 'Read 24 Books This Year',
    description: 'Read 2 books per month across various genres.',
    progress: 8,
    tasks: dummyTasks.filter(t => t.goalId === 'goal-2'),
    dueDate: new Date('2024-12-31'),
  },
  {
    id: 'goal-3',
    title: 'Build Consistent Habits',
    description: 'Establish a morning routine and maintain it for 90 days.',
    progress: 40,
    tasks: [],
    dueDate: new Date('2024-04-15'),
  },
];

export const dummyWorkspace: Workspace = {
  pages: dummyPages,
  tasks: dummyTasks,
  goals: dummyGoals,
};
