import { MobileLayout } from '@/components/layout/MobileLayout';
import { CheckCircle, MessageSquare, XCircle } from 'lucide-react';

interface NotificationItem {
  id: number;
  type: 'updated' | 'comment' | 'rejected';
  title: string;
  description: string;
  day: string;
}

const Notifications = () => {
  const notifications: NotificationItem[] = [
    {
      id: 1,
      type: 'updated',
      title: 'Prescription Updated',
      description: 'Prescription Number : 243772 was updated by Dr. Richard',
      day: 'Today',
    },
    {
      id: 2,
      type: 'comment',
      title: 'Comment from Physician',
      description: 'Dr.Richard has left a comment on prescription: 273801',
      day: 'Today',
    },
    {
      id: 3,
      type: 'comment',
      title: 'Comment from Physician',
      description: 'Dr.Richard has left a comment on prescription: 943916',
      day: 'Today',
    },
    {
      id: 4,
      type: 'updated',
      title: 'Prescription Updated',
      description: 'Prescription Number : 233962 was updated by Dr. Richard',
      day: 'Yesterday',
    },
    {
      id: 5,
      type: 'rejected',
      title: 'Report Rejected',
      description: 'Report Number: 347286 was rejected',
      day: 'Tuesday',
    },
  ];

  const groupedNotifications = notifications.reduce((acc, notification) => {
    if (!acc[notification.day]) {
      acc[notification.day] = [];
    }
    acc[notification.day].push(notification);
    return acc;
  }, {} as Record<string, NotificationItem[]>);

  const getIcon = (type: string) => {
    switch (type) {
      case 'updated':
        return <CheckCircle className="w-5 h-5 text-success" />;
      case 'comment':
        return <MessageSquare className="w-5 h-5 text-muted-foreground" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-destructive" />;
      default:
        return <CheckCircle className="w-5 h-5 text-success" />;
    }
  };

  const getIconBg = (type: string) => {
    switch (type) {
      case 'updated':
        return 'bg-success/10';
      case 'comment':
        return 'bg-muted';
      case 'rejected':
        return 'bg-destructive/10';
      default:
        return 'bg-success/10';
    }
  };

  return (
    <MobileLayout>
      <div className="px-5 py-6">
        {/* Header with border */}
        <div className="pb-4 border-b border-border mb-6">
          <h1 className="text-xl font-bold text-foreground text-center">Notification</h1>
        </div>

        <div className="space-y-6 animate-fade-in">
          {Object.entries(groupedNotifications).map(([day, items]) => (
            <div key={day}>
              <p className="text-sm text-muted-foreground mb-3">{day}</p>
              <div className="space-y-3">
                {items.map((notification) => (
                  <div 
                    key={notification.id}
                    className="bg-secondary rounded-2xl p-4 flex items-start gap-3"
                  >
                    <div className={`p-2 rounded-full ${getIconBg(notification.type)}`}>
                      {getIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{notification.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
};

export default Notifications;
