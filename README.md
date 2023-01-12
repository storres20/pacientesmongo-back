# Pacientes Mongo Backend

## Collection: Products

`Get all elements`

`GET` method

https://pacientesmongo-back.vercel.app/api/products

```json
[

    {
        "_id": "63a8608d8f3653f8edbcfd6e",
        "nombre": "Karen Mendoza",
        "dni": "70669098",
        "fecha": 967957200000,
        "fecha2": "3/9/2000",
        "tipo": "femenino",
        "categoria": "Consulta de Cirugia Plastica",
        "__v": 0
    },
    {
        "_id": "63a8850ac4572ab490749172",
        "nombre": "Giuliana Nemias",
        "dni": "10424343",
        "fecha": 24382800000,
        "fecha2": "10/10/1970",
        "tipo": "femenino",
        "categoria": "Consulta de Geriatria",
        "__v": 0
    },
    {
        "_id": "63a88dc636408cdfbd5e6da7",
        "nombre": "Luis Castro",
        "dni": "555222111",
        "fecha": 1670562000000,
        "fecha2": "9/12/2022",
        "tipo": "masculino",
        "categoria": "Consulta de Dermatologia",
        "__v": 0
    },
    {
        "_id": "63a8d4c0316653e01f1a47b2",
        "nombre": "Miguel Cervantes",
        "dni": "777333666",
        "fecha": 1670389200000,
        "fecha2": "7/12/2022",
        "tipo": "masculino",
        "categoria": "Consulta de Cirugia Plastica",
        "__v": 0
    }

]
```

`Get an element by ID`

`GET` method

https://pacientesmongo-back.vercel.app/api/products/63a8608d8f3653f8edbcfd6e

```json
{

    "_id": "63a8608d8f3653f8edbcfd6e",
    "nombre": "Karen Mendoza",
    "dni": "70669098",
    "fecha": 967957200000,
    "fecha2": "3/9/2000",
    "tipo": "femenino",
    "categoria": "Consulta de Cirugia Plastica",
    "__v": 0

}
```

## Collection: Categories

`Get all elements`

`GET` method

https://pacientesmongo-back.vercel.app/api/categories

```json
[

    {
        "_id": "63a87c03c4572ab490749079",
        "nombre": "Consulta de Dermatologia",
        "__v": 0
    },
    {
        "_id": "63a87c3cdbefed00937044aa",
        "nombre": "Consulta de Geriatria"
    },
    {
        "_id": "63a87c53c4572ab49074907b",
        "nombre": "Consulta de Cirugia Plastica",
        "__v": 0
    },
    {
        "_id": "63a87c61c4572ab49074907d",
        "nombre": "Consulta de Nutricion",
        "__v": 0
    }

]
```

`Get an element by ID`

`GET` method

https://pacientesmongo-back.vercel.app/api/categories/63a87c03c4572ab490749079

```json
{

    "_id": "63a87c03c4572ab490749079",
    "nombre": "Consulta de Dermatologia",
    "__v": 0

}
```
