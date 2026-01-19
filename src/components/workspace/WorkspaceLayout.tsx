import React, { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { PageEditor } from '@/components/editor/PageEditor';
import { AIAssistant } from '@/components/ai/AIAssistant';
import { EmailInbox } from '@/components/email/EmailInbox';
import { CalendarView } from '@/components/calendar/CalendarView';
import { MeetingScheduler } from '@/components/meeting/MeetingScheduler';
import { Dashboard } from '@/components/dashboard/Dashboard';
import { dummyEmails, dummyCalendarEvents, dummyMeetingRequests } from '@/data/emailData';
import { useWorkspace } from '@/contexts/WorkspaceContext';
import { Email, TimeSlot } from '@/types/email';
import { toast } from 'sonner';

export type ViewType = 'dashboard' | 'pages' | 'inbox' | 'calendar' | 'scheduler';

export function WorkspaceLayout() {
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [schedulerEmail, setSchedulerEmail] = useState<Email | null>(null);
  const { workspace } = useWorkspace();

  const handleEmailAction = (email: Email, actionType: string) => {
    if (actionType === 'schedule-meeting') {
      setSchedulerEmail(email);
      setCurrentView('scheduler');
    } else if (actionType === 'create-task') {
      toast.success('Task created from email');
    } else if (actionType === 'reply') {
      toast.info('Reply composer coming soon');
    }
  };

  const handleScheduleMeeting = (slot: TimeSlot, message: string) => {
    toast.success('Meeting scheduled and reply sent!');
    setSchedulerEmail(null);
    setCurrentView('inbox');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <Dashboard
            emails={dummyEmails}
            events={dummyCalendarEvents}
            tasks={workspace.tasks}
            goals={workspace.goals}
            meetingRequests={dummyMeetingRequests}
            onNavigate={(view) => setCurrentView(view as ViewType)}
          />
        );
      case 'inbox':
        return (
          <EmailInbox
            emails={dummyEmails}
            selectedEmail={selectedEmail}
            onSelectEmail={setSelectedEmail}
            onActionClick={handleEmailAction}
          />
        );
      case 'calendar':
        return (
          <CalendarView
            events={dummyCalendarEvents}
            onEventClick={(event) => toast.info(`Event: ${event.title}`)}
          />
        );
      case 'scheduler':
        return (
          <MeetingScheduler
            meetingRequest={dummyMeetingRequests[0] || null}
            email={schedulerEmail || undefined}
            onSchedule={handleScheduleMeeting}
            onDecline={() => { setCurrentView('inbox'); toast.info('Meeting declined'); }}
            onClose={() => setCurrentView('inbox')}
          />
        );
      case 'pages':
      default:
        return <PageEditor onOpenAI={() => setIsAIOpen(true)} />;
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar 
        onOpenAI={() => setIsAIOpen(true)} 
        currentView={currentView}
        onChangeView={setCurrentView}
      />
      <main className="flex-1 overflow-hidden">
        {renderContent()}
      </main>
      <AIAssistant isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />
    </div>
  );
}
