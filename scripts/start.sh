#!/bin/bash

echo "🚀 Levantando entorno de la tienda de ropa..."

# Verificar si existe .env, si no, crearlo desde .env.example
if [ ! -f .env ]; then
    echo "📄 Creando archivo .env desde .env.example"
    cp .env.example .env
fi

# Levantar contenedores
docker-compose up -d --build

echo ""
echo "✅ Servicios corriendo:"
docker-compose ps

echo ""
echo "📌 Accesos:"
echo "   Frontend: http://localhost:5173"
echo "   Backend API: http://localhost:8000"
echo "   MySQL: localhost:3306"