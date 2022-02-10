from flask import Flask
import random
app = Flask(__name__)

@app.route('/')
def index():
  return 'Server Works!'
  
@app.route('/greet')
def say_hello():
  return 'Hello from Server'

@app.route('/random')
def return_random():
  return '{"random": ' + str(random.randint(100,1000)) + ' }' 


print('hola.. esto corre')
