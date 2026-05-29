# Mega Trading AI 🤖📈

Une application de trading automatisée et intelligente avec IA, capable d'analyser les marchés financiers en temps réel et de générer des signaux de trading précis.

## 🎯 Vision

Créer un assistant financier IA personnel qui:
- ✅ Analyse les marchés 24/7
- ✅ Génère des signaux BUY/SELL/HOLD avec IA
- ✅ Gère le risque intelligemment
- ✅ Apprend progressivement
- ✅ Automatise les décisions de trading
- ✅ Rivalise avec TradingView + eToro

## 🚀 Fonctionnalités principales

### Phase 1 (MVP - 4 semaines)
- Dashboard intelligent avec 2-3 actifs
- Récupération données temps réel
- Graphiques avancés (TradingView)
- Signaux IA (RSI + MACD)
- Niveau de confiance
- Alertes email/notifications

### Phase 2
- Support 8-10 actifs
- Trading automatique (API Binance/Bybit/OKX)
- Portefeuille complet
- Statistiques (1 sem, 1 mois, 1 an)
- Heatmaps et visualisations avancées

### Phase 3
- IA auto-évolutive
- Copy trading
- Assistant vocal IA
- Analyse émotionnelle du trader

## 🛠️ Tech Stack

| Composant | Technologie |
|-----------|------------|
| **Frontend** | Next.js 14 + TypeScript + TailwindCSS |
| **Graphiques** | TradingView Lightweight Charts |
| **Backend** | Python + FastAPI |
| **IA/ML** | Scikit-Learn + Pandas-TA |
| **Base de données** | PostgreSQL + Redis |
| **Temps réel** | WebSockets |
| **Déploiement** | Docker + Railway/Render |
| **APIs marché** | Binance, CoinGecko, AlphaVantage |

## 📁 Architecture

```
mega-trading-ai/
├── frontend/              # Next.js React app
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── styles/
│   └── package.json
│
├── backend/               # FastAPI Python
│   ├── app/
│   │   ├── main.py
│   │   ├── routes/
│   │   ├── ai/
│   │   ├── models/
│   │   └── utils/
│   └── requirements.txt
│
├── docker-compose.yml     # PostgreSQL + Redis
├── .env.example
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Python 3.10+
- Docker & Docker Compose
- Git

### Installation

```bash
# Clone repo
git clone https://github.com/emmeriseglele-cloud/mega-trading-ai.git
cd mega-trading-ai

# Setup environment
cp .env.example .env

# Start Docker services
docker-compose up -d

# Setup Frontend
cd frontend
npm install
npm run dev

# Setup Backend (in another terminal)
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Frontend: http://localhost:3000
Backend: http://localhost:8000

## 📊 API Endpoints

```
GET  /api/signals           - Récupérer les signaux IA
GET  /api/market/:symbol    - Données marché temps réel
GET  /api/portfolio         - Portefeuille utilisateur
GET  /api/performance       - Statistiques de performance
POST /api/trades            - Créer un trade
WS   /ws/alerts             - WebSocket pour alertes temps réel
```

## 🤖 Algorithme IA

L'IA analyse:
- RSI (Relative Strength Index)
- MACD (Moving Average Convergence Divergence)
- Moyennes mobiles (MA 20, 50, 200)
- Volumes
- Volatilité
- Tendances

Puis génère un signal avec:
- **Signal**: BUY 📈 / SELL 📉 / HOLD ⏸️
- **Confiance**: 0-100%
- **Stop Loss & Take Profit**: Automatiques
- **Risque**: Faible / Moyen / Élevé

## 📈 Actifs supportés (Phase 1)

- Bitcoin (BTC/USDT)
- Ethereum (ETH/USDT)
- US100 Index

## 💼 Brokers intégrés (Phase 2)

- Binance
- Bybit
- OKX

## 👥 Public cible

- Débutants en trading
- Traders intermédiaires
- Traders crypto
- Scalpers & Swing traders
- Passionnés d'IA et finance

## 📝 Roadmap

- [x] Setup projet
- [ ] Dashboard MVP
- [ ] API données marché
- [ ] Moteur IA signaux
- [ ] Alertes temps réel
- [ ] Intégration brokers
- [ ] Trading automatique
- [ ] IA auto-évolutive
- [ ] Mobile app

## 🤝 Contribution

Les contributions sont bienvenues! Consultez CONTRIBUTING.md

## 📄 License

MIT License - Voir LICENSE.md

## 📧 Contact

- GitHub: [@emmeriseglele-cloud](https://github.com/emmeriseglele-cloud)
- Email: emmeriseglele@gmail.com

---

**Construit avec ❤️ et IA** 🚀

Last Updated: 2026-05-29
