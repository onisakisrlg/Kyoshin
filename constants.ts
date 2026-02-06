import { Mail, MapPin, Phone, TrendingUp, Smartphone, ShoppingBag } from 'lucide-react';
import { CompanyInfo, NavItem, ServiceItem } from './types';

export const COMPANY_INFO: CompanyInfo = {
  name: "京辰株式会社",
  address: "岡山県岡山市北区富町1-20-14 デュナミス富町505号室",
  zip: "700-0031",
  email: "mingweikobe@gmail.com",
  phone: "080-5683-0938"
};

export const NAV_ITEMS: NavItem[] = [
  { label: "ホーム", href: "#home" },
  { label: "企業理念", href: "#philosophy" },
  { label: "事業内容", href: "#services" },
  { label: "会社概要", href: "#about" },
  { label: "お問い合わせ", href: "#contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "consulting",
    title: "郵政事業コンサルティング",
    subtitle: "Consulting",
    description: "中国郵政への深い知見と日本郵政の成功事例を融合し、伝統的な郵政業務の復興と高度化を支援します。拠点の最適化、商品企画、サービス向上に焦点を当て、物流・金融部門の高品質な発展を促進します。",
    icon: TrendingUp,
    // Using high quality corporate architecture/logistics image
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "marketing",
    title: "デジタルマーケティング",
    subtitle: "Marketing",
    description: "Tencent（騰訊）広告の運用ノウハウと中国のデジタル戦略を駆使し、日本の実店舗（飲食、温泉、商業施設など）へのオンライン集客を強化。訪日中国人観光客や在日華人へ向けた高精度なターゲティングとO2O施策を提供します。",
    icon: Smartphone,
    // Using image representing digital connection/mobile
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "ecommerce",
    title: "越境EC・ライブコマース",
    subtitle: "E-Commerce",
    description: "日本国内に専門のライブ配信拠点を設立し、現地の配信チームを育成。選定からサプライチェーン管理、配信運営までをワンストップで提供し、日本の高品質なブランド商品と中国の中産階級消費者をダイレクトに結びつけます。",
    icon: ShoppingBag,
    // Using image representing commerce/studio
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
  }
];