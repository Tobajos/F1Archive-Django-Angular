# F1Archive Django/Angular
## About

This project is a web application built with Django and Angular. It provides an example of how to integrate a Django backend with an Angular frontend to create a full-stack application.

## Features

- User authentication and authorization
- CRUD operations for drivers, teams, and race results
- Interactive charts to display driver performance
- Responsive design

## Technologies

- **Backend:** Django, Django REST Framework
- **Frontend:** Angular, Angular Material, Highcharts
- **Database:** SQLite 
- **Styling:** CSS

## Installation

### Prerequisites

- Python 3.x
- Node.js
- Angular CLI
- Django
- Postman

### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/Tobajos/F1Archive-Django-Angular.git
    ```

2. Create a virtual environment and activate it:

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. Install the dependencies:

    ```bash
    pip install -r requirements.txt
    ```

4. Run the migrations:

    ```bash
    python manage.py migrate
    ```

5. Create a superuser:

    ```bash
    python manage.py createsuperuser
    ```

6. Start the Django development server:

    ```bash
    python manage.py runserver
    ```

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd ../frontend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the Angular development server:

    ```bash
    ng serve
    ```

The application should now be running, with the backend accessible at `http://127.0.0.1:8000/` and the frontend at `http://localhost:4200/`.

## Usage

- Access the Django admin panel at `http://127.0.0.1:8000/admin/` to manage the data.
- Use the Angular frontend to interact with the application.

## API Endpoints

Here are some of the main API endpoints provided by the Django backend:

- `GET /api/getDrivers`: List all drivers
- `POST /api/postDriver`: Add a new driver
- `GET /api/getDriver/:id`: Get details of a specific driver
- `PUT /api/updateDriver/:id`: Update a driver
- `DELETE /api/deleteDriver/:id`: Delete a driver

### Home Page
![obraz](https://github.com/Tobajos/F1Archive-Django-Angular/assets/92229397/a3410ee0-7a65-471a-aa00-346c6dd185c0)
### Drivers
![obraz](https://github.com/Tobajos/F1Archive-Django-Angular/assets/92229397/57538262-9c03-49e8-a1b7-4e6a740fc3de)
### Driver Details
![obraz](https://github.com/Tobajos/F1Archive-Django-Angular/assets/92229397/c3e192b5-82b1-4a7d-9796-2b3c236fb7a8)
### Team Details
![obraz](https://github.com/Tobajos/F1Archive-Django-Angular/assets/92229397/39893364-7660-4cbb-8fb5-fcba348b08ec)
### GrandPrix
![obraz](https://github.com/Tobajos/F1Archive-Django-Angular/assets/92229397/b2f0621a-9c77-491a-98ba-e68bdfa1bf31)
### GrandPrix Details
![obraz](https://github.com/Tobajos/F1Archive-Django-Angular/assets/92229397/2f7e0270-e767-4b5e-8c7b-9958936bbf2c)



---
