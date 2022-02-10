FROM python:3.9.9-alpine3.14
WORKDIR /app
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY app.py .

EXPOSE 8080
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0","--port=8080"]
