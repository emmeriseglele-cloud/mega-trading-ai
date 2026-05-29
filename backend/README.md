# Mega Trading AI - Backend

## Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

## Run Development Server

```bash
uvicorn app.main:app --reload
```

API: http://localhost:8000
Docs: http://localhost:8000/docs

## Project Structure

```
app/
├── main.py                 # FastAPI app & routes
├── models/
│   ├── signal.py
│   ├── trade.py
│   ├── portfolio.py
│   └── user.py
├── ai/
│   ├── analyzer.py        # Market analysis
│   ├── predictor.py       # ML predictions
│   └── indicators.py      # Technical indicators
├── routes/
│   ├── market.py
│   ├── signals.py
│   ├── portfolio.py
│   └── trades.py
├── services/
│   ├── binance.py
│   ├── database.py
│   └── cache.py
└── utils/
    ├── config.py
    └── logger.py
```

## Key Modules

- **AI Analyzer**: RSI, MACD, Moving Averages
- **Market Data**: Real-time prices from Binance/CoinGecko
- **Signals**: BUY/SELL/HOLD with confidence
- **Portfolio**: Track positions and performance

## API Endpoints

```
GET    /api/signals           - Get all signals
GET    /api/signals/:symbol   - Get signal for symbol
GET    /api/market/:symbol    - Get market data
GET    /api/portfolio         - Get user portfolio
GET    /api/portfolio/stats   - Get performance stats
POST   /api/trades            - Create trade
GET    /api/trades            - Get trades history
WS     /ws/alerts             - WebSocket for real-time alerts
```

## Technologies

- FastAPI
- SQLAlchemy
- PostgreSQL
- Redis
- Scikit-Learn
- Pandas-TA
