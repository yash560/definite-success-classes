export interface Faculty {
  id: string;
  name: string;
  role: string;
  subject: string;
  experienceYears: number;
  education: string;
  specialty: string[];
  bio: string;
  image: string;
  rating: number;
  studentsTaught: number;
  badge?: string;
  videoTopic?: string;
}

export interface Program {
  id: string;
  title: string;
  targetExam: 'JEE' | 'NEET' | 'FOUNDATION';
  eligibleClasses: string;
  duration: string;
  batchType: string;
  description: string;
  highlights: string[];
  features: string[];
  schedule: string;
  feePerYear: number;
  scholarshipAvailable: boolean;
  popular?: boolean;
  iconName: string;
  syllabusOverview: {
    subject: string;
    topicsCount: number;
    hoursCount: number;
  }[];
}

export interface Topper {
  id: string;
  name: string;
  exam: 'JEE Advanced' | 'JEE Main' | 'NEET-UG' | 'CBSE Board' | 'NTSE' | 'NTSE & CBSE Board' | string;
  rankOrScore: string;
  year: number;
  collegeOrSchool: string;
  batch: string;
  avatar: string;
  quote: string;
  videoUrl?: string;
  verified: boolean;
  subjectScores?: {
    physics?: string;
    chemistry?: string;
    mathsOrBio?: string;
  };
}

export interface Review {
  id: string;
  author: string;
  role: 'Student' | 'Parent' | 'Alumni';
  course: string;
  rating: number;
  date: string;
  content: string;
  avatar: string;
  source: 'Google Reviews' | 'Justdial' | 'Verified Admission';
  likesCount: number;
}

export interface VideoLecture {
  id: string;
  title: string;
  teacher: string;
  subject: string;
  duration: string;
  thumbnail: string;
  category: 'Masterclass' | 'Topper Interview' | 'Problem Solving' | 'Campus Tour';
  youtubeId: string;
  views: string;
}

export interface Facility {
  id: string;
  title: string;
  category: string;
  description: string;
  specs: string[];
  image: string;
}

export interface Question {
  id: number;
  subject: 'Physics' | 'Chemistry' | 'Mathematics' | 'Biology';
  topic: string;
  questionText: string;
  options: {
    id: string;
    text: string;
  }[];
  correctOptionId: string;
  explanation: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard';
}

export interface DPPItem {
  id: string;
  dppNumber: number;
  title: string;
  subject: string;
  chapter: string;
  totalQuestions: number;
  estimatedMinutes: number;
  dateAdded: string;
  downloadUrl: string;
  status: 'New' | 'Attempted' | 'Reviewed';
}

export interface DoubtItem {
  id: string;
  studentName: string;
  subject: string;
  topic: string;
  question: string;
  status: 'Pending' | 'In Review' | 'Resolved';
  assignedFaculty: string;
  createdAt: string;
  answer?: string;
  audioVoiceNote?: boolean;
}
