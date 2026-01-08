export type Item = {
  id: string;
  name: string;
  description: string;
  category: 'lost' | 'found';
  date: string; // Should be ISO 8601 string
  location: string;
  imageUrl: string;
  imageHint: string;
  userId: string;
  userName: string;
  userAvatarUrl: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  collegeId: string;
  avatarUrl: string;
};

export type Notification = {
  id: string;
  userId: string;
  message: string;
  read: boolean;
  createdAt: string; // ISO 8601 string
};

export type Announcement = {
  id: string;
  title: string;
  content: string;
  createdAt: string; // ISO 8601 string
};
