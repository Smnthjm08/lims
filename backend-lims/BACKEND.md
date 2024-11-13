# Django Project Setup

This guide covers the steps to set up a Django project with `rav` for managing services.

## Steps

1. **Create a Virtual Environment**:
   ```bash
   python3 -m venv venv
   ```

2. **Activate the Environment**:
   ```bash
   source venv/bin/activate
   ```

3. **Save Dependencies**:
   ```bash
   pip freeze > requirements.txt
   ```

4. **Create `src` Directory**:
   ```bash
   mkdir src
   cd src
   ```

5. **Create a Django Project**:
   ```bash
   django-admin startproject accounts .
   ```

6. **Install `rav` and Configure**:
   Install `rav`:
   ```bash
   pip install rav
   ```
   Create `rav.yaml` file to define the backend service.

7. **Run the Backend**:
   ```bash
   rav run server
   ```

---

**Summary**: This setup configures a Django project with a virtual environment, saves dependencies, and uses `rav` for service management.
