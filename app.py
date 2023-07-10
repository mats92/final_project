import os
import datetime

from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
from tempfile import mkdtemp

# Configure application
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/calculator")
def calculator():
    return render_template("calculator.html")

@app.route("/garums")
def garums():
    return render_template("garums.html")