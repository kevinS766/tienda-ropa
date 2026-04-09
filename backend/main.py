from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base
from routers import productos

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Tienda Ropa API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(productos.router)


@app.get("/")
def root():
    return {"message": "Tienda Ropa API"}
