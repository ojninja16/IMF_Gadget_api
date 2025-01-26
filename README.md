# IMF Gadget API

Welcome to the **IMF Gadget API**! This is a secure and scalable backend API built for the Impossible Missions Force (IMF) to manage their gadget inventory. The API is built using **Node.js**, **Express**, **PostgreSQL**, and **Prisma ORM**, and includes features like authentication, role-based access control, and self-destruct functionality for gadgets.

---

## **Features**
- **Gadget Management**:
  - Add, update, and decommission gadgets.
  - Retrieve gadgets with a randomly generated "mission success probability."
  - Self-destruct functionality for gadgets.
- **Authentication**:
  - JWT-based authentication for secure access.
  - Role-based access control (`agent` and `admin` roles).
- **Deployment**:
  - Deployed on **Render** with a PostgreSQL database.
- **Error Handling**:
  - Graceful error handling with consistent error responses.

---

## **Technologies Used**
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Render
- **Testing**: Postman

---

## **API Endpoints**
### **User Routes**
- **Register a User**: `POST /users/register`
  - Request Body:
    ```json
    {
      "username": "agent1",
      "password": "secret",
      "role": "agent"
    }
    ```
- **Login**: `POST /users/login`
  - Request Body:
    ```json
    {
      "username": "agent1",
      "password": "secret"
    }
    ```

### **Gadget Routes**
- **Get All Gadgets**: `GET /gadgets`
  - Optional Query Parameter: `status` (e.g., `/gadgets?status=Available`)
- **Add a Gadget**: `POST /gadgets` (Admin only)
  - Request Body:
    ```json
    {
      "name": "Gadget X"
    }
    ```
- **Update a Gadget**: `PATCH /gadgets/{id}` (Admin only)
  - Request Body:
    ```json
    {
      "name": "Updated Gadget X",
      "status": "Deployed"
    }
    ```
- **Decommission a Gadget**: `DELETE /gadgets/{id}` (Admin only)
- **Self-Destruct a Gadget**: `POST /gadgets/{id}/self-destruct`

---

## **Setup Instructions**
### **Prerequisites**
- Node.js (v16 or higher)
- PostgreSQL
- Docker (optional, for local PostgreSQL setup)

### **Steps to Run Locally**
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/imf-gadget-api.git
   cd imf-gadget-api
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory:
     ```
     DATABASE_URL="postgresql://your-db-user:your-db-password@your-db-host:5432/your-db-name"
     JWT_SECRET="your_super_secret_key_here"
     ```

4. **Set Up PostgreSQL**:
   - Use Docker to run PostgreSQL locally:
     ```bash
     docker-compose up -d
     ```

5. **Run Prisma Migrations**:
   ```bash
   npx prisma migrate dev --name init
   ```

6. **Start the Server**:
   ```bash
   npm run dev
   ```

7. **Test the API**:
   - Use **Postman** or any API testing tool to test the endpoints.
  
---

## **Deployment**
The API is deployed on **Render** and can be accessed at:  
[Deployment](https://imf-gadget-api-spu4.onrender.com/)

---

