from sqlalchemy.orm import Session
from models import Producto
from schemas import ProductoCreate


def get_productos(db: Session) -> list[Producto]:
    return db.query(Producto).all()


def get_producto(db: Session, producto_id: int) -> Producto | None:
    return db.query(Producto).filter(Producto.id == producto_id).first()


def create_producto(db: Session, producto: ProductoCreate) -> Producto:
    db_producto = Producto(**producto.model_dump())
    db.add(db_producto)
    db.commit()
    db.refresh(db_producto)
    return db_producto


def update_producto(db: Session, producto_id: int, producto: ProductoCreate) -> Producto | None:
    db_producto = get_producto(db, producto_id)
    if db_producto is None:
        return None
    for field, value in producto.model_dump().items():
        setattr(db_producto, field, value)
    db.commit()
    db.refresh(db_producto)
    return db_producto


def delete_producto(db: Session, producto_id: int) -> bool:
    db_producto = get_producto(db, producto_id)
    if db_producto is None:
        return False
    db.delete(db_producto)
    db.commit()
    return True
