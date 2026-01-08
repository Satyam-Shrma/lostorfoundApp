import type { Item, User, Announcement } from './definitions';

export const mockUsers: User[] = [
  { id: '1', name: 'Alice Johnson', email: 'alice@campus.edu', collegeId: 'AJ123', avatarUrl: 'https://picsum.photos/seed/user1/100/100' },
  { id: '2', name: 'Bob Williams', email: 'bob@campus.edu', collegeId: 'BW456', avatarUrl: 'https://picsum.photos/seed/user2/100/100' },
  { id: '3', name: 'Charlie Brown', email: 'charlie@campus.edu', collegeId: 'CB789', avatarUrl: 'https://picsum.photos/seed/user3/100/100' },
  { id: '4', name: 'Diana Prince', email: 'diana@campus.edu', collegeId: 'DP001', avatarUrl: 'https://picsum.photos/seed/user4/100/100' },
  { id: '5', name: 'Ethan Hunt', email: 'ethan@campus.edu', collegeId: 'EH007', avatarUrl: 'https://picsum.photos/seed/user5/100/100' },
];

export const mockItems: Item[] = [
  {
    id: '1',
    name: 'Lost: Brown Leather Wallet',
    description: 'A brown leather wallet containing a student ID for Alice Johnson and some cash. Last seen near the library entrance.',
    category: 'lost',
    date: '2024-07-20T14:00:00Z',
    location: 'Library',
    imageUrl: 'https://picsum.photos/seed/wallet/400/300',
    imageHint: 'wallet',
    userId: '1',
    userName: 'Alice Johnson',
    userAvatarUrl: 'https://picsum.photos/seed/user1/100/100'
  },
  {
    id: '2',
    name: 'Found: Set of Keys',
    description: 'Found a set of keys on a blue lanyard. Has a car key and two smaller keys. Found on a bench in the main quad.',
    category: 'found',
    date: '2024-07-21T10:30:00Z',
    location: 'Main Quad',
    imageUrl: 'https://picsum.photos/seed/keys/400/300',
    imageHint: 'keys',
    userId: '2',
    userName: 'Bob Williams',
    userAvatarUrl: 'https://picsum.photos/seed/user2/100/100'
  },
  {
    id: '3',
    name: 'Lost: Blue Backpack',
    description: 'Lost a blue Jansport backpack, probably in the science building, room 204. It has a laptop and textbooks inside.',
    category: 'lost',
    date: '2024-07-19T16:00:00Z',
    location: 'Science Building',
    imageUrl: 'https://picsum.photos/seed/backpack/400/300',
    imageHint: 'backpack',
    userId: '3',
    userName: 'Charlie Brown',
    userAvatarUrl: 'https://picsum.photos/seed/user3/100/100'
  },
  {
    id: '4',
    name: 'Found: iPhone 14',
    description: 'Found an iPhone 14 in a clear case. The lock screen shows a picture of a dog. It was on a table in the student union cafeteria.',
    category: 'found',
    date: '2024-07-22T12:00:00Z',
    location: 'Student Union',
    imageUrl: 'https://picsum.photos/seed/phone/400/300',
    imageHint: 'smartphone',
    userId: '1',
    userName: 'Alice Johnson',
    userAvatarUrl: 'https://picsum.photos/seed/user1/100/100'
  },
  {
    id: '5',
    name: 'Lost: Wireless Headphones',
    description: 'Lost my Sony WH-1000XM4 headphones. They are black and were in a hard case. I think I left them at the gym.',
    category: 'lost',
    date: '2024-07-22T18:00:00Z',
    location: 'Gymnasium',
    imageUrl: 'https://picsum.photos/seed/headphones/400/300',
    imageHint: 'headphones',
    userId: '2',
    userName: 'Bob Williams',
    userAvatarUrl: 'https://picsum.photos/seed/user2/100/100'
  },
    {
    id: '6',
    name: 'Found: Calculus Textbook',
    description: 'Found a copy of "Calculus: Early Transcendentals" in lecture hall B. No name inside.',
    category: 'found',
    date: '2024-07-21T15:00:00Z',
    location: 'Lecture Hall B',
    imageUrl: 'https://picsum.photos/seed/textbook/400/300',
    imageHint: 'book',
    userId: '3',
    userName: 'Charlie Brown',
    userAvatarUrl: 'https://picsum.photos/seed/user3/100/100'
  },
  {
    id: '7',
    name: 'Found: Reusable Water Bottle',
    description: 'A metal water bottle with a lot of stickers on it. Left on the soccer field.',
    category: 'found',
    date: '2024-07-20T11:00:00Z',
    location: 'Soccer Field',
    imageUrl: 'https://picsum.photos/seed/bottle/400/300',
    imageHint: 'water bottle',
    userId: '1',
    userName: 'Alice Johnson',
    userAvatarUrl: 'https://picsum.photos/seed/user1/100/100'
  },
  {
    id: '8',
    name: 'Lost: MacBook Pro Charger',
    description: 'Lost my laptop charger, it has a sticker of a cat on the power brick. Probably in the 24-hour study area of the library.',
    category: 'lost',
    date: '2024-07-22T02:00:00Z',
    location: 'Library',
    imageUrl: 'https://picsum.photos/seed/laptop/400/300',
    imageHint: 'laptop charger',
    userId: '2',
    userName: 'Bob Williams',
    userAvatarUrl: 'https://picsum.photos/seed/user2/100/100'
  }
];

export const mockAnnouncements: Announcement[] = [
    {
        id: '1',
        title: 'End of Semester Item Claim',
        content: 'All items in the lost and found office must be claimed by the end of the semester. Unclaimed items will be donated to charity.',
        createdAt: '2024-07-15T09:00:00Z'
    },
    {
        id: '2',
        title: 'New Drop-off Location',
        content: 'A new lost and found drop-off box has been installed at the entrance of the student gym.',
        createdAt: '2024-07-10T11:00:00Z'
    }
];

export const getItems = () => mockItems;

export const getUsers = () => mockUsers;

export const getAnnouncements = () => mockAnnouncements.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

export const getRecentItems = (count = 4) => mockItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count);

export const getLostItems = () => mockItems.filter(item => item.category === 'lost');

export const getFoundItems = () => mockItems.filter(item => item.category === 'found');

export const getItemById = (id: string) => mockItems.find(item => item.id === id);
