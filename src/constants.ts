import { Skill, Certification, Project, BiographySection } from './types.ts';

export const SKILLS: Skill[] = [
  { name: 'TypeScript / JavaScript', level: 90, category: '語言' },
  { name: 'React / Next.js', level: 85, category: '框架' },
  { name: 'Python', level: 75, category: '語言' },
  { name: 'Node.js', level: 80, category: '後端' },
  { name: 'SQL / NoSQL', level: 70, category: '資料庫' },
  { name: 'Tailwind CSS', level: 95, category: '設計' },
  { name: 'Git / GitHub', level: 85, category: '工具' },
  { name: 'Docker', level: 60, category: '工具' },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google (via Coursera)',
    date: '2023 / 10',
    description: '深入了解資料驅動決策、資料清理、分析與視覺化。'
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024 / 01',
    description: '具備基本的雲端知識，包括安全、架構與計費。'
  },
  {
    title: 'TOEIC Gold Certificate (885+)',
    issuer: 'ETS',
    date: '2023 / 05',
    description: '具備流暢的英語溝通與商業應用能力。'
  }
];

export const PROJECTS: Project[] = [
  {
    title: '智慧校園預約系統',
    description: '基於 React 與 Firebase 開發的校園場域預約系統，大幅簡化手動申請流程。',
    tags: ['React', 'Firebase', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: '個人預算追蹤器',
    description: '使用 Python 開發的輕量級財務管理工具，支援圖表分析與自動分类。',
    tags: ['Python', 'Pandas', 'Matplotlib'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000'
  }
];

export const BIOGRAPHY: BiographySection[] = [
  {
    title: '成長背景',
    content: '我出生於一個對科技充滿熱情環境。自幼對數位世界的結構感到好奇，這驅使我在大學期間選擇了資訊相關科系。'
  },
  {
    title: '學習歷程',
    content: '在學期間，我不僅專注於學術課程，更透過參加多次黑客松（Hackathon）磨練了解決問題的能力。我深信「實踐出真知」，因此積極參與開源專案與實習活動。'
  },
  {
    title: '未來展望',
    content: '我希望將我的技術專長應用於改善人們生活的數位產品上。目前的目標是成為一名卓越的全端工程師，並在 AI 領域進行更深入的探索。'
  }
];
