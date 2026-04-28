import { create } from 'zustand';

interface NewsItem {
  title: string;
  description: string;
  url: string;
  source: string;
}

interface UserPreferences {
  aiDevelopment: boolean;
  webDevelopment: boolean;
  mobileDevelopment: boolean;
  cloudComputing: boolean;
  techCrunch: boolean;
  wired: boolean;
  arstechnica: boolean;
  githubBlog: boolean;
  emailNotifications: boolean;
  pushNotifications: boolean;
}

interface AppState {
  newsItems: NewsItem[];
  loading: boolean;
  userPreferences: UserPreferences;
  fetchNews: () => Promise<void>;
  updatePreferences: (preferences: UserPreferences) => void;
}

const useStore = create<AppState>((set) => ({
  newsItems: [],
  loading: false,
  userPreferences: {
    aiDevelopment: true,
    webDevelopment: true,
    mobileDevelopment: false,
    cloudComputing: false,
    techCrunch: true,
    wired: true,
    arstechnica: false,
    githubBlog: true,
    emailNotifications: false,
    pushNotifications: true
  },

  fetchNews: async () => {
    set({ loading: true });
    // Burada gerçek API çağrısı yapılacak
    // Şimdilik mock veri kullanıyoruz
    setTimeout(() => {
      set({
        newsItems: [
          {
            title: "Yapay Zeka Gelişmeleri 2024",
            description: "Bu yıl yapay zeka alanında önemli gelişmeler yaşandı...",
            url: "https://example.com/ai-2024",
            source: "TechCrunch"
          },
          {
            title: "Web Geliştirme Trendleri",
            description: "2024'te web geliştirme alanında dikkat çekici trendler...",
            url: "https://example.com/web-trends",
            source: "Wired"
          }
        ],
        loading: false
      });
    }, 1000);
  },

  updatePreferences: (preferences) => {
    set({ userPreferences: preferences });
    // Yeni tercihlere göre haberleri yeniden yükle
    useStore.getState().fetchNews();
  }
}));

export default useStore;