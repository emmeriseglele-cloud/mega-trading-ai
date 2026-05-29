from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import logging
from app.config import settings
from app.routes import market, signals, portfolio

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Create FastAPI app
app = FastAPI(
    title="Mega Trading AI",
    description="Intelligent AI-powered trading application",
    version="0.1.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check
@app.get("/health")
async def health_check():
    return {"status": "ok", "version": "0.1.0"}

# Include routers
app.include_router(market.router, prefix="/api", tags=["market"])
app.include_router(signals.router, prefix="/api", tags=["signals"])
app.include_router(portfolio.router, prefix="/api", tags=["portfolio"])

# Root endpoint
@app.get("/")
async def root():
    return {
        "app": "Mega Trading AI",
        "version": "0.1.0",
        "status": "running",
        "docs": "/docs"
    }

# Error handlers
@app.exception_handler(Exception)
async def general_exception_handler(request, exc):
    logger.error(f"Error: {str(exc)}")
    return JSONResponse(
        status_code=500,
        content={"detail": "Internal server error"}
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
