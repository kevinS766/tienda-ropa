from pydantic import BaseModel, ConfigDict
from decimal import Decimal
from typing import Optional


class ProductoBase(BaseModel):
    nombre: str
    descripcion: Optional[str] = None
    precio: Decimal
    stock: int


class ProductoCreate(ProductoBase):
    pass


class ProductoResponse(ProductoBase):
    id: int

    model_config = ConfigDict(from_attributes=True)
