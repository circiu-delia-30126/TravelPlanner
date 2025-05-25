# Travel Planner

O aplicație full-stack simplă pentru gestionarea destinațiilor de călătorie.

## Tehnologii folosite

### Backend
- Java 17
- Spring Boot 2.7.0
- Spring Data JPA
- H2 Database
- Maven

### Frontend
- React
- Material-UI
- Axios
- React Router

## Instalare și Rulare

### Backend
1. Asigură-te că ai Java 17 instalat
2. Deschide proiectul în IntelliJ IDEA
3. Rulează clasa `TravelPlannerApplication`
4. Backend-ul va rula pe `http://localhost:8080`

### Frontend
1. Navighează în directorul frontend:
   ```bash
   cd frontend
   ```
2. Instalează dependențele:
   ```bash
   npm install
   ```
3. Pornește aplicația:
   ```bash
   npm start
   ```
4. Frontend-ul va rula pe `http://localhost:3000`

## Funcționalități
- Vizualizare lista de destinații
- Adăugare destinație nouă
- Ștergere destinație
- Interfață responsivă
- Navigare între pagini

## Structura proiectului
```
travel-planner/
├── src/                    # Backend source code
│   └── main/
│       ├── java/
│       │   └── com/
│       │       └── travelplanner/
│       │           ├── controller/
│       │           ├── model/
│       │           └── repository/
│       └── resources/
└── frontend/              # Frontend source code
    ├── src/
    │   ├── components/
    │   └── App.js
    └── package.json
``` 